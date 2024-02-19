from fastapi import FastAPI, Depends
from custom_student import Student
from typing import Annotated
import numpy as np
import pickle
import shap
import matplotlib.pyplot as plt
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

@app.post("/shap_on_student/")
def shap_on_student(student: Student):
    x = student.encode()
    with open("./src/MLP-SHAP.pkl", "rb") as f:
        perm = pickle.load(f)
    # Build our permutation explainer:
    perm_vals = perm(x)
    pos_shap = perm_vals[..., 1]

    # Plot the SHAP values:    
    with open("./src/mooc_shap.png", "wb") as f:
        plt.clf()
        shap.plots.waterfall(pos_shap[0], max_display=10, show=False)
        plt.savefig("./src/mooc_shap.png", bbox_inches='tight')
        plt.clf()
        
    return {
            "shap_vals": pos_shap.values[0].tolist(),
            'e_fx': pos_shap.base_values[0],
            "plot": "./src/mooc_shap.png",
            "prediction": int(model.predict(x)[0])
            }
    