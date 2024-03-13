"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[6510],{8816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var s=t(7624),i=t(2172);const r={sidebar_position:2},o="Anchors on MOOC",h={id:"Anchors/MOOC-Anchors",title:"Anchors on MOOC",description:"Introduction",source:"@site/docs/Anchors/MOOC-Anchors.md",sourceDirName:"Anchors",slug:"/Anchors/MOOC-Anchors",permalink:"/Explainable-Ai-Comps-2024/Anchors/MOOC-Anchors",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Anchors/MOOC-Anchors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Anchoring",permalink:"/Explainable-Ai-Comps-2024/Anchors/Introduction"},next:{title:"Anchors on ResNet",permalink:"/Explainable-Ai-Comps-2024/Anchors/Animals"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Anchors Setup",id:"anchors-setup",level:2},{value:"Anchors on MOOC Example",id:"anchors-on-mooc-example",level:2},{value:"Note on Anchors Precision and Coverage",id:"note-on-anchors-precision-and-coverage",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"anchors-on-mooc",children:"Anchors on MOOC"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Applying Anchors to MOOC generates plain-text explanations, which consist of a set of rules. Each rule is satisfied by the data point being explained. Anchors claims that for any datapoint that meets the given conditions, the black-box classifier it is explaining will predict the same as it did for the input data \u2013 the rules consist of the sufficient condition for the prediction. This allows for coverage beyond the input data, which is a unique feature of Anchors with respect to our uses of LIME and Shapley."}),"\n",(0,s.jsx)(n.h2,{id:"anchors-setup",children:"Anchors Setup"}),"\n",(0,s.jsx)(n.p,{children:"To create Anchors on tabular data, the Anchors package is installed, and the multi-layer perceptron (MLP) model is trained as usual. Then, an explainer object is created. Unlike Shapley and LIME, Anchors only needs the binary prediction from the model, not the real-valued or confidence output. Once Anchors knows the names of the different features in the data, and their type, it will be able to output its plain text explanations for any input data point, after preforming its algorithm (see --hyperlink to main anchor article--). (See --hyperlink to git repo/notebook-- for an .ipynb detailing this process) TODO -- LINKS"}),"\n",(0,s.jsx)(n.h2,{id:"anchors-on-mooc-example",children:"Anchors on MOOC Example"}),"\n",(0,s.jsx)(n.p,{children:"Consider the following student:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"viewed"}),(0,s.jsx)(n.th,{children:"gender"}),(0,s.jsx)(n.th,{children:"grade"}),(0,s.jsx)(n.th,{children:"nevents"}),(0,s.jsx)(n.th,{children:"ndays_act"}),(0,s.jsx)(n.th,{children:"nplay_video"}),(0,s.jsx)(n.th,{children:"nchapters"}),(0,s.jsx)(n.th,{children:"age"}),(0,s.jsx)(n.th,{children:"votes"}),(0,s.jsx)(n.th,{children:"num_words"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"0.95"}),(0,s.jsx)(n.td,{children:"14005"}),(0,s.jsx)(n.td,{children:"65"}),(0,s.jsx)(n.td,{children:"1110"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"17"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"The MLP predicts they will pass the course (with 72% confidence). Anchors yields the following set of rules (at 99% precision):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"nevents > 205.00"}),"\n",(0,s.jsx)(n.li,{children:"nplay_video > 362.00"}),"\n",(0,s.jsx)(n.li,{children:"ndays_act > 5.00"}),"\n",(0,s.jsx)(n.li,{children:"nchapters > 3.00"}),"\n",(0,s.jsx)(n.li,{children:"grade > 0.00"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The interpretation of this output is that, for any student that has greater than 205 events, ",(0,s.jsx)(n.em,{children:"and"})," has viewed over 362 videos, ",(0,s.jsx)(n.em,{children:"and"})," has been active for over 5 days, ",(0,s.jsx)(n.em,{children:"and"})," has opened greater than 3 chapters, ",(0,s.jsx)(n.em,{children:"and"})," has a non-zero grade will also pass the course. This set of rules represent a sufficient condition for the prediction. Anchors is explaining the model by giving an approximation of its thinking at this data point: Anchors says the model, in these conditions, behaves this way. For instance, acording to Anchors, this student,"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"viewed"}),(0,s.jsx)(n.th,{children:"gender"}),(0,s.jsx)(n.th,{children:"grade"}),(0,s.jsx)(n.th,{children:"nevents"}),(0,s.jsx)(n.th,{children:"ndays_act"}),(0,s.jsx)(n.th,{children:"nplay_video"}),(0,s.jsx)(n.th,{children:"nchapters"}),(0,s.jsx)(n.th,{children:"age"}),(0,s.jsx)(n.th,{children:"votes"}),(0,s.jsx)(n.th,{children:"num_words"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"0.32"}),(0,s.jsx)(n.td,{children:"862"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"3826"}),(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"33"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"332"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"has a 99% chance of being classified as passing, since they satisfy all the above rules. This is the unique feature of Anchors: its clearly definied coverage allows for limited extrapolation of explanation beyond the input data. On the other hand, consider this student:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"viewed"}),(0,s.jsx)(n.th,{children:"gender"}),(0,s.jsx)(n.th,{children:"grade"}),(0,s.jsx)(n.th,{children:"nevents"}),(0,s.jsx)(n.th,{children:"ndays_act"}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"nplay_video"})}),(0,s.jsx)(n.th,{children:"nchapters"}),(0,s.jsx)(n.th,{children:"age"}),(0,s.jsx)(n.th,{children:"votes"}),(0,s.jsx)(n.th,{children:"num_words"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"0.95"}),(0,s.jsx)(n.td,{children:"14005"}),(0,s.jsx)(n.td,{children:"65"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"361"})}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"17"})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["Because this student does not completely meet the sufficient conditions (even though apart from nplay_video, it is identical), Anchors makes ",(0,s.jsx)(n.em,{children:"no prediction"})," -- note that failing to meet a sufficeint condition does not negate the output, it simply makes no claim as to how the model will work on this student."]}),"\n",(0,s.jsx)(n.h2,{id:"note-on-anchors-precision-and-coverage",children:"Note on Anchors Precision and Coverage"}),"\n",(0,s.jsx)(n.p,{children:"The inherent tradeoff in creating Anchors is between precision and coverage -- the more coverage a set of Anchors provides, the lower its precision. I.e., the broader, more general of statements we try to make about a models behavior, the less accurate it will be. In the case of a particularly (lopsided?) dataset like MOOC, where 98% of the training data is non pass, it is very easy to generate an Anchor with high precision and unlimited coverage. Consider the case where our Anchors are trained to 95%, and we're generating an explanation for a student who did not pass. Anchors begins with the empty set of rules, and tests to see if it meets the threshold for precsion. Since no rules has compelte coverage, this is actually accurate 98% of the time. And, since Anchors seeks to create the simplest explanation (i.e., the fewest rules), no rules meet both conditions, and the algorithm haults. This means it is neccasary to set a very high level of precesion in our case to generate meaningful anchors in the no pass case. Thus, we must create more precise, specific explanations to derive more meaning. However, taken to the extereme, this would look like creating a set of Anchors that perfectly describe only the input data, which would be equally less helpful."})]})}function l(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>h,M:()=>o});var s=t(1504);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);