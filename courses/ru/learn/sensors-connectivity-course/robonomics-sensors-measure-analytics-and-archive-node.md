---
title: "Урок №7, Датчики Robonomics измеряют аналитику и архивный узел"
description: 'ROBONOMICS СЕНСОРЫ ИЗМЕРЯЮТ АНАЛИТИКУ И АРХИВИРУЮТ УЗЕЛ'
lessonNumber: 7
metaOptions: [Учить, Сенсоры Связности и Децентрализованная Сеть Сенсоров]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Robonomics Sensors Measure Analytics and Archive Node или RoSeMAN - это сервис для накопления данных датчиков для отображения истории измерений. В этой статье вы настроите сервис.

## Требования

Для RoSeMAN требуется сервер базы данных [MongoDB](https://www.mongodb.com/docs/manual/introduction/), предполагается, что у вас уже есть. Также вам нужно включить опцию журнала данных для модуля подключения датчиков, как показано в Сценарии №3. У вас должны быть свободные токены XRT на вашем аккаунте Robonomics, который подключен к модулю подключения датчиков. 


## Установка

<List type="numbers">

<li>

Скачайте репозиторий:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Создайте файлы конфигурации:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Откройте файл `config.json` и отредактируйте путь к базе данных:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Добавьте публичный адрес вашего аккаунта в файл `agents.json`. Вы можете добавить несколько адресов в файл, если хотите собирать данные из разных модулей подключения датчиков.

</li>


<li>

Установите зависимости и соберите сервер:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Запустите сервер RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Веб-сервер должен запуститься по адресу `http://127.0.0.1:3000`.

</li>

</List>

## После установки

После развертывания RoSeMAN на сервере вам нужно получить публичный IP-адрес или URL сервера. В качестве альтернативы, если вы запускаете RoSeMAN и карту датчиков на одном сервере, вы можете использовать локальный IP-адрес.

Затем вам нужно открыть файл конфигурации карты датчиков и вставить ваш URL в файл `config.json` в поле `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Пересоберите карту с помощью `yarn build` и запустите ее снова; вы сможете увидеть историю измерений.