---
sidebar_position: 1
---

# What is Anchoring

Ribeiro, Singh, and Guestrin, the original authors of LIME, also created anchoring as an Explainable AI model, which has some similarities with LIME, but outputs its explanations in a different form. Like LIME, Anchoring involves perturbing the data point in question to see how the results from the black box change. Ribeiro et al. define their anchor like so: “An anchor explanation is a rule that sufficiently “anchors” the prediction locally – such that changes to the rest of the feature values of the instance do not matter” ([Ribeiro et al](https://homes.cs.washington.edu/~marcotcr/aaai18.pdf), 2018). For example, a picture of a dog in the ocean would still be a picture of a dog even if the background were changed to grass. In this case, the dog would be our anchor. The same principle can be used for multiple types of data, not just image data. For tabular data, the algorithm will seek to find which feature values were the most important in coming to a particular decision, and for image classification the anchor will be a set of superpixels that have the most importance in determining the prediction of the model. A clear advantage of anchoring is that its output is intuitive and easy to interpret, as opposed to being a sea of coefficients.

## How to find an Anchor

When looking for an anchor, there are two main attributes that we are looking for. One is precision. We want to choose an anchor that we are pretty sure is correct, meaning that it does contribute heavily to the prediction of the black box model. The other is coverage, meaning that our anchor still holds for as big of a subset of the input space as possible, which in practice generally means trying to make the anchor more concise. The algorithm optimizes this by setting a precision threshold, and choosing the anchor above this precision with the highest coverage. In order to generate this anchor, we start off with a null rule, and then iteratively add features to it until we have a rule that meets the precision threshold we are looking for. We start off with multiple possible rules to make sure we search a reasonably sized portion of the sample space while keeping the algorithm computationally feasible (Ribeiro et al, 2018). One weakness of anchoring is the difficulty of finding a distribution within which to perturb data (the same problem shows up in LIME and is somewhat inherent to perturbation based algorithms). Another issue is that there is no good anchor for some data points, especially ones near decision boundaries or belonging to fringe classes. 

### Image Anchoring and Superpixels

Image anchoring requires some preprocessing, because the anchoring algorithm has exponential runtime with respect to how many features a dataset has. This is not computationally feasible if each pixel in an image is a feature, so first anchoring splits images into superpixels (adjacent and similarly colored groups of pixels). This reduces the number of features and makes the anchoring algorithm more tractable, but reduces scope to create more concise anchors.

To implement anchoring, we used [Ribeiro's Anchoring Package](https://github.com/marcotcr/anchor).

