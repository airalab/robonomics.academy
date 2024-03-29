---
title: Overzicht
description: Begin snel aan je bachelorscriptie met door AI aangedreven tools
metaOptions: [Leren, Begin snel aan je bachelorscriptie met door AI aangedreven tools]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Dus, wat je vreesde is gebeurd.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

Je moet een omvangrijk tekstwerk indienen en de deadline is erg dichtbij. Of misschien is de situatie anders: de indieningstermijn is misschien niet zo eng, maar het schrijven van grote materialen, vooral met formele, technische inhoud, maakt je huiverig en stelt je de taak uit voor een lange tijd. Op de een of andere manier moet je een vrij lang, eentonig en vaak erg saai proces doormaken dat je motivatie verduistert. Misschien zou je meer tijd willen besteden aan creatieve en ontwikkelingstaken, maar helaas zijn sommige beroepen en activiteiten zo gestructureerd.

## Het betreden van de AI

Gelukkig voor ons allemaal heeft de vooruitgang die onze routinetaken gemakkelijker heeft gemaakt door de geschiedenis heen de sfeer van tekstschrijven bereikt. Deze keer is het mogelijk dankzij de vooruitgang in kunstmatige intelligentie, specifiek generatieve taalmodellen, die in staat zijn verzoeken te begrijpen en op te lossen en min of meer zinvolle antwoorden te geven in een chatformaat. Bij Robonomics konden we eenvoudigweg niet iets negeren dat het niveau van automatisering in communicatie en interactie tussen levende en machinale dingen kon verhogen (en ook onze dagelijkse taken gemakkelijker kon maken!).

De nieuwste GPT-modellen maken indruk met hun mogelijkheden, maar de vraag rijst hoe ze correct kunnen worden gebruikt en, nog belangrijker, hoeveel ze kunnen worden vertrouwd. Dergelijke vaardigheden worden prompt engineering genoemd, en hiervoor presenteren we deze gids, die je zal helpen bij een basisbegrip van de mogelijkheden van de huidige generatieve kunstmatige intelligentie.

In deze gids zullen we proberen een eenvoudige bachelorscriptie te schrijven, gebaseerd op de kennis van onze "bachelor" en het startmateriaal dat de bachelor heeft doorlopen. We zullen zeker proberen ons te houden aan minimale academische regels, maar twee weken (wat de geplande tijd is voor deze gids) is zeker niet genoeg om de bachelorscriptie succesvol te overwegen (hoewel de realiteit soms anders bewijst). 

Desalniettemin kan deze gids worden beschouwd als een goed startpunt om te begrijpen wat de meest routinematige en tijdrovende processen zijn die AI al kan gladstrijken. Overigens hoef je je niet te beperken tot een bachelorscriptietaak: deze gids zal nuttig zijn voor elk tekstwerk volgens de IMRaD-standaard (Introduction, Method, Resultaataats, Discussion): tijdschrift- en conferentiepublicaties, proefschrift, technische rapporten, handleidingen, enz.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  De gids garandeert niet en streeft niet naar een succesvolle indiening van een bachelorscriptie met een topcijfer.
</RoboAcademyNote>

## Gebruikte tools

Onder de AI-services die in de gids zijn gebruikt:

