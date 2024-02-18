---
sidebar-position: 4 
---
# Shapley and MOOC
This section discusses the application of the ```shap``` package to the Multi-Layer Perceptron that we built for the MOOC dataset.

## The Code
We calculate Shapley values for our dataset via Python's ```shap``` package, a library of functions and classes which encompasses virtually all possible variations upon Lloyd Shapley's original analysis. 

Due to its massive popularity, this package was quite convenient, requiring only a few lines to set up. First, we build our model (see more about our model here) <!-- ! Reference the MOOC page-->
and create an Explainer object for it.
```Python
import shap
# Create our ML model:
model = MultiLayerPerceptron()
# Create our explainer:
explainer = shap.explainers.Permutation(
  model.predict_proba, 
  X_train, 
  feature_names=feature_names)
```
This is a ```Permutation``` explainer, which builds all possible permutations of feature-value coalitions for the approximation of each Shapley value. The creation of such coalitions mirrors the base technique as outlined in the Shapley's Math page. <!-- !Reference "Shapley's Math" -->
We use our model's ```predict_proba``` function to return real-valued probabilities for the classes "Course Completed" and "Dropped Out," and we pass in our training data ```X_train``` as our data matrix from which our explainer will pull substitute feature values in order to simulate each feature "not participating" in the game of predicton. <!-- !Reference "Simulating not playing"-->

Next, we run our explainer on the datapoints that we want locally explained:
```Python
# Generate Shapley values
shapley_values = explainer(inputs)
# Isolate the Shapley values by positive and negative probabilities
positive_shap_vals = shapley_values[..., 1] 
negative_shap_vals = shapley_values[..., 0]
```
This returns the Shapley values for each datapoint in the set of ```inputs```, as well as some useful information such as the expected (average) prediction over the set and some useful properties for *Interpretable AI*, which we will briefly cover at the end.

## Explaining a single datapoint
Once we have our ```explanations```, we can visualize the Shapley values for each datapoint. The ```shap``` package contains a plethora of visualization tools for intepretable AI, but for the purposes of our user study and for comparison with LIME and Anchoring techniques, we used the most popular visualization for a single datapoint: the waterfall plot.
```Python
# Generate a waterfall visualization
shap.plots.waterfall(positive_shap_vals[i])
```
This returns a plot of Shapley values for the $i$-th datapoint in the set, like so:

![Waterfall plot of Shapley values for a datapoint i](/img/shap_mooc_tp0.png)

This is a visualization of the Shapley values for a positive prediction, where the probability that the person completed the course is over $50\%$ ($59.4\%$ in this case).

Our visualization begins at the bottom of the graph with the average, or expected, prediction $E[f(x)]$. In this case, the model is $2\%$ confident that the student will complete the course ($E[f(x)] = 0.02$). From here, we build upwards with respect to the relative size of the contribution to the prediction's deviation from the average: the values for the features ```gender``` through ```viewed``` each subtract $\le 1\%$ from the average, while feature values from ```grade``` through ```ndays_act``` add between $4\%$ and $10\%$ to the probability. 

Finally, we see that the values for ```nplay_video``` and ```nevents``` are the biggest players in the game of prediction, deviating our result from the average probability prediction by $-20\%$ and $+60\%$, respectively.

With these features combined, our model's prediction deviates from the average by $+57.4\%$, yielding $f(x) = 0.594$.

# Interpreting the model across the whole set
One of the advantages that Shapley values have over the LIME and Anchoring techniques is its ability to globally interpret a machine learning model's input set. This is due to Shapley values' *Additivity* principle. <!-- ! REFERENCE SHAP MATH -->

The simplest way to generate such an interpretation is to generate a bar graph of the average absolute Shapley values:
```Python
shap.plots.bar(shapley_values, show=False)
```
The following example is an interpretation of the model using the MOOC dataset's test data:

![Interpretation of multi-layer perceptron on MOOC test data](/img/shap_mooc_overall.png)

As we can see, ```nevents``` and ```nplay_video``` are still our biggest actors in a global setting, changing the prediction by $\pm 8\%$ and $\pm 2\%$, respectively. 

Something  most peculiar about this is that unlike our explanation of a single positive prediction, our interpretive Shapley values are much smaller globally. What the values highlight here is a strong bias towards either course completion or dropout, as a small average deviation from prediction overall must mean that the data is skewed towards one prediction. In this case, a quick examination of the data shows that in our training data, only $2.98\%$ of all students pass. As such, the model is likely achieving a high accuracy through extreme negative bias, which is why there is such low deviation from the expected prediction on average.