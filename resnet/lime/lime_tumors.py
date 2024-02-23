#%%
import matplotlib.pyplot as plt
from PIL import Image
import torch.nn as nn
import numpy as np
import os, json

import torch
from torchvision import models, transforms
from torch.autograd import Variable
import torch.nn.functional as F

import glob
from lime import lime_image
from skimage.segmentation import mark_boundaries

# Documentation from helpful LIME-Pytorch tutorial
# https://github.com/marcotcr/lime/blob/master/doc/notebooks/Tutorial%20-%20images%20-%20Pytorch.ipynb

# Set GPU device
device = torch.device('cpu')
if (print(torch.cuda.is_available())):
    device = torch.device("cuda:0")

def get_image(path):
    with open(os.path.abspath(path), 'rb') as f:
        with Image.open(f) as img:
            return img.convert('RGB')

# resize and take the center part of image to what our model expects
def get_input_transform():
    normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                    std=[0.229, 0.224, 0.225])
    transf = transforms.Compose([
        #transforms.Resize((256, 256)),
        #transforms.CenterCrop(224),
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

# How the model is structured
class CNNModel(nn.Module):
    def __init__(self):
        super(CNNModel, self).__init__()
        self.resnet18 = models.resnet18(pretrained=True)

        # Replace output layer according to our problem
        num_ftrs = self.resnet18.fc.in_features
        self.resnet18.fc = nn.Linear(num_ftrs, 4)

    def forward(self, x):
        x = self.resnet18(x)
        return x

# get the model
model = torch.load("./mri_model_4class.pth", map_location=device)

# predict function
def batch_predict(images):
    model.eval()
    batch = torch.stack(tuple(preprocess_transform(i) for i in images), dim=0)

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)
    batch = batch.to(device)

    logits = model(batch)
    probs = F.softmax(logits, dim=1)
    return probs.detach().cpu().numpy()

#%%
#Get one image
my_image = get_image('./tumor_images/healthy-no_tumor-97.jpg')

# Image tensors
img_t = get_input_tensors(my_image)
model.eval()
logits = model(img_t)
probs = F.softmax(logits, dim=1)

image_explainer = lime_image.LimeImageExplainer()
image_explanation = image_explainer.explain_instance(np.array(pill_transf(my_image)),
                                         batch_predict, # classification function
                                         top_labels=1,
                                         hide_color=0,
                                         num_samples=1000) # number of images that will be sent to classification function

#Get the prediction
test_pred = batch_predict([pill_transf(my_image)])

test_pred.squeeze().argmax()
print("glioma_tumor:", probs[0][0].item())
print("meningioma_tumor:", probs[0][1].item())
print("no_tumor:", probs[0][2].item())
print("pituitary_tumor:", probs[0][3].item())


#%%
# Apply mask on the image
temp, mask = image_explanation.get_image_and_mask(image_explanation.top_labels[0], positive_only=False, num_features=5, hide_rest=False)
img_boundry = mark_boundaries(temp/255.0, mask)
plt.imshow(img_boundry)
# %%
