---
title: "Écriture: Conclusion"
description: Démarrer rapidement votre thèse de licence avec des outils alimentés par l'IA
metaOptions: [Apprendre, Démarrer rapidement votre thèse de licence avec des outils alimentés par l'IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Nous sommes arrivés à la dernière section du mémoire de licence. Il est temps d'écrire les conclusions et de résumer notre petite recherche sur l'application des outils d'IA pour cette tâche académique. En fin de compte, cette expérience a-t-elle été réussie? Et qu'est-ce qui manque encore aux assistants d'IA modernes?
</RoboAcademyText>

## Conclure le mémoire

Fondamentalement, nous savons déjà comment l'IA peut aider à résumer des documents, simplement en formulant la demande nécessaire. Le seul problème est de lui fournir l'intégralité du texte source. Jusqu'à ce qu'il y ait un support adéquat pour les longs fichiers PDF, nous diviserons le texte source en morceaux, demanderons de faire un résumé pour chacun d'eux, puis enverrons les morceaux ensemble:

<RoboAcademyDialog>

Give me a summary for the following text in 500 words. 
</RoboAcademyDialog>

Par curiosité, demandons de formater le texte résultant pour une utilisation dans LaTeX, juste pour voir comment l'assistant d'IA gérera cette tâche:

<RoboAcademyDialog>

Write a Conclusions section from the text below in 1000 words. Be sure to add summary of the thesis's contributions and main findings, implications and significance of the results for the smart home industry and related fields, recommendations for future research and development.

Take the resulting text and design it for LaTeX.
</RoboAcademyDialog>

Résultat:

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

Maintenant, nous pouvons enfin terminer notre mémoire en créant un résumé de la manière habituelle:

<RoboAcademyDialog>

Make an abstract for the bachelor's thesis based on this text in 100 words.
</RoboAcademyDialog>

## Conclusions du guide

En principe, notre tâche est terminée. Ensuite, nous pouvons essayer de traiter le texte à l'aide de différents outils, améliorer la formulation ou développer certains paragraphes. Vous pouvez trouver le fichier PDF résultant sur le lien ci-dessous:

https://cloudflare-ipfs.com/ipfs/Qme6rzPwiDGLLkUmWVLrCqgGMjcbqitYNcndznjNPb21E8

Quelles conclusions pouvons-nous tirer sur l'applicabilité des outils d'IA dans l'état actuel pour la tâche de préparation d'un mémoire de licence ou de documents académiques similaires? Regardons d'abord les avantages:

1. L'IA peut gérer une énoncé de tâche généralisée. Formuler un plan, structurer les sections de publication, suggérer des directions de travail - tout cela peut sérieusement aider lorsque l'on ne sait pas par où commencer ou en cas de manque d'idées. Dans ce sens, un assistant d'IA peut être un "cerveau de secours" qui offrira des idées au principal.
2. L'IA est douée pour générer du contenu générique. Pour ceux qui peuvent bien former l'épine dorsale du texte mais ont du mal à "ajouter du superflu" pour atteindre le volume requis, cela peut être un excellent soutien.
3. Avec quelques réserves, l'IA peut rapidement analyser un texte et fournir un résumé des idées principales à l'utilisateur. Cependant, il existe encore certaines limitations car les développeurs d'assistants d'IA travaillent encore à améliorer leur capacité à se souvenir du contexte.
4. Il est impressionnant que l'IA puisse déjà tenter d'analyser un ensemble de données et écrire du code de programme basé sur des descriptions verbales. Cependant, il est crucial d'être extrêmement prudent dans les résultats.
5. Et bien sûr, en tant qu'outil de recherche avancé, les assistants d'IA surpassent les moteurs de recherche classiques.

Cependant, parmi les inconvénients identifiés:

1. Les hallucinations de l'IA annulent souvent les avantages de la rapidité des résultats obtenus par l'IA, car l'utilisateur doit vérifier attentivement ses réponses. Parfois, il est plus facile et plus rapide de faire la tâche soi-même.
2. Difficulté à obtenir une réponse plus approfondie. Cette "paresse" des outils d'IA oblige l'utilisateur à lutter avec des demandes de plus en plus fantaisistes qui permettraient à l'IA de faire le travail mieux. Cela entraîne une situation plutôt comique ressemblant à la relation entre un employé senior et un stagiaire: finalement, il est plus facile pour le premier de faire le travail lui-même que d'essayer de faire faire le travail au stagiaire. Cela annule à nouveau les avantages de la rapidité et de la commodité.
3. Instabilité dans la qualité des résultats reçus. L'IA fournit souvent des résultats complètement différents pour la même requête dans des sessions différentes, ce qui oblige essentiellement l'utilisateur à faire tourner la machine à sous en attendant de gagner. De plus, vous ne pouvez jamais être sûr que la réponse reçue est la meilleure et la possible.
4. Plainte aux développeurs d'outils d'IA: les outils actuels ont une interface horrible qui ne permet pas un travail adéquat avec de grands textes et des données.

<RoboAcademyDialog>
“As a result, it can be said that AI tools can already be a good addition to manual, monotonous work in creating academic materials, but they still have many problems and shortcomings that prevent them from fully replacing human labor. In the future, these problems may be solved, and AI assistants will be able to significantly speed up and improve the process of creating scientific materials.”
</RoboAcademyDialog>

*(Le résultat ci-dessus a été généré par Notion AI)*