"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[328],{9404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var s=i(7624),a=i(2172);const n={sidebar_position:1},o="Intro",r={id:"intro",title:"Intro",description:"We are living through a revolution of the standards for ethical machine learning practices which has been thoroughly marked by the need to explain artificial intelligences \u2014 namely their predictions. As discussed in Ribeiro et al. (2016, p.1), the act of explaining an AI\u2019s prediction presents the audience with visualizations pertaining to the actions it made to achieve such a decision, thus building users\u2019 trust in the model and exposing any possible errors in the model\u2019s structure. With regulations like the EU\u2019s Right to Explainability and the United States\u2019 proposed AI Bill of Rights, a machine learning model may no longer be a simple \u201cblack box\u201d: in order to prevent criminal charges, the creators of high-impact models must be able to justify each of their predictions. Over the past few years, the field has thus become inundated with approaches, each a bid for its own niche. In such an impossibly dense field, how can one quantify a method\u2019s efficacy? Which method would a jury trust?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Explainable-Ai-Comps-2024/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"XAI Techniques",permalink:"/Explainable-Ai-Comps-2024/category/xai-techniques"}},l={},h=[{value:"Deliverables",id:"deliverables",level:2}];function c(e){const t={annotation:"annotation",em:"em",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mrow:"mrow",mtext:"mtext",p:"p",semantics:"semantics",span:"span",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"intro",children:"Intro"}),"\n",(0,s.jsxs)(t.p,{children:["We are living through a revolution of the standards for ethical machine learning practices which has been thoroughly marked by the need to explain artificial intelligences \u2014 namely their predictions. As discussed in Ribeiro et al. (2016, p.1), the act of explaining an AI\u2019s prediction presents the audience with visualizations pertaining to the actions it made to achieve such a decision, thus building users\u2019 trust in the model and exposing any possible errors in the model\u2019s structure. With regulations like the EU\u2019s ",(0,s.jsx)(t.em,{children:"Right to Explainability"})," and the United States\u2019 proposed ",(0,s.jsx)(t.em,{children:"AI Bill of Rights"}),", a machine learning model may no longer be a simple \u201cblack box\u201d: in order to prevent criminal charges, the creators of high-impact models must be able to justify each of their predictions. Over the past few years, the field has thus become inundated with approaches, each a bid for its own niche. In such an impossibly dense field, how can one quantify a method\u2019s efficacy? Which method would a jury trust?"]}),"\n",(0,s.jsx)(t.p,{children:"Through this project, we will be exploring three major avenues for model explainability across two contrasting domains of machine-learning tasks (ResNet and MOOC). Namely, we will be applying Shapley, LIME, and Anchoring to two separate models of unique architecture which specialize in classification based on tabular and image data, respectively. This will culminate in a website which houses a comprehensive analysis of each method\u2019s approach highlights and how they compare to the others, discussing the literature surrounding them and benchmarks of their performances, including a user study of Carleton College students of varying technical backgrounds. This study, inspired by Ribeiro et al. (2018), will ask users to predict alongside a model after being shown various amounts and methods of explanation. This paper, alongside these analyses serves to gauge the public\u2019s perception of each method."}),"\n",(0,s.jsx)(t.h2,{id:"deliverables",children:"Deliverables"}),"\n",(0,s.jsx)(t.p,{children:"It is of primary importance that the group understands our three explainable AI methods. This necessitates a literature review, with papers and articles that introduce and implement Shapley and Anchor/LIME. After reading about them, we also want to implement them on complex existing models like ResNet. While the models will mostly be imported, this code base connecting existing models with existing XAI libraries will be another deliverable for our final project."}),"\n",(0,s.jsxs)(t.p,{children:["However, we don\u2019t just want to understand these methods for our own oral exams\u2019 sakes, but also so we can explain them to other students and get their feedback. We want to have a user study, headed by Josh, Tom, Chris and Sam, to lead this effort. With examples pulled from our data (like annotated images) that can be presented to peers for their feedback, we will ask about how compelling they find the explanation (versus the other XAI techniques), what could be improved, and whether it inspires confidence in them regarding the model as a whole. The product of this user study \u2013 whether in the form of notes, recordings, or filled-out surveys, would be another deliverable. While we shouldn\u2019t need to recruit many students, depending on how many questions we want to ask, we will also need some resources to encourage participation. 10 participants at 45 minutes each and ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mn,{children:"12.5"}),(0,s.jsx)(t.mi,{mathvariant:"normal",children:"/"}),(0,s.jsx)(t.mi,{children:"h"}),(0,s.jsx)(t.mi,{children:"o"}),(0,s.jsx)(t.mi,{children:"u"}),(0,s.jsx)(t.mi,{children:"r"}),(0,s.jsx)(t.mtext,{children:"\u2013"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"12.5/hour \u2013 "})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord",children:"12.5/"}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"h"}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"o"}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"u"}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,s.jsx)(t.span,{className:"mord",children:"\u2013"})]})})]}),"100 in total \u2013 should be more than enough for this purpose."]}),"\n",(0,s.jsx)(t.p,{children:"After the user study, we will need two more deliverables: posters, for the poster session, and a website to show our results (and maybe even allow users to play with the models themselves, if we have time). The website push will be led by Lev and Adrian, at least until the other components of the project are completed. In a successful version of this project, we will be able to clearly explain the differences between these tools to anyone who comes to our poster sessions or website, along with data gathered from their peers about the qualitative efficacy of each technique."})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,t,i)=>{i.d(t,{I:()=>r,M:()=>o});var s=i(1504);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);