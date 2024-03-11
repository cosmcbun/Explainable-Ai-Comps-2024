---
sidebar_position: 90
---
# Tumors Case Study

## LIME with the Tumors Dataset

Now that we've seen how LIME works with the Animals dataset, let's show a few examples of how it interacted with our custom-weighted ResNet model, using one randomly-selected image from each class.

### Glioma tumor

![An MRI scan of a glioma tumor, predicted to be a pituitary tumor with 0.65 certainty](/img/tumors/glioma_tumor-0.jpg)
![ResNet prediction explained by LIME](/img/tumors/glioma_tumor-0-lime.jpg)

The model appears relatively sure there is a tumor in this MRI scan, but incorrectly classifies a glioma tumor as a pituitary tumor. LIME is highlighting seemingly erroneous areas around the head instead of a tumor, suggesting that our ResNet model isn't looking at the tumor itself.

### Meningioma tumor

![An MRI scan of a meningioma tumor, predicted to be a meningioma tumor with 0.84 certainty](/img/tumors/meningioma_tumor-45.jpg)
![ResNet prediction explained by LIME](/img/tumors/meningioma_tumor-45-lime.jpg)

Unlike the previous scan, this meningioma tumor is correctly classified with high certainty, which would imply that our model is performing well. However, as revealed by LIME, the explanation is highlighting seemingly unrelated areas of the head (pretty much everything except the tumor), but it also seems the top of the head has a negative correlation with this class. As a result, it's reasonable to conclude that our model is not good at recognizing tumors and simply made a lucky guess.

Note that the head's position is different from that in the glioma scan, so it's possible this has skewed the effectiveness of our training data.

### No tumor

![An MRI scan of a brain with no tumor, predicted to be a meningioma tumor with 1.0 certainty](/img/tumors/no_tumor-97.jpg)
![ResNet prediction explained by LIME](/img/tumors/no_tumor-97-lime.jpg)

The model appears very certain there is a meningioma tumor, despite there not being any. Very few areas of the brain are highlighted by LIME, mostly just the edges around the skull and the bottom right corner. This again suggests our ResNet model is not looking in the right place.

### Pituitary tumor

![An MRI scan of a pituitary tumor, predicted to be a meningioma tumor with 0.67 certainty](/img/tumors/pituitary_tumor-135.jpg)
![ResNet prediction explained by LIME](/img/tumors/pituitary_tumor-135-lime.jpg)

The model predicts this is a meningioma tumor with relatively high certainty, even though it is a pituitary tumor. The explanation from LIME reveals the model was not looking at the tumor at all, instead looking at the area around it. This would explain the misclassification as an error with how our model reads these images.

## Conclusion

Research suggests that machine learning models can be very good at recognizing brain tumors from an MRI scan. However, given these explanations from LIME, it is safe to say that we were unable to replicate the same success using our own version of ResNet18. More often than not, the model was simply looking at the wrong parts of the brain, and had incorrectly learned to just guess "meningioma" when in doubt. Thus, we now know NOT to ever use this model in a medical setting.

In a funny way, this quick experiment helps to showcase the utility of explainable AI as a means to show how unreliable our model was. With XAI methods like LIME, we can test the reliability of ML models to ensure that those actually used by medical professionals perform better!

## Shapley

In addition to ResNet, we also ran a [model on a dataset of brain scans](/Explainable-Ai-Comps-2024/Methodology/ResNet#tumors). Becuase Shapley is model-agnostic, only a minimal change was required to the code to analyze tumor data as well.

![Meningioma-positive Brain Scan](/img/tumors/meningioma-45-shap.png "Top guesses of the model")

In this case - as with all of the other brain scan predictions we explained - Shapley's picture is far less dynamic. Moreover, the actual tumor (white and slightly below the middle of the picture) is only very slightly highlighted, while an extranious region at the top of the head is more strongly highlighted. This may point to it being a weaker model that is more reliant on guesswork; undeniably true. While this model got around 60-70% accuracy on our data with four classes, ResNet got 93.8% with a thousand classes. However, it does point to one interesting conclusion the model may have drawn: to look for tumors near the skull. If we were to tune the model, then, we could provide more examples of tumors that were not found at the edge of the brain.

## Anchoring

### Successes

When the model was correct, anchoring was quite effective at finding the tumor in the image that caused the model's prediction. In the figure below, anchoring was able to locate the tumor quickly (in under five seconds, which is on the order of 100 times faster than in the animal dataset), which is important for its practical use. 

![Figure 1](/img/tumors/meningioma-252.jpg "A brain mri with a meningioma tumor.")
![Figure 1](/img/tumors/meningioma-252-anchor.png "The anchor for the brain scan.")

### Failures

The superpixelation algorithm used behind anchoring is still a liability. For the MRI below, the anchor is fairly large, but the actual tumor is a small white ellipse on the very left side of the anchor. If superpixelation algorithms cannot give tumors their own superpixels, anchors will include extraneous parts of the brain, which reduces its effectiveness considerably. 

![Figure 2](/img/tumors/glioma-191.jpg "A brain mri with a glioma tumor.")
![Figure 2](/img/tumors/glioma_191-anchor.png "The anchor for the brain scan.")

Another issue is that the anchoring package displays its explanations by showing only the anchors and blacking out the rest of the image, which can be disorienting and take away necessary context, especially when images are black and white like these MRIs. This can be resolved since it is an issue with the anchoring package, not the explanatory technique itself, but it reduces the practicality of using anchors in this domain.
