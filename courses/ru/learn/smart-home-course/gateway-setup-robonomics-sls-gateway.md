---
title: "Урок №4b, Настройка шлюза: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: курс домашнего помощника
lessonNumber: 5
metaOptions: [Изучите суверенный умный дом с помощью Robonomics и Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## О чем это

Это сценарий настройки для подключения устройств с использованием шлюза Robonomics SLS. Robonomics черпал вдохновение в дизайне шлюза, разработанного проектом [Smart Logic System](https://github.com/slsys/Gateway) и модифицировал часть схемотехники. Вы можете заказать шлюз у Robonomics или построить свой собственный, используя наши [чертежи](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Вы установите необходимое программное обеспечение для шлюза, настроите его и подключите к Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, программа для обновления прошивки, требует операционную систему Windows.
</robo-academy-note>

## Инструкции

<List type="numbers">

<li>

Установка прошивки микроконтроллера Zigbee

<List>

<li>

Сначала вам нужно прошить микроконтроллер CC2652P шлюза. Установите переключатели <code>ON</code> на нижней части SLS Gateway для переключателей <code>2</code>, <code>4</code> и <code>7</code>, остальные должны быть <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Подключите шлюз к компьютеру с помощью кабеля USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Пожалуйста, используйте только кабели типа USB-A<>USB-C, потому что на данный момент шлюз не поддерживает тип USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

Прошивка CC2652 требует SmartRF Flash Programmer v2 от Texas Instrument. Скачайте ее с [официального сайта](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2), а затем установите.

</li>

<li>

Скачайте прошивку для микроконтроллера CC2652P с [репозитория GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Запустите программу. В окне <code>Подключенное устройство</code> выберите микроконтроллер CC2652P, укажите путь к прошивке, установите флаги на <code>Erase, Program, Verify</code> как на картинке и нажмите <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

После успешной прошивки вы увидите сообщение <code>Success!</code>. Теперь вы можете отключить USB-кабель.

</li>
</List>
</li>

<li>

Установка прошивки микроконтроллера

<List>

<li>

Теперь вам нужно настроить шлюз для установки программного обеспечения. Мы рекомендуем вам обновить прошивку, подключив шлюз напрямую к вашему Raspberry Pi и вводя все следующие команды на этом устройстве. 

</li>

<li>

Установите переключатели <code>ON</code> на нижней части шлюза SLS для переключателей <code>1</code> и <code>3</code>, остальные должны быть <code>OFF</code>. Затем подключите шлюз к вашему Raspberry Pi через порт USB типа-C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Подключитесь к Raspberry Pi через SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Клонируйте репозиторий с прошивкой:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Для прошивки шлюза SLS вам нужно запустить скрипты <code>Clear</code> и <code>Flash_16mb</code>:

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

\- **Устранение неполадок**

Если у вас возникают проблемы с обновлением прошивки шлюза, вам нужно предпринять дополнительные шаги:

<List>

<li>

Убедитесь, что у вас установлен модуль pySerial:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Предоставьте вашему пользователю права доступа к USB-порту:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

В некоторых случаях необходимо изменить настройку пропускной способности в скрипте для обновления прошивки. Откройте скрипт <code>Flash_16mb.sh</code> с помощью редактора nano и измените параметр baud с <code>921600</code> на меньшее значение (например, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Дополнительно**

Мы также предоставляем варианты обновления прошивки с использованием других операционных систем (macOS и Windows). Вы можете найти соответствующие скрипты в папке, название которой зависит от вашей ОС.

</li>
</List>
</li>

<li>

Настройка шлюза

<List>

<li>

Установите переключатели на задней стороне шлюза в новое положение. Переключатели <code>5</code> (RX Zigbee to ESP) и <code>6</code> (TX Zigbee to ESP) должны быть в положении <code>ON</code>, остальные должны быть в положении <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Подключите кабель питания типа C. Индикаторный свет в центре должен загореться зеленым.

</li>

<li>

При первом запуске шлюз начнет передавать Wi-Fi с SSID <code>zgw****</code>. Подключитесь к этой сети. Имейте в виду, что сигнал может быть довольно слабым, поэтому лучше держать шлюз SLS ближе к вашему компьютеру.

Если соединение установлено успешно, откроется веб-интерфейс (или вы можете найти его по адресу 192.168.1.1).

</li>

<li>

Перейдите на страницу Wi-Fi и введите ваши учетные данные Wi-Fi, введя пользователя / пароль и нажав кнопку <code>Save</code>. Затем нажмите кнопку <code>Reboot</code>. Шлюз перезагрузится и подключится к вашей Wi-Fi сети.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Найдите локальный IP-адрес шлюза SLS для доступа к веб-интерфейсу. Для этого вы можете использовать приложение [Fing](https://www.fing.com/products) или <code>arp -a</code> в вашем терминале или Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

где <code class="bold">xxx</code> - ваш IP-адрес в локальной сети. Имя шлюза должно выглядеть так: <code>zgw****</code>. Откройте веб-интерфейс шлюза, вставив IP-адрес шлюза в браузер.
</li>

<li>

Перейдите в <code>Настройки</code> -> <code>Аппаратное обеспечение</code> и убедитесь, что настройки соответствуют изображению. Поправьте настройки при необходимости и нажмите кнопку <code>Сохранить</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

Таблица с необходимыми значениями:


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

Затем перезагрузите шлюз. Выберите <code>Действия</code> -> <code>Перезагрузить систему</code> в правом верхнем углу. Убедитесь, что шлюз работает правильно с микроконтроллером CC2652P в окне информации Zigbee. Состояние устройства должно быть <code>OK</code>.

</li>

<li>

Перезагрузите шлюз. Выберите <code>Действия</code> -> <code>Перезагрузить</code> систему в правом верхнем углу.

</li>

<li>

Настройте автоматическое добавление устройств в Home Assistant. Перейдите в <code>Zigbee</code> -> <code>Настройки</code>, затем выберите <code>Обнаружение Home Assistant MQTT</code> и <code>Очистить состояния</code>. Сохраните изменения и снова перезагрузите шлюз SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Дополнительно**:

Если у вас уже есть активный шлюз SLS в доме, и вы сейчас настраиваете еще один, то они будут конфликтовать друг с другом. Чтобы решить эту проблему, вам нужно изменить канал на новом устройстве.

Для этого перейдите в <code>Zigbee</code> -> <code>Настройки</code> и измените канал на другой (например, канал 15).

</li>

<li>

Подключите ваши устройства, перейдя в <code>Zigbee</code> -> <code>Присоединиться</code>. Поместите ваши датчики в режим сопряжения, наиболее распространенным способом перевода устройства в режим подключения является удержание его кнопки питания или переключение их вкл/выкл 5 раз. Нажмите кнопку <code>Включить присоединение</code>, чтобы начать поиск устройств Zigbee. Вы увидите активные датчики.

</li>
</List>
</li>

<li>

Подключение шлюза SLS к Home Assistant

<List>

<li>

Вам нужно настроить MQTT на шлюзе SLS. Вернитесь на веб-интерфейс вашего шлюза SLS и перейдите в <code>Настройки</code> -> <code>Ссылка</code> -> <code>Настройка MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Добавьте адрес вашего брокера (адрес Raspberry Pi с Home Assistant в локальной сети, вы можете найти его с помощью приложения [Fing](https://www.fing.com/products) или используя команду <code>ip -a</code> на вашем RPi), порт (по умолчанию 1883), имя пользователя и пароль вашего брокера (которые вы создали ранее) и имя темы (вы можете выбрать любое). Также, локальный IP-адрес Raspberry Pi должен быть статическим.

Не забудьте нажать <code>Включить</code> и <code>Сохранить состояния</code>.

</li>

<li>

Сохраните изменения. Теперь устройства будут автоматически отображаться в Home Assistant.

</li>
</List>

</li>

<li>

Подключение устройств 

<List>

<li>

Подключите ваши устройства, перейдя в <code>Zigbee</code> -> <code>Присоединиться</code>. Поместите ваши датчики в режим сопряжения, наиболее распространенным способом перевода устройства в режим подключения является удержание его кнопки питания или переключение их вкл/выкл 5 раз.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Нажмите кнопку Включить присоединение, чтобы начать поиск устройств Zigbee. Вы увидите активные датчики.

</li>

</List>
</li>

</List>