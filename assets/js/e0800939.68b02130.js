"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[9580],{6084:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=t(7624),n=t(2172);const o={sidebar_position:1},s="Introduction",r={id:"Shapley Values/Introduction",title:"Introduction",description:"Shapley values offer retroactive local explanations of an AI's decisions. As the name suggests, this technique is named after the award-winning mathematician and computational theorist Lloyd Shapley, who developed it back in the 1950s in his original papers on cooperative game theory (Shapley et al., 1952). The technique derives an explanation for machine learning models through a practical application of cooperative game theory \u2013 that is, the XAI treats each feature of an ML model as a \u201cplayer\u201d, which contributes a value that either adds or subtracts from the average prediction. This value, called the Shapley value, is calculated by looking at all possible coalitions and calculating the average marginal contributions of the given feature (i.e. the difference in predictions with and without the feature). Compared to other XAI techniques, particularly LIME, Shapley's method guarantees the predictions are fairly distributed and is based on solid theory, but is computationally expensive and, in some cases, may require access to the model's training data (Molnar, 2023).",source:"@site/docs/Shapley Values/Introduction.md",sourceDirName:"Shapley Values",slug:"/Shapley Values/Introduction",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Shapley Values/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shapley Values",permalink:"/Explainable-Ai-Comps-2024/category/shapley-values"},next:{title:"Shapley and MOOC",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and MOOC"}},l={},h=[{value:"Why Shapley values?",id:"why-shapley-values",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(a.p,{children:["Shapley values offer retroactive local explanations of an AI's decisions. As the name suggests, this technique is named after the award-winning mathematician and computational theorist Lloyd Shapley, who developed it back in the 1950s in his original papers on cooperative game theory ",(0,i.jsx)(a.a,{href:"https://www.rand.org/content/dam/rand/pubs/papers/2021/P295.pdf",children:"(Shapley et al., 1952)"}),". The technique derives an explanation for machine learning models through a practical application of cooperative game theory \u2013 that is, the XAI treats each feature of an ML model as a \u201cplayer\u201d, which contributes a value that either adds or subtracts from the average prediction. This value, called the Shapley value, is calculated by looking at all possible coalitions and calculating the average marginal contributions of the given feature (i.e. the difference in predictions with and without the feature). Compared to other XAI techniques, particularly LIME, Shapley's method guarantees the predictions are fairly distributed and is based on solid theory, but is computationally expensive and, in some cases, may require access to the model's training data ",(0,i.jsx)(a.a,{href:"https://christophm.github.io/interpretable-ml-book/shapley.html",children:"(Molnar, 2023)"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"why-shapley-values",children:"Why Shapley values?"}),"\n",(0,i.jsxs)(a.p,{children:["There are several reasons why we chose Shapley values as one of our techniques; in fact, it was the first of the three that we were absolutely sure we wanted to do. This was in no small part due to ",(0,i.jsx)(a.a,{href:"https://christophm.github.io/interpretable-ml-book/shapley.html",children:"Christoph Molnar's guide on Interpretable Machine Learning"}),", which explained Shapley values' mathematical backing wonderfully, as well as the advantages and disadvantages of using such a method. Moreover, Shapley's work builds on decades-long game theory literature, and as we planned to compare three such techniques, it seemed it would diversify our analysis."]}),"\n",(0,i.jsxs)(a.p,{children:["This project utilizes Python's ",(0,i.jsx)(a.a,{href:"https://shap.readthedocs.io/en/latest/",children:(0,i.jsx)(a.code,{children:"shap"})})," package."]})]})}function d(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2172:(e,a,t)=>{t.d(a,{I:()=>r,M:()=>s});var i=t(1504);const n={},o=i.createContext(n);function s(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);