**[ChatGPT](https://chat.openai.com/chat)** — een chatbot gebaseerd op het Generative Pre-trained Transformer-taalmodel (ver. 3.5 en 4) gemaakt door OpenAI. Het werkt in een chatformaat met de gebruiker, beantwoordt hun verzoeken die kunnen variëren van eenvoudige vragen tot het componeren van poëzie en het debuggen van gebruikerscode. Zijn kennis is beperkt tot september 2021, omdat het geen toegang heeft tot internet. Basisgebruik is gratis, maar vereist registratie met een telefoonnummer (niet beschikbaar in sommige landen). Het heeft een abonnementsoptie ($20 per maand) met krachtigere functies en de mogelijkheid om plugins toe te voegen, zoals voor toegang tot Wolfram of Slack.

**[Bing Chat](http://www.bing.com)** — een chatbot gebaseerd op GPT-4 geïntegreerd in de Bing-zoekservice van Microsoft. Een Microsoft-account is vereist voor toegang. In wezen heeft het dezelfde mogelijkheden als ChatGPT, maar met toegang tot internet, waardoor het krachtiger is.

**[Auto-GPT](https://news.agpt.co/)** — een software die GPT-4 gebruikt om autonome AI-agenten te creëren die een taak oplossen die door de gebruiker is ingesteld. De agent heeft toegang tot internet, langetermijngeheugen en de mogelijkheid om informatie op te slaan in bestanden, waardoor het complexe reeksen acties kan uitvoeren. Om het te gebruiken is een account op OpenAI vereist, bij voorkeur met een betaald abonnement. Installatie-instructies zijn [hier beschikbaar](https://docs.agpt.co/setup/).

**[Notion AI](https://www.notion.so/product/ai)** — een AI-assistent geïntegreerd in de gelijknamige kennisbeheersoftware. Het heeft beperkte gratis toegang, terwijl een abonnement $10 per maand kost. Het is handig voor het verwerken en verbeteren van al voorbereide tekst, en heeft voor dit doel vooraf geïnstalleerde functies.

Bovendien hebben we de volgende diensten nodig:

**[Overleaf](http://www.overleaf.com)** — Handige online LaTeX-editor voor het opmaken van tekst. Het heeft een set sjablonen voor elk type werk (van scripties en artikelen tot presentaties). We zullen de [MIT Thesis Template](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc) gebruiken.

**[Google Scholar](http://scholar.google.com)** — een zoekmachine voor wetenschappelijke publicaties. Het wordt gebruikt om bronnen te verifiëren die worden voorgesteld door AI-services.

## Hoe AI-tools te gebruiken

### AI-chatbots (ChatGPT, Bing)

AI-chatbots (ChatGPT, Bing) vereisen geen bijzonder complexe aanpak: het enige wat je hoeft te doen is het juiste verzoek formatteren en naar de chatbot sturen (er is slechts een limiet op het aantal tekens per bericht, maar je kunt de chatbot vragen te wachten tot de volledige tekst van het verzoek is verzonden).

### Notion AI

Voor Notion AI is het voldoende om een tekstblok in te voegen op elke pagina en het contextmenu te openen met verzoeken aan de AI-assistent.

### Auto-GPT

Auto-GPT vereist een andere aanpak, aangezien de gebruiker moet specificeren voordat hij begint met het volgende:

- Naam van de AI-assistent
- Rol van de AI-assistent
- Tot 5 opeenvolgende doelen die door de AI-assistent moeten worden voltooid

Hierna zal Auto-GPT een agent starten die voor de gebruiker alle "gedachten" en acties uitvoert, namelijk:

- `THOUGHTS` — een algemeen idee dat de agent wil implementeren in de huidige iteratie
- `REASONING` — een reden waarom de agent dit idee heeft gekozen
- `PLAN` — specifieke acties om het idee te bereiken (zoeken op internet, documenten analyseren, schrijven naar een bestand, enz.)
- `CRITICISM` — speciale voorwaarden die de agent oplegt aan zijn acties (bijvoorbeeld "alleen zoeken naar hoogwaardige referenties uit IEEE-tijdschriften").

## Eerste stappen

<RoboAcademyNote title="WARNING" type="warning">
  AI-tools worden nog steeds verbeterd, dus controleer altijd dubbel de resultaten die je krijgt.
</RoboAcademyNote>

### Voed de service met een context

Een van de belangrijke voordelen van de nieuwste AI-services is dat ze vrij goed de context van een verzoek binnen een enkele sessie onthouden. Daarom is het eerste wat je moet doen om een bachelorproef te starten, een context bedenken (een "legende") en deze aan de service voeden.

Als materiaal voor het werk werd de cursus ["Soevereine Smart Home met Robonomics en Home Assistant"](/learn/smart-home-course/overview) op Robonomics Academy genomen als startpunt. Als resultaat werd de volgende context gecreëerd:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Zigbee-adapter using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

Een typische reactie van een AI-chatbot op deze context zou zijn om aan te bevelen het verzoek te verduidelijken en hoe de service kan helpen.

### Kies een onderwerp uit de suggesties

De volgende stap (typisch voor een bachelorsituatie) is het kiezen van een onderwerp voor de scriptie. Hier is het voldoende om een verzoek te maken link `Stel N onderwerpen voor voor mijn scriptie`. ChatGPT en Bing Chat boden het volgende aan:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

Het onderwerp **"Het ontwerpen van een veilig en privé Smart Home-systeem met behulp van Web3-technologieën"** werd gekozen voor de gids.

### Eenvoudig plan met IMRaD-structuur

Vervolgens kunnen we in principe doorgaan naar specifieke secties van de scripties, volgens de IMRaD-structuur. Het zou echter fijn zijn om een meer gedetailleerd plan te hebben voor het bachelorwerk. Dit kan ook worden aangevraagd bij een AI-service. ChatGPT stelde het volgende plan voor, zonder enige aanvullende voorwaarden:


<RoboAcademyDialog>

<ChatGPT/>

1. Introduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Overzicht of smart home technology and its security and privacy issues
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
6. Referenties

</RoboAcademyDialog>

<RoboAcademyText>
Met deze voorbereiding voltooid, kunnen we nu doorgaan naar de eerste sectie van de scriptie — de Inleiding.
</RoboAcademyText>
  

