---
sidebar-position: 2 
---

# The EU's Right to Explainability
#### (Disclaimer: none on this team are certified lawyers. This is an exploration of Shapley as a concept and is not legal advice)

## Shapley's legality as an explanation
After a full review of all articles pertaining to the EU's [Artificial Intelligence Act](https://artificialintelligenceact.eu/), the Scientific Foresight Unit (STOA) of the European Parliamentary Research Service declares nine pillars of explanation that an AI Technique must uphold:

> 1. information on the existence of profiling, i.e., on the fact that the data subject will be
profiled or is already being profiled;
> 2. general information on the purposes of the profiling and decision-making;
> 3. general information on the kind of approach and technology that is adopted;
> 4. general information on what inputs factors (predictors) and outcomes
(targets/predictions), of what categories are being considered;
> 5. general information on the relative importance of such input factors in determining the
outcomes;
> 6. specific information on what data have been collected about the data subject and used
for profiling him or her;
> 7. specific information on what values for the features of the data subject determined the
outcome concerning him or her;
> 8. specific information on what data have been inferred about the data subject;
> 9. specific information on the inference process through which certain values for the
features of the data subject have determined a certain outcome concerning him or her. <br></br>
> [(STOA 2020, p.62-66)](https://www.europarl.europa.eu/RegData/etudes/STUD/2020/641530/EPRS_STU(2020)641530_EN.pdf)

Sections 1-5 require access to the model's training data, which Shapley's initial method allows, but it does not typically address the data which is not local to the prediction of focus. Due to the generalizability of the base technique to a global interpretable example, however, all five criteria may potentially be met. If not, the [Data Shapley](https://arxiv.org/abs/1904.02868) variant would best fit such explanations while still maintaining the original mathematical principles of the base.

Sections 5-9 are able to be addressed post-hoc, which all of our explainable techniques are able to provide with varying degrees of fallibility. What is important here, though, is that Shapley values can provide all required explanations, as demonstrated in our page on the [calculation of Shapley values](./Shapley's%20Math.md).

## Molnar's Speculation
In section 9.5 of his textbook *Interpretable Machine Learning*, Christoph Molnar argues that Shapley Values may currently be the only valid legal defense when explaining a machine learning model:
> In situations where the law requires explainability – like EU’s “right to explanations” – the Shapley value might be the only legally compliant method, because it is based on a solid theory and distributes the effects fairly. I am not a lawyer, so this reflects only my intuition about the requirements. [(Molnar 2023)](https://christophm.github.io/interpretable-ml-book/shapley.html)

This may well be true, as Shapley's method is the only technique supported by [proof-based math](./Shapley's%20Math.md), and as the calculations make little to no assumptions about the data or model itself. However, the European Union's articles on the *Right to Explanation* are fairly vague as to what kinds of explanation would truly suffice.

# Are Shapley values always optimal, then?
While the mathematical backing for Shapley values is quite strong, it is not entirely necessary to hold up in court. Each of the techniques we display are able to satisfy most if not all of these demands with relatively few assumptions about the model and the data. In the same review, the STOA concluded that each explanation must at least provide the user an explanation of "the specific information that most matters *to them*, namely, with the information on what values for their
features determined in their case an unfavourable outcome" [(STOA 2020, p.65)](https://www.europarl.europa.eu/RegData/etudes/STUD/2020/641530/EPRS_STU(2020)641530_EN.pdf). 
These rules apply to each of our techniques, whether or not they have justification through coalitional game theory. Moreover, the specific qualification that the technique must specifically satisfy the requestor of the explanation implies that a "legal explanation" may constitute nothing more than "what a user accepts." 

This was one of the inspirations for our [*user study*](../category/user-study--results/): to gauge the relative understandability and trustworthiness of each of our three techniques.