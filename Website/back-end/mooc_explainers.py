from custom_student import Student
import numpy as np
import pickle
import shap
from anchor import anchor_tabular
from lime.lime_tabular import LimeTabularExplainer
import matplotlib.pyplot as plt
import sys
import io
import base64

sys.path.append("../../MOOC/src")
from mlp import MLPClassifier
from data_loader import DataLoader
from custom_student import Student

class MOOCExplainers:
    def __init__(self):
        self.model = MLPClassifier(from_file = True, filename="../../MOOC/src/MITx-MLP.pkl")
        self.X_train, self.X_test, self.y_train, self.y_test = DataLoader().load(path = "../../MOOC/data/")
        self.feature_names = ['viewed',	'gender',	'grade',	'nevents', 'ndays_act',	'nplay_video',	'nchapters',	'age',	'votes',	'num_words']
        self.class_names = ["Dropped out", "Completed"]
        
        #++++ Explainers ++++#
        self.shap_explainer = shap.explainers.Permutation(self.model.predict_proba, self.X_train, feature_names=self.feature_names)
        self.lime_explainer = LimeTabularExplainer(self.X_train, feature_names=self.feature_names, class_names=self.class_names, discretize_continuous=True)
        self.anc_cat_names = {0: ["not viewed", "viewed"], 1: ["F", "M"]} # Each feature that is continuous will NOT be included
        self.anchor_explainer = anchor_tabular.AnchorTabularExplainer(self.class_names, self.feature_names, self.X_train, self.anc_cat_names)
    
    def predict_on_student(self, student: Student) -> int:
        x = student.encode()
        y = self.model.predict(x)
        return int(y[0])
    
    # def shap_on_student(self, student: Student, out_file: str = "./img/mooc_shap.png") -> dict:
    #     x = student.encode()
    #     # Build our permutation explainer:
    #     pos_shap = self.shap_explainer(x)[..., 1]
    #     # Plot the SHAP values:    
    #     plt.clf()
    #     shap.plots.waterfall(pos_shap[0], max_display=10, show=False)
    #     plt.savefig(out_file, bbox_inches='tight')
    #     plt.clf()
    #     # Return the Shapley values:    
    #     shap_vals = [[self.feature_names[i]+" = "+str(x[0][i]), pos_shap.values[0][i]] for i in range(len(self.feature_names))]
    #     return {
    #             "shap_vals": shap_vals,
    #             'e_fx': pos_shap.base_values[0],
    #             "plot": out_file,
    #             "prediction": int(self.model.predict(x)[0])
    #             }
    def shap_on_student(self, student: Student = None, out_file: str = "./img/mooc_shap.png") -> dict:
        if student is None: student = Student()
        
        x = student.encode()
        # Build our permutation explainer:
        pos_shap = self.shap_explainer(x)[..., 1]
        # Plot the SHAP values:    
        plt.clf()
        shap.plots.waterfall(pos_shap[0], max_display=10, show=False)
        
        # Save the plot to a BytesIO object
        img_buffer = io.BytesIO()
        plt.savefig(img_buffer, format='png', bbox_inches='tight')
        img_buffer.seek(0)
        
        # Encode the image as base64
        img_base64 = base64.b64encode(img_buffer.read()).decode('utf-8')
        plt.clf()
        
        # Return the Shapley values along with the base64 encoded image
        shap_vals = [[self.feature_names[i]+" = "+str(x[0][i]), pos_shap.values[0][i]] for i in range(len(self.feature_names))]
        
        return {
            "shap_vals": shap_vals,
            'e_fx': pos_shap.base_values[0],
            "plot": img_base64,
            "prediction": int(self.model.predict(x)[0])
        }

    
    def lime_on_student(self, student: Student, out_file: str = "./img/mooc_lime.png") -> dict:
        x = student.encode()
        # Build our lime explainer:
        plt.clf()
        exp = self.lime_explainer.explain_instance(x[0], self.model.predict_proba)
        # Plot the LIME values:
        # Save the plot to a BytesIO object
        img_buffer = io.BytesIO()
        plt.savefig(img_buffer, format='png', bbox_inches='tight')
        img_buffer.seek(0)
        
        # Encode the image as base64
        img_base64 = base64.b64encode(img_buffer.read()).decode('utf-8')
        plt.clf()
        # Return the LIME values:
        return {
                "lime_vals": exp.as_list(label=1),
                "plot": img_base64,
                "prediction": int(self.model.predict(x)[0])
                }
    
    def anchor_on_student(self, student: Student, out_file: str = "./img/mooc_anchor    .png") -> dict:
        x = student.encode()
        # Build our anchor explainer:
        exp = self.anchor_explainer.explain_instance(x[0], self.model.predict, threshold=0.95)
        # Return the anchor values:
        dropout_word = ["drops out","completes the course"][self.model.predict(x)[0]]
        anchor_vals = f"Student "+dropout_word+" because "+" and ".join([f"[{feat}]" for feat in exp.names()])
        return {
                "anchor_plaintext": anchor_vals,
                "anchor_vals": exp.names(),
                "prediction": int(self.model.predict(x)[0])
        }