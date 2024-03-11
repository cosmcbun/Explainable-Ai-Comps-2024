---
sidebar_position: 3
---

# Tumors

XAI in this case is meant as a way of highlighting tumors in brain scans. If a model predicts that an image has a tumor, then ideally our techniques would find and highlight the tumor as the reason the model made its prediction.

## Anchoring Successes

When the model was correct, anchoring was quite effective at finding the tumor in the image that caused the model's prediction. In the figure below, anchoring was able to locate the tumor quickly (in under five seconds, which is on the order of 100 times faster than in the animal dataset), which is important for its practical use.

![Figure 1](/img/tumors/meningioma-252.jpg "A brain mri with a meningioma tumor.")
![Figure 1](/img/tumors/meningioma-252-anchor.png "The anchor for the brain scan.")

## Anchoring Failures

### Superpixelation

The superpixelation algorithm used behind anchoring is still a liability. For the MRI below, the anchor is fairly large, but the actual tumor is a small white ellipse on the very left side of the anchor. If superpixelation algorithms cannot give tumors their own superpixels, anchors will include extraneous parts of the brain, which reduces its effectiveness considerably.

![Figure 2](/img/tumors/glioma-191.jpg "A brain mri with a glioma tumor.")
![Figure 2](/img/tumors/glioma-191-anchor.png "The anchor for the brain scan.")

### Model Errors

In the following examples, our model made incorrect predictions.

![Figure 3](/img/tumors/healthy-97.jpg "A healthy brain mri.")
![Figure 3](/img/tumors/healthy-97-anchor.png "The anchor for the brain scan.")
In the figure above, the model predicted that a healthy brain had a meningioma.

![Figure 4](/img/tumors/pituitary-135.jpg "A brain mri with a pituitary tumor.")
![Figure 4](/img/tumors/pituitary-135-anchor.png "The anchor for the brain scan.")
In this figure, the model predicted that a pituitary tumor was really a meningioma.

In both of these cases, the anchors were not very useful for understanding where tumors (or lack of tumors) were. Since it is making inaccurate predictions, it is likely that our model did not learn the right patterns to correctly identify tumors, meaning that explanations of its decisions will not be helpful to us.

### Display Issues

Another issue is that the anchoring package displays its explanations by showing only the anchors and blacking out the rest of the image, which can be disorienting and take away necessary context, especially when images are black and white like these MRIs. This can be resolved since it is an issue with the anchoring package, not the explanatory technique itself, but it reduces the practicality of using anchors in this domain.
