---
title: "Розгортання аналітики"
description: Цей курс призначений для того, щоб дізнатися про систему Feecc та всі її компоненти.
metaOptions: [Вивчайте, Звикаючи до Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
На цьому уроці ви дізнаєтеся, як розгорнути компоненти аналітики Feecc.
</RoboAcademyText>

## Запуск аналітики Backend

1. Клонуйте репозиторій:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Налаштуйте бекенд сервіс за вашими потребами, використовуючи файл `.env`:
    - `MONGO_CONNECTION_URL` — ваш URI підключення до MongoDB;
    - `MONGO_DATABASE_NAME` — ім'я бази даних MongoDB;
    - `SECRET_KEY` — секретний ключ для хешування та дехешування;
    - `IPFS_GATEWAY_HOST` — URL шлюзу IPFS;
    - `USE_DATALOG` — відправка даних аналітики в Robonomics (`true` або `false`);
    - `ROBONOMICS_SEED` — фраза-зерно для облікового запису Robonomics.

3. Запустіть контейнер бекенду:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Перевірте його функціональність. Перейдіть у браузері та відкрийте сторінку `http://localhost:5002/docs`. Якщо все зроблено правильно, ви побачите сторінку (створену Swagger) з усіма кінцевими точками REST API аналітики Feecc. Тепер ви готові запустити фронтенд.

## Запуск аналітики Frontend

1. Клонуйте репозиторій:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Перейдіть у `src` та налаштуйте фронтенд сервіс за вашими потребами, використовуючи файл `config.json`. Обов'язково введіть URL бекенду аналітики Feecc у параметр `base_url` (у формі `xx.xx.xx.xx:port`).

3. Запустіть контейнер фронтенду:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Перевірте його функціональність. Перейдіть у браузері та відкрийте сторінку `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
На цьому знайомство з системою Feecc можна вважати завершеним. Якщо у вас є додаткові питання, ви можете звернутися до розробників у Multi-Agent Systems (multi-agent.io) або залишити проблему на їхньому GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>