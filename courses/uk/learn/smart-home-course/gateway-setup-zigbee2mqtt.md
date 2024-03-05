---
title: "Урок №4а, Налаштування шлюзу: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: курс домашнього асистента
lessonNumber: 4
metaOptions: [Вивчайте, Суверенний Розумний Дім з Robonomics та Домашнім Асистентом]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Вступ

Це налаштування сценарію для підключення пристроїв за допомогою адаптера Zigbee та моста Zigbee2MQTT. Якщо у вас є [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (який має всю необхідну прошивку), ви можете просто продовжити за цими інструкціями. Однак, якщо у вас є інший адаптер, першим, що вам потрібно зробити, це прошити його програмним забезпеченням Zigbee2MQTT. Інструкції для вашого пристрою можна знайти [тут](https://www.zigbee2mqtt.io/guide/adapters/).

Вам також знадобиться розумний пристрій для перевірки його підключення до Home Assistant.


## Інструкції

<List type="numbers">

<li>

Встановлення програмного забезпечення

<List>

  <li>
    Налаштуйте репозиторій середовища виконання Node.js та встановіть його з необхідними залежностями:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Перевірте, що правильні версії Node.js (v14.X, V16.x, V17.x ��бо V18.X) та менеджер пакетів <code class="nowb">npm</code> (6.X, 7.X або 8.X), які автоматично встановлюються разом з Node.js, були встановлені:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Створіть каталог для Zigbee2MQTT та встановіть вашого користувача як власника:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Клонуйте репозиторій Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Встановіть залежності. Зверніть увагу, що <code>npm ci</code> може вивести деякі попередження, які можна проігнорувати.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Підключення та налаштування адаптера

<List>

<li>

Підключіть адаптер Zigbee до Raspberry Pi. Потім вам потрібно знайти місце розташування палички. Для цього введіть наступну команду:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

Вихід повинен виглядати так:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

У цьому прикладі каталог підключення палички - <code>ttyUSB0</code>.
</li>

<li>

Редагуйте файл <code>configuration.yaml</code> перед запуском Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

Основна конфігурація потребує кількох налаштувань. Змініть наступні вирази:

\- <code>homeassistant:</code> на <code>true</code>, це автоматично підключить датчики до Home Assistant;

\- розкоментуйте <code>user</code> та <code>password</code> під <code>mqtt</code> та введіть своє ім'я користувача та пароль (як рядок, у лапках) від MQTT брокера;

\- змініть порт в <code>serial</code> -> <code>port</code> на каталог підключення палички. У цьому прикладі: <code>/dev/ttyUSB0</code>.

Відредагований файл конфігурації повинен виглядати так:

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


**Додатково:**

Якщо у вас в��е є активний адаптер або шлюз Zigbee вдома, і ви зараз налаштовуєте іншу паличку, то вони будуть конфліктувати один з одним. Щоб вирішити цю проблему, вам потрібно змінити канал на новому пристрої. Для цього додайте наступні рядки в кінець файлу конфігурації:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Почати Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Якщо запущено успішно, ви побачите щось на зразок:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Парування пристрою

<List>

<li>

Час підключити ваш розумний пристрій. Найпоширеніший спосіб перевести пристрій у режим підключення - утримувати його кнопку живлення або перемикати їх увімкнено/вимкнено 5 разів. Переконайтеся, що Zigbee2MQTT працює.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Коли пристрій підключиться, ви повинні побачити повідомлення на зразок:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Запам'ятайте ID датчика: у цьому прикладі - <code>0x00158d0003eeeacf</code>.

Тепер ви повинні побачити цей датчик з ID у вашому веб-інтерфейсі домашнього помічника. Перейдіть до <code>Налаштування</code> -> <code>Пристрої та сервіси</code> -> <code>Пристрої</code>, щоб перевірити це:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Після додавання всіх датчиків ви можете зупинити програму за допомогою <code>Ctrl+C</code>. Якщо ви не бажаєте додавати більше пристроїв, ви можете знову відкрити файл конфігурації та встановити <code>permit_join:</code> на <code>false</code>.
</li>

</List>
</li>

<li>

Створення служби для автозапуску

<List>

<li>

Тепер вам потрібно створити службу. Створіть файл:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Додайте наступне до цього файлу, змінивши <code>ВАШЕ_ІМ'Я_КОРИСТУВАЧА_RASPPI_ТУТ</code>. Якщо ви не знаєте свого імені користувача, використовуйте команду <code>whoami</code>.

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

Перевірте, що конфігурація працює:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

Вихід повинен виглядати так:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Увімкніть службу для автоматичного запуску Zigbee2MQTT при завантаженні:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>