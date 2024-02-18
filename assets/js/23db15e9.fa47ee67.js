"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[3832],{3324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>A});var a=n(7624),s=n(2172);const r={},c="ResNet",o={id:"LIME/ResNet",title:"ResNet",description:"Can you explain your answer?",source:"@site/docs/LIME/ResNet.md",sourceDirName:"LIME",slug:"/LIME/ResNet",permalink:"/Explainable-Ai-Comps-2024/LIME/ResNet",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/LIME/ResNet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Explainable-Ai-Comps-2024/LIME/Introduction"},next:{title:"Tumors and Other Applications of LIME",permalink:"/Explainable-Ai-Comps-2024/LIME/Tumors"}},i={},A=[{value:"Can you explain your answer?",id:"can-you-explain-your-answer",level:2},{value:"Cartons and Vipers and Bears, oh my!",id:"cartons-and-vipers-and-bears-oh-my",level:2},{value:"What does this tell us about LIME?",id:"what-does-this-tell-us-about-lime",level:2}];function p(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"resnet",children:"ResNet"}),"\n",(0,a.jsx)(t.h2,{id:"can-you-explain-your-answer",children:"Can you explain your answer?"}),"\n",(0,a.jsx)(t.p,{children:"(Introduce ResNet as an ML model that predicts a class based on an image input. Also introduce cats/dogs dataset, and how LIME can explain ResNet's predictions using an easier example)"}),"\n",(0,a.jsx)(t.p,{children:"Generating explanations with LIME is fun and all, but in order to generate an explanation, we must first find a model that we can explain in the first place."}),"\n",(0,a.jsxs)(t.p,{children:["Enter ",(0,a.jsx)(t.a,{href:"https://pytorch.org/hub/pytorch_vision_resnet/",children:"ResNet"})," (Residual Neural Network), an architecture trained on the image classification dataset known as ",(0,a.jsx)(t.a,{href:"https://www.image-net.org/",children:"ImageNet"}),". ResNet is trained on millions of different images to identify the subjects of a wide range of different classes. For the purpose of our project, we chose to use the pretrained model to focus specifically on identifying pictures of cats and dogs (of which we found several thousand images)."]}),"\n",(0,a.jsx)(t.p,{children:"The way LIME works with ResNet is relatively simple: you take an image, resize it to match the specifications (we resized them to be 224x224 squares), transform the image to tensors and normalize. Once this is finished, it's a simple matter to get the prediction and train a LimeImageExplainer() model, which will apply a mask that highlights the parts of the image that contribute to (green) or against (red) ResNet's prediction. An example can be seen below:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"German Shorthaired Pointer",src:n(2616).c+"",width:"224",height:"224"}),"\n",(0,a.jsx)(t.img,{alt:"German Shorthaired Pointer as described by LIME",src:n(2940).c+"",width:"224",height:"224"})]}),"\n",(0,a.jsx)(t.p,{children:"The images above depict a German shorthaired pointer dog, correctly classified as such by ResNet with 0.94 certainty. The post-hoc explanation for this prediction provided by LIME, as seen in the image on the right, highlights the area of interest in green as shown above. In this case, LIME suggests that the model made an accurate prediction by looking at the dog's face and back and determining that it matched the feature values associated with those of a German shorthaird pointer, while ignoring the background (the water). This method is useful because, despite treating ResNet as a black box, we are still able to somewhat extrapolate the mode's thought process and how it came to the conclusion it did."}),"\n",(0,a.jsx)(t.h2,{id:"cartons-and-vipers-and-bears-oh-my",children:"Cartons and Vipers and Bears, oh my!"}),"\n",(0,a.jsx)(t.p,{children:"(talk about how LIME can explain some of the wackier ResNet predictions)"}),"\n",(0,a.jsx)(t.h2,{id:"what-does-this-tell-us-about-lime",children:"What does this tell us about LIME?"}),"\n",(0,a.jsx)(t.p,{children:"(speak more generally about LIME and how it interacts with the dataset from a critical analysis pov)"})]})}function l(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},2940:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/german_shorthaired-79-lime-33a32c0947390343dbe3ccd538d8ea93.jpg"},2616:(e,t,n)=>{n.d(t,{c:()=>a});const a="data:image/jpeg;base64,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"},2172:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>c});var a=n(1504);const s={},r=a.createContext(s);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);