from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import requests
import tensorflow as tf
import numpy as np
from model import Model
from custom_student import Student

app = FastAPI()
url = "https://cdn.glitch.global/8b439737-367c-4380-9dff-49368c6dc23f/mlp.tflite?v=1709859502392"
mlp = Model(url)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    test_X = np.array([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], dtype=np.float32)
    out = mlp.proba_single(test_X)
    out2 = mlp.predict_single(test_X)
  
    return {
              "Hello": "World",
              "input": test_X.tolist(),
              "Probabilities": out,
              "Prediction": out2
           }

@app.post  ("/predict/")
def predict(x: Student = None):
  # For debug
  if x == None:
    x = Student()
  # For when we actually want to predict
  X = x.encode()
  return {
            "Input": X.tolist(),
            "Prediction": mlp.predict_single(X),
            "Probability": mlp.proba_single(X)
         }
