import numpy as np
from sklearn.neural_network import MLPClassifier
from matplotlib.pyplot import *
import pickle

# Multi-layer Perceptron classifier.
# This model optimizes the log-loss function using LBFGS or stochastic gradient descent.
# NOTE: This classifier has no decision_function() method

class MLPClassifier:
    def __init__(self, filename = "drive/MyDrive/Explainable AI Group Work/MOOC Model/src/MITx-MLP.pkl", from_file = False):
        if from_file:
            with open(filename, "rb") as file:
                self.model = pickle.load(file)
    
    # Rebuild from scratch
    # # Input: X_train: (n, 10) | y_train: (n,)
    # # Output: model (MLPClassifier)
    def build(self, X_train, y_train) -> MLPClassifier:
        self.model = MLPClassifier(hidden_layer_sizes=(3, 15, 10), max_iter=1000)        
        self.model.fit(X_train, y_train.values.ravel())
        return self.model
    
    # Predict using model
    # # Input: X: (n, 10)
    # # Output: y: (n,)
    def predict(self, X):
        return self.model.predict(X)
    
    # Probability estimates for each class
    # # Input: X: (n, 10)
    # # Output: y: (n, 2)
    def predict_proba(self, X) -> list:
        return self.model.predict_proba(X)
    
    # Log of probability estimates for each class
    # # Input: X: (n, 10)
    # # Output: y: (n, 2)
    def predict_log_proba(self, X) -> list:
        return self.model.predict_log_proba(X)