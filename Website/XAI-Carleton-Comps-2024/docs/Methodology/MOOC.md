# MOOC Dropout Prediction

## The MOOC Dataset
This project’s second model involves machine learning models trained to predict student dropout based on interaction data in MOOCs (Massive Open Online Courses). This is an interesting problem, as their low cost and easily accessible nature compared to traditional college education has caused a drastic rise in interest in MOOCs recently. Despite their popularity, however, dropout rates remain extremely high, often exceeding 90\%. As such, teachers of MOOCs must devote significant amounts of time just to figuring out resource allocation - when there are more than 60 thousand students in your course, how can you decide who needs help?

One pertinent answer may be machine learning.

## Our Models
While a human brain may take seconds to minutes pouring over every aspect of a student in order to predict their success or failure in a course, for a machine learning model this task is trivialized to single-digit milliseconds. As such, the MOOC dropout dataset has been a popular breeding ground for model/architecture testing. While there have been numerous models constructed to make these predictions, we have chosen to use a multi-layer perceptron (a neural network architecture) and a support-vector machine, as demonstrated by Vignesh Muthukumar (Muthukumar, 2019). Initialization of each is fairly simple, as shown below:

```python
# Support-Vector Machine:
from sklearn import svm
clf = svm.SVC(C=0.5, gamma='scale', probability=True)

# Multi-Layer Perceptron:
from sklearn.neural_network import MLPClassifier
mlp = MLPClassifier(hidden_layer_sizes=(3, 15, 10), max_iter=1000)

''' Alternate initialization for the MLPClassifier: '''
import keras
model = keras.models.Sequential([
            keras.layers.Dense(3, input_dim=10, activation='relu'),
            keras.layers.Dense(15, activation='relu'),
            keras.layers.Dense(10, activation='relu'),
            keras.layers.Dense(2, activation='softmax')
        ])
```

Both of these networks achieve good results, but they can be messy, and skews in the data can make predictions unbalanced. As such, these models make for perfect candidates to explain.

## Why explain these AIs?
These models are strong candidates for explainability for several reasons. First, given the notorious “black box” nature of neural networks and high-dimension SVMs, there are few options (apart from explainability methods) that offer easy insight into why the model may classify certain students as likely or unlikely to drop out of the MOOC. Additionally, there can be potentially significant ramifications for these students if they are predicted as likely to drop out, or not – a student flagged as likely to drop out may lose motivation, and the prediction may become a self fulfilling prophecy in cases where the student would have otherwise stayed in the course. On the other hand, a student who is truly at risk of dropping out but not identified as such may fail to be noticed by the instructional staff, due to the large and relatively autonomous nature of MOOCs. These significant stakes call for added scrutiny and insight into models making these predictions. Finally, explainability methods applied to MOOC dropout prediction can offer insight into what features successful and unsuccessful students exhibit.
