# Table of Contents

## Data 

Files in the data folder come from [elleros](https://github.com/elleros/courseraforums/tree/master) and [kaggle](https://www.kaggle.com/datasets/chellaindu/mooc-dataset?resource=download)

These files where used to create `course_posts.csv` and `cs_mitx.csv`

## src

`Base MITx Models.ipynb` relies on `course_posts.csv` and `cs_mitx.csv` to create the base models for the MITx data set. This file was largly authored by [Vignesh Muthukumar](https://vickymhs.github.io/publications/moocversity.pdf). Original files can be found [here](https://github.com/vickymhs/MOOCs-Dropout-Prediction)

`MITx-MLP.pkl` and `MITx-SVC.pkl` are the models created by `Base MITx Models.ipynb` using [pickle](https://docs.python.org/3/library/pickle.html).

# Useful Information 
## Mounting code block

```python
from google.colab import drive
drive.mount("/content/drive/")


import sys
# This path extension only works when you have our "/Explainable AI Group Work/" folder as a shortcut in "MyDrive"
path = "drive/MyDrive/Explainable AI Group Work/MOOC Model"


# example of filepath extension use:
dataset = read_csv(path+"/src-Vignesh-Muthukumar/archive/cs_mitx.csv", encoding="ISO-8859-1")
```