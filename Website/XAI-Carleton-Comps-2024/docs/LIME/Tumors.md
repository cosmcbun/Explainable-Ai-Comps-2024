# LIME with the Tumors Dataset

Now that we've seen how LIME works with the Animals dataset, let's show a few examples of how it interacted with our custom-weighted ResNet model, using one randomly-selected image from each class.

### Glioma tumor

![Glioma](./glioma_tumor-0.jpg "An MRI scan of a glioma tumor, predicted to be a pituitary tumor with 0.65 certainty")
![Glioma - LIME](./glioma_tumor-0-lime.jpg "ResNet's prediction explained by LIME")

The model appears relatively sure there is a tumor in this MRI scan, but incorrectly classifies a glioma tumor as a pituitary tumor. LIME is highlighting seemingly erroneous areas around the head instead of a tumor, suggesting that our ResNet model isn't looking at the tumor itself.

### Meningioma tumor

![Meningioma](./meningioma_tumor-45.jpg "An MRI scan of a meningoma tumor, predicted to be a meningioma tumor with 0.84 certainty")
![Meningioma - LIME](./meningioma_tumor-45-lime.jpg "ResNet's prediction explained by LIME")

Unlike the previous scan, this meningioma tumor is correctly classified with high certainty, with the explanation corroborating this by highlighting the area with the tumor in green. However, LIME is also highlighting seemingly unrelated areas of the head (this time the neck as well), but it also seems the top of the head has a negative correlation with this class. Note that the head's position is different from that in the glioma scan, so it's possible this is an issue with how our ResNet model classifies these images.

### No tumor

![No tumor](./no_tumor-97.jpg "An MRI scan of a brain with no tumor, predicted to be a meningioma tumor with 1.0 certainty")
![No tumor - LIME](./no_tumor-97-lime.jpg "ResNet's prediction explained by LIME")

The model appears very certain there is a meningioma tumor, despite there not being any. Very few areas of the brain are highlighted by LIME, mostly just the edges around the skull and the bottom right corner. This again suggests our ResNet model is not looking in the right place.

### Pituitary tumor

![Pituitary](./pituitary_tumor-135.jpg "An MRI scan of a pituitary tumor, predicted to be a meningioma tumor with 0.67 certainty")
![Pituitary - LIME](./pituitary_tumor-135-lime.jpg "ResNet's prediction explained by LIME")

The model predicts this is a meningioma tumor with relatively high certainty, even though it is a pituitary tumor. The explanation from LIME reveals the model was not looking at the tumor at all, instead looking at the area around it. This would explain the misclassification as an error with how our model reads these images.
