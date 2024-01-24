from pandas import read_csv
import sys
from google.colab import drive
import pandas as pd
import numpy as np
from numpy import array, argmax
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split, KFold
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.metrics import mean_squared_error
from sklearn import metrics
from sklearn.metrics import roc_curve, roc_auc_score
from matplotlib import pyplot
import itertools
from matplotlib.pyplot import *
import matplotlib.pyplot as plt
from sklearn import svm
import pickle

class SVC:
    def __init__(self, filename: str = "MITx-MLP.pkl") -> svm.SVC:
        with open(filename, "rb") as file:
            self.model: svm.SVC = pickle.load(file)
        # self.X_train, self.y_train, self.X_test, self.y_test = 
        
        return self.model