from fastapi import FastAPI, Depends
from custom_student import Student
from typing import Annotated
import numpy as np
import sys

sys.path.append("../../MOOC/src")
from mlp import MLPClassifier

#! For a local demo, use "python -m uvicorn main:app --reload"

app = FastAPI()
model = MLPClassifier(from_file = True, filename="../../MOOC/src/MITx-MLP.pkl")


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predict_on_student/")
def predict_on_student(student: Student):
    x = student.encode()
    y = model.predict(x)
    return {"output": int(y[0])}
    
    # # Return student object (debugging)
    # return student  
