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

if torch.cuda.is_available():
    model.to('cuda')

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

with open("imagenet_classes.txt", "r") as f:
    class_names = [s.strip() for s in f.readlines()]


def tensorfy_images(images):
    tensors = []
    for image in images:
        tensor = tensorfy_image(image)
        if torch.cuda.is_available():
            tensor = tensor.to('cuda')
        tensors.append(tensor)
    return tensors

def predict(images):
    tensors = tensorfy_images(images)
    stacked_tensors = torch.stack(tensors)
    pred = model(stacked_tensors)
    probabilities = torch.nn.functional.softmax(pred, dim=1)
    return probabilities.cpu().detach().numpy()

#image is a skimage
def explain(segments, explanation, image):
    image_anchor = copy.deepcopy(image)
    image_anchor[:] = 0
    #what is x? what is it iterating thru? idk????????
    for x in explanation:
        image_anchor[segments == x[0]] = image[segments == x[0]]
    return image_anchor


cat_file = "dog-chihuahua-1.jpg"
cat_image = transform_image(cat_file)


explainer = anchor_image.AnchorImage('../../../animal_images',transform_img_fn=transform_images)

segments, explanation = explainer.explain_instance(cat_image, predict, threshold=0.9)

image_anchor = explain(segments, explanation, cat_image)

skimage.io.imshow(image_anchor)
skimage.io.show()








''' 
THIS LIL CODE SAMPLE PRINTS THE PREDICTIONS FOR A COUPLE IMAGES.
VISIT THIS SPACE FOR WISDOM IF EVERYTHING BREAKS


paths = ["cat-egyptian_mau-3.jpg", "dog-chihuahua-1.jpg"]
images = transform_images(paths)



probs = predict(images)
idxs = np.argsort(-probs[1])
print(list(zip(probs[1][idxs[:5]], np.array(class_names)[idxs[:5]])))


'''
