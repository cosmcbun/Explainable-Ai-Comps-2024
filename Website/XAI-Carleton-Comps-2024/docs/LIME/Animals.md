---
sidebar_position: 150
---
# Cats and Dogs

## Cartons and Vipers and Bears, oh my!

The image of the German shorthaired pointer offers a clear, straightforward explanation of a correct prediction. But, as we saw with the example with the huskies and wolves, it's not always the case that the image classifier makes the right conclusion. Indeed, we found during our tests that ResNet made incorrect predictions when in came to some images, instead assigning them one of the other many classes in ImageNet's list of labels.

### Example 1: Focusing on the Wrong Subject

In many cases when ResNet made an error in its prediction, LIME was able to offer a somewhat reasonable explanation for the miscalculation. In one example, LIME suggested the model was simply looking at a different part of the image than the animal. Here is a pug classified as a "tennis ball" by ResNet with 0.59 certainty.

![Figure 1](/img/lime/pug-192.jpg "An image of a pug, predicted to be a tennis with 0.59 certainty")
![Figure 1](/img/lime/pug-192-lime.jpg "ResNet prediction explained by LIME")

As evident from this image of a pug, LIME suggests that the "tennis ball" prediction wasn't so much ResNet misclassifying the pug as a tennis ball, but rather it was focusing on the corner of the image, which does in fact contain a tennis ball. As such, if we were to trust LIME's explanation, this could be considered a reliable prediction by ResNet, and the model was simply choosing the wrong subject to look at (for one reason or another).

### Example 2: Weird Prediction, but the Explanation Helps

In other cases, often those with top predictions of lower certainty, ResNet would make an incredibly strange classification which would make slightly more sense once we ran it through LIME. This is an Abyssinian cat, predicted to be a "horned viper" with 0.21 certainty.

![Figure 2](/img/lime/abyssinian-3.jpg "An image of an Abyssinian cat, predicted to be a horned viper with 0.21 certainty")
![Figure 2](/img/lime/abyssinian-3-lime.jpg "ResNet prediction explained by LIME")

This example shows that while it may seem unreasonable to classify this cat as a "horned viper", the mask suggests that ResNet may have noticed the cat's tail and mistook its shape for that of a snake, which if we were to trust the model, would offer further insight into ResNet's classification process. Notably, the certainty for this prediction is quite low, and LIME is unable to explain why ResNet is so focused on the tail instead of the parts of the image that look like a cat.

### Example 3: A Decent Prediction with a Confusing Explanation

Finally, there were times that LIME failed to explain an misclassification from ResNet, at least in a manner that would be understandable to users. Here is a Birman cat, predicted to be a "carton" with 0.64 certainty.

![Figure 3](/img/lime/birman-16.jpg "An image of an Birman cat, predicted to be a carton with 0.64 certainty")
![Figure 3](/img/lime/birman-16-lime.jpg "ResNet prediction explained by LIME")

While the prediction "carton" for this image may seem reasonable to someone looking at the image alone (which is in fact a cat inside a carton), LIME offers a largely confusing explanation for this classification, as it suggests ResNet is in fact identifying the cat itself as the carton, along with several erroneous corners and parts of boxes in the background. Whether this is an issue with ResNet, LIME, or both is not immediately evident to the user, so predictions such as these are unlikely to improve trust in the model's thought process.

## Conclusion

So, what does this tell us about LIME? Well for starters, we know it is at least somewhat reliable at offering explanations that "make sense", though one of the major questions surrounding post-hoc explanations in general remains relevant with regards to LIME as well: How reliable is this as a means to understand the classifier's thought process?

As of right now, that question is difficult to answer. But what we can do is remark on our observations while conducting this study. One of the biggest structural limitations that we discovered from explaining a black box is that while LIME is more than able to highlight certain areas of interest that either contribute to or against a certain prediction, there is no real way to know why the model focused on a certain area over another (besides guessing). For example, LIME can explain which areas of an image look more like a "tennis ball" than a "pug", but it can't explain why ResNet chose to focus on that particular part of the image in the first place. Furthermore, there is also the question of if issues with any of the faultier explanations, like for the image with the cat in the carton, are more a fault of LIME itself or if they are an issue with how ResNet makes its predictions. Perhaps there is an issue with the training set that we did not consider? It's hard to know for sure, and raising the possibility only brings up more questions.

Finally, there is still the question of how well LIME holds up in the presence of other XAI techniques. Is it better than Anchors and Shapley values at explaining ResNet? Is there even a way to quantify this? Other sections of our website will explore these techniques in detail, so stay tuned!
