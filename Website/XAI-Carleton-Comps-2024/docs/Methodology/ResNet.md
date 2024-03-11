# ResNet Animal Classification

This project’s first model of focus is an implementation of the Residual Neural Network (ResNet) architecture, a derivative of the basic convolutional neural network. This network was trained on ImageNet, an extremely common dataset for image classification, and will be used in conjunction with a dataset for tumor classification such as that of Panigrahi (2021) and Sarta (2020). Coined by He et al. (2015), ResNet addresses the issues of neural networks’ degradation, where training and evaluation losses spike and lose predictability as a model’s depth passes a certain point. The proposed solution consists of identity mapping, whereby layers pass their outputs to a mapping function that performs one of two actions: it may shortcut part of the input to be recombined at a deeper layer (discussed in Hochreiter et al., 1997), or it may utilize a nonlinear function which asymptotically approximated the use of multiple linear layers at once (introduced in Jégou et al., 2012). This development allows deep neural networks to have no worse loss than shallow ones of appropriate depth.

ResNet showed that model degradation could be overcome, thereby rendering deep neural networks much more feasible and revolutionizing the field. With its proposal came the ability for a model to reliably maintain hundreds and even thousands of layers. The uptick in depth that ResNet caused is exactly what makes it a perfect candidate for analysis — such complexity is necessarily harder to explain, and will hopefully allow the three methods to highlight specifically their strengths and weaknesses.

## Our models

For the purposes of our project, we worked on [PyTorch](https://pytorch.org/) and ended up using two different version of ResNet, which would allow us to classify images from two different datasets. These were as follows:

1. Animals (cats and dogs specifically, from a variety of different breeds)
2. MRI scans of brain tumors (total of 4 classes: glioma, meningioma, no tumor, and pituitary)

We chose the Animals dataset due to the widespread availability of cats/dogs image sets, and the images of cute animals were likely to entice participants for our user study. As for the Tumors dataset, this was done primarily due to the existence of prior research into tumor classification, which reveals machine learning's utility in the medical field.

### Animals

For Animals dataset, we decided to use the pretrained version of ResNet18, which was trained on millions of images from the [ImageNet](https://www.image-net.org/) database, each labeled from a large selection of different classes. While these were not limited to just cats and dogs, ImageNet itself includes a wide variety of cat and dog breeds within its list of classes, meaning it would correctly recognize either a cat or a dog from our dataset roughly 94% of the time (according to our tests).

The way we obtained the pretrained weights for the model was simple, and could be done in two lines of code:

```Python
from torchvision import models

pretrained_weights = models.ResNet18_Weights.IMAGENET1K_V1
model_animals = models.resnet18(weights=pretrained_weights)
```
With this neural network in place, we are ready to classify any cat or dog that we choose!

### Tumors

Obtaining our model for the Tumors dataset proved a little trickier, as unlike with cats and dogs, ImageNet does not contain MRI scans of brain tumors. Thus, we had to train ResNet model ourselves, using the images and 4 classes from the tumors dataset.

```Python
from torch.utils.data import DataLoader
train_tumor_loader = DataLoader(train_tumor_data, shuffle=True) # train_tumor_data was obtained using torchvision.datasets.ImageFolder()

model_mri = models.resnet18(progress=True)
optimizer = optim.Adam(model_mri.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()
model_mri.fc = nn.Sequential(nn.Linear(2048, 512),
                                 nn.ReLU(),
                                 nn.Dropout(0.2),
                                 nn.Linear(512, 10),
                                 nn.LogSoftmax(dim=1))

# train the model
epochs = 20
for epoch in range(epochs):
    for step, (x, y) in enumerate(train_tumor_loader):
        model_mri.train()
        logits = model_mri(x)
        loss = criterion(logits, y)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
```
With the model trained, we are also ready to classify MRI scans of brain tumors.
