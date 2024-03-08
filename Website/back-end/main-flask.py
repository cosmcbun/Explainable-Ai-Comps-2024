from flask import Flask, request, jsonify
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

#+ EXPLAINERS +#
app = Flask(__name__)
explainers = MOOCExplainers()

#+ API +#
@app.route("/") # Debugging at the moment
def read_root():
    student = Student()
    test = {
        'shap': explainers.shap_on_student(student),
        'lime': explainers.lime_on_student(student),
        'anchor': explainers.anchor_on_student(student),
        'prediction': int(explainers.model.predict(student.encode())[0])
    }
    return jsonify(test)

@app.post("/predict_on_student/", methods=["POST"])
def predict_on_student():
    student_data = request.json
    student = Student(**student_data)
    x = student.encode()
    y = explainers.model.predict(x)
    return jsonify({"output": int(y[0])})

@app.route("/shap_on_student/", methods=["POST"])
def shap_on_student():
    student_data = request.json
    student = Student(**student_data)
    result = explainers.shap_on_student(student)
    return jsonify(result)

@app.route("/lime_on_student/", methods=["POST"])
def lime_on_student():
    student_data = request.json
    student = Student(**student_data)
    result = explainers.lime_on_student(student)
    return jsonify(result)

@app.route("/anchor_on_student/", methods=["POST"])
def anchor_on_student():
    student_data = request.json
    student = Student(**student_data)
    result = explainers.anchor_on_student(student)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)  # For a local demo
