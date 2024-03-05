---
title: "Демонстрація Feecc"
description: Цей курс призначений для того, щоб дізнатися про систему Feecc та всі її компоненти.
metaOptions: [Вивчайте, Звикаючи до Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
У цьому уроці ви протестуєте основні функції Feecc, використовуючи віртуальну тестову платформу як приклад, яка емулює реальний приклад системи відстеження виробництва.
</RoboAcademyText>

З метою демонстрації він позбавлений деяких типових функцій, таких як друк етикеток або запис відео, але він містить основну концепцію такої системи.

## Попередні вимоги

Для запуску демонстрації вам знадобиться:

- Система подібна до UNIX (перевірено на [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) та [Docker compose](https://docs.docker.com/compose/)
- Веб-браузер (перевірено на Google Chrome та Mozilla Firefox)

## Інсталяція

Виконайте наступні команди:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Щоб перевірити робочі контейнери, виконайте наступне:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Ви повинні побачити наступний вивід:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Запуск демонстрації

1. Перейдіть на http://localhost:3000/ у своєму браузері, ви повинні побачити екран вітання.

2. На цьому етапі система повинна запросити співробітника покласти свою RFID-карту на сканер для авторизації. На демонстрації ви можете використовувати `hid-emulator.py` для авторизації. Для цього запустіть окремий контейнер Docker:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Він здатний емулювати дві функції: надання RFID-карти та сканування штрих-коду; вам потрібна перша функція, введіть `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Сканер RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Ви побачите екран для вибору типу композиції, виберіть `ОДИНИЧНИЙ ПРИСТРІЙ`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Сповіщення з'являться в нижньому лівому куті, що вказує на початок роботи на пристрої, для якого створено унікальний ідентифікатор. Синє сповіщення також відображатиме активність віртуального принтера; на фактичному налаштуванні в цей момент друкується штрих-код з ідентифікатором пристрою.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Натисніть на `ПОЧАТИ КОМПОЗИЦІЮ`, щоб почати запис процесу збирання пристрою. Вас попросять пройти всі необхідні етапи збирання; кожного разу, коли працівник завершує етап, вони повинні натиснути кнопку `ДАЛІ`, після чого відео буде збережено в IPFS. Також можливо призупинити збірку (`ПАУЗА`), щоб повернутися до неї пізн��ше або повністю зупинити процес (`СТОП`).

6. Коли всі етапи збирання завершені, з'являється кнопка `ЗАВЕРШИТИ`, після чого Feecc пропонує зберегти сертифікат пристрою. Однак, перед цим відкрийте [локальний вузол Robonomics](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) у своєму браузері, вам знадобиться це пізніше. Після цього поверніться до Feecc та натисніть `ЗБЕРЕГТИ ПАСПОРТ`.
    
    Ви побачите нові сповіщення в кутку екрана: сповіщення про те, що сертифікат було завантажено в Robonomics та IPFS, а також два синіх повідомлення про друк печатки та QR-коду, які ведуть до сертифікату.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. У розділі `Chain info` на екрані локального вузла Robonomics ви повинні побачити нову подію `datalog.NewRecord` у розділі `recent events`. Якщо ви розгорнете його, буде показано IPFS CID, що відповідає файлу сертифіката пристрою, у полі `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Надрукований QR-код містить посилання на цей CID, що дозволяє відкрити файл сертифіката в браузері. Оскільки ваш локальний вузол IPFS може не мати такої доступності, ви можете отримати доступ до файлу локально за допомогою `localhost:8080/ipfs/CID.` Вміст сертифіката виглядає приблизно так:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. Давайте спробуємо створити сертифікат для композитної збірки, що складається з кількох пристроїв. У меню вибору типу натисніть на `КОМПОЗИТНИЙ ПРИСТРІЙ`, а потім `ПРИКЛАДНИЙ ПРИСТРІЙ`. Скопіюйте його ідентифікатор одиниці (знаходиться в полі номеру композиції), оскільки вам знадобиться це пізніше. Потім продовжуйте зі стандартними кроками для збирання пристрою.

9. Після збирання поверніться до `КОМПОЗИТНОГО ПРИСТРОЮ` та натисніть `ОСНОВНА ЗБІРКА`, щоб завершити композитну збірку. Система попросить вас надати ідентифікатор одиниці зібраних пристроїв, для яких працівник повинен просканувати їх штрих-код. Щоб симулювати цей процес, поверніться до `hid-emulator.py` та виберіть функцію `2` для сканування штрих-коду та вставте збережений ідентифікатор одиниці туди.

10. Далі система попросить пройти необхідні етапи композитної збірки та згенерувати для неї сертифікат:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. Щоб видалити демо, введіть команду:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
У наступному уроці ми перейдемо до фактичного розгортання всіх необхідних компонентів системи Feecc.
</RoboAcademyText>