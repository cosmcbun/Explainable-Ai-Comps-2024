# Table of Contents

## Data 

Files in the data folder come from [elleros](https://github.com/elleros/courseraforums/tree/master) and [kaggle](https://www.kaggle.com/datasets/chellaindu/mooc-dataset?resource=download)

These files where used to create `course_posts.csv` and `cs_mitx.csv`

## src

`Base MITx Models.ipynb` relies on `course_posts.csv` and `cs_mitx.csv` to create the base models for the MITx data set. This file was largly authored by [Vignesh Muthukumar](https://vickymhs.github.io/publications/moocversity.pdf). Original files can be found [here](https://github.com/vickymhs/MOOCs-Dropout-Prediction)
<!-- 

These files where used in 


https://www.kaggle.com/datasets/chellaindu/mooc-dataset?resource=download
https://drive.google.com/drive/u/1/folders/1G1jcAHlgCjs08TMyiM3OZpPEVZISTCr0
https://github.com/vickymhs/MOOCs-Dropout-Prediction


# Readme

# Data Cleansing
**Goal:** to create generate `Testing result.csv` and `Testing dataset.csv`. If you already have access to these files, skip this step
1. Get data from [kaggle](https://www.kaggle.com/datasets/chellaindu/mooc-dataset?resource=download).
2. Open and run `CS_Mitx Proprocessing.ipynb` inside of `/src...` - all code was authored by Vignesh Muthukumar for his dissertation. beside the google drive mounting and small bug fixes by our team
3. Transfer `Testing result.csv` and `Testing dataset.csv` from the google Colab instance to a permanent file location.

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
==update this for the total data== -->