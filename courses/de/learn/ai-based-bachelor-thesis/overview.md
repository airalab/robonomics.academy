---
title: Übersicht
description: Starten Sie Ihre Bachelorarbeit mit KI-gestützten Tools
metaOptions: [Lernen, Starten Sie Ihre Bachelorarbeit mit KI-gestützten Tools]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Also, was Sie befürchtet haben.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

Sie müssen eine umfangreiche Textarbeit einreichen und der Abgabetermin ist sehr nah. Oder vielleicht ist die Situation anders: Der Abgabetermin mag nicht so beängstigend sein, aber das Schreiben großer Materialien, insbesondere mit formalem, technischem Inhalt, lässt Sie erschaudern und die Aufgabe lange aufschieben. Egal wie, Sie müssen einen ziemlich langen, monotonen und oft sehr langweiligen Prozess durchlaufen, der Ihre Motivation trübt. Vielleicht möchten Sie mehr Zeit für kreative und entwicklungsbezogene Aufgaben aufwenden, aber leider sind einige Berufe und Aktivitäten so strukturiert.

## Der Einstieg in die KI

Glücklicherweise hat der Fortschritt, der unsere Routineaufgaben im Laufe der Geschichte erleichtert hat, den Bereich des Textschreibens erreicht. Dies ist diesmal dank Fortschritten in der künstlichen Intelligenz möglich, insbesondere generativen Sprachmodellen, die in der Lage sind, Anfragen zu verstehen und zu lösen und mehr oder weniger sinnvolle Antworten im Chat-Format zu liefern. Bei Robonomics konnten wir einfach nicht etwas ignorieren, das das Niveau der Automatisierung in der Kommunikation und Interaktion zwischen lebenden und maschinellen Dingen erhöhen könnte (und auch unsere täglichen Aufgaben erleichtern könnte!).

Die neuesten GPT-Modelle beeindrucken mit ihren Fähigkeiten, aber die Frage stellt sich, wie man sie richtig einsetzt und vor allem, wie sehr man sich auf sie verlassen kann. Solche Fähigkeiten werden als Prompt-Engineering bezeichnet, und zu diesem Zweck präsentieren wir diesen Leitfaden, der Sie zu einem grundlegenden Verständnis der Möglichkeiten der aktuellen generativen künstlichen Intelligenz führen wird.

In diesem Leitfaden werden wir versuchen, eine einfache Bachelorarbeit zu schreiben, basierend auf dem Wissenszweig unseres "Bachelors" und dem Ausgangsmaterial, das der Bachelor durchlaufen hat. Wir werden sicherlich versuchen, uns an minimale akademische Regeln zu halten, aber zwei Wochen (die für diesen Leitfaden geplante Zeit) sind sicherlich nicht genug, um die Bachelorarbeit erfolgreich zu betrachten (obwohl die Realität manchmal das Gegenteil beweist). 

Dennoch kann dieser Leitfaden als guter Ausgangspunkt angesehen werden, um zu verstehen, welche die routinemäßigsten und zeitaufwändigsten Prozesse sind, die KI bereits glätten kann. Übrigens müssen Sie sich nicht auf die Aufgabe einer Bachelorarbeit beschränken: Dieser Leitfaden wird für jede Textarbeit nach dem IMRaD-Standard (Einleitung, Methode, Ergebnisse, Diskussion) nützlich sein: Journal- und Konferenzveröffentlichungen, Doktorarbeiten, technische Berichte, Handbücher usw.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  Der Leitfaden garantiert nicht und zielt nicht auf eine erfolgreiche Einreichung einer Bachelorarbeit mit einer Top-Note ab.
</RoboAcademyNote>

## Verwendete Tools

Unter den KI-Diensten, die im Leitfaden verwendet wurden:

