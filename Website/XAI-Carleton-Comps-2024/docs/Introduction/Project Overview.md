---
sidebar_position: 2
---

# Project Overview

As a [2024 Comps/Capstone for Carleton College's Computer Science Department](https://cs.carleton.edu/cs_comps/2324/explainable-ai/index.php), this project has two parallel tracks following the literature review: applying [XAI](./What%20is%20XAI.md) techniques to [tabular categorization problems](../Methodology/MOOC.md) and applying XAI techniques to [image categorization problems](../Methodology/ResNet.md).

import ProjectOverview from './src/ProjectOverview.png';

<img src={ProjectOverview} alt="Project Overview Flowchart illustrating the similarity between the tabular and image track" style={{width: 400}} />

The same three XAI techniques are applied to both tracks: [LIME](../LIME/Introduction.md), [Shapley](../Shapley%20Values/Introduction.md), and [Anchoring](../Anchors/Introduction.md). By applying three XAI techniques to two different models, we are able to compare how the XAI techniques perform in different contexts.

To further compare the XAI techniques, we are conducting two [user studies](../User%20Study/Introduction.md). Because the point of XAI is to explain complex models to humans, there is no empirical method to compare techniques. To counter this we are conducting a user study, so the conclusions of this study are more than the conclusions of a few researchers.

This project culminates in this website, [six posters](../Posters.md), and the [publishing of our code base](https://github.com/cosmcbun/Explainable-Ai-Comps-2024/).
