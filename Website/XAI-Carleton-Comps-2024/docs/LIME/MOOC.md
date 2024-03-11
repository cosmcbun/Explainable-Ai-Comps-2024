---
sidebar_position: 50
---

# MOOC Dropout Prediction

Massive Open Online Courses (MOOCs)

## Conclusion

LIME was trivival to apply to the MOOC Model, provided inelegant but effective explanation visuals, and there appeared to be a positive relation between a viewers experence with ML and their beleif that LIME explanation helped explain the model.

## Apply LIME to MOOCs

Applying LIME to the ML model used to predict if a student would drop out of a MOOC was one of the easiest parts of our project.

The literature had centralized around one implementation, the Python package [LIME](https://pypi.org/project/lime/), which had extensive and easy to use documentation.

```Python
from lime.lime_tabular import LimeTabularExplainer

# Create LimeTabularExplainer
svm_explainer = LimeTabularExplainer(
	X_train, # training data created by the MOOC src class
	feature_names=[
		'viewed', 'gender','grade','nevents', 'ndays_act',
		'nplay_video', 'nchapters', 'age', 'votes', 'num_words'
	],
	class_names=['Not Completed','Completed'],
	discretize_continuous=True
)


# Use the explainer to graphically explain predictions
exp = svm_explainer.explain_instance(
	dummy_for_lime, # a fake row of data for LIME to explain
	svc.predict_proba # the black box model's probalistic prediction method
).show_in_notebook(
	show_table=True,
	show_all=False
)
```

The above code block is a simplified version of [Our Implemplemntation](https://github.com/cosmcbun/Explainable-Ai-Comps-2024/blob/62e136607f3b66106fd09fd558feb38f4834419a/MOOC/LIME/BasicExampleOfUsingLIMEOnMOOCDataset.ipynb) which output an explanation similar to the visualization seen in the LIME Specific Output section.

## Parsing the Output

### LIME Specific Output

![LIME Specific Output](./HTML%20Output.png)

TODO: EXPLANATION OF LIME OUTPUT

### LIME Output used in User Study

![LIME Output used in User Study](./X_complete3.png)

TODO: EXPLANATION OF LIME OUTPUT

This version of the LIME output is not the default output of LIME, it was an alranate output format. However we picked this explanations for our user study for a number of reasons.

1. It was much more visually similar to Shapley.
2. It presented less information, decreasing mental load on the participants.
3. It helped the participant focus on the rules based portion (the y-axis) which helped draw a continues line from LIME to Anchors.
4. In the first input, it is difficult to extract the model prediction from the 2nd and third visualizations. This caused confusion internally, so we prefered the second explanations because if you sum the weights of the rules, and it is greater than 0.5, the model predicts the student will complete the MOOC.

## User Study

Little can be said about LIME's user study results in isolation. To see how LIME compares to Shapley and Anchors, see the [MOOC Comparitive User Study](../User%20Study/MOOC%20-%20Comparative%20Results.md) page.

![Sample All LIME - How easy is this explanation to understand](./Sample%20All%20LIME%20-%20How%20easy%20is%20this%20explanation%20to%20understand.png)

Across all 5 samples, participants ranked LIME explanation understandability as $\approx4$ on average $\pm 1$.


![Sample All LIME - How Does Experience with ML Affect Model Explainability.png](./Sample%20All%20LIME%20-%20How%20Does%20Experience%20with%20ML%20Affect%20Model%20Explainability.png)

Across all 5 samples, the greater the participants experience with ML, the more they beleived LIME explanations helped explain the model.

![Sample All LIME - How Does Experience with ML Affect Model Understandability](./Sample%20All%20LIME%20-%20How%20Does%20Experience%20with%20ML%20Affect%20Model%20Understandability.png)


Without a greater sample size, it is difficult to draw any conclusions from this graph. However, it is interesting to note that participants with the least and most experience with ML had the highest confidance that they understood the MOOC model as explained by LIME.
