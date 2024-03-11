"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[3320],{5872:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=i(7624),s=i(2172);const a={sidebar_position:9},o="Limitations",r={id:"User Study/Limitations",title:"Limitations",description:"MOOC Survey Limitations",source:"@site/docs/User Study/Limitations.md",sourceDirName:"User Study",slug:"/User Study/Limitations",permalink:"/Explainable-Ai-Comps-2024/User Study/Limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/User Study/Limitations.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Explainable-Ai-Comps-2024/User Study/Introduction"},next:{title:"Qualitative Takeaways",permalink:"/Explainable-Ai-Comps-2024/User Study/Quote Takeaways"}},l={},d=[{value:"MOOC Survey Limitations",id:"mooc-survey-limitations",level:2},{value:"Data representations",id:"data-representations",level:3},{value:"Small sample size",id:"small-sample-size",level:3},{value:"Introducing XAI Across Experimenters",id:"introducing-xai-across-experimenters",level:3},{value:"ResNet Survey Limitations",id:"resnet-survey-limitations",level:2},{value:"Data representations",id:"data-representations-1",level:3},{value:"Superpixels vs pixel groups",id:"superpixels-vs-pixel-groups",level:3}];function h(e){const t={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(t.h2,{id:"mooc-survey-limitations",children:"MOOC Survey Limitations"}),"\n",(0,n.jsx)(t.h3,{id:"data-representations",children:"Data representations"}),"\n",(0,n.jsx)(t.p,{children:"While the black box model was extremely accurate, the user study displayed a disproportionate number of incorrect predictions to provide more illustrated examples of XAI explanations. This warped participants' perception of the underlying model's effectiveness, and may have influenced their trust and preference for each XAI technique."}),"\n",(0,n.jsx)(t.p,{children:"Also related to data representations, the user study team had to decide the boundaries between what the XAI technique was explaining and what the particular package used to apply each technique was explaining. For example, The LIME package default output was changed to more closely align with SHAP's output. Many participants complained about the ugliness of the LIME output, these shortcomings were tied to the implementation not the technique, however we did not separate these complaints in the final analysis."}),"\n",(0,n.jsx)(t.h3,{id:"small-sample-size",children:"Small sample size"}),"\n",(0,n.jsx)(t.p,{children:"With only 13 participants, the study was not large enough to draw statistically significant conclusions. Future studies should aim to have a larger sample size to ensure that the results are not due to random chance. However, prior published research used similar sample sizes."}),"\n",(0,n.jsx)(t.h3,{id:"introducing-xai-across-experimenters",children:"Introducing XAI Across Experimenters"}),"\n",(0,n.jsx)(t.p,{children:"Central to the study was a participant's ability to understand each XAI technique. Particularly on the MOOC user study, the graphical explanations are not necessarily self-evident (besides Anchor's prose), and each XAI technique answers slightly different questions. In early iterations of the study, experiments observed experimenters' backgrounds influencing how they present each technique, causing different participants to have massively different understandings of each technique. This inconsistency limited the comparability of participants interviewed by different experimenters. To mitigate this in Ribeiro's main study, participants were shown a consistent graphic and text to describe each technique in a consistent form. But to the inherently interview based methods, this shortcoming was not fully mitigated."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Introduction to each XAI technique",src:i(2624).c+"",width:"960",height:"540"})}),"\n",(0,n.jsx)(t.h2,{id:"resnet-survey-limitations",children:"ResNet Survey Limitations"}),"\n",(0,n.jsx)(t.h3,{id:"data-representations-1",children:"Data representations"}),"\n",(0,n.jsx)(t.p,{children:"Anchoring, LIME, and Shapley showed their explanations in different ways, which sometimes made it difficult to separate comments about the form of display from comments about the explanations themselves."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Anchoring displayed the unaltered anchor but blacked out the rest of the image."}),"\n",(0,n.jsx)(t.li,{children:"LIME displayed the whole image, highlighting in green the parts it deemed most important to the model."}),"\n",(0,n.jsx)(t.li,{children:"Shapley displayed its explanations with a heat map, overlaying the image with blue and red squares whose brightness indicated the importance of the pixel group in the model's decision."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The different data representations all have their pros and cons (Shapley can convey more information by having more values pixel groups can take, but the others tend to be less cluttered and more intuitive explanations), a purer comparison of the techniques could be achieved with matching visualizations."}),"\n",(0,n.jsx)(t.h3,{id:"superpixels-vs-pixel-groups",children:"Superpixels vs pixel groups"}),"\n",(0,n.jsx)(t.p,{children:"All three explanations techniques need to merge pixels together to be computationally feasible, and in an ideal world the techniques would have used the same condensation algorithms to remove this as a confounding variable. Unfortunately, Shapley splits the image into a grid of squares, while LIME and Anchoring use super pixelation algorithms to group like pixels into shapes. The Anchoring and LIME packages also use different superpixelation algorithms, meaning that they do not have the same set of possible explanations, which would be ideal for evaluating them head to head."})]})}function c(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2624:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/lockup-center-large-c0dd8c1bfb2c4d23c134379ab0cb67e2.png"},2172:(e,t,i)=>{i.d(t,{I:()=>r,M:()=>o});var n=i(1504);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);