---
sidebar_position: 90
---
# Tumors Case Study

## Introduction

One of the promises of explainable AI is a better calibration of your confidence when looking at a model's results. If I can see that my wolf/husky explainer is looking for snow in the background, I'll know not to trust it in the field. In practical use, there may be more wrinkles, but repeatedly highlighting features that are not plausibly related to the classification is a clear sign of model ineptitude.

In such a spirit of explaining more suspect models – and perhaps something more consequential than cat and dog classification – we created a [simple neural network that could recognize brain tumors](/Explainable-Ai-Comps-2024/Methodology/ResNet#tumors). Given a 2-dimensional slice of an MRI scan (horizontal, sagittal, or coronal), the model guessed whether the person's brain had either a brain tumor of the glioma, meningioma, or pituitary varieties. Of course, some brains had no tumors at all. After a few weeks of tinkering, we were able to get a neural network running with a 60-70%ish success rate; not the worst model ever, even if you wouldn't trust it for a surgery. But, it remained to be seen if the explainable AI techniques agreed that the model was good and was just making understandable mistakes, or whether it was lost looking at metaphorical sand.

## Explanations for MRI Predictions

### Example 1: Glioma tumor

![Figure 1](/img/tumors/glioma-191.jpg "A brain MRI with a glioma tumor")

This is an MRI scan of a glioma tumor, predicted to be a meningioma tumor with 0.88 certainty.

Anchors | LIME | Shapley

![Figure 1 - Anchor](/img/tumors/glioma-191-anchor.png "Anchors")
![Figure 1 - LIME](/img/tumors/glioma-191-lime.png "LIME")
![Figure 1 - Shapley](/img/tumors/glioma-191-shap.png "SHAP")

LIME: The model appears relatively sure there is a tumor in this MRI scan, but incorrectly classifies a glioma tumor as a pituitary tumor. LIME is highlighting seemingly erroneous areas around the head instead of a tumor, suggesting that our ResNet model isn't looking at the tumor itself.

Anchors: The superpixelation algorithm used behind anchoring is still a liability. For the MRI below, the anchor is fairly large, but the actual tumor is a small white ellipse on the very left side of the anchor. If superpixelation algorithms cannot give tumors their own superpixels, anchors will include extraneous parts of the brain, which reduces its effectiveness considerably.

### Example 2: Meningioma tumor

![Figure 2](/img/tumors/meningioma-252.jpg "A brain MRI with a meningioma tumor")

This is a scan of a meningioma tumor, predicted to be a meningioma tumor with 1.0 certainty.

Anchors | LIME | Shapley

![Figure 2 - Anchor](/img/tumors/meningioma-252-anchor.png "Anchors")
![Figure 2 - LIME](/img/tumors/meningioma-252-lime.png "LIME")
![Figure 2 - Shapley](/img/tumors/meningioma-252-shap.png "SHAP")

Unlike the previous scan, this meningioma tumor is correctly classified with high certainty, which would imply that our model is performing well. However, as revealed by LIME, the explanation is highlighting seemingly unrelated areas of the head (pretty much everything except the tumor), but it also seems the top of the head has a negative correlation with this class. As a result, it's reasonable to conclude that our model is not good at recognizing tumors and simply made a lucky guess.

When the model was correct, anchoring was quite effective at finding the tumor in the image that caused the model's prediction. In the figure below, anchoring was able to locate the tumor quickly (in under five seconds, which is on the order of 100 times faster than in the animal dataset), which is important for its practical use.

### Example 3: Healthy brain

![Figure 3](/img/tumors/healthy-97.jpg "An MRI scan of a healthy brain")

This is a scan of a healthy brain, predicted to have a meningioma tumor with 1.0 certainty.

Anchors | LIME | Shapley

![Figure 3 - Anchor](/img/tumors/healthy-97-lime.jpg "Anchors")
![Figure 3 - LIME](/img/tumors/healthy-97-lime.jpg "LIME")
![Figure 3 - Shapley](/img/tumors/healthy-97-shap.png "SHAP")

The model appears very certain there is a meningioma tumor, despite there not being any. Very few areas of the brain are highlighted by LIME, mostly just the edges around the skull and the bottom right corner. This again suggests our ResNet model is not looking in the right place.

### Example 4: Pituitary tumor

![Figure 4](/img/tumors/pituitary-135.jpg "A brain MRI with a pituitary tumor")

This is a scan of a pituitary tumor, predicted to be a meningioma tumor with 0.67 certainty.

Anchors | LIME | Shapley

![Figure 4 - Anchor](/img/tumors/pituitary-135-shap.png "Anchors")
![Figure 4 - LIME](/img/tumors/pituitary-135-lime.jpg "LIME")
![Figure 4 - Shapley](/img/tumors/pituitary-135-shap.png "SHAP")

The model predicts this is a meningioma tumor with relatively high certainty, even though it is a pituitary tumor. The explanation from LIME reveals the model was not looking at the tumor at all, instead looking at the area around it. This would explain the misclassification as an error with how our model reads these images.

## Conclusion

(to be added)

Anchors: Another issue is that the anchoring package displays its explanations by showing only the anchors and blacking out the rest of the image, which can be disorienting and take away necessary context, especially when images are black and white like these MRIs. This can be resolved since it is an issue with the anchoring package, not the explanatory technique itself, but it reduces the practicality of using anchors in this domain.

LIME: Research suggests that machine learning models can be very good at recognizing brain tumors from an MRI scan. However, given these explanations from LIME, it is safe to say that we were unable to replicate the same success using our own version of ResNet18. More often than not, the model was simply looking at the wrong parts of the brain, and had incorrectly learned to just guess "meningioma" when in doubt. Thus, we now know NOT to ever use this model in a medical setting. In a funny way, this quick experiment helps to showcase the utility of explainable AI as a means to show how unreliable our model was. With XAI methods like LIME, we can test the reliability of ML models to ensure that those actually used by medical professionals perform better!

Shapley: In this case - as with all of the other brain scan predictions we explained - Shapley's picture is far less dynamic. Moreover, the actual tumor (white and slightly below the middle of the picture) is only very slightly highlighted, while an extraneous region at the top of the head is more strongly highlighted. This may point to it being a weaker model that is more reliant on guesswork; undeniably true. While this model got around 60-70% accuracy on our data with four classes, ResNet got 93.8% with a thousand classes. However, it does point to one interesting conclusion the model may have drawn: to look for tumors near the skull. If we were to tune the model, then, we could provide more examples of tumors that were not found at the edge of the brain.
