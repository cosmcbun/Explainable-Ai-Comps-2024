---
sidebar_position: 1
---

# Anchors on MOOC

## Introduction

Applying Anchors to MOOC generates plain-text explanations, which consist of a set of rules. Each rule is satisfied by the data point being explained. Anchors claims that for any datapoint that meets the given conditions, the black-box classifier it is explaining will predict the same as it did for the input data – the rules consist of the sufficient condition for the prediction. This allows for coverage beyond the input data, which is a unique feature of Anchors with respect to LIME and Shapley.  

## Anchors Setup

To create Anchors on tabular data, the Anchors package is installed, and the MLP model is trained as usual. Then, an explainer object is created. Unlike Shapley and LIME, Anchors only needs the binrary prediction from the model, not the real-valued or confidence output. Once Anchors knows the names of the different features in the data, and their type, it will be able to output its plain text explanations for any input data point, after preforming its algorithm (see --hyperlink to main anchor article--). (See --hyperlink to git repo/notebook-- for an .ipynb detailing this process)

## Anchors on MOOC Example
Consider the following student:
| viewed | gender | grade | nevents | ndays_act | nplay_video | nchapters | age | votes | num_words |
|--------|--------|-------|---------|-----------|-------------|-----------|-----|-------|-----------|
| 1      | 1      | 0.95  | 14005   | 65        | 1110        | 16        | 24  | 0     | 17        |

The MLP predicts they will pass the course (with 72% confidence). Anchors yields the following set of rules (at 99% precesion):
- nevents > 205.00
- nplay_video > 362.00
- ndays_act > 5.00
- nchapters > 3.00
- grade > 0.00

The interpretation of this output is that, for any student that has greater than 205 events, *and* has viewed over 362 videos, *and* has been active for over 5 days, *and* has opened greater than 3 chapters, *and* has a non-zero grade will also pass the course. Anchors is explaining the model by giving an approximation of its thinking at this data point: Anchors says the model, in these conditions, behaves this way. For instance, acording to Anchors, this student, 

| viewed | gender | grade | nevents | ndays_act | nplay_video | nchapters | age | votes | num_words |
|--------|--------|-------|---------|-----------|-------------|-----------|-----|-------|-----------|
| 1      | 0      | 0.32  | 862     | 7         | 3826        | 19        | 33  | 6     | 332       |

has a 99% chance of being classified as passing, since they meet all the sufficient preidcitions of Anchors. This is the unique feature of Anchors: its clearly definied coverage allows for limited extrapolation of explanation beyond the input data. On the other hand, consider this student:

| viewed | gender | grade | nevents | ndays_act | **nplay_video** | nchapters | age | votes | num_words |
|--------|--------|-------|---------|-----------|-----------------|-----------|-----|-------|-----------|
| 1      | 1      | 0.95  | 14005   | 65        | **361**         | 16        | 24  | 0     | 17        |

Because this student does not completely meet the sufficient conditions (even though apart from nplay_video, it is identical), Anchors makes *no prediction* -- note that failing to meet a sufficeint condition does not negate the output, it simply makes no claim as to how the model will work on this student.

## Note on Anchors Precision and Coverage
