from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends
import numpy as np
import sys

# Special imports:
sys.path.append("../../MOOC/src")
from mlp import MLPClassifier
from data_loader import DataLoader
from custom_student import Student
from mooc_explainers import MOOCExplainers

#+ App/Model +#
mooc_explainers = MOOCExplainers()
app = FastAPI() #! For a local demo, use "python -m uvicorn main-fastapi:app --reload"

# Allow requests from all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

#+ API +#

#* Root *#
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/base_student")
def base_student():
    return {"student": Student()}

#* MOOC *#
@app.post("/predict_on_student/")
def predict_on_student(student: Student):
    x = student.encode()
    y = mooc_explainers.model.predict(x)
    return {"output": int(y[0])}

@app.post("/shap_on_student/")
def shap_on_student(student: Student):
    return mooc_explainers.shap_on_student(student)

@app.post("/lime_on_student/")
def lime_on_student(student: Student):
    return mooc_explainers.lime_on_student(student)

@app.post("/anchor_on_student/")
def anchor_on_student(student: Student):
    return mooc_explainers.anchor_on_student(student)
