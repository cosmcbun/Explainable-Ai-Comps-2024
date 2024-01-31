import torch
import torch.nn as nn
import torchvision
import torchvision.models as models
import torchvision.transforms as transforms
import numpy as np
import torch.optim as optim
import PIL.Image as Image
from datetime import datetime
from anchor import anchor_image
import copy
from skimage.segmentation import quickshift
import skimage.io


pretrained_weights = models.ResNet18_Weights.IMAGENET1K_V1
model = models.resnet18(weights=pretrained_weights)
model.eval()

tensorfy_image = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
)])

def transform_image(path):
    return skimage.io.imread(path)

def transform_images(paths):
    images = []
    for path in paths:
        image = transform_image(path)
        images.append(image)
    return images

'''
def transform_image(path):
    image = Image.open(path)
    return tensorfy_image(image)

def transform_images(paths):
    tensors = []
    for path in paths:
        tensor = transform_image(path)
        tensors.append(tensor)
    return tensors

'''


with open("imagenet_classes.txt", "r") as f:
    class_names = [s.strip() for s in f.readlines()]


def tensorfy_images(images):
    tensors = []
    for image in images:
        tensor = tensorfy_image(image)
        tensors.append(tensor)
    return tensors

def predict(images):
    tensors = tensorfy_images(images)
    stacked_tensors = torch.stack(tensors)
    pred = model(stacked_tensors)
    probabilities = torch.nn.functional.softmax(pred, dim=1)
    return probabilities.detach().numpy()

#image is a pillow or maybe a tensor, not a filepath
def explain(segments, explanation, image):
    image_anchor = copy.deepcopy(image)
    image_anchor[:] = 0
    #what is x? what is it iterating thru? idk????????
    for x in explanation:
        image_anchor[segments == x[0]] = image[segments == x[0]]
    return image_anchor


cat_file = "cat-egyptian_mau-3.jpg"
cat_image = transform_image(cat_file)

#segmentation_fn = lambda x: quickshift(x, kernel_size=4, # noqa
                                                   #max_dist=200, ratio=0.2)
#segmentation_fn = lambda x: quickshift(x, kernel_size=4, max_dist=200, ratio=0.2, channel_axis=0)

explainer = anchor_image.AnchorImage('../../../animal_images',transform_img_fn=transform_images, n = 5)

#explainer = anchor_image.AnchorImage('../../../animal_images',segmentation_fn=segmentation_fn,transform_img_fn=transform_images, n = 1000)



segments, explanation = explainer.explain_instance(cat_image, predict)

#image_anchor = explain(segments, explanation, egyptian_cat)

#image_anchor.show()







'''


paths = ["cat-egyptian_mau-3.jpg", "dog-chihuahua-1.jpg"]
images = transform_images(paths)



probs = predict(images)
idxs = np.argsort(-probs[1])
print(list(zip(probs[1][idxs[:5]], np.array(class_names)[idxs[:5]])))


'''



'''

def show_exp(segments, exp, image, explainer):
    mask = np.ones(segments.shape).astype(bool)
    temp = copy.deepcopy(image)
    temp_img = copy.deepcopy(temp)
#     temp.img = temp.fudged_image.copy()
    temp[:] = 0
    # for x in exp_greedy[:3]:
    #     x = (x, x)
    for x in exp:
        temp[segments == x[0]] = temp_img[segments==x[0]]
    # temp.img[mask] = np.random.random(mask.nonzero()[0].shape[0] * 3).reshape(mask.nonzero()[0].shape[0], 3)
    print ('Anchor for prediction ', class_names[predict(np.expand_dims(image, 0))[0].argmax()], 'confidence', exp[-1][2])
    ShowImageNoAxis(temp)
    print('Counter Examples:')
    for e in exp[-1][3]:
        data = e[:-1]
        temp = explainer.dummys[e[-1]].copy()
        for x in data.nonzero()[0]:
            temp[segments == x] = image[segments == x]
        ShowImageNoAxis(temp)
        print('Prediction = ', names[predict_fn(np.expand_dims(temp, 0))[0].argmax()])
show_exp(segments, exp, images[0], explainer)

'''