"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[8796],{6496:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(7624),s=n(2172);const r={sidebar_position:3},a="Tumors",o={id:"Anchors/Tumors",title:"Tumors",description:"XAI in this case is meant as a way of highlighting tumors in brain scans. If a model predicts that an image has a tumor, then ideally our techniques would find and highlight the tumor as the reason the model made its prediction.",source:"@site/docs/Anchors/Tumors.md",sourceDirName:"Anchors",slug:"/Anchors/Tumors",permalink:"/Explainable-Ai-Comps-2024/Anchors/Tumors",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Anchors/Tumors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Anchors on MOOC",permalink:"/Explainable-Ai-Comps-2024/Anchors/MOOC-Anchors"},next:{title:"Animals",permalink:"/Explainable-Ai-Comps-2024/Anchors/Animals"}},h={},l=[{value:"Anchoring Successes",id:"anchoring-successes",level:2},{value:"Anchoring Failures",id:"anchoring-failures",level:2},{value:"Superpixelation",id:"superpixelation",level:3},{value:"Model Errors",id:"model-errors",level:3},{value:"Display Issues",id:"display-issues",level:3}];function c(e){const i={h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"tumors",children:"Tumors"}),"\n",(0,t.jsx)(i.p,{children:"XAI in this case is meant as a way of highlighting tumors in brain scans. If a model predicts that an image has a tumor, then ideally our techniques would find and highlight the tumor as the reason the model made its prediction."}),"\n",(0,t.jsx)(i.h2,{id:"anchoring-successes",children:"Anchoring Successes"}),"\n",(0,t.jsx)(i.p,{children:"When the model was correct, anchoring was quite effective at finding the tumor in the image that caused the model's prediction. In the figure below, anchoring was able to locate the tumor quickly (in under five seconds, which is on the order of 100 times faster than in the animal dataset), which is important for its practical use."}),"\n",(0,t.jsx)(i.h2,{id:"anchoring-failures",children:"Anchoring Failures"}),"\n",(0,t.jsx)(i.h3,{id:"superpixelation",children:"Superpixelation"}),"\n",(0,t.jsx)(i.p,{children:"The superpixelation algorithm used behind anchoring is still a liability. For the MRI below, the anchor is fairly large, but the actual tumor is a small white ellipse on the very left side of the anchor. If superpixelation algorithms cannot give tumors their own superpixels, anchors will include extraneous parts of the brain, which reduces its effectiveness considerably."}),"\n",(0,t.jsx)(i.h3,{id:"model-errors",children:"Model Errors"}),"\n",(0,t.jsx)(i.p,{children:"In the following examples, our model made incorrect predictions."}),"\n",(0,t.jsx)(i.p,{children:"In the figure above, the model predicted that a healthy brain had a meningioma."}),"\n",(0,t.jsx)(i.p,{children:"In this figure, the model predicted that a pituitary tumor was really a meningioma."}),"\n",(0,t.jsx)(i.p,{children:"In both of these cases, the anchors were not very useful for understanding where tumors (or lack of tumors) were. Since it is making inaccurate predictions, it is likely that our model did not learn the right patterns to correctly identify tumors, meaning that explanations of its decisions will not be helpful to us."}),"\n",(0,t.jsx)(i.h3,{id:"display-issues",children:"Display Issues"}),"\n",(0,t.jsx)(i.p,{children:"Another issue is that the anchoring package displays its explanations by showing only the anchors and blacking out the rest of the image, which can be disorienting and take away necessary context, especially when images are black and white like these MRIs. This can be resolved since it is an issue with the anchoring package, not the explanatory technique itself, but it reduces the practicality of using anchors in this domain."})]})}function d(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>a});var t=n(1504);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);