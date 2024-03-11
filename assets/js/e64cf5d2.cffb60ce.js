"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[6624],{9500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(7624),i=a(2172);const n={"sidebar-position":91},o="Adversarial Explanations",r={id:"XAI+AdvAI",title:"Adversarial Explanations",description:'Although Explainable AI can exist in a vacuum, it does not have to. As noted in our introduction, XAI can be used to motivate and direct the design of models that users can trust it strives to "cause the black box to break down." Both of these approaches to AI share a common goal: to construct models that are more robust against variations in data, biases, and even active exploitation.',source:"@site/docs/XAI+AdvAI.md",sourceDirName:".",slug:"/XAI+AdvAI",permalink:"/Explainable-Ai-Comps-2024/XAI+AdvAI",draft:!1,unlisted:!1,editUrl:"https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024/docs/XAI+AdvAI.md",tags:[],version:"current",frontMatter:{"sidebar-position":91},sidebar:"tutorialSidebar",previous:{title:"Bibliography",permalink:"/Explainable-Ai-Comps-2024/Citations"}},c={},l=[{value:"Local Search Adversary",id:"local-search-adversary",level:2},{value:"Fast Gradient Sign Method (FSGM)",id:"fast-gradient-sign-method-fsgm",level:2},{value:"Projected Gradient Descent",id:"projected-gradient-descent",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"adversarial-explanations",children:"Adversarial Explanations"}),"\n",(0,s.jsxs)(t.p,{children:["Although Explainable AI can exist in a vacuum, it does not have to. As noted in ",(0,s.jsx)(t.a,{href:"/Explainable-Ai-Comps-2024/Introduction/What%20is%20XAI",children:"our introduction"}),', XAI can be used to motivate and direct the design of models that users can trust: it "breaks down the black box." Similarly, Adversarial Artificial Intelligence strives to find how a machine learning model can be exploited: it strives to "cause the black box to break down." Both of these approaches to AI share a common goal: to construct models that are more robust against variations in data, biases, and even active exploitation.']}),"\n",(0,s.jsxs)(t.p,{children:["As such, we in the XAI project have partnered with Jonas Bartels, Alice Cutter, Sriya Konda, Yuxin Lin, Sky Lu, and Tingjun Tu of Carleton College's ",(0,s.jsx)(t.a,{href:".",children:"Adversarial Artificial Intelligence project"}),"\nto bring you ",(0,s.jsx)(t.em,{children:"Adversarial Explanations: an Exploration and Exploitation of Machine Thought"}),". In this section, we will present three examples of adversarial attacks on the ",(0,s.jsx)(t.code,{children:"ResNet50"})," image classifier. All attacks are carried out through black-box methods, meaning that they do not have access to any parts of our model, and all explanations are model-agnostic, meaning that they do not require a specific architecture."]}),"\n",(0,s.jsx)(t.h2,{id:"local-search-adversary",children:"Local Search Adversary"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The Local Search adversary utilizes the concept of greedy local search. It iteratively selects a small set of pixels to perturb that eventually would cause misclassification by a deep neural network without using any gradient information. ",(0,s.jsx)("br",{}),"\n- Tingjun Tu, ",(0,s.jsx)(t.em,{children:"An Exploration of Adversarial Attacks on Image Classifiers"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Figure 1",src:a(8440).c+"",title:"Pre-perturbation and post-perturbation of an image of a Bengal cat using a Local Search adversary, each accompanied by three explanation techniques.",width:"3000",height:"2063"})}),"\n",(0,s.jsxs)(t.p,{children:["Before perturbation, our classifier correctly predicts that this is a Bengal cat with ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mn,{children:"63.1"}),(0,s.jsx)(t.mi,{mathvariant:"normal",children:"%"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"63.1\\%"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.jsx)(t.span,{className:"mord",children:"63.1%"})]})})]})," confidence. All of our techniques agree that the model looked at the area immediately around the cat to classify it as such. However, LIME and Anchors propose that our model also focuses a portion of the stairway to achieve this result, to which Shapley does not agree."]}),"\n",(0,s.jsxs)(t.p,{children:["After perturbation, our model becomes much more hectic, producing a prediction of \u201caltar.\u201d Each of our techniques confirms this messiness, as we can see that the model must now look at more than half of the image to find a modicum of justification for this prediction. This hectic nature is most likely due to an utter lack of confidence, which is displayed through Shapley values: although it is not in this image, the deepest red on this graph only adds ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mo,{children:"+"}),(0,s.jsx)(t.mn,{children:"0.15"}),(0,s.jsx)(t.mi,{mathvariant:"normal",children:"%"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"+0.15\\%"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.0833em"}}),(0,s.jsx)(t.span,{className:"mord",children:"+"}),(0,s.jsx)(t.span,{className:"mord",children:"0.15%"})]})})]})," confidence to the model from base. It seems as though the machine learning model, as it is starved for foreground artifacts by LSA's pixel-injections, begins to search elsewhere for any possible indication of class; therefore, upon finding the cat's sloping surroundings, it predicts \"altar.\""]}),"\n",(0,s.jsx)(t.h2,{id:"fast-gradient-sign-method-fsgm",children:"Fast Gradient Sign Method (FSGM)"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["FSGM uses the gradient of a loss function with respect to the input data to perturb each pixel in the direction that lowers the confidence of the correct prediction by a distance ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mi,{children:"\u03f5"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\epsilon"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"\u03f5"})]})})]}),".\n",(0,s.jsx)("br",{})," - Jonas Bartels, ",(0,s.jsx)(t.em,{children:"An Exploration of Adversarial Attacks on Image Classifiers"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Figure 2",src:a(9024).c+"",title:"Pre-perturbation and post-perturbation of an image of a German Shorthaired Pointer dog using the Fast Gradient Sign Method, each accompanied by three explanation techniques.",width:"3000",height:"2063"})}),"\n",(0,s.jsx)(t.p,{children:"Pre-adversary, the model correctly predicts that this is a German Shorthair Pointer with 89.4% confidence. All of our explanations seem to agree that the dog itself is the point of focus. The Shapley values argue that our model looks for more specific parts of the dog, such as its face and legs, while more ambiguous parts of the body are unfavorably considered."}),"\n",(0,s.jsx)(t.p,{children:"Here, the attack causes our German Shorthaired Pointer to be misclassified as a Vizsla, a similar dog breed. None of the explanations here are able to agree on the model\u2019s decision. First, LIME claims that our model looks to the head of the dog, while Anchors and Shapley values argue that most if not all of the dog is observed in the prediction. From here, LIME and Anchors agree that some portion of the background is present in the prediction, while Shapley values argue that the model predicts almost exclusively on the dog\u2019s main body. Perhaps there are a disproportionate number of Vizsla dog images with similar backgrounds, such that obscuring the original breed causes the model to be more desperate for any predicable information, or it may be caused by the simple visual similarities between the two."}),"\n",(0,s.jsx)(t.h2,{id:"projected-gradient-descent",children:"Projected Gradient Descent"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Projected Gradient Descent calculates the gradient of loss for an input image and applies it as a perturbation to the image over a course of small steps, modifying hyperparameters to keep the image looking as normal as possible. ",(0,s.jsx)("br",{}),"\n- Sriya Konda, ",(0,s.jsx)(t.em,{children:"An Exploration of Adversarial Attacks on Image Classifiers"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Figure 3",src:a(9876).c+"",title:"Pre-perturbation and post-perturbation of an image of a Persian cat using Projected Gradient Descent, each accompanied by three explanation techniques.",width:"200",height:"200"})}),"\n",(0,s.jsx)(t.p,{children:"This is our hardest image to break, as the model correctly classifies this Persian cat with 99.1% confidence. All three techniques portray the strength of its reasoning, as all highlight the face and upper body of the cat almost exclusively, with some background artifacts."}),"\n",(0,s.jsxs)(t.p,{children:["Although perturbation of this sample does not succeed in its reclassification, the confidence drops to 26.2%. Moreover, this modification has precipitated the most interesting explanations of these samples: Shapley values propose that the cat is still largely the focus of the model for this prediction, while LIME argues that the model must avail of the background to achieve this result. Finally, Anchors show no change in the input image. Due to this technique\u2019s niche ",(0,s.jsx)(t.a,{href:"/Explainable-Ai-Comps-2024/Anchors/Introduction",children:"(see our Anchoring page)"}),", we can infer that since no data may be removed from the image, no anchors are present in the input, and thus no specific piece of the input may be identified as sufficient for the model to predict this class. Such a perturbation in this image may have obscured the cat just enough to lower the confidence score and to cause the model to begin to reach out; however, upon looking for other features, the austere red background may not have fit any of its other filters, disallowing alternate predictions."]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"Adversarial AI poses a threat to models and can facilitate the bolstering of models, but when paired with explanations, we can see more easily why a model breaks and exactly where why we should or should not trust its decision. Identically, Explainable AI can display potential biases in machine learning models, allowing architects to improve their robustness, but an explanation cannot account for exploitable biases that are not visible in the data, thus requiring an adversary to reveal holes in the machine's thought processes."}),"\n",(0,s.jsx)(t.p,{children:"Adversarial AI and Explainable AI are a part of a rich ecosystem of model fortification, each of which fits a niche alone; however, these two methods combined are able to build a cycle of continuous improvement, that which will ultimately create a safer and more trustworthy model."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"We are grateful the Adversarial AI group for making this collaboration possible, and we would like to extend special thanks to Alice Cutter and Tingjun Tu for working so closely with us."})})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9024:(e,t,a)=>{a.d(t,{c:()=>s});const s=a.p+"assets/images/FGSM-fb680cc6e389e2f48d7c39c37b940908.png"},8440:(e,t,a)=>{a.d(t,{c:()=>s});const s=a.p+"assets/images/LSA-1e14465cd08b312a8a28c33f8caa0b9e.png"},9876:(e,t,a)=>{a.d(t,{c:()=>s});const s="data:image/png;base64,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"},2172:(e,t,a)=>{a.d(t,{I:()=>r,M:()=>o});var s=a(1504);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);