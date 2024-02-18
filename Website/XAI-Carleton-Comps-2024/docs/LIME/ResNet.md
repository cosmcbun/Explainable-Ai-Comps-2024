# ResNet

## Can you explain your answer?

(Introduce ResNet as an ML model that predicts a class based on an image input. Also introduce cats/dogs dataset, and how LIME can explain ResNet's predictions using an easier example)

Generating explanations with LIME is fun and all, but in order to generate an explanation, we must first find a model that we can explain in the first place.

Enter [ResNet](https://pytorch.org/hub/pytorch_vision_resnet/) (Residual Neural Network), an architecture trained on the image classification dataset known as [ImageNet](https://www.image-net.org/). ResNet is trained on millions of different images to identify the subjects of a wide range of different classes. For the purpose of our project, we chose to use the pretrained model to focus specifically on identifying pictures of cats and dogs (of which we found several thousand images).

The way LIME works with ResNet is relatively simple: you take an image, resize it to match the specifications (we resized them to be 224x224 squares), transform the image to tensors and normalize. Once this is finished, it's a simple matter to get the prediction and train a LimeImageExplainer() model, which will apply a mask that highlights the parts of the image that contribute to (green) or against (red) ResNet's prediction. An example can be seen below:

![German Shorthaired Pointer as described by LIME](./german_shorthaired-79.png)
![German Shorthaired Pointer as described by LIME](./german_shorthaired-79-lime.png)

(explain example)

## Cartons and Vipers and Bears, oh my!

(talk about how LIME can explain some of the wackier ResNet predictions)

## What does this tell us about LIME?

(speak more generally about LIME and how it interacts with the dataset from a critical analysis pov)
