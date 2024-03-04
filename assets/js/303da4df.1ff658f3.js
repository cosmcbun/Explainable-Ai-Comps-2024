"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[9560],{8676:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=s(7624),n=s(2172);const i={"sidebar-position":5},l="Applying Shapley to the ResNet network",o={id:"Shapley Values/Shapley and Resnet",title:"Shapley and Resnet",description:"\x3c!-- SOURCES:",source:"@site/docs/Shapley Values/Shapley and Resnet.md",sourceDirName:"Shapley Values",slug:"/Shapley Values/Shapley and Resnet",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and Resnet",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Shapley Values/Shapley and Resnet.md",tags:[],version:"current",frontMatter:{"sidebar-position":5},sidebar:"tutorialSidebar",previous:{title:"Shapley and MOOC",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and MOOC"},next:{title:"Shapley's Math",permalink:"/Explainable-Ai-Comps-2024/Shapley Values/Shapley's Math"}},r={},h=[{value:"Code",id:"code",level:2},{value:"Visual Explanations of Animal Images",id:"visual-explanations-of-animal-images",level:2},{value:"Visual Explantions of MRI scans",id:"visual-explantions-of-mri-scans",level:2}];function c(e){const a={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"applying-shapley-to-the-resnet-network",children:"Applying Shapley to the ResNet network"}),"\n",(0,t.jsxs)(a.p,{children:["This section discusses the application of the ",(0,t.jsx)(a.code,{children:"shap"})," package to the standard image-recognition architecture ResNet - both a standard version and a modified one we trained on brain tumor images."]}),"\n",(0,t.jsx)(a.h2,{id:"code",children:"Code"}),"\n",(0,t.jsxs)(a.p,{children:["Despite being very different data from MOOC's, Shapley could interpret its image data in much the same way. For the cats and dogs, for instance, our ",(0,t.jsx)(a.code,{children:"Permutation"})," explainer was created as follows:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Python",children:'import shap\nimport torchvision.models as models\n# Import the model:\npretrained_weights = models.ResNet18_Weights.IMAGENET1K_V1\nanimal_model = models.resnet18(weights=pretrained_weights)\n# Create our explainer:\nmasker_blur = shap.maskers.Image("blur(128,128)", animal_X[0].shape)\nexplainer_blur = shap.Explainer(animal_torch_predict, masker_blur, output_names=class_names)\n'})}),"\n",(0,t.jsx)(a.p,{children:"The masker is an important part of running Shapley on images. When we produce a coalition of pixels to remain in the image, what do we do with the rest of the picture? We can't remove it, because the network always expects the same dimensions. Neither can we black it out, because sometimes that will resemble something in the image. We opted to blur the rest of the image in this project."}),"\n",(0,t.jsxs)(a.p,{children:["Then, using ",(0,t.jsx)(a.code,{children:"image_blur"}),", we explain a datapoint of our choice:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-Python",children:"shap_values = explainer_blur(\n    animal_picture,\n    max_evals=eval_count, batch_size=50, outputs=shap.Explanation.argsort.flip[:top_guesses]\n)\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The most important parameter here is ",(0,t.jsx)(a.code,{children:"eval_count"}),". The higher the number, the more features it will split the image into. This is, perhaps, a little strange -\xa0the image already has features. In the neural network, it's got 3 features for each pixel (one per color channel); shouldn't we reuse those?"]}),"\n",(0,t.jsxs)(a.p,{children:["The problem is that Shapley's runtime is proportional to ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsxs)(a.msup,{children:[(0,t.jsx)(a.mn,{children:"2"}),(0,t.jsx)(a.mi,{children:"n"})]})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"2^n"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6644em"}}),(0,t.jsxs)(a.span,{className:"mord",children:[(0,t.jsx)(a.span,{className:"mord",children:"2"}),(0,t.jsx)(a.span,{className:"msupsub",children:(0,t.jsx)(a.span,{className:"vlist-t",children:(0,t.jsx)(a.span,{className:"vlist-r",children:(0,t.jsx)(a.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})]})})]}),", where ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mi,{children:"n"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of features. If we broke the image down into pixels, then, it'd take far too long to analyze. To this end, then, this Shapley implimentation breaks up the image into a grid with regions that are small but are still larger than a pixel. An alternative method\xa0-\xa0used by ",(0,t.jsx)(a.a,{href:"/Explainable-Ai-Comps-2024/LIME/ResNet",children:"LIME"})," - is to seperate the image into a few clumps grouped by pixel color instead of location in image. We decided to use the grid, however, because it was better-integrated with the Shapley package and better showcased its strengths."]}),"\n",(0,t.jsxs)(a.p,{children:["The other parameter here, ",(0,t.jsx)(a.code,{children:"top_guesses"}),", here specifies how many of the model's most confident answers you would like predictions for. Because the model outputs confidence for each of the thousand classes, not just the top, we can create the Shapley visualization for any class.\nWith the Shapley values in hand, we can now generate helpful visualizations."]}),"\n",(0,t.jsx)(a.h2,{id:"visual-explanations-of-animal-images",children:"Visual Explanations of Animal Images"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Abyssinian Cat",src:s(4836).c+"",title:"An Orange Cat",width:"378",height:"300"})}),"\n",(0,t.jsx)(a.p,{children:"The animal above is an Abyssinian cat. ResNet, our neural network, misidentified it as a snake - or perhaps a hat - before a cat. To be specific, its guesses in order were:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Horned Viper: 0.21"}),"\n",(0,t.jsx)(a.li,{children:"Indian Cobra: 0.09"}),"\n",(0,t.jsx)(a.li,{children:"Sidewinder: 0.08"}),"\n",(0,t.jsx)(a.li,{children:"Cowboy Hat: 0.07"}),"\n",(0,t.jsx)(a.li,{children:"Egyptian cat: 0.06"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Followed by ResNet's 995 other classes, which it deemed less likely than these five. While it's not particularly confident that the subject of the image is a snake, it's certainly held as the most likely outcome. So, we can use Shapley's method to get a picture of why ResNet might have made this mistake."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Cat",src:s(108).c+"",title:"Top guesses of the model and what pixels made it choose those classes",width:"1800",height:"500"})}),"\n",(0,t.jsxs)(a.p,{children:["The visualization produced by Shapley for each prediction is a heatmap. For each region\xa0-\xa0their number determined by ",(0,t.jsx)(a.code,{children:"eval_count"})," -\xa0the overlay ranges from red (indicating that the area was instrumental in making the model identify the image as that class) to blue (indicating that it made the machine less likely to pick that class). For instance, on the snake predictions, the end of the tail, face, (and back, somewhat) are highlighted in red. One could imagine that the shape of the tail, especially, suggests snake to the model. On the other hand, the blanket and darker back of the cat are colored in blue, indicating that they were reasons to not call the cat a snake."]}),"\n",(0,t.jsx)(a.h2,{id:"visual-explantions-of-mri-scans",children:"Visual Explantions of MRI scans"}),"\n",(0,t.jsxs)(a.p,{children:["In addition to ResNet, we also ran a ",(0,t.jsx)(a.a,{href:"/Explainable-Ai-Comps-2024/Methodology/ResNet#tumors",children:"model on a dataset of brain scans"}),". Becuase Shapley is model-agnostic, only a minimal change was required to the code to analyze tumor data as well."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Meningioma-positive Brain Scan",src:s(3136).c+"",title:"Top guesses of the model",width:"1219",height:"359"})}),"\n",(0,t.jsx)(a.p,{children:"In this case - as with all of the other brain scan predictions we explained - Shapley's picture is far less dynamic. Moreover, the actual tumor (white and slightly below the middle of the picture) is only very slightly highlighted, while an extranious region at the top of the head is more strongly highlighted. This may point to it being a weaker model that is more reliant on guesswork; undeniably true. While this model got around 60-70% accuracy on our data with four classes, ResNet got 93.8% with a thousand classes. However, it does point to one interesting conclusion the model may have drawn: to look for tumors near the skull. If we were to tune the model, then, we could provide more examples of tumors that were not found at the edge of the brain."})]})}function d(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},108:(e,a,s)=>{s.d(a,{c:()=>t});const t=s.p+"assets/images/abyssinian-3-hd-6560f63ede2052cb22babf4fc6356fc4.png"},4836:(e,a,s)=>{s.d(a,{c:()=>t});const t=s.p+"assets/images/abyssinian-base-83eb3a51190a23d303cef28ec88ac7b2.jpg"},3136:(e,a,s)=>{s.d(a,{c:()=>t});const t=s.p+"assets/images/meningioma-6921d06e96327d7aaaeb0e2a3c4da552.png"},2172:(e,a,s)=>{s.d(a,{I:()=>o,M:()=>l});var t=s(1504);const n={},i=t.createContext(n);function l(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);