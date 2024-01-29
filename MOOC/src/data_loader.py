from pandas import read_csv
import pandas as pd
import numpy as np
from numpy import array
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from matplotlib.pyplot import *
import matplotlib.pyplot as plt
import itertools

class DataLoader:
    def __init__(self):
        self.df: pd.DataFrame = None
        self.X: np.ndarray = None
        self.Y: np.ndarray = None
        self.X_train: np.ndarray = None
        self.X_test: np.ndarray = None
        self.Y_train: np.ndarray = None
        self.Y_test: np.ndarray = None
    
    def load(self, path = "/data/") -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
        # Assume we just grab the data from the following files:
        mitx = path + "cs_mitx.csv"
        course_posts = path + "course_posts.csv"
        # Load the dataset from file:
        dataset = read_csv(mitx, encoding="ISO-8859-1")
        forum = read_csv(course_posts)
        df = dataset[['viewed','Completed_or_Not','gender', 'grade', 'nevents', 'ndays_act', 'nplay_video', 'nchapters' ,'age']]
        #One-hot encoding for converting gender m/f to 0/1
        data = df[['gender']]
        values = array(data).ravel()
        label_encoder = LabelEncoder()
        integer_encoded = label_encoder.fit_transform(values)
        integer_encoded = integer_encoded.reshape((integer_encoded.shape[0], 1))
        df[['gender']] = integer_encoded
        # df.loc[:, "gender"] = integer_encoded
        # Concatenate the forum data to the dataset:
        df1=forum[['votes','num_words']]
        df1=df1[0:59279]
        df=pd.concat([df,df1], axis=1)
        # Set the class variables:
        self.df = df.dropna(axis='index') # Drop all missing values
        self.X= self.df.iloc[:,[0,2,3,4,5,6,7,8,9,10]].values
        self.y= self.df.iloc[:,1]
        # Split into more class variables:
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(self.X, self.y, test_size=0.20)
        return self.X_train, self.X_test, self.y_train, self.y_test
        

''' Confusion Matrix, Adopted from Vignesh Muthukumar '''
def plot_confusion_matrix(cm, classes,
                          normalize=False,
                          title='Confusion matrix',
                          cmap=plt.cm.Blues):
    if normalize:
        cm = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]
        print("Normalized confusion matrix")
    else:
        print('Confusion matrix, without normalization')

    print(cm)

    plt.imshow(cm, interpolation='nearest', cmap=cmap)
    plt.title(title)
    plt.colorbar()
    tick_marks = np.arange(len(classes))
    plt.xticks(tick_marks, classes, rotation=90)
    plt.yticks(tick_marks, classes)

    fmt = '.2f' if normalize else 'd'
    thresh = cm.max() / 2.
    for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):
        plt.text(j, i, format(cm[i, j], fmt),
                 horizontalalignment="center",
                 color="white" if cm[i, j] > thresh else "black")

    plt.tight_layout()
    plt.ylabel('True label')
    plt.xlabel('Predicted label')
        
        