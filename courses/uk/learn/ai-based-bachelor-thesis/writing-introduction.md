---
title: "Письмо: Вступ"
description: Швидкий старт вашої бакалаврської роботи з інструментами на основі штучного інтелекту
metaOptions: [Вчитися, Швидкий старт вашої бакалаврської роботи з інструментами на основі штучного інтелекту]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
У цьому керівництві ми напишемо Вступ для нашої бакалаврської роботи.
</RoboAcademyText>

Часто цей розділ може бути одним з найбільш нудних для написання. Крім планування та опису загальної візії роботи, нам потрібно створити певний обсяг тексту. Зазвичай студенти намагаються заповнити це простір чим завгодно, що призводить до того, що розділ виглядає як салат зі слів. Це саме та проблема, яку добре вирішують AI-помічники.

Одним з цікавих спостережень, зроблених під час тестування AI-сервісів, є те, що AI не прагне виконувати завдання в більшій мірі, ніж необхідно. Чесно кажучи, сервіси майже "ліниві" і виконують завдання лише у тій мірі, яка вказана в запиті. Наприклад, якщо попросити знайти джерела для абзацу тексту, AI знайде 1-3 джерела, а не 5 або 10. Тому при формулюванні запиту найкраще вказати точну кількість результатів, які мають бути повернуті.

## Написання Вступу за допомогою Auto-GPT

### Створити агента

Ми створимо агента з наступним описом та цілями:

<RoboAcademyTerminal title="Auto-GPT Terminal">

**Name your AI:** Bachelor-AI

**Describe your AI's role:** an AI that helps bachelors write their bachelor's thesis

**Enter up to 5 goals for your AI:**

*Goal 1:* Remember the context about the bachelor's thesis: "A bachelor is going to get Bachelor of Science in Computer Science and Engineering. The bachelor completed an online course called "Smart Home Sovereign". In this course, the bachelor went through all the steps necessary to build a sovereign smart home, the main advantage of which is the security / privacy of user data. During the course, The bachelor set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Адаптер Zigbee using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, the bachelor connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows to securely manage the home remotely"

*Goal 2:* Write an Вступduction part for this thesis in 500 words. It should contain: background and motivation; some context about web3 technology, what it is, why it should be used in smart home; research questions and objectives; significance of the work.

*Goal 3:* Save Вступduction text in file called "Вступduction.txt".

</RoboAcademyTerminal>

Як наш перший мета, ми попросили агента запам'ятати контекст нашої роботи. Ми також вказали довжину розділу Вступу, попросили включити певні пункти (взяті з плану роботи) та попросили зберегти текст у файлі .txt.

### Отримати результат

Результат агента (скорочена версія):

<RoboAcademyTerminal title="AutoGPT">

**THOUGHTS:**  For the next command, we can start with some background research to get more information about web3 technology and smart homes.

**REASONING:**  Gathering more information about web3 technology and smart homes will help us to write an informative introduction.

**PLAN:** 
<br/>&mdash;  Use the 'google' command to search for articles related to 'web3 technology and smart homes'
<br/>&mdash;  Skim the articles and websites listed
<br/>&mdash;  Use the 'browse_website' command and navigate to relevant websites to collect more information
<br/>&mdash;  Take notes of important points
<br/>&mdash;  Summarize findings

**CRITICISM:**  We should keep in mind the word limit for the introduction while researching.

**NEXT ACTION:  COMMAND = google ARGUMENTS = {'input': 'web3 technology and smart homes'}

**SYSTEM:**  Command google returned: ['https://cointelegraph.com/news/unique-web3-tech-primed-to-democratize-internet-of-things-industry', 'https://blog.aira.life/smart-home-based-on-web3-technologies-e378adfffb6a?source=publication_recirc-----d59e3007e78f----4----------------------------', 'https://www.ledgerinsights.com/bosch-fetch-ai-blockchain-web3-foundation/', 'https://www.forbes.com/sites/nataliakarayaneva/2022/04/16/click-click-close-how-web3-is-re-engineering-real-estate/', 'https://academy.binance.com/en/articles/the-evolution-of-the-internet-web-3-0-explained', 'https://dribbble.com/shots/20091453-Artificial-intelligence-robotics-smart-home-technology-web3-app', 'https://ieeexplore.ieee.org/document/8589489', 'https://www.ces.tech/topics/topics/smart-home']

