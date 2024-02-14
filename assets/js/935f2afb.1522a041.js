"use strict";(self.webpackChunkxai_carleton_comps_2024=self.webpackChunkxai_carleton_comps_2024||[]).push([[696],{5988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is XAI?","href":"/Explainable-Ai-Comps-2024/Introduction/What is XAI","docId":"Introduction/What is XAI","unlisted":false},{"type":"link","label":"Why XAI Matters","href":"/Explainable-Ai-Comps-2024/Introduction/Vision","docId":"Introduction/Vision","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/introduction"},{"type":"category","label":"Methodology","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"User Study","href":"/Explainable-Ai-Comps-2024/Methodology/User Study","docId":"Methodology/User Study","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/methodology"},{"type":"category","label":"LIME","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/Explainable-Ai-Comps-2024/LIME/Introduction","docId":"LIME/Introduction","unlisted":false},{"type":"link","label":"ResNet","href":"/Explainable-Ai-Comps-2024/LIME/ResNet","docId":"LIME/ResNet","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/lime"},{"type":"category","label":"Shapley Values","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/Explainable-Ai-Comps-2024/Shapley Values/Introduction","docId":"Shapley Values/Introduction","unlisted":false},{"type":"link","label":"Laws and Regulations","href":"/Explainable-Ai-Comps-2024/Shapley Values/Laws and regulations","docId":"Shapley Values/Laws and regulations","unlisted":false},{"type":"link","label":"Shapley and MOOC","href":"/Explainable-Ai-Comps-2024/Shapley Values/Shapley and MOOC","docId":"Shapley Values/Shapley and MOOC","unlisted":false},{"type":"link","label":"Shapley\'s Math","href":"/Explainable-Ai-Comps-2024/Shapley Values/Shapley\'s Math","docId":"Shapley Values/Shapley\'s Math","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/shapley-values"},{"type":"category","label":"Anchors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction to LIME","href":"/Explainable-Ai-Comps-2024/Anchors/Introduction","docId":"Anchors/Introduction","unlisted":false},{"type":"link","label":"Lime","href":"/Explainable-Ai-Comps-2024/Anchors/LIME","docId":"Anchors/LIME","unlisted":false},{"type":"link","label":"Shapley Values","href":"/Explainable-Ai-Comps-2024/Anchors/Shapley","docId":"Anchors/Shapley","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/anchors"},{"type":"category","label":"User Study / Results","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/Explainable-Ai-Comps-2024/User Study/Introduction","docId":"User Study/Introduction","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/user-study--results"},{"type":"link","label":"About Us","href":"/Explainable-Ai-Comps-2024/About Us","docId":"About Us","unlisted":false},{"type":"link","label":"Citations","href":"/Explainable-Ai-Comps-2024/Citations","docId":"Citations","unlisted":false},{"type":"category","label":"From Template","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tutorial Intro","href":"/Explainable-Ai-Comps-2024/Reference for Developers/intro","docId":"Reference for Developers/intro","unlisted":false},{"type":"category","label":"Tutorial - Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create a Page","href":"/Explainable-Ai-Comps-2024/Reference for Developers/tutorial-basics/create-a-page","docId":"Reference for Developers/tutorial-basics/create-a-page","unlisted":false},{"type":"link","label":"Create a Document","href":"/Explainable-Ai-Comps-2024/Reference for Developers/tutorial-basics/create-a-document","docId":"Reference for Developers/tutorial-basics/create-a-document","unlisted":false},{"type":"link","label":"Markdown Features","href":"/Explainable-Ai-Comps-2024/Reference for Developers/tutorial-basics/markdown-features","docId":"Reference for Developers/tutorial-basics/markdown-features","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/tutorial---basics"},{"type":"link","label":"Numpy (Examples of images and latex in docusaurus)","href":"/Explainable-Ai-Comps-2024/Reference for Developers/numpy","docId":"Reference for Developers/numpy","unlisted":false}],"href":"/Explainable-Ai-Comps-2024/category/from-template"}]},"docs":{"About Us":{"id":"About Us","title":"About Us","description":"","sidebar":"tutorialSidebar"},"Anchors/Introduction":{"id":"Anchors/Introduction","title":"Introduction to LIME","description":"Ribeiro, Singh, and Guestrin, the original authors of LIME, also created anchoring as an Explainable AI model, which has some similarities with LIME, but outputs its explanations in a different form. Like LIME, Anchoring involves perturbing the data point in question to see how the results from the black box change. Ribeiro et al. define their anchor like so: \u201cAn anchor explanation is a rule that sufficiently \u201canchors\u201d the prediction locally \u2013 such that changes to the rest of the feature values of the instance do not matter\u201d (Ribeiro et al, 2018). For example, when evaluating the sentiment of the phrase \u201cEverything is bad\u201d, we would say that the word \u201cbad\u201d tells us that the sentiment is negative, making \u201cbad\u201d our anchor. However, if we changed the phrase to \u201cEverything is not bad\u201d, \u201cbad\u201d would not make a good anchor anymore, because the sentiment of this phrase is positive. Our new anchor would be \u201cnot bad\u201d, because these are the words that determine that the phrase is positive. The same principle can be used for multiple types of data, not just textual data. For tabular data, the algorithm will seek to find which feature values were the most important in coming to a particular decision, and for image classification the anchor will be a set of superpixels that have the most importance in determining the prediction of the model. A clear advantage of anchoring is that its output is intuitive and easy to interpret (\u201cthe sentiment of this sentence is positive because it contains the words \u2018not bad\u2019\u201d), as opposed to being a sea of coefficients.","sidebar":"tutorialSidebar"},"Anchors/LIME":{"id":"Anchors/LIME","title":"Lime","description":"Local Interpretable Model-Agnostic Explanations (LIME)","sidebar":"tutorialSidebar"},"Anchors/Shapley":{"id":"Anchors/Shapley","title":"Shapley Values","description":"Shapley value is a second post-hoc explainable AI learning method. As the name suggests, this method is named after the award-winning mathematician and game theorist Lloyd Shapley, who developed the technique back in 1953 in his original papers on cooperative game theory (Shapley et al., 1988). The method develops an explanation for machine learning models through a practical application of cooperative game theory \u2013 that is, the XAI treats each feature of an ML model as a \u201cplayer\u201d, which contributes a value that either adds or subtracts from the average prediction. This value, called the Shapley value, is calculated by looking at all possible coalitions and calculating the average marginal contributions of the given feature (i.e. the difference in predictions with and without the feature). Compared to other XAI methods, particularly LIME, this method guarantees the predictions are fairly distributed and is based on solid theory, but is computationally expensive and requires a lot more data (Molnar, 2023).","sidebar":"tutorialSidebar"},"Citations":{"id":"Citations","title":"Citations","description":"We will do this in a google doc which we export as .html and copy into this page.","sidebar":"tutorialSidebar"},"Introduction/Vision":{"id":"Introduction/Vision","title":"Why XAI Matters","description":"We are living through a revolution of the standards for ethical machine learning practices which has been thoroughly marked by the need to explain artificial intelligences \u2014 namely their predictions. As discussed in Ribeiro et al. (2016, p.1), the act of explaining an AI\u2019s prediction presents the audience with visualizations pertaining to the actions it made to achieve such a decision, thus building users\u2019 trust in the model and exposing any possible errors in the model\u2019s structure. With regulations like the EU\u2019s Right to Explainability and the United States\u2019 proposed AI Bill of Rights, a machine learning model may no longer be a simple \u201cblack box\u201d: in order to prevent criminal charges, the creators of high-impact models must be able to justify each of their predictions. Over the past few years, the field has thus become inundated with approaches, each a bid for its own niche. In such an impossibly dense field, how can one quantify a method\u2019s efficacy? Which method would a jury trust?","sidebar":"tutorialSidebar"},"Introduction/What is XAI":{"id":"Introduction/What is XAI","title":"What is XAI?","description":"Lorem ipsum and whatnot.","sidebar":"tutorialSidebar"},"LIME/Introduction":{"id":"LIME/Introduction","title":"Introduction","description":"Local Interpretable Model-Agnostic Explanations (LIME)","sidebar":"tutorialSidebar"},"LIME/ResNet":{"id":"LIME/ResNet","title":"ResNet","description":"Can you explain your answer?","sidebar":"tutorialSidebar"},"Methodology/User Study":{"id":"Methodology/User Study","title":"User Study","description":"It is of primary importance that the group understands our three explainable AI methods. This necessitates a literature review, with papers and articles that introduce and implement Shapley and Anchor/LIME. After reading about them, we also want to implement them on complex existing models like ResNet. While the models will mostly be imported, this code base connecting existing models with existing XAI libraries will be another deliverable for our final project.","sidebar":"tutorialSidebar"},"Reference for Developers/intro":{"id":"Reference for Developers/intro","title":"Tutorial Intro","description":"Let\'s discover Docusaurus in less than 5 minutes.","sidebar":"tutorialSidebar"},"Reference for Developers/numpy":{"id":"Reference for Developers/numpy","title":"Numpy (Examples of images and latex in docusaurus)","description":"Packages","sidebar":"tutorialSidebar"},"Reference for Developers/tutorial-basics/create-a-document":{"id":"Reference for Developers/tutorial-basics/create-a-document","title":"Create a Document","description":"Documents are groups of pages connected through:","sidebar":"tutorialSidebar"},"Reference for Developers/tutorial-basics/create-a-page":{"id":"Reference for Developers/tutorial-basics/create-a-page","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:","sidebar":"tutorialSidebar"},"Reference for Developers/tutorial-basics/markdown-features":{"id":"Reference for Developers/tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","sidebar":"tutorialSidebar"},"Shapley Values/Introduction":{"id":"Shapley Values/Introduction","title":"Introduction","description":"Shapley values offer retroactive local explanations of an AI\'s decisions. As the name suggests, this technique is named after the award-winning mathematician and computational theorist Lloyd Shapley, who developed it back in 1953 in his original papers on cooperative game theory (Shapley et al., 1988). The technique derives an explanation for machine learning models through a practical application of cooperative game theory \u2013 that is, the XAI treats each feature of an ML model as a \u201cplayer\u201d, which contributes a value that either adds or subtracts from the average prediction. This value, called the Shapley value, is calculated by looking at all possible coalitions and calculating the average marginal contributions of the given feature (i.e. the difference in predictions with and without the feature). Compared to other XAI techniques, particularly LIME, Shapley\'s method guarantees the predictions are fairly distributed and is based on solid theory, but is computationally expensive and requires unrestricted access to the model\'s training data (Molnar, 2023).","sidebar":"tutorialSidebar"},"Shapley Values/Laws and regulations":{"id":"Shapley Values/Laws and regulations","title":"Laws and Regulations","description":"The European Union and Shapley values\' explanations","sidebar":"tutorialSidebar"},"Shapley Values/Shapley and MOOC":{"id":"Shapley Values/Shapley and MOOC","title":"Shapley and MOOC","description":"","sidebar":"tutorialSidebar"},"Shapley Values/Shapley\'s Math":{"id":"Shapley Values/Shapley\'s Math","title":"Shapley\'s Math","description":"\x3c!-- SOURCES:","sidebar":"tutorialSidebar"},"User Study/Introduction":{"id":"User Study/Introduction","title":"Introduction","description":"","sidebar":"tutorialSidebar"}}}')}}]);