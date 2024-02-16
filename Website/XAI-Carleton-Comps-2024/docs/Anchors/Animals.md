

## Anchoring Successes

When the model was confident in its prediction (>0.8), anchoring was generally able to highlight the head and body of the animal in the image, which is exactly what we would hope would happen. (at this point indicate figures 1 and 7). These examples show anchoring clearly highlighting the parts of the image that had the most importance in the model's prediction, which is exactly what we would want. 

## Anchoring Failures

- When the model was less confident in its predictions (<0.6), anchoring had more issues. It always highlighted the part of the image that made the most sense, but it would often also highlight much of the background and other seemingly irrelevant parts of the image, significantly diluting its usefulness. (indicate figures 8 and 5). 
- It was possible to make the anchors more or less concise by changing the confidence threshold of the anchoring algorithm, but different images had different ideal thresholds. This is a major limitation, as it would not be feasible to have users tinker with the confidence threshold on every image they wanted an explanation for.
- A shared weakness with LIME is that anchoring can only be as good as its superpixelation algorithm -- there were some instances when it was unclear if inclusion of parts of the background was due to a flaw in the anchoring algorithm, or if the subject of the image did not have its own superpixels. 