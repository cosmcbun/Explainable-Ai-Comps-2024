"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[1792],{6436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>u});var s=n(7624),i=n(2172),r=n(1504),d=n(2774);const l=()=>{const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(null),[l,o]=(0,r.useState)(null),a=e=>{t(e.target.value)};return(0,r.useEffect)((()=>{d.c.get("https://xai-mlp.glitch.me/")})),(0,s.jsxs)("div",{children:[(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"viewed"}),(0,s.jsx)("td",{children:"gender"}),(0,s.jsx)("td",{children:"grade"}),(0,s.jsx)("td",{children:"nevents"}),(0,s.jsx)("td",{children:"ndays_act"}),(0,s.jsx)("td",{children:"nplay_video"}),(0,s.jsx)("td",{children:"nchapters"}),(0,s.jsx)("td",{children:"age"}),(0,s.jsx)("td",{children:"votes"}),(0,s.jsx)("td",{children:"num_words"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"viewed",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"gender",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"grade",type:"number",onChange:a,placeholder:"0.0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"nevents",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"ndays_act",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"nplay_video",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"nchapters",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"age",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"votes",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{id:"num_words",type:"number",onChange:a,placeholder:"0",style:{width:"50px"}})})]})]})}),(0,s.jsx)("button",{className:"queryButton",onClick:function(){try{d.c.post("https://xai-mlp.glitch.me/predict/",{viewed:0|document.getElementById("viewed").value,gender:0|document.getElementById("gender").value,grade:0|document.getElementById("grade").value,nevents:0|document.getElementById("nevents").value,ndays_act:0|document.getElementById("ndays_act").value,nplay_video:0|document.getElementById("nplay_video").value,nchapters:0|document.getElementById("nchapters").value,age:0|document.getElementById("age").value,votes:0|document.getElementById("votes").value,num_words:0|document.getElementById("num_words").value},{headers:{"Content-Type":"application/json"}}).then((e=>{let t=e.data.Probability.map((e=>e.toFixed(3))),n=[t[0],t[1],["#FF006F","#0082FF"]];console.log("PROBABILITY: ",e.data.Probability),console.log("RESULT:",n),n[0]<n[1]&&(n[2]=["#0082FF","#FF006F"]),i(n),o(null);let s=document.getElementsByClassName("progressBar");for(let r=0;r<s.length;r++){let d=0,l=setInterval(a,10);function a(){d>=100*e.data.Probability[r]?clearInterval(l):(d++,s[r].style.width=d)}}}))}catch(l){console.error("Error fetching data:",l),o("Error fetching data"),i(null)}},children:"Query"}),l&&(0,s.jsx)("p",{children:l}),n&&(0,s.jsx)("div",{className:"queryOutline",children:(0,s.jsxs)("svg",{style:{width:"100%",height:"79px"},children:[(0,s.jsx)("text",{x:"20",y:"20",children:"Prediction probabilities"}),(0,s.jsxs)("g",{children:[(0,s.jsx)("rect",{x:"120",className:"progressBar",y:"35",height:"17",width:100*n[0],stroke:"black",style:{fill:n[2][0]}}),(0,s.jsx)("text",{x:120+100*n[0]+5,y:"49",fill:"black",style:{font:"14px tahoma, sans-serif"},children:n[0]}),(0,s.jsx)("text",{x:"110",y:"49",fill:"black",textAnchor:"end",style:{font:"14px tahoma, sans-serif"},children:"Not Completed"}),(0,s.jsx)("rect",{x:"120",className:"progressBar",y:"57",height:"17",width:100*n[1],stroke:"black",style:{fill:n[2][1]}}),(0,s.jsx)("text",{x:120+100*n[1]+5,y:"71",fill:"black",style:{font:"14px tahoma, sans-serif"},children:n[1]}),(0,s.jsx)("text",{x:"110",y:"71",fill:"black",textAnchor:"end",style:{font:"14px tahoma, sans-serif"},children:"Completed"})]})]})})]})},o={},a="MOOC Dropout Prediction",h={id:"Methodology/MOOC",title:"MOOC Dropout Prediction",description:"Massive Online Open Courses (MOOCs)",source:"@site/docs/Methodology/MOOC.md",sourceDirName:"Methodology",slug:"/Methodology/MOOC",permalink:"/Explainable-Ai-Comps-2024/Methodology/MOOC",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Methodology/MOOC.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Methodology",permalink:"/Explainable-Ai-Comps-2024/category/methodology"},next:{title:"ResNet Animal Classification",permalink:"/Explainable-Ai-Comps-2024/Methodology/ResNet"}},c={},u=[{value:"Massive Online Open Courses (MOOCs)",id:"massive-online-open-courses-moocs",level:2},{value:"The Data",id:"the-data",level:2},{value:"Our Models",id:"our-models",level:2},{value:"Why explain these AIs?",id:"why-explain-these-ais",level:2},{value:"What features does our MOOC dataset provide?",id:"what-features-does-our-mooc-dataset-provide",level:2}];function x(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"mooc-dropout-prediction",children:"MOOC Dropout Prediction"}),"\n","\n","\n",(0,s.jsx)(t.h2,{id:"massive-online-open-courses-moocs",children:"Massive Online Open Courses (MOOCs)"}),"\n",(0,s.jsx)(t.p,{children:"This project\u2019s second model involves machine learning models trained to predict student dropout based on interaction data in MOOCs (Massive Open Online Courses). This is an interesting problem, as their low cost and easily accessible nature compared to traditional college education has caused a drastic rise in interest in MOOCs recently. Despite their popularity, however, dropout rates remain extremely high, often exceeding 90%. As such, teachers of MOOCs must devote significant amounts of time just to figuring out resource allocation - when there are more than 60 thousand students in your course, how can you decide who needs help?"}),"\n",(0,s.jsx)(t.p,{children:"One pertinent answer may be machine learning."}),"\n",(0,s.jsx)(t.h2,{id:"the-data",children:"The Data"}),"\n",(0,s.jsxs)(t.p,{children:["The MOOC dropout dataset contains a set of 42 features and a boolean value describing whether the student ",(0,s.jsx)(t.strong,{children:"completed"})," or ",(0,s.jsx)(t.strong,{children:"dropped out"})," of the course. In accordance with ",(0,s.jsx)(t.a,{href:"https://www.irojournals.com/jscp/V2/I3/01.pdf",children:"Vignesh Muthukar's implementation"}),", we narrowed the data down to 10 pertinent features:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"viewed"}),": whether the student has ever opened the course (",(0,s.jsx)(t.em,{children:"Average"}),": 0.61)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"gender"}),": female = 0, male = 1 (no third option given) (",(0,s.jsx)(t.em,{children:"Average"}),": 0.9)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"grade"}),": student\u2019s grade at the time of gathering (",(0,s.jsx)(t.em,{children:"Average"}),": 3.4%)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nevents"}),": how much they interacted with the course (",(0,s.jsx)(t.em,{children:"Average"}),": 535)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ndays_active"}),": how many days they logged in (",(0,s.jsx)(t.em,{children:"Average"}),": 6)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nplay_video"}),": how many times they watched a video (",(0,s.jsx)(t.em,{children:"Average"}),": 58)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nchapters"}),": how lessons they completed (",(0,s.jsx)(t.em,{children:"Average"}),": 2)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"age"}),": age of student (",(0,s.jsx)(t.em,{children:"Average"}),": 26)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"votes"}),": how many times they voted on the course forum (",(0,s.jsx)(t.em,{children:"Average"}),": 0.67)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"num_words"}),": how many total words they wrote in the course forum (",(0,s.jsx)(t.em,{children:"Average"}),": 79)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here are a few examples of the datapoints in the set. the students from the first two rows completed the course, while the last two dropped out."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"viewed"}),(0,s.jsx)(t.th,{children:"gender"}),(0,s.jsx)(t.th,{children:"grade"}),(0,s.jsx)(t.th,{children:"nevents"}),(0,s.jsx)(t.th,{children:"ndays_act"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"nplay_video"})}),(0,s.jsx)(t.th,{children:"nchapters"}),(0,s.jsx)(t.th,{children:"age"}),(0,s.jsx)(t.th,{children:"votes"}),(0,s.jsx)(t.th,{children:"num_words"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"0.95"}),(0,s.jsx)(t.td,{children:"14005"}),(0,s.jsx)(t.td,{children:"65"}),(0,s.jsx)(t.td,{children:"361"}),(0,s.jsx)(t.td,{children:"16"}),(0,s.jsx)(t.td,{children:"24"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"17"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"0.85"}),(0,s.jsx)(t.td,{children:"4717"}),(0,s.jsx)(t.td,{children:"43"}),(0,s.jsx)(t.td,{children:"770"}),(0,s.jsx)(t.td,{children:"18"}),(0,s.jsx)(t.td,{children:"27"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"358"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"0.03"}),(0,s.jsx)(t.td,{children:"1529"}),(0,s.jsx)(t.td,{children:"19"}),(0,s.jsx)(t.td,{children:"18"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"15"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"0.04"}),(0,s.jsx)(t.td,{children:"4051"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"460"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"17"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"23"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"our-models",children:"Our Models"}),"\n",(0,s.jsx)(t.p,{children:"While a human brain may take seconds to minutes pouring over every aspect of a student in order to predict their success or failure in a course, for a machine learning model this task is trivialized to single-digit milliseconds. As such, the MOOC dropout dataset has been a popular breeding ground for model/architecture testing. While there have been numerous models constructed to make these predictions, we have chosen to use a multi-layer perceptron (a neural network architecture) and a support-vector machine, as demonstrated by Vignesh Muthukumar (Muthukumar, 2019). Initialization of each is fairly simple, as shown below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Support-Vector Machine:\nfrom sklearn import svm\nclf = svm.SVC(C=0.5, gamma='scale', probability=True)\n\n# Multi-Layer Perceptron:\nfrom sklearn.neural_network import MLPClassifier\nmlp = MLPClassifier(hidden_layer_sizes=(3, 15, 10), max_iter=1000)\n\n''' Alternate initialization for the MLPClassifier: '''\nimport keras\nmodel = keras.models.Sequential([\n            keras.layers.Dense(3, input_dim=10, activation='relu'),\n            keras.layers.Dense(15, activation='relu'),\n            keras.layers.Dense(10, activation='relu'),\n            keras.layers.Dense(2, activation='softmax')\n        ])\n"})}),"\n",(0,s.jsx)(t.p,{children:"Both of these networks achieve good results, but they can be messy, and skews in the data can make predictions unbalanced. As such, these models make for perfect candidates to explain."}),"\n",(0,s.jsx)(t.p,{children:"If you would like, you can query the Multi-Layer Perceptron here:"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.h2,{id:"why-explain-these-ais",children:"Why explain these AIs?"}),"\n",(0,s.jsx)(t.p,{children:"These models are strong candidates for explainability for several reasons. First, given the notorious \u201cblack box\u201d nature of neural networks and high-dimension SVMs, there are few options (apart from explainability methods) that offer easy insight into why the model may classify certain students as likely or unlikely to drop out of the MOOC. Additionally, there can be potentially significant ramifications for these students if they are predicted as likely to drop out, or not \u2013 a student flagged as likely to drop out may lose motivation, and the prediction may become a self fulfilling prophecy in cases where the student would have otherwise stayed in the course. On the other hand, a student who is truly at risk of dropping out but not identified as such may fail to be noticed by the instructional staff, due to the large and relatively autonomous nature of MOOCs. These significant stakes call for added scrutiny and insight into models making these predictions. Finally, explainability methods applied to MOOC dropout prediction can offer insight into what features successful and unsuccessful students exhibit."}),"\n",(0,s.jsx)(t.h2,{id:"what-features-does-our-mooc-dataset-provide",children:"What features does our MOOC dataset provide?"}),"\n",(0,s.jsx)(t.p,{children:"We used the following ten features in our predictions. Below you will find a short description of each, along with their average values:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"viewed"}),": whether the student has ever opened the course (",(0,s.jsx)(t.em,{children:"Average"}),": 0.61)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"gender"}),": female = 0, male = 1 (no third option given) (",(0,s.jsx)(t.em,{children:"Average"}),": 0.9)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"grade"}),": student\u2019s grade at the time of gathering (",(0,s.jsx)(t.em,{children:"Average"}),": 3.4%)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nevents"}),": how much they interacted with the course (",(0,s.jsx)(t.em,{children:"Average"}),": 535)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ndays_active"}),": how many days they logged in (",(0,s.jsx)(t.em,{children:"Average"}),": 6)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nplay_video"}),": how many times they watched a video (",(0,s.jsx)(t.em,{children:"Average"}),": 58)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nchapters"}),": how lessons they completed (",(0,s.jsx)(t.em,{children:"Average"}),": 2)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"age"}),": age of student (",(0,s.jsx)(t.em,{children:"Average"}),": 26)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"votes"}),": how many times they voted on the course forum (",(0,s.jsx)(t.em,{children:"Average"}),": 0.67)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"num_words"}),": how many total words they wrote in the course forum (",(0,s.jsx)(t.em,{children:"Average"}),": 79)"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);