---
sidebar_position: 10
---

# Qualitative Takeaways

## ResNet Participant Comments

### LIME and Anchoring more intuitive...


Multiple participants noted that LIME and Anchoring produced more intuitive explanations than Shapley. One participant said "I can kind of see a snake in Shapley but there is no 'oh okay' moment like LIME has" about the explanations below of the model's prediction of horned viper.

![Figure 1](/img/user_study/horned_viper-slide.jpg "An image of a cat, with explanations for why it was predicted as a horned viper")

Another participant said about the image of the cat with the roses that they "liked LIME and Anchoring more because it is possible to see the image", which contrasts with the heat map in Shapley partially obscuring the images it is explaining, as a participant also noted "it's hard to see the pixels in Shapley" about the image with the cat in the box.

![Figure 2](/img/user_study/roses_cat-slide.jpg "An image of a cat, with explanations for why it was predicted as a cat.")
![Figure 3](/img/user_study/pug-slide.jpg "An image of a pug with a tennis ball, with explanations for why it was predicted as a tennis ball.")

### But Shapley still preferred

Despite this, 9 of our 12 participants still named Shapley as their favorite technique. One reason was that it was more likely to highlight only the relevant parts of the image. Regarding the explanations for the picture of the cat on the stairs, one participant said "highlighting the stairs is a little weird in LIME and Anchoring", and another participant pointed out that "Shapley makes completely clear \[the model\] is looking at the ball" about the picture of the pug with the tennis ball, which contrasts with LIME and Anchoring highlighting much of its face.

![Figure 4](/img/user_study/stairs_cat-slide.jpg "An image of a cat on stairs, with explanations for why it was predicted as a cat.")

When comparing all of the techniques after seeing all of the examples, one participant said "Shapley was the most consistent". Another upside of Shapley was its ability to capture values, with different participants saying "I like Shapley because it reflects degrees of importance", and "big fan of heat map, it provides the most helpful information".

### Clashing explanations

One phenomenon that confused participants was when the techniques gave contradictory explanations. One example of this is the picture of a dog that the model thought was a polar bear.

![Figure 5](/img/user_study/polar_bear-slide.jpg "An image of a dog, with explanations for why it was predicted as a polar bear.")

LIME focused on the dog's head, whereas Anchoring included most of the dog and much of the background but omitted much of the head, and Shapley highlighted some of the head red and some blue. As one participant said "If I was given any single one I would say they help, but they confuse in total". After seeing all of the examples, another participant said "it is actively confusing to have different explanations for the same model. If they are seeing the same predictions, they should be showing the same explanation."
