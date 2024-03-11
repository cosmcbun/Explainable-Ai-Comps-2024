---
sidebar_position: 3
---
# ResNet Image Classification

## Residual Neural Network

LIME doesn't just work with tabular data. It also works quite well with images, albeit a little differently! To dive into how LIME works with images, we must look at another domain, which means explaining the predictions of another model.

Enter [ResNet](https://pytorch.org/hub/pytorch_vision_resnet/) (Residual Neural Network), an architecture trained on the image classification dataset known as [ImageNet](https://www.image-net.org/). ResNet is trained over 14 million annotated images to identify the subjects from a total of 1000 different classes. For the purpose of our project, we chose to use the pre-trained model to focus specifically on identifying pictures of cats and dogs (of which we found several thousand images).

## The Code

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

Our model is [ResNet18](https://pytorch.org/vision/main/models/generated/torchvision.models.resnet18.html) with the pretrained weights, which we set up [here](/Explainable-Ai-Comps-2024/Methodology/ResNet#Animals), as well as the predict function:

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
## An example

Once we have finished training the LimeImageExplainer() model on the image and predict function, we can use get_image_and_mask() to retrieve the most relevant superpixels (we specified num_features=5 here, but it could be more or less as well). This highlights the parts of the image that contribute to (green) or against (red) ResNet's prediction. The final result can be seen below:

![Figure 1](/img/lime/german_shorthaired-79.jpg "An image of a German shorthaired pointer, predicted as such by ResNet")
![Figure 1](/img/lime/german_shorthaired-79-lime.jpg "ResNet prediction explained by LIME")

The images above depict a German shorthaired pointer dog, correctly classified as such by ResNet with 0.94 certainty. The post-hoc explanation for this prediction provided by LIME, as seen in the image on the right, highlights the area of interest in green as shown above. In this case, LIME suggests that the model made an accurate prediction by looking at the dog's face and back and determining that it matched the feature values associated with those of a German shorthaired pointer, while ignoring the background (the water). This method is useful because, despite treating ResNet as a black box, we are still able to somewhat extrapolate the model's thought process and how it came to the conclusion it did.
