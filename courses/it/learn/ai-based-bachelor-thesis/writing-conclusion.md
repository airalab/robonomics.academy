---
title: "Scrittura: Conclusione"
description: Avvia rapidamente la tua tesi di laurea con strumenti alimentati da intelligenza artificiale
metaOptions: [Imparare, Avvia rapidamente la tua tesi di laurea con strumenti alimentati da intelligenza artificiale]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Abbiamo raggiunto la sezione finale della tesi di laurea. È il momento di scrivere le Conclusioni e riassumere la nostra piccola ricerca sull'applicazione degli strumenti di intelligenza artificiale per questo compito accademico. Alla fine, è stata questa esperienza di successo? E cosa manca ancora negli assistenti AI moderni?
</RoboAcademyText>

## Concludere la tesi

In sostanza, sappiamo già come l'IA possa aiutare a riassumere i materiali, semplicemente formulando la richiesta necessaria. L'unico problema è alimentarla con l'intero testo di origine. Fino a quando non ci sarà un supporto adeguato per i lunghi file PDF, divideremo il testo di origine in pezzi, chiederemo di fare un riassunto per ciascuno di essi e poi invieremo i pezzi insieme:

<RoboAcademyDialog>

Give me a summary for the following text in 500 words. 
</RoboAcademyDialog>

Per curiosità, chiediamo di formattare il testo risultante per l'uso in LaTeX, solo per vedere come l'assistente AI gestirà questo compito:

<RoboAcademyDialog>

Write a Conclusions section from the text below in 1000 words. Be sure to add summary of the thesis's contributions and main findings, implications and significance of the results for the smart home industry and related fields, recommendations for future research and development.

Take the resulting text and design it for LaTeX.
</RoboAcademyDialog>

Risultato:

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

Ora possiamo finalmente completare la nostra tesi creando un abstract nel modo consueto:

<RoboAcademyDialog>

Make an abstract for the bachelor's thesis based on this text in 100 words.
</RoboAcademyDialog>

## Guida alle conclusioni

In linea di principio, il nostro compito è completato. Successivamente, possiamo provare a elaborare il testo utilizzando diversi strumenti, migliorando la formulazione o ampliando alcuni paragrafi. Puoi trovare il file PDF risultante al link sottostante:

https://cloudflare-ipfs.com/ipfs/Qme6rzPwiDGLLkUmWVLrCqgGMjcbqitYNcndznjNPb21E8

Quali conclusioni possiamo trarre sull'applicabilità degli strumenti AI nello stato attuale per il compito di preparare una tesi di laurea o materiali accademici simili? Diamo prima un'occhiata ai pro:

1. L'IA può gestire una dichiarazione di compito generalizzata. Formulare un piano, strutturare le sezioni della pubblicazione, suggerire direzioni di lavoro: tutto questo può aiutare seriamente quando non è chiaro da dove iniziare o in caso di mancanza di idee. In questo senso, un assistente AI può essere un "cervello di backup" che offrirà idee a quello principale.
2. L'IA è brava a generare contenuti generici. Per coloro che sanno ben strutturare il testo di base ma faticano ad "aggiungere fuffa" per raggiungere il volume richiesto, questo può essere un ottimo supporto.
3. Con alcune riserve, l'IA può analizzare rapidamente il testo e fornire un riassunto delle idee principali all'utente. Tuttavia, ci sono ancora alcune limitazioni poiché gli sviluppatori degli assistenti AI stanno ancora lavorando per migliorare la loro capacità di ricordare il contesto.
4. È impressionante che l'IA possa già tentare di analizzare un set di dati e scrivere codice di programma basato su descrizioni verbali. Tuttavia, è fondamentale essere estremamente cauti nei risultati.
5. E ovviamente, come strumento di ricerca avanzato, gli assistenti AI brillano rispetto ai motori di ricerca regolari.

Tuttavia, tra gli svantaggi identificati:

1. Le allucinazioni dell'IA spesso annullano i vantaggi della velocità dei risultati ottenuti dall'IA poiché l'utente deve controllare attentamente le sue risposte. A volte è più facile e veloce fare il compito da soli.
2. Difficoltà nel ottenere una risposta più approfondita. Questa "pigrizia" degli strumenti AI costringe l'utente a lottare con richieste sempre più fantasiose che farebbero sì che l'IA svolgesse il lavoro meglio. Ciò porta a una situazione piuttosto comica che assomiglia alla relazione tra un dipendente anziano e un tirocinante: alla fine, è più facile per il primo fare il lavoro da solo piuttosto che cercare di farlo fare al tirocinante. Questo annulla nuovamente i vantaggi di velocità e comodità.
3. Instabilità nella qualità dei risultati ricevuti. L'IA fornisce spesso risultati completamente diversi per la stessa query in sessioni diverse, il che costringe essenzialmente l'utente a far girare la slot machine in attesa di una vincita. Inoltre, non si può mai essere sicuri che la risposta ricevuta sia la migliore e possibile.
4. Lamentele agli sviluppatori degli strumenti AI: gli strumenti attuali hanno un'interfaccia terribile che non consente un lavoro adeguato con testi e dati di grandi dimensioni.

<RoboAcademyDialog>
“As a result, it can be said that AI tools can already be a good addition to manual, monotonous work in creating academic materials, but they still have many problems and shortcomings that prevent them from fully replacing human labor. In the future, these problems may be solved, and AI assistants will be able to significantly speed up and improve the process of creating scientific materials.”
</RoboAcademyDialog>

*(Il risultato sopra è stato generato da Notion AI)*