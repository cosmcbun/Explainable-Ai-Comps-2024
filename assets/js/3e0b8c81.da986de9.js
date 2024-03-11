"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[5992],{1772:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(7624),n=t(2172);const i={"sidebar-position":2},o="Adversarial Explanations",r={id:"Extensions/XAI+AdvAI",title:"Adversarial Explanations",description:"As noted in our introduction, XAI can be used to motivate and direct the design of models that users can trust to construct models that are more robust against variations in data, biases, and even active exploitation.",source:"@site/docs/Extensions/XAI+AdvAI.md",sourceDirName:"Extensions",slug:"/Extensions/XAI+AdvAI",permalink:"/Explainable-Ai-Comps-2024/Extensions/XAI+AdvAI",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/Extensions/XAI+AdvAI.md",tags:[],version:"current",frontMatter:{"sidebar-position":2},sidebar:"tutorialSidebar",previous:{title:"Tumors Case Study",permalink:"/Explainable-Ai-Comps-2024/Extensions/Tumors"},next:{title:"Posters",permalink:"/Explainable-Ai-Comps-2024/Posters"}},l={},c=[{value:"Local Search Adversary",id:"local-search-adversary",level:2},{value:"Fast Gradient Sign Method (FSGM)",id:"fast-gradient-sign-method-fsgm",level:2},{value:"Projected Gradient Descent",id:"projected-gradient-descent",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const a={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"adversarial-explanations",children:"Adversarial Explanations"}),"\n",(0,s.jsxs)(a.p,{children:["As noted in ",(0,s.jsx)(a.a,{href:"/Explainable-Ai-Comps-2024/Introduction/What%20is%20XAI",children:"our introduction"}),', XAI can be used to motivate and direct the design of models that users can trust: it "breaks down the black box." Adversarial Artificial Intelligence, on the other hand, is a field that aims to figure out weaknesses in AI classification. In a manner of speaking, by striving to find how a machine learning model can be exploited, it "causes the black box to break down." Both of these approaches to AI share a common goal: to construct models that are more robust against variations in data, biases, and even active exploitation.']}),"\n",(0,s.jsxs)(a.p,{children:["As such, we in the XAI capstone project have partnered with Jonas Bartels, Alice Cutter, Sriya Konda, Yuxin Lin, Sky Lu, and Tingjun Tu of Carleton College's ",(0,s.jsx)(a.a,{href:"https://cs.carleton.edu/cs_comps/2324/adversarial/index.php",children:"Adversarial Artificial Intelligence capstone project"})," to bring you ",(0,s.jsx)(a.em,{children:"Adversarial Explanations: an Exploration and Exploitation of Machine Thought"}),". In this section, we will present three examples of adversarial attacks on the ",(0,s.jsx)(a.code,{children:"ResNet50"})," image classifier, a deeper version of our ",(0,s.jsx)(a.a,{href:"/Explainable-Ai-Comps-2024/Methodology/ResNet",children:"ResNet18 model"}),". All attacks are carried out through black-box methods, meaning that they do not have access to any parts of the model, and all explanations are model-agnostic, meaning that they do not require a specific architecture."]}),"\n",(0,s.jsx)(a.h2,{id:"local-search-adversary",children:"Local Search Adversary"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["The Local Search adversary utilizes the concept of greedy local search. It iteratively selects a small set of pixels to perturb that eventually would cause misclassification by a deep neural network without using any gradient information. ",(0,s.jsx)("br",{}),"\n- Tingjun Tu, ",(0,s.jsx)(a.em,{children:"An Exploration of Adversarial Attacks on Image Classifiers"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Figure 1",src:t(8440).c+"",title:"Pre-perturbation and post-perturbation of an image of a Bengal cat using a Local Search adversary, each accompanied by three explanation techniques.",width:"3000",height:"2063"})}),"\n",(0,s.jsxs)(a.p,{children:["Before perturbation, our classifier correctly predicts that this is a Bengal cat with ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mn,{children:"63.1"}),(0,s.jsx)(a.mi,{mathvariant:"normal",children:"%"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"63.1\\%"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.jsx)(a.span,{className:"mord",children:"63.1%"})]})})]})," confidence. All techniques agree that the model looked at the area immediately around the cat to classify it as such. However, LIME and Anchors propose that our model also focuses a portion of the stairway to achieve this result, to which Shapley does not agree."]}),"\n",(0,s.jsxs)(a.p,{children:["After perturbation, our model becomes much more hectic, producing a prediction of \u201caltar.\u201d Each technique confirms this messiness, as we can see that the model must now look at more than half of the image to find a modicum of justification for this prediction. This hectic nature is most likely due to an utter lack of confidence, which is displayed through Shapley values: although it is not in these images, the deepest red on this graph only adds ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mo,{children:"+"}),(0,s.jsx)(a.mn,{children:"0.15"}),(0,s.jsx)(a.mi,{mathvariant:"normal",children:"%"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"+0.15\\%"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.0833em"}}),(0,s.jsx)(a.span,{className:"mord",children:"+"}),(0,s.jsx)(a.span,{className:"mord",children:"0.15%"})]})})]})," confidence to the model from base, while each red area in the original image adds ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mo,{children:"+"}),(0,s.jsx)(a.mn,{children:"0.6"}),(0,s.jsx)(a.mi,{mathvariant:"normal",children:"%"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"+0.6\\%"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.0833em"}}),(0,s.jsx)(a.span,{className:"mord",children:"+"}),(0,s.jsx)(a.span,{className:"mord",children:"0.6%"})]})})]}),". Starved for foreground artifacts by LSA's pixel-injections, the machine learning model seems to search elsewhere for any possible indication of class; therefore, upon finding the cat's sloping surroundings, it predicts \"altar.\""]}),"\n",(0,s.jsx)(a.h2,{id:"fast-gradient-sign-method-fsgm",children:"Fast Gradient Sign Method (FSGM)"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["FGSM uses the gradient of a loss function with respect to the input data to perturb each pixel in the direction that lowers the confidence of the correct prediction by a distance ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"\u03f5"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\epsilon"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"\u03f5"})]})})]}),".\n",(0,s.jsx)("br",{})," - Jonas Bartels, ",(0,s.jsx)(a.em,{children:"An Exploration of Adversarial Attacks on Image Classifiers"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Figure 2",src:t(3784).c+"",title:"Pre-perturbation and post-perturbation of an image of a German Shorthaired Pointer dog using the Fast Gradient Sign Method, each accompanied by three explanation techniques.",width:"3000",height:"2063"})}),"\n",(0,s.jsx)(a.p,{children:"Pre-adversary, the model correctly predicts that this is a German Shorthair Pointer with 89.4% confidence. All explanations seem to agree that the dog itself is the point of focus. The Shapley values argue that our model looks for more specific parts of the dog, such as its face and legs, while more ambiguous parts of the body are unfavorably considered."}),"\n",(0,s.jsx)(a.p,{children:"Here, the attack causes our German Shorthaired Pointer to be misclassified as a Vizsla, a similar dog breed. None of the explanations here are able to agree on the model\u2019s decision. First, LIME claims that our model looks to the head of the dog, while Anchors and Shapley values argue that most if not all of the dog is observed in the prediction. From here, LIME and Anchors agree that some portion of the background is present in the prediction, while Shapley values argue that the model predicts almost exclusively on the dog\u2019s main body. Perhaps there are a disproportionate number of Vizsla dog images with similar backgrounds, or perhaps the simple visual similarities between the two caused this mix-up."}),"\n",(0,s.jsx)(a.h2,{id:"projected-gradient-descent",children:"Projected Gradient Descent"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Projected Gradient Descent calculates the gradient of loss for an input image and applies it as a perturbation to the image over a course of small steps, modifying hyperparameters to keep the image looking as normal as possible. ",(0,s.jsx)("br",{}),"\n- Sriya Konda, ",(0,s.jsx)(a.em,{children:"An Exploration of Adversarial Attacks on Image Classifiers"})]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Figure 3",src:t(7708).c+"",title:"Pre-perturbation and post-perturbation of an image of a Persian cat using Projected Gradient Descent, each accompanied by three explanation techniques.",width:"1600",height:"1100"})}),"\n",(0,s.jsx)(a.p,{children:"This is our hardest image to break, as the model correctly classifies this Persian cat with 99.1% confidence. All three techniques portray the strength of its reasoning, as all highlight the face and upper body of the cat almost exclusively, with some background artifacts."}),"\n",(0,s.jsxs)(a.p,{children:["Although perturbation of this sample does not succeed in its reclassification, the confidence drops to 26.2%. Moreover, this modification has precipitated the most interesting explanations of these samples: Shapley values propose that the cat is still the focus of the model for this prediction (only adding ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mo,{children:"+"}),(0,s.jsx)(a.mn,{children:"0.3"}),(0,s.jsx)(a.mi,{mathvariant:"normal",children:"%"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"+0.3\\%"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.0833em"}}),(0,s.jsx)(a.span,{className:"mord",children:"+"}),(0,s.jsx)(a.span,{className:"mord",children:"0.3%"})]})})]})," per pixel at most), while LIME argues that the model must avail of the background to achieve this result. Finally, Anchors show no change in the input image. Due to this technique\u2019s niche ",(0,s.jsx)(a.a,{href:"/Explainable-Ai-Comps-2024/Anchors/Introduction",children:"(see our Anchoring page)"}),", we can infer that since no data may be removed from the image, no anchors are present in the input, and thus no specific piece of the input may be identified as sufficient for the model to predict this class. Such a perturbation in this image may have obscured the cat just enough to lower the confidence score and to cause the model to begin to reach out; however, upon looking for other features, the austere red background may not have fit any of its other filters, disallowing alternate predictions."]}),"\n",(0,s.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(a.p,{children:"Adversarial AI can facilitate the bolstering of models alone, but when paired with explanations, we can see more easily why a model breaks and exactly when and why we should or should not trust its decisions. Similarly, Explainable AI can display potential biases in machine learning models, allowing architects to improve their robustness, but an explanation cannot account for exploitable biases that are not visible in the data, thus requiring an adversary to reveal holes in the machine's thought processes."}),"\n",(0,s.jsx)(a.p,{children:"Adversarial AI and Explainable AI are a part of a rich ecosystem of model fortification, each of which fits a niche alone; however, these two methods combined are able to build a cycle of continuous improvement, that which will ultimately create a safer and more trustworthy model."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"We are grateful the Adversarial AI group for making this collaboration possible, and we would like to extend special thanks to Alice Cutter and Tingjun Tu for working so closely with us."})})]})}function d(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3784:(e,a,t)=>{t.d(a,{c:()=>s});const s=t.p+"assets/images/FGSM-fb680cc6e389e2f48d7c39c37b940908.png"},8440:(e,a,t)=>{t.d(a,{c:()=>s});const s=t.p+"assets/images/LSA-1e14465cd08b312a8a28c33f8caa0b9e.png"},7708:(e,a,t)=>{t.d(a,{c:()=>s});const s=t.p+"assets/images/PGD-6b8fbf0adcaf7d3f803bc46df9bd1886.png"},2172:(e,a,t)=>{t.d(a,{I:()=>r,M:()=>o});var s=t(1504);const n={},i=s.createContext(n);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);