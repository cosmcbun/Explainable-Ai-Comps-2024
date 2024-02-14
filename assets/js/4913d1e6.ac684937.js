"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[91],{8940:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=o(7624),n=o(2172);const a={sidebar_position:1},s="Introduction",l={id:"LIME/Introduction",title:"Introduction",description:"Local Interpretable Model-Agnostic Explanations (LIME)",source:"@site/docs/LIME/Introduction.md",sourceDirName:"LIME",slug:"/LIME/Introduction",permalink:"/Explainable-Ai-Comps-2024/LIME/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/LIME/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"LIME",permalink:"/Explainable-Ai-Comps-2024/category/lime"},next:{title:"Shapley Values",permalink:"/Explainable-Ai-Comps-2024/category/shapley-values"}},r={},c=[{value:"Local Interpretable Model-Agnostic Explanations (LIME)",id:"local-interpretable-model-agnostic-explanations-lime",level:2},{value:"How does it work?",id:"how-does-it-work",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.h2,{id:"local-interpretable-model-agnostic-explanations-lime",children:"Local Interpretable Model-Agnostic Explanations (LIME)"}),"\n",(0,i.jsx)(t.p,{children:'Originally Proposed in 2016 by Marco Tulio Ribeiro, Sameer Singh, and Carlos Guestrin, Local Interpretable Model-Agnostic Explanations (LIME) is a post hoc and model agnostic technique that attempts to build trust in black box models. One of two techniques we will focus on which rely on local surrogate models - LIME builds a simpler model which is trained to approximate the "Black Box\u201d model\u2019s predictions across a small vector-space (Molnar 2024).'}),"\n",(0,i.jsxs)(t.p,{children:["In general, LIME can rely on simple machine learning methods like ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Linear_regression",children:"linear regression"})," or ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decision_tree_learning",children:"decision trees"}),". LIME uses these models because they are simple enough to be inherently interpretable, and for readers with existing foundational knowledge in machine learning, this makes it a good entry point into the world of XAI."]}),"\n",(0,i.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,i.jsx)(t.p,{children:"LIME doesn't train its simple model on the same training data as the black-box model. Instead, LIME builds its simple model on a novel dataset created by passing slightly modified versions of the input which LIME seeks to explain into the black-box model. These perturbed data are weighted based on their proximity to the black box models prediction of interest. Exploring the simple model's inherently interpretable nature allows a user to explore why the black box model gave a specific output."}),"\n",(0,i.jsx)(t.p,{children:"LIME shares many of the same challenges with Anchor XAI technique (and Shapley Value AI technique to a lesser degree). For each run, LIME only attempts to explain a specific result in isolation. This means that LIME can give massively different explanations across multiple runs on similar black box model results. Similarly, given two black box models who give identical results for a particular input, LIME might give massively different explanations for how each model came to its conclusion. This is not an inherent limitation of LIME (the black box model might really have massively different rationale for two similar outputs or two models may come to the same conclusion based on massively different logic) but this local interpretation may prevent insights gain through LIME from being applied to a general understanding of the black box model. Lastly, as with most XAI methods, LIME takes significant computational resources: for each black box model conclusion a user wishes to explain, a new ML model must be substantiated."}),"\n",(0,i.jsxs)(t.p,{children:["We utilized Python's ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/lime/",children:(0,i.jsx)(t.code,{children:"lime"})})," package for our project, which is both accessible and easy to train."]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>l,M:()=>s});var i=o(1504);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);