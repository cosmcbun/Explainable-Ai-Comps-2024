---
sidebar_position: 1
---

# Lime

## Local Interpretable Model-Agnostic Explanations (LIME)

Originally Proposed in 2016 by Marco Tulio Ribeiro, Sameer Singh, and Carlos Guestrin, Local Interpretable Model-Agnostic Explanations (LIME) is a post hoc and model agnostic technique that attempts to build trust in black box models. One of two techniques we will focus on which rely on local surrogate models - LIME builds a simpler model which is trained to approximate the "Black Box” model’s predictions across a small vector-space (Molnar 2024).

We will introduce the application of XAI through LIME. Because LIME can rely on simple machine learning methods like Linear Regression or decision trees, our paper can build on readers' existing foundational machine learning knowledge. LIME uses these models because they are simple enough to be inherently interpretable.

LIME doesn't train its simple model on the same training data as the black-box model. Instead, LIME builds its simple model on a novel dataset created by passing slightly modified versions of the input which LIME seeks to explain into the black-box model. These perturbed data are weighted based on their proximity to the black box models prediction of interest. Exploring the simple model's inherently interpretable nature allows a user to explore why the black box model gave a specific output.

LIME shares many of the same challenges with Anchor XAI technique (and Shapley Value AI technique to a lesser degree). For each run, LIME only attempts to explain a specific result in isolation. This means that LIME can give massively different explanations across multiple runs on similar black box model results. Similarly, given two black box models who give identical results for a particular input, LIME might give massively different explanations for how each model came to its conclusion. This is not an inherent limitation of LIME (the black box model might really have massively different rationale for two similar outputs or two models may come to the same conclusion based on massively different logic) but this local interpretation may prevent insights gain through LIME from being applied to a general understanding of the black box model. Lastly, as with most XAI methods, LIME takes significant computational resources: for each black box model conclusion a user wishes to explain, a new ML model must be substantiated.
