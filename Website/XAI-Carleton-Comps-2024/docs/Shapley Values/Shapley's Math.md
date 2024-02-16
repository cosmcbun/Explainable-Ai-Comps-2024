---
    sidebar-position: 3 
---
<!-- SOURCES:
    * https://christophm.github.io/interpretable-ml-book/shapley.html
    - https://medium.com/the-modern-scientist/what-is-the-shapley-value-8ca624274d5a
    + https://www.rand.org/content/dam/rand/pubs/papers/2021/P295.pdf
 -->
# Shapley's Math
Due to their strong mathematical backing, Shapley values are incredibly widely used in the field and have some of the most variation among explanation techniques, thus making them almost obligatory to include in the project. But how do Shapley values work? <!-- ! ADD MORE!!! -->


## Intuition - Game Theory
Before we wade into the math, let's establish a quick base: a machine-learning model takes a set of features as input, performs some kind of calculation on them, and returns an output (In our case, a real-valued confidence score in a potential classification). Now that we have this foundation, let's begin.

Shapley values have their roots in [cooperative game theory](https://en.wikipedia.org/wiki/Cooperative_game_theory). Assume that our machine learning model is a game, where each feature's value is a player, and where the model's output is the final result of the game. Shapley values tell us how each player contributed to the final result of the game.

Suppose each feature values begins to contribute to the game in a random order. The Shapley value for a feature tells you how much they change the game's result when they start to play along side everyone else.

## How do we simulate a feature before it joins the game?
In Shapley's original text, [*A value for n-person games*](https://www.rand.org/content/dam/rand/pubs/papers/2021/P295.pdf), a player can simply not join the game until their turn; however, a machine learning model most often takes a fixed number of inputs, and as such a player simply cannot choose to refrain from partaking in the game.

Therefore, we must find a way to pretend that a player is absent. This is one of two places where approaches diverge. In some cases, a value is randomly sampled from an acceptable range or even completely unconstrainedly. Our implementation, in accordance with [Cristoph Molnar's implementation](https://christophm.github.io/interpretable-ml-book/shapley.html#:~:text=It%20is%20not%20sufficient%20to%20access%20the%20prediction%20function%20because%20you%20need%20the%20data%20to%20replace%20parts%20of%20the%20instance%20of%20interest%20with%20values%20from%20randomly%20drawn%20instances%20of%20the%20data.), accesses a random instance from our training data to replace any values which are "not playing."


## How to approximate Shapley values


## Basic properties


## Actually calculating a Shapley Value


## Approximating the Shapley Value
