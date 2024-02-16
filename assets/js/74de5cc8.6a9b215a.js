"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[124],{9076:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=t(7624),i=t(2172);const o={},l="The Shapley value as a legal defense",s={id:"Shapley Values/Laws and regulations",title:"The Shapley value as a legal defense",description:"(Disclaimer: none on this team are certified lawyers. This is an exploration of Shapley as a concept and is not legal advice)",source:"@site/docs/Shapley Values/Laws and regulations.md",sourceDirName:"Shapley Values",slug:"/Shapley Values/Laws and regulations",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Laws and regulations",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Shapley Values/Laws and regulations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Introduction"},next:{title:"Shapley and MOOC",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and MOOC"}},r={},h=[{value:"(Disclaimer: none on this team are certified lawyers. This is an exploration of Shapley as a concept and is not legal advice)",id:"disclaimer-none-on-this-team-are-certified-lawyers-this-is-an-exploration-of-shapley-as-a-concept-and-is-not-legal-advice",level:4},{value:"Introduction",id:"introduction",level:2},{value:"Shapley&#39;s legality as an explanation",id:"shapleys-legality-as-an-explanation",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"the-shapley-value-as-a-legal-defense",children:"The Shapley value as a legal defense"}),"\n",(0,n.jsx)(a.h4,{id:"disclaimer-none-on-this-team-are-certified-lawyers-this-is-an-exploration-of-shapley-as-a-concept-and-is-not-legal-advice",children:"(Disclaimer: none on this team are certified lawyers. This is an exploration of Shapley as a concept and is not legal advice)"}),"\n",(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(a.p,{children:["In section 9.5 of his textbook ",(0,n.jsx)(a.em,{children:"Interpretable Machine Learning"}),", Christoph Molnar postulates that Shapley Values may currently be the only valid legal defense when explaining a machine learning model:"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["In situations where the law requires explainability \u2013 like EU\u2019s \u201cright to explanations\u201d \u2013 the Shapley value might be the only legally compliant method, because it is based on a solid theory and distributes the effects fairly. I am not a lawyer, so this reflects only my intuition about the requirements. ",(0,n.jsx)(a.a,{href:"https://christophm.github.io/interpretable-ml-book/shapley.html",children:"(Molnar 2023)"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["This may well be true, as Shapley's method is the only technique supported by proof-based math,\nand as the calculations make little to no assumptions about the data or model itself. However, the European Union's articles on the ",(0,n.jsx)(a.em,{children:"Right to Explanation"})," are fairly vague as to what kinds of explanation would truly suffice."]}),"\n",(0,n.jsx)(a.h2,{id:"shapleys-legality-as-an-explanation",children:"Shapley's legality as an explanation"}),"\n",(0,n.jsxs)(a.p,{children:["After a full review of all articles pertaining to the EU's ",(0,n.jsx)(a.a,{href:"https://artificialintelligenceact.eu/",children:"Artificial Intelligence Act"}),", the Scientific Foresight Unit (STOA) of the European Parliamentary Research Service declares nine pillars of explanation that an AI Technique must uphold:"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"information on the existence of profiling, i.e., on the fact that the data subject will be\nprofiled or is already being profiled;"}),"\n",(0,n.jsx)(a.li,{children:"general information on the purposes of the profiling and decision-making;"}),"\n",(0,n.jsx)(a.li,{children:"general information on the kind of approach and technology that is adopted;"}),"\n",(0,n.jsx)(a.li,{children:"general information on what inputs factors (predictors) and outcomes\n(targets/predictions), of what categories are being considered;"}),"\n",(0,n.jsx)(a.li,{children:"general information on the relative importance of such input factors in determining the\noutcomes;"}),"\n",(0,n.jsx)(a.li,{children:"specific information on what data have been collected about the data subject and used\nfor profiling him or her;"}),"\n",(0,n.jsx)(a.li,{children:"specific information on what values for the features of the data subject determined the\noutcome concerning him or her;"}),"\n",(0,n.jsx)(a.li,{children:"specific information on what data have been inferred about the data subject;"}),"\n",(0,n.jsxs)(a.li,{children:["specific information on the inference process through which certain values for the\nfeatures of the data subject have determined a certain outcome concerning him or her. ",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(a.a,{href:"https://www.europarl.europa.eu/RegData/etudes/STUD/2020/641530/EPRS_STU(2020)641530_EN.pdf",children:"(STOA 2020, p.62-66)"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Sections 1-5 require access to the model's training data, which Shapley's initial method allows, but it does not typically address the data which is not local to the prediction of focus . Due to the generalizability of the base technique to a global interpretable example, however, all five criteria may potentially be met. If not, the ",(0,n.jsx)(a.a,{href:"https://arxiv.org/abs/1904.02868",children:"Data Shapley"})," variant would best fit such explanations while still maintaining the original mathematical principles of the base."]}),"\n",(0,n.jsx)(a.p,{children:"Sections 5-9 are able to be addressed post-hoc, which all of our explainable techniques are able to provide with varying degrees of infallibility. What is important here, though, is that Shapley values can provide all required explanations, as demonstrated in our page on the calculation of Shapley values. "}),"\n",(0,n.jsx)(a.h1,{id:"are-shapley-values-always-optimal-then",children:"Are Shapley values always optimal, then?"}),"\n",(0,n.jsxs)(a.p,{children:['While the mathematical backing for Shapley values is quite strong, it is not entirely necessary to hold up in court. Each of the techniques we display are able to satisfy most if not all of these demands with relatively few assumptions about the model and the data. In the same review, the STOA concluded that each explanation must at least provide the user an explanation of "the specific\ninformation that most matters to them, namely, with the information on what values for their\nfeatures determined in their case an unfavourable outcome" ',(0,n.jsx)(a.a,{href:"https://www.europarl.europa.eu/RegData/etudes/STUD/2020/641530/EPRS_STU(2020)641530_EN.pdf",children:"(STOA 2020, p.65)"}),". This can apply to each of our techniques of focus with or without the justification of Game Theory. "]})]})}function d(e={}){const{wrapper:a}={...(0,i.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2172:(e,a,t)=>{t.d(a,{I:()=>s,M:()=>l});var n=t(1504);const i={},o=n.createContext(i);function l(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);