---
sidebar_position: 3
---

# What kind of techniqniques did we Study?

## All of the Techniques we studied were model-agnostic post hoc local explanations.

Now, for some definitions...

### What does model-agnostic mean?

A model-agnostic technique does not depend knowledge of the specific AI model being analyzed. This means that the weights, biases, and architectures of the models remain private. There are a few reasons that this might be desirable: for instance, work done on one model can scale easily to others. We used the same techniques on both images and tabular data in this project! Moreover, it allows us to gather insights into models we don't have access to, beyond the black box. Given that AI model weights are often valuable property that companies have spent much money and time on tuning, they probably won't be willing to share the weights. But model-agnostic techniques only need to be able to query the model repeatedly.

### What is post hoc explanation?

Post hoc explanations attempt to answer, in retrospect, why the model chose the output or classification it did. That is, it's beyond the intended scope of these techniques to predict what the model will say in future instances without testing it on those as well.

### What is local interpretability?

These techniques are not focused on the behavior of the AI model as a whole, but rather on its behavior in a specific instance – one data point. The conclusions, thusly, cannot necessarily be extrapolated too far in any direction. This is somewhat a necessary consequence of the complicated decision boundaries involved in AI decision making.
