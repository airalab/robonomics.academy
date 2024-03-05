---
title: "Демонстрация Feecc"
description: Этот курс посвящен знакомству с системой Feecc и всеми ее компонентами.
metaOptions: [Изучение, привыкание к Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
В этом уроке вы протестируете основные функции Feecc, используя виртуальное испытательное поле в качестве примера, которое эмулирует реальный пример системы отслеживания производства.
</RoboAcademyText>

Для целей демонстрации в нем отсутствуют некоторые типичные функции, такие как печать этикеток или запись видео, но он содержит основную концепцию такой системы.

## Предварительные требования

Для запуска демонстрации вам понадобится:

- Система подобная UNIX (протестировано на [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) и [Docker compose](https://docs.docker.com/compose/)
- Веб-браузер (протестировано в Google Chrome и Mozilla Firefox)

## Установка

Выполните следующие команды:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Чтобы проверить работающие контейнеры, выполните следующее:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Вы должны увидеть следующий вывод:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Запуск демонстрации

1. Перейдите на http://localhost:3000/ в своем браузере, вы должны увидеть экран приветствия.

2. На этом этапе система должна попросить сотрудника поместить свою RFID-карту на сканер для авторизации. В демонстрации вы можете использовать `hid-emulator.py` для авторизации. Для этого запустите отдельный контейнер Docker:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Он способен эмулировать две функции: предоставление RFID-карты и сканирование штрихкода; вам нужна первая функция, введите `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Сканер RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Вы увидите экран выбора типа композиции, выберите `ОДИНОЧНОЕ УСТРОЙСТВО`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Уведомления появятся в левом нижнем углу, указывая на начало работы на устройстве, для которого создается уникальный идентификатор. Синее уведомление также отобразит активность виртуального принтера; на фактической установке в это время будет напечатан штрих-код с идентификатором устройства.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Нажмите на `НАЧАТЬ СОСТАВЛЕНИЕ`, чтобы начать запись процесса сборки устройства. Вам будет предложено пройти все необходимые этапы сборки; каждый раз, когда сотрудник завершает шаг, он должен нажать кнопку `ДАЛЕЕ`, после чего видео будет сохранено в IPFS. Также возможно приостановить сборку (`ПАУЗА`), чтобы вернуться к ней позже или полностью остановить процесс (`СТОП`).

6. Когда все этапы сборки завершены, появляется кнопка `ЗАВЕРШИТЬ`, после чего Feecc предлагает сохранить сертификат устройства. Однако, прежде чем это сделать, откройте [локальный узел Robonomics](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) в вашем браузере, вам это понадобится позже. После этого вернитесь в Feecc и нажмите `СОХРАНИТЬ ПАСПОРТ`.
    
    На экране появятся новые уведомления: уведомление о загрузке сертификата в Robonomics и IPFS, а также два синих сообщения о печати печати печати и QR-кода, ведущего к сертификату.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. В разделе `Информация о цепочке` на экране локального узла Robonomics вы должны увидеть новое событие `datalog.NewRecord` в столбце `последние события`. Если вы его развернете, то в поле `байты` будет показан IPFS CID, соответствующий файлу сертификата устройства.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Напечатанный QR-код содержит ссылку на этот CID, что позволяет открыть файл сертификата в браузере. Поскольку ваш локальный узел IPFS может не иметь такой обнаружимости, вы можете получить доступ к файлу локально с помощью `localhost:8080/ipfs/CID.` Содержимое сертификата выглядит примерно так:

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

8. Давайте теперь попробуем создать сертификат для составной сборки, состоящей из нескольких устройств. В меню выбора типа нажмите на `СОСТАВНОЕ УСТРОЙСТВО`, а затем `ОБРАЗЕЦ УСТРОЙСТВА`. Скопируйте его идентификатор устройства (находится в поле Номер композиции), так как вам это понадобится позже. Затем продолжайте стандартные шаги по сборке устройства.

9. После сборки вернитесь к `СОСТАВНОМУ УСТРОЙСТВУ` и нажмите `ОКОНЧАТЕЛЬНАЯ СБОРКА`, чтобы завершить составную сборку. Система попросит вас предоставить идентификатор устройств, собранных сотрудником, для которого необходимо отсканировать их штрих-код. Чтобы симулировать этот процесс, вернитесь к `hid-emulator.py` и выберите функцию `2` для сканирования штрих-кода и вставьте сохраненный идентификатор устройства туда.

10. Затем система попросит пройти необходимые этапы составной сборки и сгенерировать для нее сертификат:

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

11. Чтобы удалить демонстрацию, введите команду:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
На следующем уроке мы перейдем к фактическому развертыванию всех необходимых компонентов системы Feecc.
</RoboAcademyText>