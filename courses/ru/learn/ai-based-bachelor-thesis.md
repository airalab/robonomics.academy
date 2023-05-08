---
title: Quickstart Your Bachelor's Thesis with AI-powered Tools
description: Quickstart Your Bachelor's Thesis with AI-powered Tools
# lessonNumber: 0
metaOptions: [Learn, Quickstart Your Bachelor's Thesis with AI-powered Tools]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

# Entering the AI

## Intro

Итак, случилось то, чего вы боялись — нужно сдать объемную текстовую работу, а дедлайн очень близко. Или же ситуация другая: может быть срок сдачи на так страшен, но написание крупных материалов, особенно с сухим, техническим наполнением, заставляет вас скривиться и отложить задачу в долгий ящик. Так или иначе, вам предстоит довольно долгий, монотонный и часто очень скучный процесс, омрачняющий вашу работу. Возможно, вы бы хотели больше времени уделять творческим и развивающим задачами, но к сожалению так устроены некоторые профессии и деятельности.

К счастью для всех нас, прогресс, который в принципе всю историю облегчал нам рутинные задачи, добрался и до сферы написания текстов. На этот раз благодаря достижениям в области искусственного интеллекта, а конкретнее генеративных языковых моделях, способных в формате чата понимать и решать поставленные запросы и выдавать более-менее осмысленные ответы. Мы в Робономике просто не могли не пройти мимо чего-то, что на столько может поднять уровень автоматизации общения и взаимодействия живого и неживого (и облегчить нам повседневные задачи тоже!). 

Последние модели GPT восхищают своими возможностями, однако встает вопрос, как правильно ими пользоваться и самое главное — на сколько на них можно положиться. Такие навыки называются prompt engineering и с этой целью, вашему вниманию представляется этот гайд, который подтолкнет вас к базовому пониманию возможностей текущего генеративного искусственного интеллекта. 

В гайде мы попробуем написать простую бакалаврскую работу, имея в качестве вводных данных направление обучения нашего “бакалавра”, и стартовый материал, который он освоил. Безусловно мы будем стараться придерживаться минимальных академических правил, однако две недели (а именно столько планируется потратить на этот процесс) это конечно мало, чтобы считать бакалаврскую работу успешной. Хотя, бывали в реальности и такие случаи успешной сдачи…

Тем не менее, данный гайд можно считать хорошей стартовой точкой, чтобы понять, какие самые рутинные и максимально трудозатратные процессы, ИИ способен сгладить уже прямо сейчас. Кроме того, вы можете не ограничиваться задачей бакалаврской работы: этот гайд пригодится для любой текстовой работы, следующей усредненному стандарту IMRaD (Introduction, Method, Results, Discussion) — журнальные и конференционные публикации, диссертации, tech reports, мануалы, и т.д.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  Гайд не гарантирует и не ставит целью успешную сдачу бакалаврской работы на высший балл. 
</RoboAcademyNote>

## Используемые инструменты

Среди ИИ-сервисов, которые были использованы в гайде:

<List>

<li class="flex">

[ChatGPT](https://chat.openai.com/chat) — чат-бот на основе языковой модели Generative Pre-trained Transformer (ver. 3.5 и 4), созданной компанией OpenAI. Работает в формате чата с пользователем, отвечая на его запросы, которые могут варьироваться от простых вопросов и просьб объяснить что-либо до сочинения стихов и дебага кода пользователя. Ограничен в знаниях до Сентября 2021, так как не имеет возможности воспользоваться Интернетом. Базовое использование бесплатное, но требует регистрации с номером телефона (для некоторых стран не доступно). Имеет возможность подписки (20$ в мес) с более мощными фичами, а также возможность добавлять плагины, например для доступа к Wolfram или Slack.

</li>

<li class="flex">

[Bing Chat](http://www.bing.com) — чат-бот на основе GPT-4, интегрированный в поисковой сервис Bing от Microsoft. Для доступа нужен аккаунт в Microsoft. По сути имеет тем же возможности, что и ChatGPT, но при этом имеет доступ в Интернет, что делает его более мощным.

</li>

<li class="flex">

[Auto-GPT](https://news.agpt.co/) — ПО, использующее GPT-4, для создания автономных ИИ-агентов, которые будет решать некоторую поставленную пользователем задачу. Агент имеет доступ к Интернету, долгосрочную память, умеет сохранять информацию в файлы, благодаря чему способен выполнять сложные последовательности действий. Для использования нужен аккаунт в OpenAI, причем желательно с платной подпиской. Инструкция по установке [доступна здесь](https://docs.agpt.co/setup/).

</li>

<li class="flex">

[Notion AI](https://www.notion.so/product/ai) — ИИ-помощник, встроенный в одноименное knowledge management software. Ограниченно доступен бесплатно, подписка стоит 10$ в месяц.  Удобен для обработки и улучшения уже готового текста, имеет предустановленные функции для этого.

</li>

</List>

Кроме этого нам понадобятся следующие сервисы:

<List>

<li class="flex">

[Overleaf](http://www.overleaf.com) —  удобный онлайн LaTeX-редактор, в котором будет оформляться текст. Имеет набор шаблон под любой тип работ (от тезисов и статей до презентаций). Мы будем использовать [MIT Thesis Template](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc).

</li>

<li class="flex">

[Google Scholar](http://scholar.google.com) — поисковой сервис по научным публикациям от Google. Используется для проверок источников, предлагаемых ИИ-сервисами.

</li>

</List>

## Как работать с ИИ-инструментами

<List>

<li>ИИ-чатботы (ChatGPT, Bing) не требуют особо сложного подхода: вам всего лишь нужно оформить соответствующий запрос и отправить его чатботу (есть только ограничение на кол-во символов за одно сообщение, но можно попросить чат-бота подождать, пока весь текст запроса не будет отправлен).</li>

<li>Для Notion AI достаточно вставить блок текста на любой странице и вызвать контекстное меню с запросами к ИИ-помощнику. </li>


<li>
Auto-GPT требует другого подхода, так как перед началом работы пользователю нужно задать:

<List>
  <li>Название ИИ-помощника</li>
  <li>Роль ИИ-помощника</li>
  <li>До 5 последовательных целей, которые должен выполнить ИИ-помощник</li>
</List>

После этого Auto-GPT запустит агента, который в процессе работы будет отображать для пользователя все “мысли” и исполняемые действия, а именно:

<List>
  <li>THOUGHTS — общая идея, которую хочет воплотить агент на текущей итерации</li>
  <li>REASONING — причина, почему агент выбрал эту идею</li>
  <li>PLAN — конкретные действия для достижения идеи (поиск в Интернете, анализ документа, запись в файл, и т. д.)</li>
  <li>CRITICISM — особые условия, которые агент накладывает на свои действия (например, “искать только качественные источники из IEEE-журналов”).</li>
</List>

</li>

</List>

## Первые шаги

<RoboAcademyNote title="WARNING" type="warning">
  ИИ инструменты все еще совершенствуются, поэтому всегда перепроверяйте полученные результаты.
</RoboAcademyNote>

<List type="numbers">

<li>
Одним из важным преимуществ последних ИИ-сервисов стало то, что они довольно хорошо запоминают контекст запроса в рамках одной сессии. Поэтому, первое что стоит сделать для старта бакалаврской работы — придумать контекст (по сути “легенду”) и скормить ее сервису. 

В качестве материала, от которого отталкивается работа, был взят курс ["Sovereign Smart Home with Robonomics and Home Assistant"](https://robonomics.academy/en/learn/smart-home-course/) на Robonomics Academy. В итоге получился следующий контекст:

<LessonCodeWrapper language="plainText">

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.

During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Zigbee adapter using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.


Now I want to take this course as a basis and write a bachelor's thesis with your help.

</LessonCodeWrapper>

Типичной реакцией ИИ-чат-бота на этот контекст было предложение уточнить запрос, чем сервис может помочь.

</li>

<li>

ледующий шаг (типичный для ситуации бакалавра) — выбор темы работы. Здесь достаточно сделать запрос в духе `Предложи мне N-тем для моего тезиса`. ChatGPT и Bing Chat предложили следующие:

<LessonCodeWrapper language="plainText">

"Designing a Secure and Private Smart Home System using Web3 Technologies" - This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" - This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" - This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" - This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" - This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" - This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</LessonCodeWrapper>

Для гайда была выбрана тема **“Designing a Secure and Private Smart Home System using Web3 Technologies”**.

</li>

<li>

Дальше можно в принципе приступать к конкретным разделам тезисов, следуя структуре IMRaD, однако было бы неплохо иметь более подробный план бакалаврской работы. Это тоже можно попросить сделать ИИ-сервис. ChatGPT предложил следующий план, причем без каких-либо дополнительных условий:


<LessonCodeWrapper language="plainText">

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

</LessonCodeWrapper>

</li>

<li>На этом подготовительная часть закончена, и можно приступать к первому разделу тезисов — Введению. </li>

</List>
  

