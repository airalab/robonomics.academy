---
title: "Развертывание Рабочего места Инженера"
description: Этот курс посвящен знакомству с системой Feecc и всеми ее компонентами.
metaOptions: [Изучение, привыкание к Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
В этом уроке вы узнаете, как самостоятельно развернуть необходимые компоненты Feecc Engineer Workbench.
</RoboAcademyText>

Среди компонентов:

- Демон Рабочего места
- Веб-интерфейс Рабочего места
- Шлюз IPFS
- Демон считывателя HID

Все компоненты запускаются с помощью [Docker](https://docs.docker.com/engine/install/ubuntu/) и [Docker Compose](https://docs.docker.com/compose/), убедитесь, что у вас есть их установили.

## Подготовка программного обеспечения

1. Компоненты Feecc используют базу данных [MongoDB](https://www.mongodb.com/) для хранения и доступа к данным. Перед использованием Feecc вам необходимо развернуть MongoDB любым удобным для вас способом. Вот некоторые варианты развертывания: [используя собственный сервер](https://www.mongodb.com/try/download/community), [облачная база данных в Atlas](https://www.mongodb.com/atlas) (бесплатно), [облачная база данных в DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (платно). 
    
    В любом случае вам необходимо получить свой URI подключения к MongoDB, который вам нужно будет ввести в качестве значения переменной `MONGODB_URI` для всех компонентов системы.
    
2. Если вы хотите воспользоваться надежным и прозрачным хранением данных из вашей производственной системы, вам необходимо создать учетную запись на Robonomics. Для этого используйте инструкции, доступные по следующей ссылке: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Вам необходимо сохранить фразу-семя учетной записи, так как она будет использована позже в переменной `ROBONOMICS_ACCOUNT_SEED`.

## Подготовка Рабочего места

Перед началом работы подключите всю необходимую оборудование к компьютеру или серверу:

- принтер этикеток через USB
- считыватели RFID / штрих-кодов через USB
- IP-камера через маршрутизатор PoE/сетевой коммутатор
- монитор с клавиатурой и мышью или сенсорным экраном через USB и HDMI/VGA (по желанию)

## Запуск демона считывателя HID

1. Клонировать репозиторий:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Запустите демона:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Запуск демона рабочего стола

1. Клонировать репозиторий:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Настройте демона под ваши потребности, используя файл `docker-compose.yml`. Файл содержит различные переменные среды:

    - Настройка MongoDB;
    - Настройка Robonomics;
    - Настройка IPFS;
    - параметры принтера;
    - параметры камеры;
    - параметры считывателя RFID / штрих-кода.
    
    Полный список переменных доступен в репозитории демона [здесь](https://github.com/Multi-Agent-io/feecc-workbench-daemon). Следующие параметры обязательны:
    
    - `MONGODB_URI`: ваша строка подключения к MongoDB;
    - `MONGODB_DB_NAME`: имя базы данных MongoDB;
    - `WORKBENCH_NUMBER`: номер рабочего стола сотрудника.

3. Запустите демона:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Проверьте его функциональность. Перейдите в браузер и откройте страницу `http://127.0.0.1:5000/docs`, которая должна содержать документацию по интерфейсу REST API системы. Если страница недоступна, значит сервер не запущен правильно. Проверьте журналы внутри контейнера на наличие ошибок, исправьте их и повторите шаги сборки и запуска.

## Запуск IPFS шлюза

1. Клонировать репозиторий:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Настройте микросервис под ваши потребности, используя файл `docker-compose.yml`. Файл содержит переменные среды для подключения к MongoDB, Robonomics и Pinata. Полный список переменных доступен в репозитории шлюза [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Запустите микросервис:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Запуск рабочего стола Workbench

1. Клонировать репозиторий:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Перейдите в каталог `configs` и настройте службу фронтенда под ваши потребности, используя файл `config.json`. Особенно важны следующие параметры:
    - `socket` — вставьте здесь адрес демона Workbench;
    - `interface_language` — язык интерфейса, доступные варианты `en` и `ru`;
    - `dev_show_reducers` — включение/отключение режима разработчика;
    - `pulling_period` — период получения данных с бэкенда в миллисекундах;

3. Запустите контейнер фронтенда:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Проверьте его функциональность. Перейдите в браузер и откройте страницу `http://localhost:3000`, вы должны увидеть страницу авторизации.

<RoboAcademyText fWeight="500">
На следующем уроке мы рассмотрим сервис аналитики Feecc.
</RoboAcademyText>