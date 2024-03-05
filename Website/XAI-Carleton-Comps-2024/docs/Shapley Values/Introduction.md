---
sidebar_position: 1 
---

# Introduction

Shapley values offer retroactive local explanations of an AI's decisions. As the name suggests, this technique is named after the award-winning mathematician and computational theorist Lloyd Shapley, who developed it back in the 1950s in his original papers on cooperative game theory [(Shapley et al., 1952)](https://www.rand.org/content/dam/rand/pubs/papers/2021/P295.pdf). The technique derives an explanation for machine learning models through a practical application of cooperative game theory – that is, the XAI treats each feature of an ML model as a “player”, which contributes a value that either adds or subtracts from the average prediction. This value, called the Shapley value, is calculated by looking at all possible coalitions and calculating the average marginal contributions of the given feature (i.e. the difference in predictions with and without the feature). Compared to other XAI techniques, particularly LIME, Shapley's method guarantees the predictions are fairly distributed and is based on solid theory, but is computationally expensive and requires unrestricted access to the model's training data [(Molnar, 2023)](https://christophm.github.io/interpretable-ml-book/shapley.html).

## Why Shapley values?

There are several reasons why we chose Shapley values as one of our techniques; in fact, it was the first of the three that we were absolutely sure we wanted to do. This was in no small part due to [Christoph Molnar's guide on Interpretable Machine Learning](https://christophm.github.io/interpretable-ml-book/shapley.html), which explained Shapley values' mathematical backing wonderfully, as well as the advantages and disadvantages of using such a method. Moreover, Shapley's work builds on decades-long game theory literature, and as we planned to compare three such techniques, it seemed it would diversify our analysis.

## Implementation for this project

This project utilizes Python's [```shap```](https://shap.readthedocs.io/en/latest/) package.
<!-- ! ADD MORE ! -->
