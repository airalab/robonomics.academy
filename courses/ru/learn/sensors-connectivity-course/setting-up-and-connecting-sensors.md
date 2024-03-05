---
title: "Урок №3, Настройка и подключение датчиков"
description: 'НАСТРОЙКА И ПОДКЛЮЧЕНИЕ ДАТЧИКОВ'
lessonNumber: 3
metaOptions: [Учить, Сенсоры Связности и Децентрализованная Сеть Сенсоров]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

В наших датчиках используется прошивка "Робономика" — расширенная версия прошивки Sensor.community, в которую добавлены некоторые датчики и изменена схема отправки данных. Исходный код можно найти [по ссылке.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Если у вас есть готовая к использованию плата Robonomics, вы можете перейти в раздел "Подключение".

## Требования

**Для Linux:**

<List type="numbers">

<li>

Добавьте пользователя в группу `dialout` (для Ubuntu), чтобы получить доступ к USB-порту:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Перезагрузите компьютер.</li>

<li>

Загрузите исполняемый файл Robonomics `airrohr-flasher` из [релизов](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Измените разрешения файла и выполните его:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Для Windows:**

<List type="numbers">

<li>

Установите драйверы для USB2serial (в Windows 10 это должно произойти автоматически) — Драйверы для NodeMCU v3 (CH340): [ссылка](http://www.wch.cn/downloads/file/5.html), [альтернативная ссылка](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Загрузите исполняемый файл Robonomics `airrohr-flasher` из [releases](https://github.com/airalab/sensors-connectivity/releases) и запустите его.

</li>

</List>

**Для MacOS:**

<List type="numbers">

<li>

Установите драйверы для USB2serial — Драйверы для NodeMCU v3 (CH340): [ссылка](http://www.wch.cn/downloads/file/178.html), [альтернативная ссылка](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Загрузите исполняемый файл Robonomics `airrohr-flasher` из [releases](https://github.com/airalab/sensors-connectivity/releases) и запустите его.

</li>

</List>


## Установка

<List type="numbers">

<li>

Подключите датчик к ПК и запустите программу `airrohr-flasher`. После открытия программы вы увидите следующее (в зависимости от вашей ОС):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Поле `Board` должно автоматически заполниться; если нет, выберите необходимый порт из выпадающего списка.

<RoboAcademyNote type="okay" title="INFO">
Если <code>airrohr-flasher</code> не может найти вашу плату, убедитесь, что вы правильно выполнили часть <b>Требования</b>.
</RoboAcademyNote>

</li>

<li>

Выберите прошивку с предпочитаемым языком и нажмите `Загрузить`. Загрузка прошивки займет некоторое время. Если позже вы решите изменить язык или выполнить чистую установку (для сброса конфигурации), перейдите на страницу `Стереть флеш` и нажмите кнопку для стирания флэш-памяти датчика.

</li>

<li>

После загрузки прошивки перезагрузите ESP (просто отсоедините и снова подключите USB).

</li>

<li>

Выберите датчики из меню с флажками. Выберите SDS011 и любые дополнительные датчики. Нажмите `Сохранить конфигурацию`.

</li>

<li>

После загрузки конфигурации перезагрузите ESP (просто отсоедините и снова подключите USB).

</li>

</List>

## Подключить

<List type="numbers">

<li>

После перезагрузки плата создаст сеть Wi-Fi с именем `RobonomicsSensor-xxxxxxxxx`. Подключитесь к нему с телефона или компьютера: вы увидите окно авторизации (если нет, откройте браузер и перейдите по адресу `192.168.4.1`).

</li>

<li>

Выберите свою сеть Wi-Fi из списка (или введите ее вручную, если ее нет в списке) и заполните поле пароля.

</li>

<li>

Укажите координаты места, где будет установлен датчик.

<RoboAcademyNote type="warning" title="WARNING">
Координаты датчика затем будут отображены на общедоступной карте. Если вы не хотите показывать свою личную информацию, укажите близкие, но не точные координаты.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Нажмите `Сохранить конфигурацию и перезагрузить`. Плата перезагрузится и подключится к указанной сети Wi-Fi.

</li>

<li>

Откройте [Карту датчиков Робономики](https://sensors.robonomics.network/#/) и найдите место, где вы установили датчик. Через пару минут вы сможете увидеть свой датчик с данными на карте.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Это все для стандартной установки. Для более продвинутой настройки (отправка данных на ваш собственный сервер), прочтите следующий раздел.

## Дополнительная Конфигурация

Перед настройкой вам нужно найти адрес датчика в вашей Wi-Fi сети. Для этого вы можете использовать `airrohr-flasher` (ваш компьютер должен быть в той же сети, что и датчик). Запустите его и перейдите на вкладку `Discovery`, затем нажмите `Refresh`, подождите немного и появится адрес вашего датчика.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Дважды щелкните по этому адресу (или введите его в браузер), вы попадете в меню датчика:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Теперь вы можете начать настраивать вашу конфигурацию.


## Пользовательский API

Вы также можете настроить отправку данных на ваш собственный сервер. Для этого на вкладке `APIs` нажмите на `Send to own API` и укажите адрес сервера и порт (`65` для подключения датчиков):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Нажмите `Save and restart`, чтобы сохранить настройки.