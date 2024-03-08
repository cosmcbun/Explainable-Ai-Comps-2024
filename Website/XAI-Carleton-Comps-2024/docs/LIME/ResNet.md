# LIME and ResNet

Generating explanations with LIME is fun and all, but in order to generate an explanation, we must first find a model that we can explain in the first place.

Enter [ResNet](https://pytorch.org/hub/pytorch_vision_resnet/) (Residual Neural Network), an architecture trained on the image classification dataset known as [ImageNet](https://www.image-net.org/). ResNet is trained on millions of different images to identify the subjects of a wide range of different classes. For the purpose of our project, we chose to use the pretrained model to focus specifically on identifying pictures of cats and dogs (of which we found several thousand images).

The way LIME works with ResNet is relatively simple: you take an image, resize it to match the specifications (we resized them to be 224x224 squares), transform the image to tensors and normalize. The functions we used to transform the images (we referenced this very helpful [PyTorch LIME tutorial](https://github.com/marcotcr/lime/blob/master/doc/notebooks/Tutorial%20-%20images%20-%20Pytorch.ipynb)) can be seen below:

```Python
def get_image(path):
    with open(os.path.abspath(path), 'rb') as f:
        with Image.open(f) as img:
            return img.convert('RGB')

# resize and take the center part of image to what our model expects
def get_input_transform():
    normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                    std=[0.229, 0.224, 0.225])
    transf = transforms.Compose([
        transforms.ToTensor(),
        normalize
    ])

    return transf

def get_input_tensors(img):
    transf = get_input_transform()
    # unsqeeze converts single image to batch of 1
    return transf(img).unsqueeze(0)

# transform/normalize the image
def get_pil_transform():
    transf = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.CenterCrop(224)
    ])

    return transf

def get_preprocess_transform():
    normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                    std=[0.229, 0.224, 0.225])
    transf = transforms.Compose([
        transforms.ToTensor(),
        normalize
    ])

    return transf

pill_transf = get_pil_transform()
preprocess_transform = get_preprocess_transform()
```

Here are our [ResNet18](https://pytorch.org/vision/main/models/generated/torchvision.models.resnet18.html) model, which is given the weights of the pretrained dataset, and the predict function:

```Python
# predict function
def batch_predict(images):
    model_animals.eval()
    batch = torch.stack(tuple(preprocess_transform(i) for i in images), dim=0)

    logits = model_animals(batch)
    probs = F.softmax(logits, dim=1)
    return probs.detach().cpu().numpy()
```

Finally, here is the code we used to train a [LimeImageExplainer()](https://lime-ml.readthedocs.io/en/latest/lime.html?highlight=limeimageexplainer#lime.lime_image.LimeImageExplainer) class, using a 1D numpy array built from the transformed image and the predict function built earlier. We put these parameters into explain_instance(), which trains our surrogate by segmenting the image into superpixels and measuring which parts of the image are most important to the black box prediction.

```Python
from lime import lime_image
from skimage.segmentation import mark_boundaries

image_explainer = lime_image.LimeImageExplainer()
image_explanation = image_explainer.explain_instance(np.array(pill_transf(my_image)), # our image converted to the form of a numpy array
                                         batch_predict, # predict function
                                         top_labels=1,
                                         hide_color=0,
                                         num_samples=1000) # size of the neighborhood to learn the linear model

# Apply mask on the image
temp, mask = image_explanation.get_image_and_mask(image_explanation.top_labels[0], positive_only=False, num_features=5, hide_rest=False)
img_boundry = mark_boundaries(temp/255.0, mask)
plt.imshow(img_boundry)
```

Once we have finished training the LimeImageExplainer() model on the image and predict function, we can use get_image_and_mask() to retrieve the most relevant superpixels (we specified num_features=5 here, but it could be more or less as well). This highlights the parts of the image that contribute to (green) or against (red) ResNet's prediction. The final result can be seen below:

![Figure 1](/img/lime/german_shorthaired-79.jpg "An image of a German shorthaired pointer, predicted as such by ResNet")
![Figure 1 - LIME](/img/lime/german_shorthaired-79-lime.jpg "ResNet's prediction explained by LIME")

The images above depict a German shorthaired pointer dog, correctly classified as such by ResNet with 0.94 certainty. The post-hoc explanation for this prediction provided by LIME, as seen in the image on the right, highlights the area of interest in green as shown above. In this case, LIME suggests that the model made an accurate prediction by looking at the dog's face and back and determining that it matched the feature values associated with those of a German shorthaired pointer, while ignoring the background (the water). This method is useful because, despite treating ResNet as a black box, we are still able to somewhat extrapolate the mode's thought process and how it came to the conclusion it did.

## Cartons and Vipers and Bears, oh my!

The image of the German shorthaired pointer offers a clear, straightforward explanation of a correct prediction. But, as we saw with the example with the huskies and wolves, it's not always the case that the image classifier makes the right conclusion. Indeed, we found during our tests that ResNet made incorrect predictions when in came to some images, instead assigning them one of the other many classes in ImageNet's list of labels.

In many cases when ResNet made an error in its prediction, LIME was able to offer a somewhat reasonable explanation for the miscalculation. In one example, LIME suggested the model was simply looking at a different part of the image than the animal.

![Figure 2](/img/lime/pug-192.jpg "An image of a pug, predicted to be a tennis with 0.59 certainty")
![Figure 2 - LIME](/img/lime/pug-192-lime.jpg "ResNet's prediction explained by LIME")

As evident from this image of a pug, LIME suggests that the "tennis ball" prediction wasn't so much ResNet misclassifying the pug as a tennis ball, but rather it was focusing on the corner of the image, which does in fact contain a tennis ball.

In other cases, often those with top predictions of lower certainty, ResNet would make an incredibly strange classification which would make slightly more sense once we ran it through LIME.

![Figure 3](/img/lime/abyssinian-3.jpg "An image of an Abyssinian cat, predicted to be a horned viper with 0.21 certainty")
![Figure 3 - LIME](/img/lime/abyssinian-3-lime.jpg "ResNet's prediction explained by LIME")

This example shows that while it may seem unreasonable to classify this cat as a "horned viper", the mask suggests that ResNet may have noticed the cat's tail and mistook its shape for that of a snake, which if we were to trust the model, would offer further insight into ResNet's classification process.

Finally, there were times that LIME failed to explain an misclassification from ResNet, at least in a manner that would be understandable to users.

![Figure 4](/img/lime/birman-16.jpg "An image of an Birman cat, predicted to be a carton with 0.64 certainty")
![Figure 4 - LIME](/img/lime/birman-16-lime.jpg "ResNet's prediction explained by LIME")

While the prediction "carton" for this image may seem reasonable to someone looking at the image alone (which is in fact a cat inside a carton), LIME offers a largely confusing explanation for this classification, as it suggests ResNet is in fact identifying the cat itself as the carton, along with several erroneous corners and parts of boxes in the background.

## Conclusion

So, what does this tell us about LIME? Well for starters, we know it is at least somewhat reliable at offering explanations that "make sense", though one of the major questions surrounding post-hoc explanations in general remains relevant with regards to LIME as well: How reliable is this as a means to understand the classifier's thought process?

As of right now, that question is difficult to answer. But what we can do is remark on our observations while conducting this study. One of the biggest structural limitations that we discovered from explaining a black box is that while LIME is more than able to highlight certain areas of interest that either contribute to or against a certain prediction, there is no real way to know why the model focused on a certain area over another (besides guessing). For example, LIME can explain which areas of an image look more like a "tennis ball" than a "pug", but it can't explain why ResNet chose to focus on that particular part of the image in the first place. Furthermore, there is also the question of if issues with any of the faultier explanations, like for the image with the cat in the carton, are more a fault of LIME itself or if they are an issue with how ResNet makes its predictions. Perhaps there is an issue with the training set that we did not consider? It's hard to know for sure, and raising the possibility only brings up more questions.

Finally, there is still the question of how well LIME holds up in the presence of other XAI techniques. Is it better than Anchors and Shapley values at explaining ResNet? Is there even a way to quantify this? Other sections of our website will explore these techniques in detail, so stay tuned!
