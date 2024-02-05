import torchvision.models as models
import torchvision.transforms as transforms
import torch
import os
import skimage
import numpy as np


pretrained_weights = models.ResNet18_Weights.IMAGENET1K_V1
model = models.resnet18(weights=pretrained_weights)
model.eval()

def predict(images):
    tensors = tensorfy_images(images)
    stacked_tensors = torch.stack(tensors)
    pred = model(stacked_tensors)
    probabilities = torch.nn.functional.softmax(pred, dim=1)
    return probabilities.cpu().detach().numpy()

tensorfy_image = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
)])

def tensorfy_images(images):
    tensors = []
    for image in images:
        tensor = tensorfy_image(image)
        if torch.cuda.is_available():
            tensor = tensor.to('cuda')
        tensors.append(tensor)
    return tensors

def transform_image(path):
    return skimage.io.imread(path)

def transform_images(paths):
    images = []
    for path in paths:
        image = transform_image(path)
        images.append(image)
    return images

images_location = "../../../animal_images"

with open("imagenet_classes.txt", "r") as f:
    class_names = [s.strip() for s in f.readlines()]


all_files = os.listdir(images_location)
some_files = np.random.choice(all_files, size=100, replace=False)
some_paths = [os.path.join(images_location, file) for file in some_files]

for path in some_paths:
    paths = [path]
    images = transform_images(paths)
    probs = predict(images)
    pred = np.argsort(-probs[0])[0]
    if pred < 151 or pred > 293:
        print(path+" "+class_names[pred])
    
