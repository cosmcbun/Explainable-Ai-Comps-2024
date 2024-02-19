from fastapi import FastAPI, Depends
from custom_student import Student
import numpy as np
import pickle
import shap
from anchor import anchor_tabular
from lime.lime_tabular import LimeTabularExplainer
import matplotlib.pyplot as plt
import sys

sys.path.append("../../MOOC/src")
from mlp import MLPClassifier
from data_loader import DataLoader
from mooc_explainers import MOOCExplainers

# Model and app (globals):
explainers = MOOCExplainers()
app = FastAPI() #! For a local demo, use "python -m uvicorn main:app --reload"

#+ API +#

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/predict_on_student/")
def predict_on_student(student: Student):
    x = student.encode()
    y = explainers.model.predict(x)
    return {"output": int(y[0])}

@app.post("/shap_on_student/")
def shap_on_student(student: Student):
    return explainers.shap_on_student(student)

@app.post("/lime_on_student/")
def lime_on_student(student: Student):
    return explainers.lime_on_student(student)

@app.post("/anchor_on_student/")
def anchor_on_student(student: Student):
    return explainers.anchor_on_student(student)