from fastapi import FastAPI, Depends
from custom_student import Student
import numpy as np
import pickle
import shap
from lime.lime_tabular import LimeTabularExplainer
import matplotlib.pyplot as plt
import sys

sys.path.append("../../MOOC/src")
from mlp import MLPClassifier
from data_loader import DataLoader

#! For a local demo, use "python -m uvicorn main:app --reload"

app = FastAPI()

# Model and data:
model = MLPClassifier(from_file = True, filename="../../MOOC/src/MITx-MLP.pkl")
X_train, X_test, y_train, y_test = DataLoader().load(path = "../../MOOC/data/")
feature_names = ['viewed',	'gender',	'grade',	'nevents', 'ndays_act',	'nplay_video',	'nchapters',	'age',	'votes',	'num_words']
classes = ["Dropped out", "Completed"]
# Explainers:
shap_explainer = shap.explainers.Permutation(model.predict_proba, X_train, feature_names=feature_names)
lime_explainer = LimeTabularExplainer(X_train, feature_names=feature_names, class_names=classes, discretize_continuous=True)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predict_on_student/")
def predict_on_student(student: Student):
    x = student.encode()
    y = model.predict(x)
    return {"output": int(y[0])}

@app.post("/shap_on_student/")
def shap_on_student(student: Student):
    x = student.encode()
    out_file = "./img/mooc_shap.png"
    # Build our permutation explainer:
    pos_shap = shap_explainer(x)[..., 1]
    # Plot the SHAP values:    
    plt.clf()
    shap.plots.waterfall(pos_shap[0], max_display=10, show=False)
    plt.savefig(out_file, bbox_inches='tight')
    plt.clf()
    # Return the Shapley values:    
    shap_vals = [[feature_names[i], pos_shap.values[0][i]] for i in range(len(feature_names))]
    return {
            "shap_vals": shap_vals,
            'e_fx': pos_shap.base_values[0],
            "plot": out_file,
            "prediction": int(model.predict(x)[0])
            }

@app.post("/lime_on_student/")
def lime_on_student(student: Student):
    x = student.encode()
    out_file = "./img/mooc_lime.png"
    # Build our lime explainer:
    exp = lime_explainer.explain_instance(x[0], model.predict_proba)
    # Plot the LIME values:
    plt.clf()
    exp.as_pyplot_figure(label=1)
    plt.savefig(out_file, bbox_inches='tight')
    plt.clf()    
    # Return the LIME values:
    return {
            "lime_vals": exp.as_list(label=1),
            "plot": out_file,
            "prediction": int(model.predict(x)[0])
            }

@app.post("/anchor_on_student/")
def anchor_on_student(student: Student):
    x = student.encode()
    # TODO: Implement anchor
    
    