---
title: "Урок №7, датчики Robonomics вимірюють аналітику та архівний вузол"
description: 'ROBONOMICS ДАТЧИКИ ВИМІРЮЮТЬ АНАЛІТИКУ ТА АРХІВУЮТЬ ВУЗОЛ'
lessonNumber: 7
metaOptions: [Вивчайте, Підключення датчиків та децентралізована мережа датчиків]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Robonomics Sensors Measure Analytics and Archive Node або RoSeMAN - це сервіс для накопичення даних датчиків для відображення історії вимірювань. У цій статті ви налаштуєте сервіс.

## Вимоги

RoSeMAN потребує [MongoDB](https://www.mongodb.com/docs/manual/introduction/) сервера баз даних, припускається, що ви вже маєте його. Також вам потрібно увімкнути опцію datalog для модуля підключення датчиків, як показано в Сценарії №3. Вам також потрібно мати безкоштовні токени XRT на вашому обліковому запису Robonomics, який підключений до модуля підключення датчиків. 


## Налаштування

<List type="numbers">

<li>

Завантажте репозиторій:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Створіть файл конфігурації:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Відкрийте файл `config.json` та відредагуйте шлях до бази даних:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Додате публічну адресу вашого облікового запису до файлу `agents.json`. Ви можете додати кілька адрес до файлу, якщо хочете збирати дані з різних модулів підключення датчиків.

</li>


<li>

Встановіть залежності та побудуйте сервер:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Запустіть сервер RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Веб-сервер повинен запуститися за адресою `http://127.0.0.1:3000`.

</li>

</List>

## Після встановлення

Після розгортання RoSeMAN на сервері вам потрібно отримати публічну IP-адресу або URL-адресу сервера. Альтернативно, якщо ви запускаєте RoSeMAN та карту датчиків на одному сервері, ви можете використовувати локальну IP-адресу.

Далі вам потрібно відкрити файл конфігурації карти датчиків та вставити ваш URL в файл `config.json` в поле `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Перебудуйте карту за допомогою `yarn build` та запустіть її знову; ви зможете побачити історію вимірювнь.