...

**THOUGHTS:**  Our draft summary has very few words and is within the word limit. We can use this information for our introduction and expand on the summary to create the final draft. We can use the 'write_to_file' command to write the final draft to the Вступduction file.

**REASONING:**  We have counted the words in the introductory draft and confirmed that it is within the word limit. Now we can expand the draft summary to create the final draft of the introduction and write it to the Вступduction file.

**PLAN:**

<br/>&mdash;  Expand the drafted summary to create the final draft
<br/>&mdash;  Save the final draft of the introduction to Вступduction.txt using the 'write_to_file' command.

**CRITICISM:**  None

**NEXT ACTION:**  COMMAND = write_to_file ARGUMENTS = {'file': 'Introduction.txt', 'text': 'Introduction:\\n\\n The rise of smart home technology has led to a proliferation of internet-connected devices that can automate and optimize many aspects of our daily lives. A smart home system consists of a network of interconnected devices that can sense, communicate, and act on various environmental parameters such as temperature, humidity, motion, light, and sound. These devices can be controlled remotely or operate autonomously based on predefined rules and algorithms. \\n\\nHowever, smart home systems also present significant challenges and risks in terms of data privacy and security. Most smart home devices rely on centralized cloud platforms to store and process the data they collect from users' homes, which exposes users to potential data breaches, unauthorized access, surveillance, manipulation, or misuse by third parties such as hackers, service providers, governments, or advertisers. Furthermore, users often have limited control and ownership over their data, as they are required to agree to the terms and conditions of the cloud providers, which may not respect their preferences or rights. \\n\\nWeb3 technology refers to a suite of decentralized technologies that use blockchain to enable secure, transparent, and immutable transactions and records without intermediaries or central authorities. This allows for the creation of trustless, compromise-resistant IoT networks, and supports the creation of decentralized applications (dapps) that run on top of the blockchain. This enables users to transact in a secure and decentralized manner. \\n\\nThe main goal of this bachelor's thesis is to design a smart home system that is both secure and private. This system will use web3 technologies to create a decentralized, sovereign ecosystem. To achieve this goal, this work will explore the use of a Raspberry Pi as an IoT hub, connected to various smart home devices using the MQTT protocol. Then, a decentralized cloud based on Polkadot web3 technology will be integrated into the IoT system. This will enable secure and private data transfer between the smart home devices. Finally, the privacy and security implications of this setup will be evaluated and compared to traditional smart home setups that rely on centralized cloud vendors. \\n\\nThe significance of this study lies in its exploration of the use of Web3 technologies to design a secure and private smart home system. This work identifies the potential benefits and challenges of using Web3 technologies in smart homes. By examining these issues, this study contributes to the development of guidelines for the use of these technologies in IoT environments.'}

**SYSTEM:**  Command write_to_file returned: File written to successfully.

</RoboAcademyTerminal>

Згідно з журналами агента, перед написанням тексту він витратив певний час на пошук інформації. Крім того, агент створив Вступ ітеративно, поступово додаючи текст, щоб відповідати обмеженню на кількість слів.

### Покращити результат

Загалом, AI виконав завдання достатньо добре, щоб використовувати цей текст як основу для Вступу. Його також можна покращити, подавши текст в **Notion AI** (використовуючи інструменти `Покращити написання` або `Змінити тон`).

<RoboAcademyText>
Загалом, в розділ Вступу вже необхідно додати джерела для відповідних робіт, але перед тим, як перейти до пошуку та аналізу джерел, краще спочатку пройти наступне керівництво — Огляд літератури.
</RoboAcademyText>