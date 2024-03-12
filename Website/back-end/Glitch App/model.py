import tensorflow as tf
import numpy as np
import requests

class Model():
  def __init__(self, url):
    response = requests.get(url)
    tflite_model = response.content
    self.interpreter, self.input, self.output = self.load_model(tflite_model)
    
  def load_model(self, url):
    # Load interpreter
    interpreter = tf.lite.Interpreter(model_content=url)
    interpreter.allocate_tensors()
    # IO Details
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    return interpreter, input_details, output_details
 
  def predict_proba(self, X):
    X = np.array(X).astype(np.float32)
    self.interpreter.set_tensor(self.input[0]['index'], X)    
    self.interpreter.invoke()
    out = self.interpreter.get_tensor(self.output[0]['index'])
    out = out.astype(float)
    return out

  def predict(self, X):
    X = np.array(X).astype(np.float32)
    return np.argmax(self.predict_proba(X), axis=1)
  
  def proba_single(self, X):
    X = np.array(X).astype(np.float32)
    return self.predict_proba(X)[0].tolist()
  def predict_single(self, X):
    X = np.array(X).astype(np.float32)
    return int(self.predict(X)[0])