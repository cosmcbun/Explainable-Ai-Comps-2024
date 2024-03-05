---
    sidebar-position: 3 
---

# Shapley's Math
Due to their strong mathematical backing, Shapley values are incredibly widely used in the field, thus they are almost obligatory to include in the project. But how do Shapley values work? <!-- ! ADD MORE!!! -->


## Intuition - Game Theory
Before we wade into the math, let's establish a quick base: a machine-learning model takes a set of features as input, performs some kind of calculation on them, and returns an output (In our case, a real-valued confidence score in a potential classification). Now that we have this foundation, let's begin.

Shapley values have their roots in [coalitional game theory](https://en.wikipedia.org/wiki/Cooperative_game_theory). Assume that our machine learning model is a game, where each feature's value is a player, and where the model's output is the final result of the game. Shapley values tell us how each player contributed to the final result of the game.

Suppose each feature values begins to contribute to the game in a random order. The Shapley value for a feature value is the difference between outcomes when the feature value *is* and *isn't* playing in the game of prediction.

## How do we simulate a feature value "not playing?"
In Shapley's original text, [*A value for n-person games*](https://www.rand.org/content/dam/rand/pubs/papers/2021/P295.pdf), a player can simply not join the game until their turn; however, a machine learning model most often takes a fixed number of inputs, and as such a player simply cannot choose to refrain from partaking in the game.

Therefore, we must find a way to pretend that a player is absent. This is one of two places where approaches diverge. In some cases, a value is randomly sampled from an acceptable range or even completely unconstrainedly. Our implementation, in accordance with [Cristoph Molnar](https://christophm.github.io/interpretable-ml-book/shapley.html#:~:text=It%20is%20not%20sufficient%20to%20access%20the%20prediction%20function%20because%20you%20need%20the%20data%20to%20replace%20parts%20of%20the%20instance%20of%20interest%20with%20values%20from%20randomly%20drawn%20instances%20of%20the%20data.), accesses random instances from our training data to replace any values which are "not playing."

## What is a coalition?
Since we are working with real-world data, we cannot assume that each feature acts independently of one-another. As such, we must simulate prediction across all coalitions of the inputs, where a coalition is an instance of certain features being linked together. For the calculation of Shapley values, this means that when a coalition is considered, all values inside the coalition are a package deal: they either *all* play, or *none* of them play, instead of each feature value playing/not playing on an individual basis.

## How to approximate Shapley values
The actual calculation of Shapley values is requires some heavy integration, which is incredibly computationally heavy. As such, we decided to approximate our input's Shapley values with the ```shap``` package instead.

As proposed in [Strumbelj et al (2014)](https://link.springer.com/article/10.1007/s10115-013-0679-x), we can approximate a shapley value $\phi_j$ for a feature value $j$ through the calculation:

$$\phi_j = \frac{1}{M} \cdot \sum^N_{n=1}(f(x^n_{+j}) - f(x^n_{-j})) : \forall x^n \in \mathcal{P}(X)$$

Where $f$ is the prediction function for our model, and $x^n$ is a random permutation of the input values playing. As such, this is the average over all possible coalitions of that input with $j$ specifically participating and specifically not participating. Because we need to simulate all coalitions of the input $X$'s powerset ( $\forall x^n \in \mathcal{P}(X)$ ), $N$ must be equal to $|\mathcal{P}(X)|$, or $2^{|X|}$.

We can approximate Shapley $\phi_j$ using the following algorithm. 

For all permutations $x^n \in \mathcal{P}(X)$:
>   1. Calculate $f(x^n_{+j}) - f(x^n_{-j})$, where the coalition is not participating.
>   2. If we want to make our calculation more robust, we repeat this calculation multiple times, selecting multiple random datapoints to substitute into feature values which are not playing. Our final value for $\phi^n_j$ is the average over all of these calculations.
>
>Compute the average value across all $\phi^n_j$ to get $\phi_j$.

This allows us to not only get the overarching Shapley values for each input, but if we wanted we could draw a single $\phi^n_j$ to see how $j$ factored into coalition $x^n$ specifically.

## Basic properties
Shapley values hold four basic properties, each of which tell us something about our payout:

- **Efficiency:** All Shapley values must sum to the difference between the prediction on the input and the average prediction.

$$\phi = \sum^{|X|}_{j=1}\phi_j = f(x) - E_X(f(X))$$

- **Symmetry:** Features $i$ and $i$ have the same contribution to the prediction if they contribute identically to all coalitions.

$$[\forall x^n \in \mathcal{P}(X) : \phi{^n_i} = \phi^n_j] \implies \phi_i = \phi_j$$

- **Nullity:** If a feature $j$ changes nothing in the prediction in all possible coalitions, then it has a Shapley value of 0: 

$$[\forall x^n \in \mathcal{P}(X) : f(x^n_{+j}) = f(x^n_{-j})] \implies \phi_j = 0$$

- **Additivity**: For a prediction with multiple components $p + p'$, the Shapley values for a feature value $j$ can be represented as:

$$\phi_j + \phi_j'$$

Firstly, the **efficiency** property shows us that this game's outcome was exactly a combination of each contribution, and is thus no more or less than the sum of its parts. From here, **symmetry** tells us that the contributions must be fairly distributed, as if two features contributed the same amount, they must receive the same payout; this is extended with **nullity**, as if some feature means literally *nothing* to the prediction, then it contributed nothing. Finally, **additivity** tells us that multi-part predictions must also have multi-part contributions, as each feature played some role (even if it is *no* role) in all parts of the prediction.

## Application of properties: MOOC Dataset
*For a more detailed look at this dataset, please see [Shapley and MOOC](./Shapley%20and%20MOOC.md)*

A more intuitive application of the **additivity** property can be seen with our MOOC model. Since our model outputs the probabilities for two binary classes (complete/incomplete), the game of prediction is *zero-sum* (Since probabilities sum to 1, $+1\%$ chance of "complete" means "-1\%$ chance of "incomplete"). As such, the Shapley values are also zero-sum, as visualized in the picture below:

![Shapley value graphs for "complete"/"incomplete"](\img\shap_math_additivity.png)

These are the graphs of probability for the classes of "Complete" (left) and "Incomplete" (right). They have expected values $E[f(x)] =$ $0.024$ and $0.976$, respectively, and they end at actual predictions $f(x) = $ $0.249$ and $0.751$, respectively. Both $E[f(x)]$ values sum to 1, and so too do the actual predictions $f(x)$. Because this prediction is a zero-sum game, the Shapley values of the classes are inverses:

$$\phi_{complete}=0.225, \;\;\; \phi_{incomplete}=-0.225$$

Since each Shapley value for a class is itself a combined payout from the contributions of all the feature values, we also see that every Shapley value for each feature is mirrored across classes, such that:

$$\phi_{j:\;complete} = - \phi_{j:\;incomplete}$$

We can also intuit the **efficiency** property here, as the feature values build from $E[f(x)]$ to $f(x)$ perfectly. Similarly, by applying **nullity**, we can infer that ```gender``` contributes approximately nothing to our prediction (we aren't being sexist here, yay!), and we can infer through **symmetry** that ```grade```, ```nchapters```, and ```age``` must contribute approximately the same across all coalitions of feature values.