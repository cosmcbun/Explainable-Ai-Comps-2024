"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[6620],{6588:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=i(7624),n=i(2172);const a={sidebar_position:1},r="What is Anchoring",s={id:"Anchors/Introduction",title:"What is Anchoring",description:"Ribeiro, Singh, and Guestrin, the original authors of LIME, also created anchoring as an Explainable AI model, which has some similarities with LIME, but outputs its explanations in a different form. Like LIME, Anchoring involves perturbing the data point in question to see how the results from the black box change. Ribeiro et al. define their anchor like so: \u201cAn anchor explanation is a rule that sufficiently \u201canchors\u201d the prediction locally \u2013 such that changes to the rest of the feature values of the instance do not matter\u201d (Ribeiro et al, 2018). For example, a picture of a dog in the ocean would still be a picture of a dog even if the background were changed to grass. In this case, the dog would be our anchor. The same principle can be used for multiple types of data, not just image data. For tabular data, the algorithm will seek to find which feature values were the most important in coming to a particular decision, and for image classification the anchor will be a set of superpixels that have the most importance in determining the prediction of the model. A clear advantage of anchoring is that its output is intuitive and easy to interpret, as opposed to being a sea of coefficients.",source:"@site/docs/Anchors/Introduction.md",sourceDirName:"Anchors",slug:"/Anchors/Introduction",permalink:"/Explainable-Ai-Comps-2024/Anchors/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Anchors/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Anchors",permalink:"/Explainable-Ai-Comps-2024/category/anchors"},next:{title:"Anchors on MOOC",permalink:"/Explainable-Ai-Comps-2024/Anchors/MOOC-Anchors"}},h={},c=[{value:"How to find an Anchor",id:"how-to-find-an-anchor",level:2},{value:"Image Anchoring and Superpixels",id:"image-anchoring-and-superpixels",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"what-is-anchoring",children:"What is Anchoring"}),"\n",(0,o.jsxs)(t.p,{children:["Ribeiro, Singh, and Guestrin, the original authors of LIME, also created anchoring as an Explainable AI model, which has some similarities with LIME, but outputs its explanations in a different form. Like LIME, Anchoring involves perturbing the data point in question to see how the results from the black box change. Ribeiro et al. define their anchor like so: \u201cAn anchor explanation is a rule that sufficiently \u201canchors\u201d the prediction locally \u2013 such that changes to the rest of the feature values of the instance do not matter\u201d (",(0,o.jsx)(t.a,{href:"https://homes.cs.washington.edu/~marcotcr/aaai18.pdf",children:"Ribeiro et al"}),", 2018). For example, a picture of a dog in the ocean would still be a picture of a dog even if the background were changed to grass. In this case, the dog would be our anchor. The same principle can be used for multiple types of data, not just image data. For tabular data, the algorithm will seek to find which feature values were the most important in coming to a particular decision, and for image classification the anchor will be a set of superpixels that have the most importance in determining the prediction of the model. A clear advantage of anchoring is that its output is intuitive and easy to interpret, as opposed to being a sea of coefficients."]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-find-an-anchor",children:"How to find an Anchor"}),"\n",(0,o.jsx)(t.p,{children:"When looking for an anchor, there are two main attributes that we are looking for. One is precision. We want to choose an anchor that we are pretty sure is correct, meaning that it does contribute heavily to the prediction of the black box model. The other is coverage, meaning that our anchor still holds for as big of a subset of the input space as possible, which in practice generally means trying to make the anchor more concise. The algorithm optimizes this by setting a precision threshold, and choosing the anchor above this precision with the highest coverage. In order to generate this anchor, we start off with a null rule, and then iteratively add features to it until we have a rule that meets the precision threshold we are looking for. We start off with multiple possible rules to make sure we search a reasonably sized portion of the sample space while keeping the algorithm computationally feasible (Ribeiro et al, 2018). One weakness of anchoring is the difficulty of finding a distribution within which to perturb data (the same problem shows up in LIME and is somewhat inherent to perturbation based algorithms). Another issue is that there is no good anchor for some data points, especially ones near decision boundaries or belonging to fringe classes."}),"\n",(0,o.jsx)(t.h3,{id:"image-anchoring-and-superpixels",children:"Image Anchoring and Superpixels"}),"\n",(0,o.jsx)(t.p,{children:"Image anchoring requires some preprocessing, because the anchoring algorithm has exponential runtime with respect to how many features a dataset has. This is not computationally feasible if each pixel in an image is a feature, so first anchoring splits images into superpixels (adjacent and similarly colored groups of pixels). This reduces the number of features and makes the anchoring algorithm more tractable, but reduces scope to create more concise anchors."}),"\n",(0,o.jsxs)(t.p,{children:["To implement anchoring, we used ",(0,o.jsx)(t.a,{href:"https://github.com/marcotcr/anchor",children:"Ribeiro's Anchoring Package"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2172:(e,t,i)=>{i.d(t,{I:()=>s,M:()=>r});var o=i(1504);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);