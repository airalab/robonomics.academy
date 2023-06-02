---
title: Overview
lastUpdate: Thu Jun 01 2023 19:34:55 GMT+0300 (Eastern European Summer Time)
description: Quickstart Your Bachelor's Thesis with AI-powered Tools
metaOptions: [Learn, Quickstart Your Bachelor's Thesis with AI-powered Tools]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
So, what you feared happened.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

You need to submit a voluminous text work and the deadline is very close. Or maybe the situation is different: the submission deadline may not be so scary, but writing large materials, especially with formal, technical content, makes you cringe and postpone the task for a long time. One way or another, you have to go through a fairly long, monotonous, and often very boring process that darkens your motivation. Perhaps you would like to devote more time to creative and developmental tasks, but unfortunately, some professions and activities are structured that way.

## Entering the AI

Fortunately for all of us, progress that has been making our routine tasks easier throughout history has reached the sphere of text writing. This time it is possible thanks to advances in artificial intelligence, specifically generative language models, capable of understanding and solving requests and providing more or less meaningful answers in a chat format. At Robonomics, we simply couldn't ignore something that could raise the level of automation in communication and interaction between living and machine things (and make our daily tasks easier too!).

The latest GPT models impress with their capabilities, but the question arises of how to use them correctly and, most importantly, how much can they be relied on. Such skills are called prompt engineering, and for this purpose, we present this guide, which will push you towards a basic understanding of the possibilities of current generative artificial intelligence.

In this guide, we will try to write a simple bachelor's thesis, based on the branch of knowledge of our "bachelor" and the starting material that the bachelor has passed. We will certainly try to adhere to minimal academic rules, but two weeks (which is the planned time for this guide) is certainly not enough to consider the bachelor's thesis successful (although reality sometimes proves otherwise). 

Nevertheless, this guide can be considered a good starting point to understand what are the most routine and time-consuming processes that AI can already smooth out. By the way, you don't have to limit yourself to a bachelor's thesis task: this guide will be useful for any text work following the IMRaD standard (Introduction, Method, Results, Discussion): journal and conference publications, PhD thesis, tech reports, manuals, etc.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  The guide does not guarantee and aim for a successful submission of a bachelor's thesis with a top grade.
</RoboAcademyNote>

## Used Tools

Among the AI services that were used in the guide:

**[ChatGPT](https://chat.openai.com/chat)** — a chatbot based on the Generative Pre-trained Transformer language model (ver. 3.5 and 4) created by OpenAI. It operates in a chat format with the user, answering their requests which can vary from simple questions and to composing poetry and debugging user code. Its knowledge is limited to September 2021, as it does not have access to the Internet. Basic usage is free, but requires registration with a phone number (not available in some countries). It has a subscription option ($20 per month) with more powerful features and the ability to add plugins, such as for access to Wolfram or Slack.

**[Bing Chat](http://www.bing.com)** — a chatbot based on GPT-4 integrated into Microsoft's Bing search service. A Microsoft account is required for access. Essentially, it has the same capabilities as ChatGPT, but with the Internet access, making it more powerful.

**[Auto-GPT](https://news.agpt.co/)** — a software that uses GPT-4 to create autonomous AI agents that solves a task set by the user. The agent has access to the Internet, long-term memory, and the ability to save information to files, allowing it to perform complex sequences of actions. To use it, an account on OpenAI is required, preferably with a paid subscription. Installation instructions are [available here](https://docs.agpt.co/setup/).

**[Notion AI](https://www.notion.so/product/ai)** — an AI assistant integrated into the eponymous knowledge management software. It has limited free access, while a subscription costs $10 per month. It is convenient for processing and improving already prepared text, and has pre-installed functions for this purpose.

Additionally, we will need the following services:

**[Overleaf](http://www.overleaf.com)** —  Convenient online LaTeX editor for formatting text. It has a set of templates for any type of work (from theses and articles to presentations). We will be using the [MIT Thesis Template](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc).

**[Google Scholar](http://scholar.google.com)** — a search engine for scientific publications. It is used for verifying sources suggested by AI services.

## How to use AI tools

### AI chatbots (ChatGPT, Bing)

AI chatbots (ChatGPT, Bing) do not require a particularly complex approach: all you need to do is format the appropriate request and send it to the chatbot (there is only a limit on the number of characters per message, but you can ask the chatbot to wait until the entire text of the request is sent).

### Notion AI

For Notion AI, it is enough to insert a text block on any page and call the context menu with requests to the AI assistant.

### Auto-GPT

Auto-GPT requires a different approach, as the user needs to specify before starting the following:

- Name of the AI assistant
- Role of the AI assistant
- Up to 5 consecutive goals to be completed by the AI Assistant

After this, Auto-GPT will launch an agent that will display for the user all "thoughts" and actions performed, namely:

- `THOUGHTS` — a general idea that the agent wants to implement in the current iteration
- `REASONING` — a reason why the agent chose this idea
- `PLAN` — specific actions to achieve the idea (searching on the internet, analyzing documents, writing to a file, etc.)
- `CRITICISM` — special conditions that the agent imposes on its actions (for example, "search only for high-quality references from IEEE journals").

## First Steps

<RoboAcademyNote title="WARNING" type="warning">
  AI tools are still being improved, so always double check the results you get.
</RoboAcademyNote>

### Feed the service with a context

One of the important advantages of the latest AI services is that they quite well remember the context of a request within a single session. Therefore, the first thing to do to start a bachelor's thesis is to come up with a context (a "legend") and feed it to the service.

As the material for the work, the course ["Sovereign Smart Home with Robonomics and Home Assistant"](/learn/smart-home-course/overview) on Robonomics Academy was taken as a starting point. As a result, the following context was created:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Zigbee adapter using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

Typical reaction of an AI chatbot to this context would be to suggest clarifying the request and how the service can assist.

### Choose a topic from the suggested

The next step (typical for a bachelor's situation) is to choose a topic for the thesis. Here, it is sufficient to make a request link `Propose N topics for my thesis`. ChatGPT and Bing Chat offered the following:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

The topic **"Designing a Secure and Private Smart Home System using Web3 Technologies"** was chosen for the guide.

### Simple plan with IMRaD structure

Next, in principle, we can proceed to specific sections of the theses, following the IMRaD structure. However, it would be nice to have a more detailed plan for the bachelor's work. This can also be requested from an AI service. ChatGPT suggested the following plan, without any additional conditions:


<RoboAcademyDialog>

<ChatGPT/>

1. Introduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Overview of smart home technology and its security and privacy issues
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
6. References

</RoboAcademyDialog>

<RoboAcademyText>
With this preparation complete, we can now move on to the first section of the thesis — the Introduction.
</RoboAcademyText>
  

