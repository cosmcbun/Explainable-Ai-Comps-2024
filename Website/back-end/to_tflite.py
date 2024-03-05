import tensorflow as tf
import keras
import pickle

# Load the model
model = keras.models.load_model('keras_mlp.keras')

# Convert the model
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

tflite_model_file = 'keras_mlp.tflite'
with open(tflite_model_file, 'wb') as f:
    f.write(tflite_model)