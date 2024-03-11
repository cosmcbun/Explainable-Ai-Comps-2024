"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[1306],{516:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(7624),i=s(2172);const a={sidebar_position:50},l="MOOC Dropout Prediction",o={id:"LIME/MOOC",title:"MOOC Dropout Prediction",description:"Massive Open Online Courses (MOOCs)",source:"@site/docs/LIME/MOOC.md",sourceDirName:"LIME",slug:"/LIME/MOOC",permalink:"/Explainable-Ai-Comps-2024/LIME/MOOC",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/LIME/MOOC.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Explainable-Ai-Comps-2024/LIME/Introduction"},next:{title:"ResNet Image Classification",permalink:"/Explainable-Ai-Comps-2024/LIME/ResNet"}},r={},c=[{value:"Conclusion",id:"conclusion",level:2},{value:"Apply LIME to MOOCs",id:"apply-lime-to-moocs",level:2},{value:"Parsing the Output",id:"parsing-the-output",level:2},{value:"LIME Specific Output",id:"lime-specific-output",level:3},{value:"LIME Output used in User Study",id:"lime-output-used-in-user-study",level:3},{value:"User Study",id:"user-study",level:2}];function p(e){const t={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"mooc-dropout-prediction",children:"MOOC Dropout Prediction"}),"\n",(0,n.jsx)(t.p,{children:"Massive Open Online Courses (MOOCs)"}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"LIME was trivival to apply to the MOOC Model, provided inelegant but effective explanation visuals, and there appeared to be a positive relation between a viewers experence with ML and their beleif that LIME explanation helped explain the model."}),"\n",(0,n.jsx)(t.h2,{id:"apply-lime-to-moocs",children:"Apply LIME to MOOCs"}),"\n",(0,n.jsx)(t.p,{children:"Applying LIME to the ML model used to predict if a student would drop out of a MOOC was one of the easiest parts of our project."}),"\n",(0,n.jsxs)(t.p,{children:["The literature had centralized around one implementation, the Python package ",(0,n.jsx)(t.a,{href:"https://pypi.org/project/lime/",children:"LIME"}),", which had extensive and easy to use documentation."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:"from lime.lime_tabular import LimeTabularExplainer\n\n# Create LimeTabularExplainer\nsvm_explainer = LimeTabularExplainer(\n\tX_train, # training data created by the MOOC src class\n\tfeature_names=[\n\t\t'viewed', 'gender','grade','nevents', 'ndays_act',\n\t\t'nplay_video', 'nchapters', 'age', 'votes', 'num_words'\n\t],\n\tclass_names=['Not Completed','Completed'],\n\tdiscretize_continuous=True\n)\n\n\n# Use the explainer to graphically explain predictions\nexp = svm_explainer.explain_instance(\n\tdummy_for_lime, # a fake row of data for LIME to explain\n\tsvc.predict_proba # the black box model's probalistic prediction method\n).show_in_notebook(\n\tshow_table=True,\n\tshow_all=False\n)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The above code block is a simplified version of ",(0,n.jsx)(t.a,{href:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/blob/62e136607f3b66106fd09fd558feb38f4834419a/MOOC/LIME/BasicExampleOfUsingLIMEOnMOOCDataset.ipynb",children:"Our Implemplemntation"})," which output an explanation similar to the visualization seen in the LIME Specific Output section."]}),"\n",(0,n.jsx)(t.h2,{id:"parsing-the-output",children:"Parsing the Output"}),"\n",(0,n.jsx)(t.h3,{id:"lime-specific-output",children:"LIME Specific Output"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"LIME Specific Output",src:s(3716).c+"",width:"2937",height:"1182"})}),"\n",(0,n.jsx)(t.p,{children:"TODO: EXPLANATION OF LIME OUTPUT"}),"\n",(0,n.jsx)(t.h3,{id:"lime-output-used-in-user-study",children:"LIME Output used in User Study"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"LIME Output used in User Study",src:s(6292).c+"",width:"794",height:"435"})}),"\n",(0,n.jsx)(t.p,{children:"TODO: EXPLANATION OF LIME OUTPUT"}),"\n",(0,n.jsx)(t.p,{children:"This version of the LIME output is not the default output of LIME, it was an alranate output format. However we picked this explanations for our user study for a number of reasons."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"It was much more visually similar to Shapley."}),"\n",(0,n.jsx)(t.li,{children:"It presented less information, decreasing mental load on the participants."}),"\n",(0,n.jsx)(t.li,{children:"It helped the participant focus on the rules based portion (the y-axis) which helped draw a continues line from LIME to Anchors."}),"\n",(0,n.jsx)(t.li,{children:"In the first input, it is difficult to extract the model prediction from the 2nd and third visualizations. This caused confusion internally, so we prefered the second explanations because if you sum the weights of the rules, and it is greater than 0.5, the model predicts the student will complete the MOOC."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"user-study",children:"User Study"}),"\n",(0,n.jsxs)(t.p,{children:["Little can be said about LIME's user study results in isolation. To see how LIME compares to Shapley and Anchors, see the ",(0,n.jsx)(t.a,{href:"/Explainable-Ai-Comps-2024/User%20Study/MOOC%20-%20Comparative%20Results",children:"MOOC Comparitive User Study"})," page."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sample All LIME - How easy is this explanation to understand",src:s(2260).c+"",width:"640",height:"480"})}),"\n",(0,n.jsxs)(t.p,{children:["Across all 5 samples, participants ranked LIME explanation understandability as ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mo,{children:"\u2248"}),(0,n.jsx)(t.mn,{children:"4"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\approx4"})]})})}),(0,n.jsxs)(t.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.4831em"}}),(0,n.jsx)(t.span,{className:"mrel",children:"\u2248"}),(0,n.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(t.span,{className:"mord",children:"4"})]})]})]})," on average ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mo,{children:"\xb1"}),(0,n.jsx)(t.mn,{children:"1"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\pm 1"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(t.span,{className:"mord",children:"\xb1"}),(0,n.jsx)(t.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sample All LIME - How Does Experience with ML Affect Model Explainability.png",src:s(6564).c+"",width:"1500",height:"500"})}),"\n",(0,n.jsx)(t.p,{children:"Across all 5 samples, the greater the participants experience with ML, the more they beleived LIME explanations helped explain the model."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sample All LIME - How Does Experience with ML Affect Model Understandability",src:s(6324).c+"",width:"1500",height:"500"})}),"\n",(0,n.jsx)(t.p,{children:"Without a greater sample size, it is difficult to draw any conclusions from this graph. However, it is interesting to note that participants with the least and most experience with ML had the highest confidance that they understood the MOOC model as explained by LIME."})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3716:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/HTML Output-0e682c0abab400274c67f3b6dc4900ed.png"},6564:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/Sample All LIME - How Does Experience with ML Affect Model Explainability-a9ac24ed620ac40f9f7206863b4ff437.png"},6324:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/Sample All LIME - How Does Experience with ML Affect Model Understandability-630211bb6f0560572142f35aab321897.png"},2260:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/Sample All LIME - How easy is this explanation to understand-a6d5adac7fbabbd614d78686ac521555.png"},6292:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/X_complete3-4679e47e2bfe0856de110c39cdf03602.png"},2172:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>l});var n=s(1504);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);