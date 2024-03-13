---
sidebar_position: 3
---

# Anchors on ResNet

## Anchoring Successes

When the model was confident in its prediction $(>0.8)$, anchoring was generally able to highlight the head and body of the animal in the image, which is exactly what we would hope would happen. These examples show anchoring clearly highlighting the parts of the image that had the most importance in the model's prediction. 

![Figure 1](/img/anchoring/german-shorthaired.jpg "A picture of a dog")
![Figure 1](/img/anchoring/german-shorthaired-anchor.png "The dog's anchor")

![Figure 2](/img/anchoring/roses-cat.jpg "A picture of a cat")
![Figure 2](/img/anchoring/roses-cat-anchor.png "The cat's anchor")


## Anchoring Failures

- When the model was less confident in its predictions $(<0.6)$, anchoring had more issues. It always highlighted the part of the image that made the most sense, but it would often also highlight much of the background and other seemingly irrelevant parts of the image, significantly diluting its usefulness. (indicate figures 8 and 5). 

![Figure 3](/img/anchoring/viper-predictions.jpg "A picture of a cat, predicted to be a snake")
![Figure 3](/img/anchoring/viper-anchor.jpg "The anchor for the snake prediction")

![Figure 4](/img/anchoring/pug-predictions.jpg "A picture of a pug with a tennis ball, predicted as a tennis ball")
![Figure 4](/img/anchoring/tennis-ball-anchor.jpg "The anchor for the tennis ball prediction")

- It was possible to make the anchors more or less concise by changing the confidence threshold of the anchoring algorithm, but different images had different ideal thresholds. This is a major limitation, as it would not be feasible to have users tinker with the confidence threshold on every image they wanted an explanation for.
- A shared weakness with LIME is that anchoring can only be as good as its superpixelation algorithm - there were some instances when it was unclear if inclusion of parts of the background was due to a flaw in the anchoring algorithm, or if the subject of the image did not have its own superpixels. 
