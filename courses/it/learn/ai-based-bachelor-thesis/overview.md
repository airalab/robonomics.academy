---
title: Panoramica
description: Avvia rapidamente la tua tesi di laurea con strumenti alimentati da intelligenza artificiale
metaOptions: [Imparare, Avvia rapidamente la tua tesi di laurea con strumenti alimentati da intelligenza artificiale]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Quindi, ciò che temevi è accaduto.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

Devi presentare un lavoro testuale voluminoso e la scadenza è molto vicina. Oppure la situazione potrebbe essere diversa: la scadenza potrebbe non essere così spaventosa, ma scrivere materiali di grandi dimensioni, specialmente con contenuti formali e tecnici, ti fa rabbrividire e rimandare il compito per molto tempo. In un modo o nell'altro, devi affrontare un processo piuttosto lungo, monotono e spesso molto noioso che offusca la tua motivazione. Forse vorresti dedicare più tempo a compiti creativi e di sviluppo, ma sfortunatamente alcune professioni e attività sono strutturate in questo modo.

## Entrando nell'IA

Fortunatamente per tutti noi, il progresso che ha reso più facili i nostri compiti di routine lungo la storia ha raggiunto la sfera della scrittura di testi. Questa volta è possibile grazie ai progressi nell'intelligenza artificiale, in particolare ai modelli di linguaggio generativi, capaci di comprendere e risolvere richieste e fornire risposte più o meno significative in un formato di chat. Da Robonomics, non potevamo semplicemente ignorare qualcosa che potesse aumentare il livello di automazione nella comunicazione e nell'interazione tra cose viventi e macchine (e rendere più facili anche i nostri compiti quotidiani!).

Gli ultimi modelli GPT impressionano con le loro capacità, ma sorge la domanda su come utilizzarli correttamente e, soprattutto, quanto ci si possa affidare. Tali abilità sono chiamate ingegneria dei prompt, e a questo scopo presentiamo questa guida, che ti spingerà verso una comprensione di base delle possibilità dell'attuale intelligenza artificiale generativa.

In questa guida, cercheremo di scrivere una semplice tesi di laurea, basata sul ramo di conoscenza del nostro "bachelor" e sul materiale iniziale che il bachelor ha superato. Cercheremo certamente di attenerci alle regole accademiche minime, ma due settimane (che è il tempo previsto per questa guida) non sono certamente sufficienti per considerare la tesi di laurea del bachelor un successo (anche se la realtà a volte dimostra il contrario). 

Tuttavia, questa guida può essere considerata un buon punto di partenza per capire quali sono i processi più routine e che richiedono più tempo che l'IA può già appianare. A proposito, non devi limitarti a un compito di tesi di laurea: questa guida sarà utile per qualsiasi lavoro testuale seguendo lo standard IMRaD (Introduzioneduzioneduzioneduzioneduzioneduzioneduzione, Metodo, Risultati, Discussione): pubblicazioni su riviste e conferenze, tesi di dottorato, report tecnici, manuali, ecc.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  La guida non garantisce e non mira a una presentazione di successo di una tesi di laurea con un voto alto.
</RoboAcademyNote>

## Strumenti utilizzati

Tra i servizi di intelligenza artificiale utilizzati nella guida:

