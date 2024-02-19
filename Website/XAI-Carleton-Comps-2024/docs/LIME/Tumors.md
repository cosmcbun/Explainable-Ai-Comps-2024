# LIME with the Tumors Dataset

Now that we've seen how LIME works with the Animals dataset, let's show a few examples of how it interacted with our custom-weighted ResNet model, using one randomly-selected image from each class.

### Glioma tumor

![Glioma](./glioma_tumor-0.jpg "An MRI scan of a glioma tumor, predicted to be a pituitary tumor with 0.65 certainty")
![Glioma - LIME](./glioma_tumor-0-lime.jpg "ResNet's prediction explained by LIME")

### Meningioma tumor

![Meningioma](./meningioma_tumor-45.jpg "An MRI scan of a meningoma tumor, predicted to be a pituitary tumor with 0.16 certainty")
![Meningioma - LIME](./meningioma_tumor-45-lime.jpg "ResNet's prediction explained by LIME")

### No tumor

![No tumor](./no_tumor-97.jpg "An MRI scan of a brain with no tumor, predicted to be a meningioma tumor with 1.0 certainty")
![No tumor - LIME](./no_tumor-97-lime.jpg "ResNet's prediction explained by LIME")

### Pituitary tumor

![Pituitary](./pituitary_tumor-135.jpg "An MRI scan of a pituitary tumor, predicted to be no tumor with 0.04 certainty")
![Pituitary - LIME](./pituitary_tumor-135-lime.jpg "ResNet's prediction explained by LIME")

## Conclusion