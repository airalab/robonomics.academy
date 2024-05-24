---
title: "Урок №3, Налаштування та підключення датчиків"
description: 'НАЛАШТУВАННЯ ТА ПІДКЛЮЧЕННЯ ДАТЧИКІВ'
lessonNumber: 3
metaOptions: [Вивчайте, Підключення датчиків та децентралізована мережа датчиків]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Наші датчики використовують мікропрограму Robonomics, розширену версію мікропрограми sensor.community, до якої додано деякі датчики та змінено схему надсилання даних. Вихідний код можна знайти [за посиланням.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Якщо у вас є готова до використання плата Robonomics, ви можете перейти до розділу "Підключення".

## Вимоги

**Для Linux:**

<List type="numbers">

<li>

Додайте користувача до групи `dialout` (для Ubuntu), щоб отримати доступ до USB-порту:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Перезавантажте комп'ютер.</li>

<li>

Завантажте виконуваний файл Robonomics `airrohr-flasher` з [релізів](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Змініть дозволи на файл та виконайте його:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Для Windows:**

<List type="numbers">

<li>

Встановіть драйвери для USB2serial (у Windows 10 вони повинні запускатися автоматично) — Драйвери для NodeMCU v3 (CH340): [посилання](http://www.wch.cn/downloads/file/5.html), [альтернативне посилання](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Завантажте виконуваний файл Robonomics `airrohr-flasher` із [releases](https://github.com/airalab/sensors-connectivity/releases) і запустіть його.

</li>

</List>

**Для MacOS:**

<List type="numbers">

<li>

Встановіть драйвери для USB2serial — Драйвери для NodeMCU v3 (CH340): [посилання](http://www.wch.cn/downloads/file/178.html), [альтернативне посилання](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Завантажте виконуваний файл Robonomics `airrohr-flasher` із [releases](https://github.com/airalab/sensors-connectivity/releases) і запустіть його.

</li>

</List>


## Налаштування

<List type="numbers">

<li>

Підключіть датчик до ПК і запустіть програму `airrohr-flasher`. Після відкриття програми ви побачите наступне (залежно від вашої ОС):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Поле `Board` повинно автоматично заповнитися; якщо цього не сталося, виберіть потрібний порт зі списку.

<RoboAcademyNote type="okay" title="INFO">
Якщо <code>airrohr-flasher</code> не може знайти вашу плату, переконайтеся, що ви правильно виконали частину <b>Вимоги</b>.
</RoboAcademyNote>

</li>

<li>

Виберіть прошивку з бажаною мовою та натисніть `Upload`. Завантаження прошивки займе деякий час. Якщо ви пізніше вирішите змінити мову або зробити чисту установку (щоб скинути конфігурацію), перейдіть на сторінку `Erase flash` та натисніть кнопку для очищення флеш-пам'яті датчика.

</li>

<li>

Після завантаження прошивки перезавантажте ESP (просто від'єднайте та знову підключіть USB).

</li>

<li>

Виберіть датчики з меню прапорців. Виберіть SDS011 та будь-які додаткові датчики. Натисніть `Save configuraation`.

</li>

<li>

Після завантаження конфігурації перезавантажте ESP (просто від'єднайте та знову підключіть USB).

</li>

</List>

## Підключіть

<List type="numbers">

<li>

Після перезавантаження плата створить мережу Wi-Fi під назвою `RobonomicsSensor-xxxxxxxxx`. Підключіться до нього з телефону або комп'ютера: ви побачите вікно авторизації (якщо ні, відкрийте браузер і перейдіть на `192.168.4.1`).

</li>

<li>

Виберіть свою мережу Wi-Fi зі списку (або введіть її самостійно, якщо її немає у списку) та заповніть поле пароля.

</li>

<li>

Вкажіть координати місця, де буде встановлений датчик.

<RoboAcademyNote type="warning" title="WARNING">
Координати датчика потім будуть відображені на загальнодоступній карті. Якщо ви не хочете показувати свою приватну інформацію, вкажіь близькі, але не точні координати.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Натисніть `Зберегти конфігурацію та перезапустити`. Плата перезавантажиться та підключиться до вказаної мережі Wi-Fi.

</li>

<li>

Відкрийте [карту датчиків Robonomics](https://sensors.robonomics.network/#/) і знайдіть своє місце, де ви встановили датчик. Через кілька хвилин ви зможете побачити свій датчик з даними на карті.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Це все що стосується стандартної установки. Для більш розширеної настройки (надсилання даних на ваш власний сервер), прочитайте наступний розділ.

## Додаткова Конфігурація

Перед налаштуванням вам потрібно знайти адресу сенсора у вашій Wi-Fi мережі. Для цього ви можете використовувати `airrohr-flasher` (ваш комп'ютер повинен бути в тій же мережі, що й сенсор). Запустіть його та перейдіть на вкладку `Discovery`, потім натисніть `Оновити`, зачекайте мить і ваша адреса сенсора з'явиться.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Подвійний клік на цій адресі (або введіть її у браузер), ви потрапите до меню сенсора:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Тепер ви можете почати налаштовувати вашу конфігурацію.


## Власний API

Ви також можете налаштувати надсилання даних на ваш власний сервер. Для цього, у вкладці `APIs` натисніть на `Надіслати на власний API` та вкажіть адресу сервера та порт (`65` для підключення сенсорів):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Натисніть `Save and restart` , щоб зберегти налаштування.