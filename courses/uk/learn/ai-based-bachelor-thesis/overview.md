---
title: Огляд
description: Швидкий старт вашої бакалаврської роботи з інструментами на основі штучного інтелекту
metaOptions: [Вчитися, Швидкий старт вашої бакалаврської роботи з інструментами на основі штучного інтелекту]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Так от, те, чого ви боялися, сталося.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

Вам потрібно подати обсяжну текстову роботу, а крайній термін дуже близький. Або, можливо, ситуація інша: термін подання може не бути таким страшним, але написання великих матеріалів, особливо з формальним, технічним змістом, змушує вас відчувати відразу і відкладати завдання на довгий час. Однак вам доведеться пройти досить довгий, монотонний і часто дуже нудний процес, який затемнює вашу мотивацію. Можливо, ви хотіли б приділити більше часу творчим і розвивальним завданням, але, на жаль, деякі професії та діяльності організовані саме таким чином.

## Введенн в штучний інтелект

На щастя для всіх нас, прогрес, який зробив наші рутинні завдання легшими протягом всієї історії, дійшов до сфери написання текстів. Цього разу це можливо завдяки досягненням у галузі штучного інтелекту, зокрема генеративним мовним моделям, здатним розуміти та вирішувати запити та надавати більш-менш змістовні відповіді у форматі чату. У Robonomics ми просто не могли проігнорувати щось, що може підняти рівень автоматизації у комунікації та взаємодії між живими та машинними речами (і також полегшити наші щоденні завдання!).

Останні моделі GPT вражають своїми можливостями, але виникає питання, як їх правильно використовувати і, що найважливіше, наскільки можна на них покладатися. Такі навички називаються інженерією запиів, і для цього ми пропонуємо цей посібник, який допоможе вам освоїти базове розуміння можливостей поточного генеративного штучного інтелекту.

У цьому посібнику ми спробуємо написати просту бакалаврську роботу, засновану на галузі знань нашого "бакалавра" та початковому матеріалі, який бакалавр пройшов. Ми обов'язково спробуємо дотримуватися мінімальних академічних правил, але два тижні (які заплановані для цього посібника) безумовно недостатні для успішного вважання бакалаврської роботи успішною (хоча реальність іноді доводить інше). 

Тим не менш, цей посібник можна вважати хорошою відправною точкою для розуміння того, які саме рутинні та часові процеси вже може вирівняти штучний інтелект. До речі, вам не потрібно обмежуватися завданням бакалаврської роботи: цей посібник буде корисним для будь-якої текстової роботи за стандартом IMRaD (Вступduction, Method, Results, Discussion): журнальні та конференційні публікації, докторські дисертації, технічні звіти, посібники тощо.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  Посібник не гарантує та не має на меті успішного подання бакалаврської роботи з високим балом.
</RoboAcademyNote>

## Використані інструменти

Серед інструментів штучного інтелекту, які були використані в посібнику:

**[ChatGPT](https://chat.openai.com/chat)** — чат-бот на основі мовної моделі Generative Pre-trained Transformer (вер. 3.5 та 4), створений OpenAI. Він працює у форматі чату з користувачем, відповідаючи на їх запити, які можуть варіюватися від простих питань до складання поезії та відлагодження коду користувача. Його знання обмежені вереснем 2021 року, окільки він не має доступу до Інтернету. Базове використання безкоштовне, але потребує реєстрації за номером телефону (недоступно в деяких країнах). Є опція підписки ($20 на місяць) з більш потужними функціями та можливістю додавати плагіни, наприклад для доступу до Wolfram або Slack.

**[Bing Chat](http://www.bing.com)** — чат-бот на основі GPT-4, інтегрований у пошуковий сервіс Bing від Microsoft. Для доступу потрібен обліковий запис Microsoft. В основному він має ті ж можливості, що і ChatGPT, але з доступом до Інтернету, що робить його потужнішим.

**[Auto-GPT](https://news.agpt.co/)** — програмне забезпечення, яке використовує GPT-4 для створення автономних штучних інтелектуальних агентів, які вирішують завдання, поставлені користувачем. Агент має доступ до Інтернету, довгострокову пам'ять та ожливість зберігати інформацію у файлах, що дозволяє йому виконувати складні послідовності дій. Для використання його потрібен обліковий запис на OpenAI, краще з платною підпискою. Інструкції з установки доступні [тут](https://docs.agpt.co/setup/).

**[Notion AI](https://www.notion.so/product/ai)** — штучний інтелект, інтегрований у однойменне програмне забезпечення управління знаннями. Він має обмежений безкоштовний доступ, тоді як підписка коштує $10 на місяць. Він зручний для обробки та вдосконалення вже підготовленого тексту, а також має попередньо встановлені функції для цієї мети.

Крім того, нам знадобляться наступні сервіси:

**[Overleaf](http://www.overleaf.com)** — Зручний онлайн редактор LaTeX для форматування тексту. Він має набір шаблонів для будь-якого типу робіт (від дисертацй та статей до презентацій). Ми будемо використовувати [Шаблон дисертації MIT](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc).

**[Google Scholar](http://scholar.google.com)** — пошуковик наукових публікацій. Використовується для перевірки джерел, запропонованих штучними інтелектуальними сервісами.

## Як використовувати інструменти штучного інтелекту

### AI чатботи (ChatGPT, Bing)

AI чатботи (ChatGPT, Bing) не потребують особливо складного підходу: все, що потрібно зробити, це відформатувати відповідний запит і відправити його чатботу (є обмеження на кількість символів у повідомленні, але можна попросити чатбота зачекати, поки весь текст запиту буде відправлений).

### Notion AI

Для Notion AI достатньо вставити текстовий блок на будь-яку сторінку і викликати контекстне меню з запитами до AI асистента.

### Auto-GPT

Auto-GPT потребує іншого підходу, оскільки користувч повинен вказати перед початком наступне:

- Ім'я AI асистента
- Роль AI асистента
- До 5 послідовних цілей, які має виконати AI асистент

Після цього Auto-GPT запустить агента, який покаже користувачеві всі "думки" та дії, зокрема:

- `THOUGHTS` — загальну ідею, яку агент хоче реалізувати в поточній ітерації
- `REASONING` — причину, чому агент обрав цю ідею
- `PLAN` — конкретні дії для досягнення ідеї (пошук в інтернеті, аналіз документів, запис у файл і т.д.)
- `CRITICISM` — спеціальні умови, які агент накладає на свої дії (наприклад, "шукати тільки якісні посилання з журналів IEEE").

## Перші кроки

<RoboAcademyNote title="WARNING" type="warning">
  Інструменти штучного інтелекту все ще удосконалюються, тому завжди перевіряйте результати, які ви отримуєте.
</RoboAcademyNote>

### Надайте сервісу контекст

Однією з важливих переваг останніх сервісів штучного інтелекту є те, що вони досить добре пам'ятають контекст запиту протягом однієї сесії. Тому першим кроком для початку бакалаврської роботи є придумати контекст ("легенду") та передати його сервісу.

Як матеріал для роботи був взятий курс ["Суверенний розумний будинок з Robonomics та Home Assistant"](/learn/smart-home-course/overview) на Robonomics Academy. В результаті був створений наступний контекст:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Адаптер Zigbee using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

Типова реакція AI чатбота на цей контекст буде полягати в тому, що він запропонує уточнити запит та як сервіс може допомогти.

### Виберіть тему з запропонованих

Наступним кроком (типовим для ситуації бакалавра) є вибір теми для роботи. Тут достатньо зробити запит на посилання `Запропонуйте N тем для моєї роботи`. ChatGPT та Bing Chat запропонували наступне:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

Темою **"Розробка безпечної та приватної системи розумного будинку з використанням технологій Web3"** було обрано для керівництва.

### Простий план зі структурою IMRaD

Далі, в принципі, можна перейти до конкретних розділів роботи, слідуючи структурі IMRaD. Однак було б добре мати більш детальний план для бакалаврської роботи. Це також можна запитати від сервісу штучного інтелекту. ChatGPT запропонував наступний план, без будь-яких додаткових умов:


<RoboAcademyDialog>

<ChatGPT/>

1. Вступduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Огляд of smart home technology and its security and privacy issues
    2. Вступduction to web3 technology and its potential benefits for smart homes
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
6. Посилання

</RoboAcademyDialog>

<RoboAcademyText>
З цим завершено підготовку, тепер ми можемо перейти до першого розділу роботи — Вступу.
</RoboAcademyText>
  

