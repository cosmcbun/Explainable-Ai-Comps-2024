---
sidebar_position: 4
---

## Resnet Survey Limitations

### Data representations

Anchoring, LIME, and Shapley showed their explanations in different ways, which sometimes made it difficult to separate comments about the form of display from comments about the explanations themselves. 

- Anchoring displayed the unaltered anchor but blacked out the rest of the image. 
- LIME displayed the whole image, highlighting in green the parts it deemed most important to the model. 
- Shapley displayed its explanations with a heat map, overlaying the image with blue and red squares whose brightness indicated the importance of the pixel group in the model's decision. 

The different data representations all have their pros and cons (Shapley can convey more information by having more values pixel groups can take, but the others tend to be less cluttered and more intuitive explanations), but ideally these would be standardized to be able to directly compare the explaining techniques. 

### Superpixels vs. pixel groups

All three explanations techniques need to merge pixels together to be computationally feasible, and in an ideal world the techniques would have used the same condensation algorithms to remove this as a confounding variable. Unfortunately, Shapley splits the image into a grid of squares, while LIME and Anchoring use superpixelation algorithms to group like pixels into shapes. The Anchoring and LIME packages also use different superpixelation algorithms, meaning that they do not have the same set of possible explanations, which would be ideal for evaluating them head to head. 

