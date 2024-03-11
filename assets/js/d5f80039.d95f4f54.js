"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[4400],{2596:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(7624),s=i(2172);const o={title:"ResNet: Methodology","sidebar-position":20},a="Methodology of the ResNet User Study",r={id:"User Study/ResNet - Methodology",title:"ResNet: Methodology",description:"We designed a user study to determine how explanatory \u2013 and convincing \u2013\xa0our explanations of ResNet predictions were to users. Here is how we conducted this half of the study.",source:"@site/docs/User Study/ResNet - Methodology.md",sourceDirName:"User Study",slug:"/User Study/ResNet - Methodology",permalink:"/Explainable-Ai-Comps-2024/User Study/ResNet - Methodology",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/User Study/ResNet - Methodology.md",tags:[],version:"current",frontMatter:{title:"ResNet: Methodology","sidebar-position":20},sidebar:"tutorialSidebar",previous:{title:"ResNet: Comparative Results",permalink:"/Explainable-Ai-Comps-2024/User Study/ResNet - Comparative Results"},next:{title:"Extensions",permalink:"/Explainable-Ai-Comps-2024/category/extensions"}},d={},l=[{value:"Who we surveyed",id:"who-we-surveyed",level:3},{value:"Introducing explainable AI",id:"introducing-explainable-ai",level:3},{value:"Comparing techniques",id:"comparing-techniques",level:3},{value:"Ranking techniques and trust",id:"ranking-techniques-and-trust",level:3}];function c(e){const t={a:"a",h1:"h1",h3:"h3",img:"img",p:"p",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"methodology-of-the-resnet-user-study",children:"Methodology of the ResNet User Study"}),"\n",(0,n.jsx)(t.p,{children:"We designed a user study to determine how explanatory \u2013 and convincing \u2013\xa0our explanations of ResNet predictions were to users. Here is how we conducted this half of the study."}),"\n",(0,n.jsx)(t.h3,{id:"who-we-surveyed",children:"Who we surveyed"}),"\n",(0,n.jsx)(t.p,{children:"The participants of this survey were twelve Carleton College students, seven of whom were CS majors. Class years varied, and each had varying levels of familiarity with machine learning."}),"\n",(0,n.jsx)(t.h3,{id:"introducing-explainable-ai",children:"Introducing explainable AI"}),"\n",(0,n.jsxs)(t.p,{children:["Regardless of previous ML background, we made sure to introduce the concept of explainable AI using an example where a husky was misclassified as a wolf, and LIME revealed an error with the underlying model's training data ",(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/1602.04938",children:"(Ribeiro et al, 2016)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Figure 1",src:i(3584).c+"",title:"An image of a husky predicted to be a wolf.",width:"224",height:"224"}),"\n",(0,n.jsx)(t.img,{alt:"Figure 1",src:i(188).c+"",title:"The image put through LIME.",width:"224",height:"224"})]}),"\n",(0,n.jsx)(t.p,{children:"We also asked participants for their general opinions on artificial intelligence to account for the possibility that positive or negative impressions might skew our data."}),"\n",(0,n.jsx)(t.h3,{id:"comparing-techniques",children:"Comparing techniques"}),"\n",(0,n.jsx)(t.p,{children:"Once we got started with the survey proper, participants were shown an image of a cat or dog, along with ResNet's top three predictions for that image. We asked participants if they trusted ResNet's prediction, and after receiving a response, we'd reveal side-by-side explanations from each of our XAI techniques."}),"\n",(0,n.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Figure 2",src:i(8612).c+"",title:"An image of a dog, with explanations for why it was predicted as a polar bear.",width:"1056",height:"816"})}),"\n",(0,n.jsx)(t.p,{children:"After showing the participant the predictionand explanation, we asked whether each explanation helped or hurt their understanding of the model, and recorded their comments."}),"\n",(0,n.jsx)(t.p,{children:"We selected a total of eight images from our dataset, mostly based on the prediction from ResNet18. These predictions were either clearly correct, or misclassifications that we deemed either reasonable (i.e. focusing on the wrong subject) or unreasonable (i.e. the explanations were totally incoherent). Collecting user opinions for these different cases was important for drawing our conclusions."}),"\n",(0,n.jsx)(t.h3,{id:"ranking-techniques-and-trust",children:"Ranking techniques and trust"}),"\n",(0,n.jsx)(t.p,{children:"After showing participants all eight images, we asked them to rank each XAI technique from favorite to least favorite, and also to rate their trust in each technique overall. Participants were also asked how the explanations as a whole impacted their trust in the underlying model (ResNet). We also asked whether or not the discrepancies in explanations from each technique bothered them, before collecting any final comments."})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8612:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/polar_bear-slide-e238527e3059af9c15c839066d968eaa.jpg"},188:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/wolf-husky-lime-70e347d3778b495010cdbe0fff76f027.png"},3584:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/wolf-husky-875bc744cff193c04902f72c72cdadc8.png"},2172:(e,t,i)=>{i.d(t,{I:()=>r,M:()=>a});var n=i(1504);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);