---
title: "Урок №4b, Налаштування шлюзу: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: курс домашнього асистента
lessonNumber: 5
metaOptions: [Вивчайте, Суверенний Розумний Дім з Robonomics та Домашнім Асистентом]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Про що йдеться

Це сценарій налаштування для підключення пристроїв за допомогою шлюзу Robonomics SLS. Robonomics взяв дизайн-інспірацію від шлюзу, розробленого проектом [Smart Logic System](https://github.com/slsys/Gateway) та змінив частину схеми. Ви можете замовити шлюз від Robonomics або побудувати свій власний, використовуючи наші [конструкційні креслення](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Ви встановите необхідне програмне забезпечення для шлюзу, налаштуєте його та підключите до Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, програма для оновлення прошивки, потребує операційну систему Windows.
</robo-academy-note>

## Інструкції

<List type="numbers">

<li>

Встановлення прошивки мікроконтролера Zigbee

<List>

<li>

Спочатку вам потрібно прошити мікроконтролер CC2652P шлюзу. Встановіть перемикачі <code>ON</code> <code>2</code>, <code>4</code> та <code>7</code> в нижній частині SLS Gateway, інші повинні бути <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Підключіть шлюз до комп'ютера за допомогою кабелю USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Будь ласка, використовуйте лише кабелі типу USB-A<>USB-C, оскільки на даний момент шлюз не підтримує тип USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

Прошивка CC2652 вимагає SmartRF Flash Programmer v2 від Texas Instrument. Завантажте її з [офіційного сайту](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) та встановіть.

</li>

<li>

Завантажте прошивку для мікроконтролера CC2652P з [сховища GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Запустіть програму. У вікні <code>Підключений пристрій</code> виберіть мікроконтролер CC2652P, встановіть шлях до прошивки, встановіть прапорці на <code>Стирати, Програмувати, Перевірити</code> як на зображенні та натисніть <code>Почати</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Після успішного прошивання ви побачите повідомлення <code>Успішно!</code>. Тепер ви можете відключити USB-кабель.

</li>
</List>
</li>

<li>

Встановлення прошивки мікроконтролера

<List>

<li>

Тепер вам потрібно налаштувати шлюз для встановлення програмного забезпечення. Ми радимо вам оновити прошивку, підключивши шлюз безпосередньо до вашого Raspberry Pi та ввівши всі наступні команди на цьому пристрої. 

</li>

<li>

Встановіть перемикачі <code>ON</code> <code>1</code> та <code>3</code> в нижній частині SLS шлюзу, інші повинні бути <code>OFF</code>. Потім підключіть шлюз до вашого Raspberry Pi через порт USB типу-C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Підключіться до Raspberry Pi через SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Клонуйте сховище з прошивкою:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Для прошивки шлюзу SLS вам потрібно запустити скрипти <code>Clear</code> та <code>Flash_16mb</code>:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **Усунення неполадок**

Якщо у вас виникають проблеми з оновленням прошивки шлюзу, вам потрібно виконати додаткові кроки:

<List>

<li>

Переконайтеся, що встановлено модуль pySerial:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Надайте своєму користувачеві права доступу до USB-порту:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

У деяких випадках необхідно змінити налаштування пропускної здатності в скрипті для оновлення прошивки. Відкрийте скрипт <code>Flash_16mb.sh</code> за допомогою редактора nano та змініть параметр швидкості передачі даних з <code>921600</code> на менше значення (наприклад, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Додатково**

Ми також надаємо варіанти оновлення прошивки за допомогою інших операційних систем (macOS та Windows). Відповідні скрипти можна знайти в папці, назва якої залежить від вашої ОС.

</li>
</List>
</li>

<li>

Налаштування шлюзу

<List>

<li>

Встановіть перемикачі на задній панелі шлюзу в нове положення. Перемикачі <code>5</code> (RX Zigbee до ESP) та <code>6</code> (TX Zigbee до ESP) повинні бути в положені <code>ON</code>, інші повинні бути <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Підключіть кабель живлення типу C. Індикаторне світло в центрі повинно загорітися зеленим.

</li>

<li>

Під час першого запуску шлюз почне роздавати Wi-Fi з SSID <code>zgw****</code>. Підключіться до цієї мережі. Майте на увазі, що сигнал може бути досить слабким, тому краще тримати шлюз SLS ближче до вашого комп'ютера.

Якщо підключення вдале, веб-інтерфейс відкриється (або ви можете знайти його за адресою 192.168.1.1).

</li>

<li>

Перейдіть на сторінку Wi-Fi та введіть свої облікові дані Wi-Fi, ввівши користувача / пароль та натиснувши кнопку <code>Save</code>. Після цього натисніть кнопку <code>Reboot</code>. Шлюз перезавантажиться та підключиться до вашої Wi-Fi мережі.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Знайдіть локальну IP-адресу шлюзу SLS для доступу до веб-інтерфейсу. Для цього ви можете використовувати додаток [Fing](https://www.fing.com/products) або <code>arp -a</code> у вашому терміналі або Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

де <code class="bold">xxx</code> - це ваш IP-адреса в локальній мережі. Назва шлюзу повинна виглядати так: <code>zgw****</code>. Відкрийте веб-інтерфейс шлюзу, вставивши IP-адресу шлюзу у браузер.
</li>

<li>

Перейдіть до <code>Налаштування</code> -> <code>Апаратне забезпечення</code> та переконайтеся, що налаштування виглядають так, як на зображенні. Виправте налаштування за необхідності та натисніть кнопку <code>Зберегти</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

Таблиця з обов'язковими значеннями:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

Потім перезавантажте шлюз. Виберіть <code>Дії</code> -> <code>Перезавантажити систему</code> у правому верхньому куті. Переконайтеся, що шлюз працює належним чином з мікроконтролером CC2652P в вікні інформації Zigbee. Стан пристрою повинен бути <code>OK</code>.

</li>

<li>

Перезавантажте шлюз. Виберіть <code>Дії</code> -> <code>Перезавантажити</code> систему у правому верхньому куті.

</li>

<li>

Налаштуйте автоматичне додавання пристроїв до Home Assistant. Перейдіть до <code>Zigbee</code> -> <code>Конфігурація</code>, потім виберіть <code>Відкриття MQTT для Home Assistant</code> та <code>Очистити стани</code>. Збережіть зміни та знову перезавантажте шлюз SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Додатково**:

Якщо у вас вже є активний шлюз SLS вдома, і ви зараз налаштовуєте ще один, то вони будуть конфліктувати один з одним. Щоб вирішити цю проблему, вам потрібно змінити канал на новому пристрої.

Для цього перейдіть до <code>Zigbee</code> -> <code>Конфігурація</code> та змініть канал на інший (наприклад, канал 15).

</li>

<li>

Підключіть свої пристрої, перейшовши до <code>Zigbee</code> -> <code>Приєднатися</code>. Поставте ваші датчики в режим парування, найпоширеніший спосіб перевести пристрій в режим підключення - утримувати його кнопку живлення або перемикати їх увімкненням / вимиканням 5 разів. Натисніть кнопку <code>Увімкнути приєднання</code>, щоб почати пошук пристроїв Zigbee. Ви побачите активні датчики.

</li>
</List>
</li>

<li>

Підключення шлюзу SLS до Home Assistant

<List>

<li>

Вам потрібно налаштувати MQTT на шлюзі SLS. Поверніться до веб-інтерфейсу вашого шлюзу SLS та перейдіть до <code>Налаштування</code> -> <code>Посилання</code> -> <code>Налаштування MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Додайте адресу свого брокера (адреса Raspberry Pi з Home Assistant в локальній мережі, ви можете знайти її за допомогою додатка [Fing](https://www.fing.com/products) або використовуючи команду <code>ip -a</code> на вашому RPi), порт (за замовчуванням 1883), ім'я користувача та пароль вашого брокера (які ви створили раніше) та назву теми (ви можете вибрати будь-яку). Також, локальна IP-адреса Raspberry Pi повинна бути статичною.

Не забудьте натиснути <code>Увімкнути</code> та <code>Зберігати стани</code>.

</li>

<li>

Збережіть зміни. Тепер пристрої будуть автоматично відоражатися в Home Assistant.

</li>
</List>

</li>

<li>

Підключення пристроїв 

<List>

<li>

Підключіть свої пристрої, перейшовши до <code>Zigbee</code> -> <code>Приєднатися</code>. Поставте ваші датчики в режим парування, найпоширеніший спосіб перевести пристрій в режим підключення - утримувати його кнопку живлення або перемикати їх увімкненням / вимиканням 5 разів.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Натисніть кнопку Увімкнути приєднання, щоб почати пошук пристроїв Zigbee. Ви побачите активні датчики.

</li>

</List>
</li>

</List>