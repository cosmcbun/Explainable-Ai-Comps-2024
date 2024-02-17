"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[3456],{1208:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=n(7624),t=n(2172);const i={"sidebar-position":4},l="Shapley and MOOC",o={id:"Shapley Values/Shapley and MOOC",title:"Shapley and MOOC",description:"This section discusses the application of the `shap` package to the Multi-Layer Perceptron that we built for the MOOC dataset.",source:"@site/docs/Shapley Values/Shapley and MOOC.md",sourceDirName:"Shapley Values",slug:"/Shapley Values/Shapley and MOOC",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and MOOC",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Shapley Values/Shapley and MOOC.md",tags:[],version:"current",frontMatter:{"sidebar-position":4},sidebar:"tutorialSidebar",previous:{title:"The Shapley value as a legal defense",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Laws and regulations"},next:{title:"Shapley and Resnet",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and Resnet"}},r={},h=[{value:"The Code",id:"the-code",level:2},{value:"Explaining a single datapoint",id:"explaining-a-single-datapoint",level:2},{value:"Sections",id:"sections",level:2}];function p(e){const a={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"shapley-and-mooc",children:"Shapley and MOOC"}),"\n",(0,s.jsxs)(a.p,{children:["This section discusses the application of the ",(0,s.jsx)(a.code,{children:"shap"})," package to the Multi-Layer Perceptron that we built for the MOOC dataset."]}),"\n",(0,s.jsx)(a.h2,{id:"the-code",children:"The Code"}),"\n",(0,s.jsxs)(a.p,{children:["We calculate Shapley values for our dataset via Python's ",(0,s.jsx)(a.code,{children:"shap"})," package, a library of functions and classes which encompasses virtually all possible variations upon Lloyd Shapley's original analysis."]}),"\n",(0,s.jsx)(a.p,{children:"Due to its massive popularity, this package was quite convenient, requiring only a few lines to set up. First, we build our model (see more about our model here)\nand create an Explainer object for it."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"import shap\nmodel = MultiLayerPerceptron() # Create our ML model\nexplainer = shap.explainers.Permutation(model.predict_proba, \n                                          X_train, \n                                          feature_names=feature_names)\n"})}),"\n",(0,s.jsxs)(a.p,{children:["This is a ",(0,s.jsx)(a.code,{children:"Permutation"})," explainer, which builds all possible permutations of feature-value coalitions for the approximation of each Shapley value. The creation of such coalitions mirrors the base technique as outlined in the Shapley's Math page.\nWe use our model's ",(0,s.jsx)(a.code,{children:"predict_proba"}),' function to return real-valued probabilities for the classes "Course Completed" and "Dropped Out," and we pass in our training data ',(0,s.jsx)(a.code,{children:"X_train"}),' as our data matrix from which our explainer will pull substitute feature values in order to simulate each feature "not participating" in the game of predicton. ']}),"\n",(0,s.jsx)(a.p,{children:"Next, we run our explainer on the datapoints that we want locally explained:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"shapley_values = explainer(inputs)\n"})}),"\n",(0,s.jsxs)(a.p,{children:["This returns the Shapley values for each datapoint in the set of ",(0,s.jsx)(a.code,{children:"inputs"}),", as well as some useful information such as the expected (average) prediction over the set and some useful properties for ",(0,s.jsx)(a.em,{children:"Interpretable AI"}),", which we will briefly cover at the end."]}),"\n",(0,s.jsx)(a.h2,{id:"explaining-a-single-datapoint",children:"Explaining a single datapoint"}),"\n",(0,s.jsxs)(a.p,{children:["Once we have our ",(0,s.jsx)(a.code,{children:"explanations"}),", we can visualize the Shapley values for each datapoint. The ",(0,s.jsx)(a.code,{children:"shap"})," package contains a plethora of visualization tools for intepretable AI, but for the purposes of our user study and for comparison with LIME and Anchoring techniques, we used the most popular visualization for a single datapoint: the waterfall plot."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"shap.plots.waterfall(shapley_values[i])\n"})}),"\n",(0,s.jsxs)(a.p,{children:["This returns a plot of Shapley values for the ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"i"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]}),"-th datapoint in the set, like so:"]}),"\n",(0,s.jsx)(a.h2,{id:"sections",children:"Sections"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Small code snippet to show it off"}),"\n",(0,s.jsxs)(a.li,{children:["Overview of visualizations","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"How this compares to LIME's graphs"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.li,{children:"How we use the mask function for SHAP"}),"\n"]})]})}function c(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2172:(e,a,n)=>{n.d(a,{I:()=>o,M:()=>l});var s=n(1504);const t={},i=s.createContext(t);function l(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);