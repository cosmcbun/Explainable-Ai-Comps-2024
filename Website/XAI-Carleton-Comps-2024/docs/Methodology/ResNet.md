
# ResNet

This project’s first model of focus is an implementation of the Residual Neural Network (ResNet) architecture, a derivative of the basic convolutional neural network. This network was trained on ImageNet, an extremely common dataset for image classification, and will be used in conjunction with a dataset for tumor classification such as that of Panigrahi (2021) and Sarta (2020). Coined by He et al. (2015), ResNet addresses the issues of neural networks’ degradation, where training and evaluation losses spike and lose predictability as a model’s depth passes a certain point. The proposed solution consists of identity mapping, whereby layers pass their outputs to a mapping function that performs one of two actions: it may shortcut part of the input to be recombined at a deeper layer (discussed in Hochreiter et al., 1997), or it may utilize a nonlinear function which asymptotically approximated the use of multiple linear layers at once (introduced in Jégou et al., 2012). This development allows deep neural networks to have no worse loss than shallow ones of appropriate depth. 

ResNet showed that model degradation could be overcome, thereby rendering deep neural networks much more feasible and revolutionizing the field. With its proposal came the ability for a model to reliably maintain hundreds and even thousands of layers. The uptick in depth that ResNet caused is exactly what makes it a perfect candidate for analysis — such complexity is necessarily harder to explain, and will hopefully allow the three methods to highlight specifically their strengths and weaknesses.