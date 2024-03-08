import torchvision.models as models
import torchvision.transforms as transforms
import torch
import os
import skimage
import numpy as np


pretrained_weights = models.ResNet18_Weights.IMAGENET1K_V1
model = models.resnet18(weights=pretrained_weights)
model.eval()

if torch.cuda.is_available():
    print("listen good I dont need nobody")
    model.to('cuda')

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

#1 is dog, 0 is cat
def true_animal(path):
    if path.split("/")[4][0] == "d":
        return 1
    return 0

def predicted_animal(imgnet_class):
    if imgnet_class > 150 and imgnet_class < 280:
        return 1
    if imgnet_class > 280 and imgnet_class < 294:
        return 0
    return 2

def is_correct_pred(path):
    paths = [path]
    images = transform_images(paths)
    probs = predict(images)
    pred = np.argsort(-probs[0])[0]
    if predicted_animal(pred) == true_animal(path):
        return 1
    return 0


all_files = os.listdir(images_location)
some_files = np.random.choice(all_files, size=100, replace=False)
some_paths = [os.path.join(images_location, file) for file in all_files]

#print(some_paths)


failures = 0
for path in some_paths:
    if not is_correct_pred(path):
        failures += 1
print(failures / len(some_paths))
