import numpy as np
from matplotlib.pyplot import *
from sklearn import svm
import pickle

# Support Vector Classification.
# NOTE: This classifier has a decision_function() method that gives
#       real-valued confidence scores for each sample ( > 0 == Pass | < 0 == Fail)
        
class SVC:
    def __init__(self, filename: str = "MITx-SVC.pkl", from_file = False):
        if from_file:
            with open(filename, "rb") as file:
                self.model: svm.SVC = pickle.load(file)
    
    # Rebuild from scratch
    # # Input: X_train: (n, 10) | y_train: (n,)
    # # Output: model (svm.SVC)
    def build(self, X_train: np.ndarray, y_train: np.ndarray) -> svm.SVC:
        # Build the model:
        self.model = svm.SVC(kernel='linear', C=1)
        self.model.fit(X_train, y_train)
        return self.model
    
    # Predict using model
    # # Input: X: (n, 10)
    # # Output: y: (n,)
    def predict(self, X: np.ndarray) -> np.ndarray: 
        return self.model.predict(X)
    
    # Probability estimates for each class
    # # Input: X: (n, 10)
    # # Output: y: (n, 2)
    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        return self.model.predict_proba(X)
    
    # Log of probability estimates for each class
    # # Input: X: (n, 10)
    # # Output: y: (n, 2)
    def predict_log_proba(self, X: np.ndarray) -> np.ndarray:
        return self.model.predict_log_proba(X)
    
    # Scores based on the support vectors
    # # Input: X: (n, 10)
    # # Output: y: (n,)
    def decision_function(self, X: np.ndarray) -> np.ndarray:
        return self.model.decision_function(X)
