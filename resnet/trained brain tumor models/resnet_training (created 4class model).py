# -*- coding: utf-8 -*-

# Here are the important imports
import cv2
import torch
import torch.nn as nn
import torchvision
import torchvision.models as models
import torchvision.transforms as transforms
import numpy as np
import torch.optim as optim
import PIL.Image as Image
from datetime import datetime

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(torch.cuda.is_available())

"""# Custom trained set for brain MRI"""

mri_transform = transforms.Compose([
      transforms.RandomHorizontalFlip(),
      transforms.RandomRotation(10),
      transforms.ToTensor()
      ])/usr/local/lib/python3.10/dist-packages (
tumor_data = torchvision.datasets.ImageFolder(root="tumor_images", transform=mri_transform)

"""Splitting into training, validation, and testing data"""

from torch.utils.data import random_split
generator = torch.Generator().manual_seed(1)
train_tumor_data, validation_tumor_data, test_tumor_data = random_split(tumor_data, [.85, .1, .05], generator=generator)

"""Establishing Dataloaders"""

from torch.utils.data import DataLoader
train_tumor_loader = DataLoader(train_tumor_data, shuffle=True)
validation_tumor_loader = DataLoader(validation_tumor_data, shuffle=True)
test_tumor_loader = DataLoader(test_tumor_data, shuffle=True)

"""Evaluate function"""

def evaluate(model, loader):

    model.eval()

    correct = 0
    total = len(loader.dataset)

    for x, y in loader:
        x, y = x.to(device), y.to(device)
        with torch.no_grad():
            logits = model(x)
            pred = logits.argmax(dim=1)
        correct += torch.eq(pred, y).sum().float().item()

    return correct/total

# If we want all custom weights
#model_mri = models.resnet18(progress=True)
# If we want to build on resnet
model_mri = models.resnet18(progress=True, weights=models.ResNet18_Weights.IMAGENET1K_V1)

model_mri.fc = nn.Sequential(
                                 nn.Linear(512, 4),
                                 nn.LogSoftmax(dim=1))
model_mri = model_mri.to(device)                         
optimizer = optim.Adam(model_mri.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss().to(device)

epochs = 100

start_time = datetime.now()
for epoch in range(epochs):
    if epoch % 5 == 0 and epoch > 0:
        test_acc = evaluate(model_mri, validation_tumor_loader)
        print('Current test acc:', test_acc)
        torch.save(model_mri, f'model ({epoch} epochs|{round(test_acc, 2)} acc).pth')
    if epoch == 1:
    	child_counter = 0
    	for child in model_mri.children():
    		child_counter+=1
    		if child_counter < 17:
    			for param in child.parameters():
    				if param.requires_grad:
    					param.requires_grad = False

    for step, (x, y) in enumerate(train_tumor_loader):
        #if step % 100 == 0: print(step)

        # x: [b, 3, 224, 224] y: [b]
        x, y = x.to(device), y.to(device)

        model_mri.train()
        logits = model_mri(x)
        loss = criterion(logits, y)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    print(f"Epoch {epoch} complete in {datetime.now()-start_time}")

test_acc = evaluate(model_mri, validation_tumor_loader)
print('test acc:', test_acc)

torch.save(model_mri, f'model ({epochs} epochs|{round(test_acc, 2)}).pth')
