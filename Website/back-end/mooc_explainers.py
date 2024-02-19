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
    
    def shap_on_student(self, student: Student, out_file: str = "./img/shap_mooc.png") -> dict:
        x = student.encode()
        # Build our permutation explainer:
        pos_shap = self.shap_explainer(x)[..., 1]
        # Plot the SHAP values:    
        plt.clf()
        shap.plots.waterfall(pos_shap[0], max_display=10, show=False)
        plt.savefig(out_file, bbox_inches='tight')
        plt.clf()
        # Return the Shapley values:    
        shap_vals = [[self.feature_names[i], pos_shap.values[0][i]] for i in range(len(self.feature_names))]
        return {
                "shap_vals": shap_vals,
                'e_fx': pos_shap.base_values[0],
                "plot": out_file,
                "prediction": int(self.model.predict(x)[0])
                }
    
    def lime_on_student(self, student: Student, out_file: str = "./img/lime_mooc.png") -> dict:
        x = student.encode()
        # Build our lime explainer:
        exp = self.lime_explainer.explain_instance(x[0], self.model.predict_proba)
        # Plot the LIME values:
        plt.clf()
        exp.as_pyplot_figure(label=1)
        plt.savefig(out_file, bbox_inches='tight')
        plt.clf()    
        # Return the LIME values:
        return {
                "lime_vals": exp.as_list(label=1),
                "plot": out_file,
                "prediction": int(self.model.predict(x)[0])
                }
    
    def anchor_on_student(self, student: Student, out_file: str = "./img/anchor_mooc.png") -> dict:
        x = student.encode()
        # Build our anchor explainer:
        exp = self.anchor_explainer.explain_instance(x[0], self.model.predict, threshold=0.95)
        # Return the anchor values:
        return {
                "anchor_vals": exp.names(),
                "plot": out_file,
                "prediction": int(self.model.predict(x)[0])
                }
