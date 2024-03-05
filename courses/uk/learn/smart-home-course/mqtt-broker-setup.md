---
title: "Урок №3, Налаштування MQTT брокера та ініціалізація Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: курс домашнього асистента
lessonNumber: 3
metaOptions: [Вивчайте, Суверенний Розумний Дім з Robonomics та Домашнім Асистентом]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Вступ

Після завершення налаштування Raspberry Pi, наступним кроком є встановлення MQTT брокера на Raspberry Pi. Як вже зазначалося вище, брокер відповідає за маршрутизацію повідомлень між різними клієнтами MQTT. Ви встановите та налаштуєте Eclipse Mosquitto, відкритий брокер MQTT.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Крім того, ви завершите налаштування Home Assistant та додасте до нього інтеграцію MQTT.

## Інструкції

<List type="numbers">

<li>


Встановлення брокера Mosquitto

<List>
<li>

Встановіть [брокер Mosquitto](https://mosquitto.org/) на свій Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Введіть ВАШЕ_ІМ'Я_КОРИСТУВАЧА (використовуйте будь-яке, яке вам потрібно) та пароль (вас попросять ввести пароль після команди):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Відредагуйте файл конфігурації:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Додайте наступне до файлу:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Збережіть файл та перезапустіть службу:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Нарешті, перевірте статус брокера:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Ви повинні побачити щось на зразок цього:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Налаштування Home Assistant та MQTT

<List>

<li>

Відкрийте веб-переглядач та перейдіть за адресою <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (з тим самим IP-адресою, яку ви знайшли у попередньому уроці). Будьте уважні, що адреса Raspberry Pi може змінюватися з часом через налаштування маршрутизатора. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

На першій сторінці введіть будь-яке ім'я, ім'я користувача, пароль, які вам потрібно, та натисніть на "<code>CREATE ACCOUNT</code>"
</li>

<li>

Потім введіть назву свого будинку, встановіть своє місцезнаходження та систему одиниць. Натисніть "<code>DETECT</code>", щоб знайти своє місцезнаходження та встановити свій часовий пояс та систему одиниць на основі цього місця. Якщо ви не хочете надсилати своє місцезнаходження, ви можете встановити ці значення вручну.

</li>

<li>

На наступному екрані Home Assistant покаже будь-які пристрої, які він виявив у вашій мережі. Не хвилюйтеся, якщо ви бачите менше елементів, ніж показано нижче; ви завжди можете додати пристрої вручну пізніше. Наразі просто натисніть <code>FINISH</code> і ви потрапите на головний екран Home Assistant.

</li>

<li>

Тепер нам потрібно встановити інтеграцію MQTT. Перейдіть до <code>Settings</code> -> <code>Devices & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Натисніть кнопку <code>ADD INTEGRATION</code> у правому нижньому кутку. У відкритому вікні знайдіть <code>MQTT</code>.

</li>

<li>

Виберіть MQTT та налаштуйте адресу свого брокера — <code>localhost</code>, порт — <code>1883</code> та ваше ім'я користувача та пароль (ті самі, які ви створили раніше для брокера Mosquitto), після чого натисніть <code>SUBMIT</code>.
</li>

</List>
</li>
</List>