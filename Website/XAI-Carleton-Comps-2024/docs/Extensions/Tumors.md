---
sidebar_position: 1
---
# Tumors Case Study

## Introduction

One of the promises of explainable AI is a better calibration of your confidence when looking at a model's results. If I can see that my wolf/husky explainer is looking for snow in the background, I'll know not to trust it in the field. In practical use, there may be more wrinkles, but repeatedly highlighting features that are not plausibly related to the classification is a clear sign of model ineptitude.

In such a spirit of explaining more suspect models – and perhaps something more consequential than cat and dog classification – we created a [simple neural network that could recognize brain tumors](/Explainable-Ai-Comps-2024/Methodology/ResNet#tumors). Given a 2-dimensional slice of an MRI scan (horizontal, sagittal, or coronal), the model guessed whether the person's brain had either a brain tumor of the glioma, meningioma, or pituitary varieties. Of course, some brains had no tumors at all. After a few weeks of tinkering, we were able to get a neural network running with a 60-70%ish success rate; not the worst model ever, even if you wouldn't trust it for a surgery. But, it remained to be seen if the explainable AI techniques agreed that the model was good and was just making understandable mistakes, or whether it was lost looking at metaphorical sand.

## Explanations for MRI Predictions

### Example 1: Glioma tumor

![Figure 1](/img/tumors/glioma-191.jpg "A brain MRI with a glioma tumor")

This is an MRI scan of a glioma tumor, predicted to be a meningioma tumor with 0.88 certainty.

Here are the explanations of the model's prediction; in all cases, the anchor is first, followed by LIME and Shapley.

![Figure 1 - Anchor](/img/tumors/glioma-191-anchor.png "Anchors")
![Figure 1 - LIME](/img/tumors/glioma-191-lime.png "LIME")
![Figure 1 - Shapley](/img/tumors/glioma-191-shap.png "SHAP")

In this MRI scan, our model made an incorrect prediction with relatively high certainty. Without an explanation, it's reasonable to assume that the model located the glioma tumor and simply mistook it for a meningioma. However, each of our XAI techniques suggests that the model is not looking at the tumor at all. Anchors and LIME both suggest the bottom left area of the brain (which doesn't have a tumor) is the reason for this prediction, while Shapley isn't highlighting any area at all. Interestingly, the area that does have the tumor is highlighted in red by LIME, suggesting the actual glioma tumor has a negative correlation with the meningioma.

### Example 2: Meningioma tumor

![Figure 2](/img/tumors/meningioma-252.jpg "A brain MRI with a meningioma tumor")

This is a scan of a meningioma tumor, predicted to be a meningioma tumor with 1.0 certainty.

![Figure 2 - Anchor](/img/tumors/meningioma-252-anchor.png "Anchors")
![Figure 2 - LIME](/img/tumors/meningioma-252-lime.png "LIME")
![Figure 2 - Shapley](/img/tumors/meningioma-252-shap.png "SHAP")

Unlike the previous scan, this meningioma tumor is correctly classified with high certainty, which would imply that our model is performing well. According to anchoring at least, our model found the tumor and classified it correctly. However, this comes with the caveat that our other XAI techniques do not corroborate this explanation at all. LIME's explanation, strangely, seems to be highlighting everything except for the tumor itself, and Shapley is only highlighting a small bit at the edge of the skull. Since these explanations largely contradict each other, it remains difficult to say if our model can be trusted or not.

### Example 3: Healthy brain

![Figure 3](/img/tumors/healthy-97.jpg "An MRI scan of a healthy brain")

This is a scan of a healthy brain, predicted to have a meningioma tumor with 1.0 certainty.

![Figure 3 - Anchor](/img/tumors/healthy-97-anchor.png "Anchors")
![Figure 3 - LIME](/img/tumors/healthy-97-lime.jpg "LIME")
![Figure 3 - Shapley](/img/tumors/healthy-97-shap.png "SHAP")

The model appears very certain there is a meningioma tumor, despite there not being any. Our explanations, again, are largely inconsistent with each other. Anchors highlights part of the brain, Shapley is highlighting some of the wrinkles, and LIME seems completely unconcerned with the brain itself, looking more at the corners and edges of the image.

### Example 4: Pituitary tumor

![Figure 4](/img/tumors/pituitary-135.jpg "A brain MRI with a pituitary tumor")

This is a scan of a pituitary tumor, predicted to be a meningioma tumor with 0.67 certainty.

![Figure 4 - Anchor](/img/tumors/pituitary-135-anchor.png "Anchors")
![Figure 4 - LIME](/img/tumors/pituitary-135-lime.jpg "LIME")
![Figure 4 - Shapley](/img/tumors/pituitary-135-shap.png "SHAP")

The model predicts this is a meningioma tumor with relatively high certainty, even though it is a pituitary tumor. The explanations from anchoring and LIME are both focused on the the left side of the image, but only anchoring includes the tumor in its explanation. Shapley, once again, seems uncertain about any part of the image and highlights almost none of it.

## Analysis

Here were our main takeaways from each of our XAI techniques with our tumor model.

### Anchors

When the model was correct, anchoring was quite effective at finding the tumor in the image that caused the model's prediction. Unfortunately, our model was not very accurate, and explanations of inaccurate predictions do not give us much insight into what is actually going on in brain scans. The preprocessing step for the anchoring algorithm, in which the image is broken up into superpixels, can also result in anchoring being unable to find and isolate tumors. Another issue is that the anchoring package displays its explanations by showing only the anchors and blacking out the rest of the image, which can be disorienting and take away necessary context. To read more about anchoring and tumors, click [here](/Anchors/Tumors.md).

### LIME

Research suggests that machine learning models can be very good at recognizing brain tumors from an MRI scan. However, given these explanations from LIME, it is safe to say that we were unable to replicate the same success using our own version of ResNet18. More often than not, the model was simply looking at the wrong parts of the brain, often ignoring the tumor completely in its explanation. What this suggests, if we were only using LIME as an explanation, is that for one reason or another our model had failed to learn to recognize brain tumors at all. Instead, it had incorrectly learned to just guess "meningioma" when in doubt, which would explain the lack of focus.

### Shapley

In each of the brain scan predictions we explained, Shapley's picture was far less dynamic than we saw in the Animals dataset. Moreover, the actual tumor was only ever slightly highlighted in blue (if at all), while extraneous regions around the edges of the skull were more strongly highlighted. This may point to it being a weaker model that is more reliant on guesswork; undeniably true. While this model got around 60-70% accuracy on our data with four classes, ResNet got 93.8% with a thousand classes. However, it does point to one interesting conclusion the model may have drawn: to look for tumors near the skull. If we were to tune the model, then, we could provide more examples of tumors that were not found at the edge of the brain.

## Conclusion

Overall, these explanations – with the possible exception of Anchoring – give us good reasons to not trust the model, beyond just its middling accuracy score. LIME and Shapley both agree that the model focuses far too much on the edge of the skull rather than on tumors. This is good evidence that something more fundamental is wrong with the model than a lack of training epochs. On a more positive note, this experiment helps to showcase the utility of explainable AI, as it revealed just how unreliable our model was. The ability to test the reliability of ML models helps to ensure the quality of models that are actually used by medical professionals.
