---
title: "Урок №4а, Настройка шлюза: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: курс домашнего помощника
lessonNumber: 4
metaOptions: [Изучите суверенный умный дом с помощью Robonomics и Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Вступление

Это сценарий настройки для подключения устройств с использованием адаптера Zigbee и моста Zigbee2MQTT. Если у вас есть [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (который имеет все необходимые прошивки), вы можете просто продолжить с этими инструкциями. Однако, если у вас есть другой адаптер, первое, что вам нужно сделать, это прошить его программным обеспечением Zigbee2MQTT. Инструкции для вашего устройства можно найти [здесь](https://www.zigbee2mqtt.io/guide/adapters/).

Вам также понадобится умное устройство для проверки его подключения к Home Assistant.


## Инструкции

<List type="numbers">

<li>

Установка программного обеспечения

<List>

  <li>
    Настройте репозиторий среды выполнения Node.js и установите его с необходимыми зависимостями:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Убедитесь, что правильные версии Node.js (v14.X, V16.x, V17.x или V18.X) и менеджер пакетов <code class="nowb">npm</code> (6.X, 7.X или 8.X), автоматически установленные с Node.js, были установлены:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Создайте каталог для Zigbee2MQTT и установите вашего пользователя владельцем:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Клонируйте репозиторий Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Установите зависимости. Обратите внимание, что <code>npm ci</code> может выдавать предупреждения, которые можно игнорировать.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Подключение и настройка адаптера

<List>

<li>

Подключите адаптер Zigbee к Raspberry Pi. Затем вам нужно найти местоположение палки. Для этого введите следующую команду:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

Вывод должен выглядеть так:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

В этом примере каталог подключения устройства - <code>ttyUSB0</code>.
</li>

<li>

Отредактируйте файл <code>configuration.yaml</code> перед запуском Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

Основная конфигурация требует нескольких настроек. Измените следующие утверждения:

\- <code>homeassistant:</code> на <code>true</code>, это автоматически подключит датчики к Home Assistant;

\- раскомментируйте <code>user</code> и <code>password</code> под <code>mqtt</code> и введите свое имя пользователя и пароль (как строку, в кавычках) от MQTT брокера;

\- измените порт в <code>serial</code> -> <code>port</code> на каталог подключения устройства. В этом примере: <code>/dev/ttyUSB0</code>.

Отредактированный файл конфигурации должен выглядеть так:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**Дополнительно:**

Если у вас уже есть активный адаптер Zigbee или шлюз в вашем доме, и вы сейчас настраиваете другое устройство, то они будут конфликтовать друг с другом. Чтобы решить эту проблему, вам нужно изменить канал на новом устройстве. Для этого добавьте следующие строки в конец файла конфигурации:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Начать Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Если запущено успешно, вы увидите что-то вроде:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Парное устройство

<List>

<li>

Пора подключить ваше умное устройство. Самый распространенный способ перевода устройства в режим подключения - удерживать его кнопку питания или включать/выключать его 5 раз. Убедитесь, что Zigbee2MQTT работает.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Когда устройство подключится, вы должны увидеть сообщение вроде:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Запомните идентификатор датчика: в этом примере - <code>0x00158d0003eeeacf</code>.

Теперь вы должны увидеть этот датчик с идентификатором в вашем веб-интерфейсе Home Assistant. Перейдите к <code>Настройка</code> -> <code>Устройства и Сервисы</code> -> <code>Устройства</code> для проверки:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

После добавления всех датчиков вы можете остановить программу с помощью <code>Ctrl+C</code>. Если вы не хотите добавлять больше устройств, вы можете снова открыть файл конфигурации и установить <code>permit_join:</code> в <code>false</code>.
</li>

</List>
</li>

<li>

Создание Службы для Автозапуска

<List>

<li>

Теперь вам нужно создать службу. Создайте файл:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Добавьте следующее в этот файл, изменив <code>YOUR_RASPPI_USERNAME_HERE</code>. Если вы не знаете свое имя пользователя, используйте команду <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

Проверьте, что конфигурация работает:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

Вывод должен выглядеть так:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Включите службу для автоматического запуска Zigbee2MQTT при загрузке:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>