---
title: "Розгортання Інженерної Робочої Області"
description: Цей курс призначений для того, щоб дізнатися про систему Feecc та всі її компоненти.
metaOptions: [Вивчайте, Звикаючи до Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
У цьому уроці ви дізнаєтеся, як самостійно розгорнути необхідні компоненти Інженерної Робочої Області Feecc.
</RoboAcademyText>

Серед компонентів:

- Демон Робочого Столу
- Веб-інтерфейс Робочого Столу
- IPFS Шлюз
- Демон Читача HID

Усі компоненти запускаються за допомогою [Docker](https://docs.docker.com/engine/install/ubuntu/) та [Docker compose](https://docs.docker.com/compose/), переконайтеся, що у вас їх встановлено.

## Підготовка програмного забезпечення

1. Компоненти Feecc використовують базу даних [MongoDB](https://www.mongodb.com/) для зберігання та доступу до даних. Перед використанням Feecc вам потрібно розгорнути MongoDB таким чином, який вам зручний. Ось деякі варіанти розгортання: [використання власного сервера](https://www.mongodb.com/try/download/community), [хмарна база даних в Atlas](https://www.mongodb.com/atlas) (безкоштовно), [хмарна база даних в DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (платно). 
    
    У будь-якому випадку вам потрібно отримати свій URI підключення до MongoDB, який вам потрібно ввести як значення змінної `MONGODB_URI` для всіх компонентів системи.
    
2. Якщо ви хочете скористатися надійним та прозорим зберіганням даних з вашої виробничої системи, вам потрібно створити обліковий запис на Robonomics. Для цього скористайтеся інструкціями, доступними за наступним посиланням: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Вам потрібно зберегти фразу-сід облікового запису, оскільки вона буде використана пізніше в змінній `ROBONOMICS_ACCOUNT_SEED`.

## Підготовка Робочого Столу

Перед початком роботи підключіть усе необхідне обладнання до комп'ютера або сервера:

- етикетний принтер за допомогою USB
- читачі RFID / штрих-кодів за допомогою USB
- IP-камера через маршрутизатор PoE/мережевий комутатор
- монітор з клавіатурою та мишею або сенсорним екраном за допомогою USB та HDMI/VGA (необов'язково)

## Запуск демона читача HID

1. Клонуйте репозиторій:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Запустіть демона:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Запуск демона робочого місця

1. Клонуйте репозиторій:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Налаштуйте демона під свої потреби, використовуючи файл `docker-compose.yml`. Файл містить різні змінні середовища:

    - Конфігурація MongoDB;
    - Конфігурація Robonomics;
    - Конфігурація IPFS;
    - параметри принтера;
    - параметри камери;
    - параметри читача RFID / штрих-коду.
    
    Повний список змінних доступний у демоні [репозиторії](https://github.com/Multi-Agent-io/feecc-workbench-daemon). Наступні параметри є обов'язковими:
    
    - `MONGODB_URI`: ваш URI підключення до MongoDB;
    - `MONGODB_DB_NAME`: ім'я бази даних MongoDB;
    - `WORKBENCH_NUMBER`: номер робочого місця працівника.

3. Запустіть демона:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Перевірте його функціональність. Перейдіть у браузері та відкрийте сторінку `http://127.0.0.1:5000/docs`, де повина бути документація інтерфейсу REST API системи. Якщо сторінка недоступна, то сервер не був запущений належним чином. Перевірте журнали всередині контейнера на наявність помилок, виправте їх і повторіть кроки збірки та запуску.

## Запуск IPFS шлюзу

1. Клонуйте репозиторій:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Налаштуйте мікросервіс за своїми потребами, використовуючи файл `docker-compose.yml`. Файл містить змінні середовища для підключення до MongoDB, Robonomics та Pinata. Повний список змінних доступний у репозиторії шлюзу [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Запустіть мікросервіс:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Запуск робочого столу Frontend

1. Клонуйте репозиторій:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Перейдіть в каталог `configs` та налаштуйте фронтенд сервіс за своїми потребами, використовуючи файл `config.json`. Особливо важливі наступні параметри:
    - `socket` — вставте адресу демона робочого столу тут;
    - `interface_language` — мова інтерфейсу, доступні опції `en` та `ru`;
    - `dev_show_reducers` — увімкнення/вимкнення режиму розробника;
    - `pulling_period` — період отримання даних з бекенду в мілісекундах;

3. Запустіть контейнер фронтенду:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Перевіре його функціональність. Перейдіть у браузер та відкрийте сторінку `http://localhost:3000`, ви повинні побачити сторінку авторизації.

<RoboAcademyText fWeight="500">
У наступному уроці ми розглянемо сервіс аналітики Feecc.
</RoboAcademyText>