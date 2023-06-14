---
title: "Writing: Conclusion"
description: Quickstart Your Bachelor's Thesis with AI-powered Tools
metaOptions: [Learn, Quickstart Your Bachelor's Thesis with AI-powered Tools]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
We have reached the final section of the bachelor's thesis. It's time to write the Conclusions and summarize our small research on the application of AI tools for this academic task. In the end, was this experience successful? And what are still missing in modern AI assistants?
</RoboAcademyText>

## Concluding the thesis

Basically, we already know how AI can help summarize materials, just by formulating the necessary request. The only problem is to feed it with the entire source text. Until there is proper support for long PDF files, we will break the source text into pieces, ask to make a summary for each of them, and then send the pieces together:

<RoboAcademyDialog>

Give me a summary for the following text in 500 words. 
</RoboAcademyDialog>

Out of curiosity, let's ask to format the resulting text for use in LaTeX, just to see how the AI assistant will handle this task:

<RoboAcademyDialog>

Write a Conclusions section from the text below in 1000 words. Be sure to add summary of the thesis's contributions and main findings, implications and significance of the results for the smart home industry and related fields, recommendations for future research and development.

Take the resulting text and design it for LaTeX.
</RoboAcademyDialog>

Result:

<LessonCodeWrapper language="uml" noCopyIcon noLines codeClass="big-code">
    \documentclass{article}
    \usepackage{lipsum}
    \begin{document}
    \section*{Conclusion}
    This bachelor's thesis aimed to design a secure and private 
    smart home system using Web3 technologies, specifically leveraging 
    blockchain and decentralized technologies.
    ...
    \end{document}

</LessonCodeWrapper>

Now we can finally complete our thesis by creating an abstract in the usual way:

<RoboAcademyDialog>

Make an abstract for the bachelor's thesis based on this text in 100 words.
</RoboAcademyDialog>

## Guide conclusions

In principle, our task is completed. Next, we can try to process the text using different tools, improving the wording or expanding some paragraphs. You can find the resulting PDF file at the link below:

https://cloudflare-ipfs.com/ipfs/Qme6rzPwiDGLLkUmWVLrCqgGMjcbqitYNcndznjNPb21E8

What conclusions can we make about the applicability of AI tools in the current state for the task of preparing a bachelor's thesis or similar academic materials? Let's take a look at the pros first:

1. AI can handle a generalized task statement. Formulating a plan, structuring publication sections, suggesting directions of work — all of this can seriously help when it's not clear where to start or in case of a lack of ideas. In this sense, an AI assistant can be a "backup brain" that will offer ideas to the main one.
2. AI is good at generating generic content. For those who can form the backbone of the text well but struggle to "add fluff" to reach the required volume, this can be an excellent support.
3. With some reservations, AI can quickly analyze text and provide a summary of the main ideas to the user. However, there are still some limitations as AI assistants' developers are still working on improving their ability to remember the context.
4. It's impressive that AI can already attempt to analyze a dataset and write program code based on verbal descriptions. However, it's crucial to be extremely cautious in results.
5. And of course, as an advanced search tool, AI assistants outshine regular search engines.

However, among the identified cons:

1. AI hallucinations often negate the benefits of the speed of results obtained from AI since user has to thoroughly check its answers. Sometimes it's just easier and faster to do the task yourself.
2. Difficulty in obtaining a answer that would be more in-depth. This "laziness" of AI tools makes user struggle with more and more fanciful requests that would make the AI do the job better. It results in a rather comical situation resembling the relationship between a senior employee and an intern: eventually, it is easier for the former to do the job oneself than to try to make the intern do it. This again nullifies the advantages of speed and convenience.
3. Instability in the quality of the received results. The AI often provides completely different results for the same query in different sessions, which essentially forces the user to spin the slot machine in anticipation of a win. Plus, you can never be sure that the received response is the best and possible one.
4. Complaint to AI tool developers: current tools have awful interface that doesn't allow for adequate work with large texts and data.

<RoboAcademyDialog>
“As a result, it can be said that AI tools can already be a good addition to manual, monotonous work in creating academic materials, but they still have many problems and shortcomings that prevent them from fully replacing human labor. In the future, these problems may be solved, and AI assistants will be able to significantly speed up and improve the process of creating scientific materials.”
</RoboAcademyDialog>

*(The result above was generated by Notion AI)*