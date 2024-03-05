---
title: "Урок №3, Настройка MQTT брокера и инициализация Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: курс домашнего помощника
lessonNumber: 3
metaOptions: [Изучите суверенный умный дом с помощью Robonomics и Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Вступление

После завершения настройки Raspberry Pi следующим шагом будет установка MQTT брокера на Raspberry Pi. Как уже упоминалось, брокер отвечает за маршрутизацию сообщений между различными клиентами MQTT. Вы установите и настроите Eclipse Mosquitto, открытый исходный код MQTT брокера.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Кроме того, вы завершите настройку Home Assistant и добавите в него интеграцию MQTT.

## Инструкции

<List type="numbers">

<li>


Установка брокера Mosquitto

<List>
<li>

Установите [брокер Mosquitto](https://mosquitto.org/) на ваш Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Введите YOUR_USERNAME (используйте любое, которое вам нравится) и пароль (вам будет предложено ввести пароль после команды):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Отредактируйте файл конфигурации:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Добавьте следующее в файл:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Сохраните файл и перезапустите службу:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Наконец, проверьте статус брокера:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Вы должны увидеть что-то вроде этого:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Настройка Home Assistant и MQTT

<List>

<li>

Откройте веб-браузер и перейдите по адресу <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (с тем же IP-адресом, который вы нашли в предыдущем уроке). Имейте в виду, что адрес Raspberry Pi может меняться со временем из-за настроек маршрутизатора. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

На первой странице введите любое имя, имя пользователя, пароль и нажмите на "<code>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</code>"
</li>

<li>

Затем введите имя для вашего дома, укажите ваше местоположение и систему измерения. Нажмите "<code>DETECT</code>", чтобы найти ваше местоположение и установить часовой пояс и систему измерения на основе этого местоположения. Если вы не хотите отправлять свое местоположение, вы можете установить эти значения вручную.

</li>

<li>

На следующем экране Home Assistant покажет все устройства, которые он обнаружил в вашей сети. Не беспокойтесь, если вы видите меньше устройств, чем показано ниже; вы всегда можете добавить устройства вручную позже. Просто нажмите <code>FINISH</code> и вы попадете на главный экран Home Assistant.

</li>

<li>

Теперь нам нужно установить интеграцию MQTT. Перейдите в <code>Settings</code> -> <code>Devices & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Нажмите кнопку <code>ADD INTEGRATION</code> в правом нижнем углу. В открывшемся окне найдите <code>MQTT</code>.

</li>

<li>

Выберите MQTT и настройте адрес вашего брокера — <code>localhost</code>, порт — <code>1883</code>, а также ваше имя пользователя и пароль (те же, что вы создали ранее для брокера Mosquitto), затем нажмите <code>SUBMIT</code>.
</li>

</List>
</li>
</List>