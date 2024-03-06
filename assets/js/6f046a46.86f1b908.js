"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[8496],{5868:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var a=o(7624),s=o(2172);const n={},i="ResNet",r={id:"Methodology/ResNet",title:"ResNet",description:"This project\u2019s first model of focus is an implementation of the Residual Neural Network (ResNet) architecture, a derivative of the basic convolutional neural network. This network was trained on ImageNet, an extremely common dataset for image classification, and will be used in conjunction with a dataset for tumor classification such as that of Panigrahi (2021) and Sarta (2020). Coined by He et al. (2015), ResNet addresses the issues of neural networks\u2019 degradation, where training and evaluation losses spike and lose predictability as a model\u2019s depth passes a certain point. The proposed solution consists of identity mapping, whereby layers pass their outputs to a mapping function that performs one of two actions: it may shortcut part of the input to be recombined at a deeper layer (discussed in Hochreiter et al., 1997), or it may utilize a nonlinear function which asymptotically approximated the use of multiple linear layers at once (introduced in J\xe9gou et al., 2012). This development allows deep neural networks to have no worse loss than shallow ones of appropriate depth.",source:"@site/docs/Methodology/ResNet.md",sourceDirName:"Methodology",slug:"/Methodology/ResNet",permalink:"/Explainable-Ai-Comps-2024/Methodology/ResNet",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Methodology/ResNet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MOOC Dropout Prediction",permalink:"/Explainable-Ai-Comps-2024/Methodology/MOOC"},next:{title:"LIME",permalink:"/Explainable-Ai-Comps-2024/category/lime"}},l={},d=[{value:"Our models",id:"our-models",level:2},{value:"Animals",id:"animals",level:3},{value:"Tumors",id:"tumors",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"resnet",children:"ResNet"}),"\n",(0,a.jsx)(t.p,{children:"This project\u2019s first model of focus is an implementation of the Residual Neural Network (ResNet) architecture, a derivative of the basic convolutional neural network. This network was trained on ImageNet, an extremely common dataset for image classification, and will be used in conjunction with a dataset for tumor classification such as that of Panigrahi (2021) and Sarta (2020). Coined by He et al. (2015), ResNet addresses the issues of neural networks\u2019 degradation, where training and evaluation losses spike and lose predictability as a model\u2019s depth passes a certain point. The proposed solution consists of identity mapping, whereby layers pass their outputs to a mapping function that performs one of two actions: it may shortcut part of the input to be recombined at a deeper layer (discussed in Hochreiter et al., 1997), or it may utilize a nonlinear function which asymptotically approximated the use of multiple linear layers at once (introduced in J\xe9gou et al., 2012). This development allows deep neural networks to have no worse loss than shallow ones of appropriate depth."}),"\n",(0,a.jsx)(t.p,{children:"ResNet showed that model degradation could be overcome, thereby rendering deep neural networks much more feasible and revolutionizing the field. With its proposal came the ability for a model to reliably maintain hundreds and even thousands of layers. The uptick in depth that ResNet caused is exactly what makes it a perfect candidate for analysis \u2014 such complexity is necessarily harder to explain, and will hopefully allow the three methods to highlight specifically their strengths and weaknesses."}),"\n",(0,a.jsx)(t.h2,{id:"our-models",children:"Our models"}),"\n",(0,a.jsxs)(t.p,{children:["For the purposes of our project, we worked on ",(0,a.jsx)(t.a,{href:"https://pytorch.org/",children:"PyTorch"})," and ended up using two different version of ResNet, which would allow us to classify images from two different datasets. These were as follows:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Animals (cats and dogs specifically, from a variety of different breeds)"}),"\n",(0,a.jsx)(t.li,{children:"MRI scans of brain tumors (total of 4 classes: glioma, meningoma, no tumor, and pituitary)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We chose the Animals dataset due to the widespread availability of cats/dogs image sets, and the images of cute animals were likely to entice participants for our user study. As for the Tumors dataset, this was done primarily due to the existence of prior research into tumor classification, which reveals machine learning's utility in the medical field."}),"\n",(0,a.jsx)(t.h3,{id:"animals",children:"Animals"}),"\n",(0,a.jsxs)(t.p,{children:["For Animals dataset, we decided to use the pretrained version of ResNet18, which was trained on millions of images from the ",(0,a.jsx)(t.a,{href:"https://www.image-net.org/",children:"ImageNet"})," database, each labeled from a large selection of different classes. While these were not limited to just cats and dogs, ImageNet itself includes a wide variety of cat and dog breeds within its list of classes, meaning it would correctly recognize either a cat or a dog from our dataset roughly 94% of the time (according to our tests)."]}),"\n",(0,a.jsx)(t.p,{children:"The way we obtained the pretrained weights for the model was simple, and could be done in two lines of code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Python",children:"from torchvision import models\n\npretrained_weights = models.ResNet18_Weights.IMAGENET1K_V1\nmodel_animals = models.resnet18(weights=pretrained_weights)\n"})}),"\n",(0,a.jsx)(t.p,{children:"With this neural network in place, we are ready to classify any cat or dog that we choose!"}),"\n",(0,a.jsx)(t.h3,{id:"tumors",children:"Tumors"}),"\n",(0,a.jsx)(t.p,{children:"Obtaining our model for the Tumors dataset proved a little trickier, as unlike with cats and dogs, ImageNet does not contain MRI scans of brain tumors. Thus, we had to train ResNet model ourselves, using the images and 4 classes from the tumors dataset."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Python",children:"from torch.utils.data import DataLoader\ntrain_tumor_loader = DataLoader(train_tumor_data, shuffle=True) # train_tumor_data was obtained using torchvision.datasets.ImageFolder()\n\nmodel_mri = models.resnet18(progress=True)\noptimizer = optim.Adam(model_mri.parameters(), lr=1e-3)\ncriterion = nn.CrossEntropyLoss()\nmodel_mri.fc = nn.Sequential(nn.Linear(2048, 512),\n                                 nn.ReLU(),\n                                 nn.Dropout(0.2),\n                                 nn.Linear(512, 10),\n                                 nn.LogSoftmax(dim=1))\n\n# train the model\nepochs = 20\nfor epoch in range(epochs):\n    for step, (x, y) in enumerate(train_tumor_loader):\n        model_mri.train()\n        logits = model_mri(x)\n        loss = criterion(logits, y)\n\n        optimizer.zero_grad()\n        loss.backward()\n        optimizer.step()\n"})}),"\n",(0,a.jsx)(t.p,{children:"With the model trained, we are also ready to classify MRI scans of brain tumors."})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>r,M:()=>i});var a=o(1504);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);