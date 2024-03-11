---
title: "ResNet: Methodology"
sidebar-position: 20
---

# Methodology of the ResNet User Study
We designed a user study to determine how explanatory – and convincing – our explanations of ResNet predictions were to users. Here is how we conducted this half of the study.

### Who we surveyed

The participants of this survey were twelve Carleton College students, seven of whom were CS majors. Class years varied, and each had varying levels of familiarity with machine learning.

### Introducing explainable AI

Regardless of previous ML background, we made sure to introduce the concept of explainable AI using an example where a husky was misclassified as a wolf, and LIME revealed an error with the underlying model's training data [(Ribeiro et al, 2016)](https://arxiv.org/abs/1602.04938).

![Figure 1](/img/user_study/wolf-husky.png "An image of a husky predicted to be a wolf.")
![Figure 1](/img/user_study/wolf-husky-lime.png "The image put through LIME.")

We also asked participants for their general opinions on artificial intelligence to account for the possibility that positive or negative impressions might skew our data.

### Comparing techniques

Once we got started with the survey proper, participants were shown an image of a cat or dog, along with ResNet's top three predictions for that image. We asked participants if they trusted ResNet's prediction, and after receiving a response, we'd reveal side-by-side explanations from each of our XAI techniques.

Here is an example:

![Figure 2](/img/user_study/polar_bear-slide.jpg "An image of a dog, with explanations for why it was predicted as a polar bear.")

After showing the participant the predictionand explanation, we asked whether each explanation helped or hurt their understanding of the model, and recorded their comments.

We selected a total of eight images from our dataset, mostly based on the prediction from ResNet18. These predictions were either clearly correct, or misclassifications that we deemed either reasonable (i.e. focusing on the wrong subject) or unreasonable (i.e. the explanations were totally incoherent). Collecting user opinions for these different cases was important for drawing our conclusions.

### Ranking techniques and trust

After showing participants all eight images, we asked them to rank each XAI technique from favorite to least favorite, and also to rate their trust in each technique overall. Participants were also asked how the explanations as a whole impacted their trust in the underlying model (ResNet). We also asked whether or not the discrepancies in explanations from each technique bothered them, before collecting any final comments.
