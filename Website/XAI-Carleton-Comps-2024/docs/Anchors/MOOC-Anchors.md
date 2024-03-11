---
sidebar_position: 1
---

# Anchors on MOOC

## Introduction

Applying Anchors to MOOC generates plain-text explanations, which consist of a set of rules. Each rule is satisfied by the data point being explained. Anchors claims that for any datapoint that meets the given conditions, the black-box classifier it is explaining will predict the same as it did for the input data – the rules consist of the sufficient condition for the prediction. This allows for coverage beyond the input data, which is a unique feature of Anchors with respect to our uses of LIME and Shapley.  

## Anchors Setup

To create Anchors on tabular data, the Anchors package is installed, and the multi-layer perceptron (MLP) model is trained as usual. Then, an explainer object is created. Unlike Shapley and LIME, Anchors only needs the binary prediction from the model, not the real-valued or confidence output. Once Anchors knows the names of the different features in the data, and their type, it will be able to output its plain text explanations for any input data point, after preforming its algorithm (see --hyperlink to main anchor article--). (See --hyperlink to git repo/notebook-- for an .ipynb detailing this process) TODO -- LINKS

## Anchors on MOOC Example
Consider the following student:
| viewed | gender | grade | nevents | ndays_act | nplay_video | nchapters | age | votes | num_words |
|--------|--------|-------|---------|-----------|-------------|-----------|-----|-------|-----------|
| 1      | 1      | 0.95  | 14005   | 65        | 1110        | 16        | 24  | 0     | 17        |

The MLP predicts they will pass the course (with 72% confidence). Anchors yields the following set of rules (at 99% precision):
- nevents > 205.00
- nplay_video > 362.00
- ndays_act > 5.00
- nchapters > 3.00
- grade > 0.00

The interpretation of this output is that, for any student that has greater than 205 events, *and* has viewed over 362 videos, *and* has been active for over 5 days, *and* has opened greater than 3 chapters, *and* has a non-zero grade will also pass the course. This set of rules represent a sufficient condition for the prediction. Anchors is explaining the model by giving an approximation of its thinking at this data point: Anchors says the model, in these conditions, behaves this way. For instance, acording to Anchors, this student, 

| viewed | gender | grade | nevents | ndays_act | nplay_video | nchapters | age | votes | num_words |
|--------|--------|-------|---------|-----------|-------------|-----------|-----|-------|-----------|
| 1      | 0      | 0.32  | 862     | 7         | 3826        | 19        | 33  | 6     | 332       |

has a 99% chance of being classified as passing, since they satisfy all the above rules. This is the unique feature of Anchors: its clearly definied coverage allows for limited extrapolation of explanation beyond the input data. On the other hand, consider this student:

| viewed | gender | grade | nevents | ndays_act | **nplay_video** | nchapters | age | votes | num_words |
|--------|--------|-------|---------|-----------|-----------------|-----------|-----|-------|-----------|
| 1      | 1      | 0.95  | 14005   | 65        | **361**         | 16        | 24  | 0     | 17        |

Because this student does not completely meet the sufficient conditions (even though apart from nplay_video, it is identical), Anchors makes *no prediction* -- note that failing to meet a sufficeint condition does not negate the output, it simply makes no claim as to how the model will work on this student.

## Note on Anchors Precision and Coverage
The inherent tradeoff in creating Anchors is between precision and coverage -- the more coverage a set of Anchors provides, the lower its precision. I.e., the broader, more general of statements we try to make about a models behavior, the less accurate it will be. In the case of a particularly (lopsided?) dataset like MOOC, where 98% of the training data is non pass, it is very easy to generate an Anchor with high precision and unlimited coverage. Consider the case where our Anchors are trained to 95%, and we're generating an explanation for a student who did not pass. Anchors begins with the empty set of rules, and tests to see if it meets the threshold for precsion. Since no rules has compelte coverage, this is actually accurate 98% of the time. And, since Anchors seeks to create the simplest explanation (i.e., the fewest rules), no rules meet both conditions, and the algorithm haults. This means it is neccasary to set a very high level of precesion in our case to generate meaningful anchors in the no pass case. Thus, we must create more precise, specific explanations to derive more meaning. However, taken to the extereme, this would look like creating a set of Anchors that perfectly describe only the input data, which would be equally less helpful.
