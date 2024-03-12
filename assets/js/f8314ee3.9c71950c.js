"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[8332],{2536:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=i(7624),s=i(2172);const a={sidebar_position:6,title:"ResNet: Comparative Results"},o="ResNet: Comparative Results",l={id:"User Study/ResNet - Comparative Results",title:"ResNet: Comparative Results",description:"Summary",source:"@site/docs/User Study/ResNet - Comparative Results.md",sourceDirName:"User Study",slug:"/User Study/ResNet - Comparative Results",permalink:"/Explainable-Ai-Comps-2024/User Study/ResNet - Comparative Results",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/User Study/ResNet - Comparative Results.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"ResNet: Comparative Results"},sidebar:"tutorialSidebar",previous:{title:"ResNet: Methodology",permalink:"/Explainable-Ai-Comps-2024/User Study/ResNet - Methodology"},next:{title:"ResNet: Qualitative Takeaways",permalink:"/Explainable-Ai-Comps-2024/User Study/ResNet - Qualitative Takeaways"}},r={},h=[{value:"Summary",id:"summary",level:2},{value:"Shapley Values",id:"shapley-values",level:2},{value:"LIME",id:"lime",level:2},{value:"Anchoring",id:"anchoring",level:2},{value:"Clashing explanations",id:"clashing-explanations",level:2}];function c(e){const t={blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"resnet-comparative-results",children:"ResNet: Comparative Results"}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Shapley was the favorite method, especially among participants with more CS experience. LIME was also well-liked."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Explanations that better correlated with what people would've looked at themselves were received better."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"While experience with AI was not strongly correlated with favorite explanations, those with more AI experience were less willing to accept the differences between the explanations without worry."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"shapley-values",children:"Shapley Values"}),"\n",(0,n.jsx)(t.p,{children:"Shapley values, like in MOOC, were numerically ranked as the most trusted method. 8 of our 12 participants said they'd trust it to explain a model's thought process in new examples, as compared to 6 and 4 for LIME and Anchor respectively. Yet the praise of its visualizations was not universal. The heatmaps, at times, could look somewhat random, or cover up the image. As users put it,"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Shapley has more specificity, but sacrifices intuitiveness."'}),"\n",(0,n.jsx)(t.li,{children:'"If Shapley always had the edge in accuracy I would choose that but anchoring and lime have better display"'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Some of this, admittedly, is hard to disentangle from the presentation of the results (as opposed to the techniques)."}),"\n",(0,n.jsx)(t.h2,{id:"lime",children:"LIME"}),"\n",(0,n.jsx)(t.p,{children:"In both surveys, LIME ranked as the second highest technique in terms of both trust and overall preference, beating Anchors but ending behind Shapley. Notably, LIME stood out as the favorite technique for participants who did not have a machine learning background. It received praise for its method of visualization, which isolated the area of interest within a highlighted boundary, making it easy to understand. However, it was also criticized for being somewhat inconsistent depending on the image."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"LIME I like the most because you can see what part of the image caused decision with more specificity"'}),"\n",(0,n.jsx)(t.li,{children:'"LIME had the biggest failures - like carton - but big successes, like snake."'}),"\n",(0,n.jsx)(t.li,{children:'"Visually LIME is compelling"'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Overall, it appears participants had a generally positive opinion of this technique."}),"\n",(0,n.jsx)(t.h2,{id:"anchoring",children:"Anchoring"}),"\n",(0,n.jsx)(t.p,{children:"Anchoring was seen as the least helpful of the three techniques, with no participants ranking it as their favorite. Occasionally, it performed well relative to the other techniques, like this explanation as to why our model predicted this image as a carton:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Figure H",src:i(460).c+"",title:"An image of a cat in a box, with explanations for why it was predicted as a carton.",width:"1056",height:"816"})}),"\n",(0,n.jsx)(t.p,{children:'Seven participants said this Anchoring explanation improved their understanding of the model, as opposed to two for Shapley and one for LIME, with one participant saying "Anchoring makes more sense in this one because we see the whole carton and less background".'}),"\n",(0,n.jsx)(t.p,{children:"For the most part though, Anchoring was not very illuminating. In both of the following examples, Anchoring was seen as far less effective (at least five less participants saying it improved model understanding than the leading technique)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Figure B",src:i(236).c+"",title:"An image of a cat, with explanations for why it was predicted as a horned viper",width:"1056",height:"816"}),"\n",(0,n.jsx)(t.img,{alt:"Figure C",src:i(4828).c+"",title:"An image of a pug with a tennis ball, with explanations for why it was predicted as a tennis ball.",width:"1056",height:"816"})]}),"\n",(0,n.jsx)(t.p,{children:"Participants gave some of the following quotes criticizing anchoring"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Anchoring highlights a lot of the pug, which is worrying"'}),"\n",(0,n.jsx)(t.li,{children:'"Anchoring is not very helpful because it has almost the whole image highlighted"'}),"\n",(0,n.jsx)(t.li,{children:'"Anchoring looked at random stuff in the background that didn\'t make sense"'}),"\n",(0,n.jsx)(t.li,{children:'"It would be nice if anchoring had value"'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"clashing-explanations",children:"Clashing explanations"}),"\n",(0,n.jsx)(t.p,{children:"One phenomenon that confused participants was when the techniques gave contradictory explanations. One example of this is the picture of a dog that the model thought was a polar bear."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Figure J",src:i(8612).c+"",title:"An image of a dog, with explanations for why it was predicted as a polar bear.",width:"1056",height:"816"})}),"\n",(0,n.jsx)(t.p,{children:'LIME focused on the dog\'s head, whereas Anchoring included most of the dog and much of the background but omitted much of the head, and Shapley highlighted some of the head red and some blue. All explanations are plausible in isolation, but one participant said "If I was given any single one I would say they help, but they confuse in total". After seeing all of the examples, another participant said "it is actively confusing to have different explanations for the same model. If they are seeing the same predictions, they should be showing the same explanation."'})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},460:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/carton_cat-slide-5990cdedeb06f2d327969300dd943966.jpg"},236:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/horned_viper-slide-057eef7b9c19c2d8b25bad1697df0d3e.jpg"},8612:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/polar_bear-slide-e238527e3059af9c15c839066d968eaa.jpg"},4828:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/pug-slide-94b0387346631bc876dc98b535d08612.jpg"},2172:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>o});var n=i(1504);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);