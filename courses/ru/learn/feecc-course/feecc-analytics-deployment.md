---
title: "Развертывание аналитики"
description: Этот курс посвящен знакомству с системой Feecc и всеми ее компонентами.
metaOptions: [Изучение, привыкание к Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
На этом уроке вы узнаете, как развернуть компоненты аналитики Feecc.
</RoboAcademyText>

## Запуск аналитики Backend

1. Клонировать репозиторий:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Настроить бэкэнд-сервис под ваши потребности, используя файл `.env`:
    - `MONGO_CONNECTION_URL` — ваша строка подключения к MongoDB;
    - `MONGO_DATABASE_NAME` — имя базы данных MongoDB;
    - `SECRET_KEY` — секретный ключ для хеширования и дехеширования;
    - `IPFS_GATEWAY_HOST` — URL шлюза IPFS;
    - `USE_DATALOG` — отправка аналитических данных в Robonomics (`true` или `false`);
    - `ROBONOMICS_SEED` — фраза-сид для учетной записи Robonomics.

3. Запустить контейнер бэкэнда:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Проверьте его функциональность. Перейдите в браузер и откройте страницу `http://localhost:5002/docs`. Если все сделано правильно, вы увидите страницу (сгенерированную Swagger) со всеми конечными точками REST API аналитики Feecc. Теперь вы готовы запустить фронтенд.

## Запуск аналитики Frontend

1. Клонировать репозиторий:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Перейдите в `src` и настройте фронтенд-сервис под ваши потребности, используя файл `config.json`. Обязательно введите URL бэкэнда аналитики Feecc в параметр `base_url` (в форме `xx.xx.xx.xx:port`).

3. Запустите контейнер фронтенда:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Проверьте его функциональность. Перейдите в браузер и откройте страницу `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
На этом знакомство с системой Feecc можно считать завершенным. Если у вас есть дополнительные вопросы, вы можете связаться с разработчиками в Multi-Agent Systems (multi-agent.io) или оставить проблему на их GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>