**[ChatGPT](https://chat.openai.com/chat)** — un chatbot basato sul modello di linguaggio Generative Pre-trained Transformer (ver. 3.5 e 4) creato da OpenAI. Opera in un formato di chat con l'utente, rispondendo alle loro richieste che possono variare da semplici domande a composizioni di poesie e debug del codice dell'utente. La sua conoscenza è limitata a settembre 2021, poiché non ha accesso a Internet. L'uso di base è gratuito, ma richiede la registrazione con un numero di telefono (non disponibile in alcuni paesi). Ha un'opzione di abbonamento ($20 al mese) con funzionalità più potenti e la possibilità di aggiungere plugin, come per l'accesso a Wolfram o Slack.

**[Bing Chat](http://www.bing.com)** — un chatbot basato su GPT-4 integrato nel servizio di ricerca di Microsoft Bing. È richiesto un account Microsoft per l'accesso. Fondamentalmente, ha le stesse capacità di ChatGPT, ma con l'accesso a Internet, rendendolo più potente.

**[Auto-GPT](https://news.agpt.co/)** — un software che utilizza GPT-4 per creare agenti AI autonomi che risolvono un compito impostato dall'utente. L'agente ha accesso a Internet, memoria a lungo termine e la capacità di salvare informazioni su file, consentendogli di eseguire sequenze complesse di azioni. Per utilizzarlo è necessario un account su OpenAI, preferibilmente con un abbonamento a pagamento. Le istruzioni per l'installazione sono [disponibili qui](https://docs.agpt.co/setup/).

**[Notion AI](https://www.notion.so/product/ai)** — un assistente AI integrato nel software di gestione della conoscenza omonimo. Ha un accesso gratuito limitato, mentre un abbonamento costa $10 al mese. È comodo per elaborare e migliorare testi già preparati e ha funzioni preinstallate a tale scopo.

Inoltre, avremo bisogno dei seguenti servizi:

**[Overleaf](http://www.overleaf.com)** — Comodo editor LaTeX online per formattare testi. Ha un set di modelli per qualsiasi tipo di lavoro (dalle tesi e agli articoli alle presentazioni). Utilizzeremo il [Modello di tesi MIT](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc).

**[Google Scholar](http://scholar.google.com)** — un motore di ricerca per pubblicazioni scientifiche. Viene utilizzato per verificare le fonti suggerite dai servizi AI.

## Come utilizzare gli strumenti AI

### Chatbot AI (ChatGPT, Bing)

I chatbot AI (ChatGPT, Bing) non richiedono un approccio particolarmente complesso: tutto ciò che devi fare è formattare la richiesta appropriata e inviarla al chatbot (c'è solo un limite sul numero di caratteri per messaggio, ma puoi chiedere al chatbot di aspettare fino a quando l'intero testo della richiesta viene inviato).

### Notion AI

Per Notion AI, è sufficiente inserire un blocco di testo su qualsiasi pagina e chiamare il menu contestuale con richieste all'assistente AI.

### Auto-GPT

Auto-GPT richiede un approccio diverso, poiché l'utente deve specificare prima di iniziare quanto segue:

- Nome dell'assistente AI
- Ruolo dell'assistente AI
- Fino a 5 obiettivi consecutivi da completare dall'assistente AI

Dopo questo, Auto-GPT avvierà un agente che mostrerà all'utente tutti i "pensieri" e le azioni eseguite, ovvero:

- `THOUGHTS` — un'idea generale che l'agente vuole implementare nell'iterazione corrente
- `REASONING` — un motivo per cui l'agente ha scelto questa idea
- `PLAN` — azioni specifiche per raggiungere l'idea (ricerca su internet, analisi di documenti, scrittura su un file, ecc.)
- `CRITICISM` — condizioni speciali che l'agente impone sulle sue azioni (ad esempio, "cercare solo riferimenti di alta qualità dalle riviste IEEE").

## Primi passi

<RoboAcademyNote title="WARNING" type="warning">
  Gli strumenti AI sono ancora in fase di miglioramento, quindi controlla sempre i risultati che ottieni.
</RoboAcademyNote>

### Alimentare il servizio con un contesto

Uno dei vantaggi importanti dei servizi AI più recenti è che ricordano piuttosto bene il contesto di una richiesta all'interno di una singola sessione. Pertanto, la prima cosa da fare per iniziare una tesi di laurea è creare un contesto (una "legenda") e alimentarlo al servizio.

Come materiale per il lavoro, è stato preso il corso ["Sovereign Smart Home con Robonomics e Home Assistant"](/learn/smart-home-course/overview) presso Robonomics Academy come punto di partenza. Di conseguenza, è stato creato il seguente contesto:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Adattatore Zigbee using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

La reazione tipica di un chatbot AI a questo contesto sarebbe quella di suggerire di chiarire la richiesta e come il servizio può aiutare.

### Scegliere un argomento tra quelli suggeriti

Il passo successivo (tipico per una situazione di laurea) è scegliere un argomento per la tesi. Qui, è sufficiente fare una richiesta del tipo `Proporre N argomenti per la mia tesi`. ChatGPT e Bing Chat hanno offerto quanto segue:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

L'argomento **"Progettazione di un sistema Smart Home sicuro e privato utilizzando tecnologie Web3"** è stato scelto per la guida.

### Piano semplice con struttura IMRaD

Successivamente, in linea di principio, possiamo procedere alle sezioni specifiche delle tesi, seguendo la struttura IMRaD. Tuttavia, sarebbe bello avere un piano più dettagliato per il lavoro di laurea. Anche questo può essere richiesto a un servizio AI. ChatGPT ha suggerito il seguente piano, senza condizioni aggiuntive:


<RoboAcademyDialog>

<ChatGPT/>

1. Introduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Panoramica of smart home technology and its security and privacy issues
    2. Introduction to web3 technology and its potential benefits for smart homes
    3. Existing research on using web3 technology for smart home security and privacy
3. Methodology
    1. Description of the smart home system design using web3 technology, including hardware and software components
    2. Implementation details and justification for design choices
    3. Evaluation plan for assessing the security and privacy of the system
4. Results and Analysis
    1. Evaluation of the implemented system with respect to security and privacy metrics
    2. Comparison with existing solutions and analysis of strengths and weaknesses
    3. Discussion of limitations and potential areas for improvement
5. Conclusion and Future Work
    1. Summary of the study's contributions and main findings
    2. Implications and significance of the results for the smart home industry and related fields
    3. Recommendations for future research and development
6. Riferimenti

</RoboAcademyDialog>

<RoboAcademyText>
Con questa preparazione completata, possiamo ora passare alla prima sezione della tesi — l'Introduzione.
</RoboAcademyText>
  