**[ChatGPT](https://chat.openai.com/chat)** — ein Chatbot basierend auf dem Generative Pre-trained Transformer-Sprachmodell (Ver. 3.5 und 4) von OpenAI. Es arbeitet im Chat-Format mit dem Benutzer und beantwortet deren Anfragen, die von einfachen Fragen bis hin zum Verfassen von Gedichten und Debuggen von Benutzercode reichen können. Sein Wissen ist auf September 2021 begrenzt, da es keinen Zugriff auf das Internet hat. Die grundlegende Nutzung ist kostenlos, erfordert jedoch eine Registrierung mit einer Telefonnummer (nicht in allen Ländern verfügbar). Es gibt eine Abonnementoption ($20 pro Monat) mit leistungsstärkeren Funktionen und der Möglichkeit, Plugins hinzuzufügen, z. B. für den Zugriff auf Wolfram oder Slack.

**[Bing Chat](http://www.bing.com)** — ein Chatbot basierend auf GPT-4, integriert in den Bing-Suchdienst von Microsoft. Ein Microsoft-Konto ist für den Zugriff erforderlich. Im Wesentlichen verfügt es über die gleichen Fähigkeiten wie ChatGPT, jedoch mit Internetzugang, was es leistungsfähiger macht.

**[Auto-GPT](https://news.agpt.co/)** — eine Software, die GPT-4 verwendet, um autonome KI-Agenten zu erstellen, die eine vom Benutzer festgelegte Aufgabe lösen. Der Agent hat Zugriff auf das Internet, Langzeitgedächtnis und die Möglichkeit, Informationen in Dateien zu speichern, was es ihm ermöglicht, komplexe Abläufe von Handlungen auszuführen. Zur Verwendung ist ein Konto bei OpenAI erforderlich, vorzugsweise mit einem kostenpflichtigen Abonnement. Installationsanweisungen sind [hier verfügbar](https://docs.agpt.co/setup/).

**[Notion KI](https://www.notion.so/product/ai)** — ein KI-Assistent, integriert in die gleichnamige Wissensmanagement-Software. Es hat begrenzten kostenlosen Zugang, während ein Abonnement $10 pro Monat kostet. Es ist praktisch zur Verarbeitung und Verbesserung bereits vorbereiteter Texte und verfügt über vorinstallierte Funktionen zu diesem Zweck.

Zusätzlich benötigen wir die folgenden Dienste:

**[Overleaf](http://www.overleaf.com)** — Praktischer Online-LaTeX-Editor zur Formatierung von Texten. Es verfügt über eine Reihe von Vorlagen für jede Art von Arbeit (von Abschlussarbeiten und Artikeln bis hin zu Präsentationen). Wir werden die [MIT Thesis Template](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc) verwenden.

**[Google Scholar](http://scholar.google.com)** — eine Suchmaschine für wissenschaftliche Veröffentlichungen. Sie wird verwendet, um Quellen zu überprüfen, die von KI-Diensten vorgeschlagen werden.

## Wie man KI-Tools verwendet

### KI-Chatbots (ChatGPT, Bing)

KI-Chatbots (ChatGPT, Bing) erfordern keinen besonders komplexen Ansatz: Alles, was Sie tun müssen, ist die entsprechende Anfrage zu formatieren und an den Chatbot zu senden (es gibt nur eine Begrenzung für die Anzahl der Zeichen pro Nachricht, aber Sie können den Chatbot bitten zu warten, bis der gesamte Text der Anfrage gesendet wurde).

### Notion KI

Für Notion KI reicht es aus, einen Textblock auf einer beliebigen Seite einzufügen und das Kontextmenü mit Anfragen an den KI-Assistenten aufzurufen.

### Auto-GPT

Auto-GPT erfordert einen anderen Ansatz, da der Benutzer vor dem Start Folgendes angeben muss:

- Name des KI-Assistenten
- Rolle des KI-Assistenten
- Bis zu 5 aufeinanderfolgende Ziele, die vom KI-Assistenten erreicht werden sollen

Danach startet Auto-GPT einen Agenten, der dem Benutzer alle "Gedanken" und Aktionen anzeigt, nämlich:

- `THOUGHTS` — eine allgemeine Idee, die der Agent in der aktuellen Iteration umsetzen möchte
- `REASONING` — ein Grund, warum der Agent diese Idee gewählt hat
- `PLAN` — spezifische Aktionen zur Umsetzung der Idee (Recherche im Internet, Analyse von Dokumenten, Schreiben in eine Datei usw.)
- `CRITICISM` — besondere Bedingungen, die der Agent seinen Aktionen auferlegt (zum Beispiel "nur nach hochwertigen Referenzen aus IEEE-Zeitschriften suchen").

## Erste Schritte

<RoboAcademyNote title="WARNING" type="warning">
  KI-Tools werden weiterhin verbessert, daher sollten Sie immer die Ergebnisse überprüfen, die Sie erhalten.
</RoboAcademyNote>

### Den Dienst mit einem Kontext füttern

Einer der wichtigen Vorteile der neuesten KI-Dienste ist, dass sie sich recht gut an den Kontext einer Anfrage innerhalb einer einzelnen Sitzung erinnern. Daher ist das erste, was zu tun ist, um mit einer Bachelorarbeit zu beginnen, einen Kontext zu entwickeln (eine "Legende") und ihn dem Dienst zuzuführen.

Als Material für die Arbeit wurde der Kurs ["Souveränes Smart Home mit Robonomics und Home Assistant"](/learn/smart-home-course/overview) an der Robonomics Academy als Ausgangspunkt genommen. Als Ergebnis wurde der folgende Kontext erstellt:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Zigbee-Adapter using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

Die typische Reaktion eines KI-Chatbots auf diesen Kontext wäre, die Anfrage zu präzisieren und wie der Dienst helfen kann vorzuschlagen.

### Wählen Sie ein Thema aus den Vorschlägen aus

Der nächste Schritt (typisch für eine Bachelor-Situation) besteht darin, ein Thema für die Arbeit auszuwählen. Hier reicht es aus, eine Anfrage wie `Schlagen Sie N Themen für meine Arbeit vor` zu stellen. ChatGPT und Bing Chat schlugen folgendes vor:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

Das Thema **"Entwurf eines sicheren und privaten Smart Home-Systems unter Verwendung von Web3-Technologien"** wurde für die Anleitung gewählt.

### Einfacher Plan mit IMRaD-Struktur

Als nächstes können wir im Prinzip zu spezifischen Abschnitten der Arbeit übergehen, die der IMRaD-Struktur folgen. Es wäre jedoch schön, einen detaillierteren Plan für die Bachelorarbeit zu haben. Dies kann auch von einem KI-Dienst angefordert werden. ChatGPT schlug den folgenden Plan vor, ohne weitere Bedingungen:


<RoboAcademyDialog>

<ChatGPT/>

1. Einführungduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Übersicht of smart home technology and its security and privacy issues
    2. Einführungduction to web3 technology and its potential benefits for smart homes
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
6. Referenzen

</RoboAcademyDialog>

<RoboAcademyText>
Mit dieser Vorbereitung können wir nun zum ersten Abschnitt der Arbeit übergehen — der Einleitung.
</RoboAcademyText>
  

