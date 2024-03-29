---
title: "Урок №1, Теоретическое введение"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: курс домашнего помощника
lessonNumber: 1
metaOptions: [Изучите суверенный умный дом с помощью Robonomics и Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Ключевые компоненты суверенного умного дома 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), одноплатный компьютер**.

Мы можем преобразить устройство в центр Интернета вещей после установки всех необходимых программ. Основная цель центра - оркестрировать протоколы, сети, приложения и различные устройства умного дома.

2. **[Home Assistant](https://www.home-assistant.io/), программное обеспечение для управления открытым исходным кодом**.

Он разработан для централизованного управления умными устройствами. Он может автоматически сканировать сеть на известные устройства и позволяет пользователям легко настраивать все необходимые автоматизации. Мы установим Home Assistant на Raspberry Pi.

Home Assistant взаимодействует с устройствами и хранит их данные локально, что, к сожалению, не позволяет вам управлять устройствами удаленно. Для решения этой проблемы мы используем Robonomics Network.

3. **[Robonomics Network](https://robonomics.network/), децентрализованный облачный сервис для безопасного и надежного управления приложениями Интернета вещей**.

Он использует технологии web3, которые включают децентрализацию и технологии блокчейна для защиты умных устройств и их данных.

Основные функции Robonomics реализованы на основе блокчейна (парачейна) экосистемы Polkadot/Kusama. Среди основных функций парачейна - возможность отправить команду на запуск устройства и возможность хранить данные пользователя на блокчейне.

Парачейн Robonomics имеет функцию подписки на Интернет вещей, которая позволяет пользователям отправлять транзакции в парачейн без комиссии на протяжении одного месяца. В практическом разделе этого курса вы будете использовать метод подписки.

Взаимодействие между центром Интернета вещей и парачейном Robonomics осуществляется с использованием [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) - библиотеки Python, специализирующейся на взаимодействии с Robonomics для удобного программирования.

4. **[InterPlanetary File System](https://ipfs.tech/) (IPFS), программное обеспечение для хранения и обмена данными в распределенной файловой системе**.

IPFS необходим для избегания хранения больших файлов на блокчейне (так как это было бы слишком дорого), вместо этого мы можем хранить хеши файлов IPFS, которые действуют как ссылки на эти файлы.

## Протоколы для умных устройств
Вы будете использовать два основных протокола для умных устройств:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), беспроводной протокол связи.**

Он очень часто используется для подключения умных устройств. Он разработан для низкого энергопотребления, легкости настройки и гибкости конфигурации, а также поддерживает самоорганизующуюся и самовосстанавливающуюся топологию сети сетки. На рынке доступно тысячи устройств с поддержкой Zigbee, что делает его очень привлекательным для создания умных домашних решений. Для управления устройствами Zigbee вам понадобится шлюз, который передает данные между сетью Zigbee и другой сетью (например, Wi-Fi).

2. **[Протокол передачи телеметрии через очередь сообщений](https://mqtt.org/) (MQTT), протокол публикации-подписки, предназначенный для управления приложениями IoT.**

Протокол легкий, требует минимальных ресурсов и обеспечивает надежность доставки сообщений. Протокол разработан для сетей с низкой пропускной способностью, высокой задержкой и ненадежностью, что делает его отличным вариантом для работы с большими объемами сообщений датчиков. MQTT требует сервера, который запускает брокер MQTT (в нашем случае он будет работать с нашим Raspberry Pi). Брокер получает все сообщения от клиентов MQTT, а затем маршрутизирует их к соответствующим клиентам-подписчикам.

## Варианты подключения Zigbee
Вы исследуете два сценария подключения устройств к Home Assistant с помощью Robonomics.

1. Первый сценарий не использует отдельный шлюз Zigbee для подключения устройств. Вместо этого используется комбинация [адаптера Zigbee](https://www.zigbee2mqtt.io/guide/adapters/) и программного обеспечения [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/).

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

Адаптер (например, JetHome USB JetStick Z2) подключается к Raspberry Pi и действует как интерфейс между компьютером и радиосвязью Zigbee. Zigbee2MQTT - это программное обеспечение, которое позволяет подключать Zigbee к сетям MQTT. Оно получает сообщения из сети Zigbee и преобразует их в удобные и хорошо структурированные сообщения MQTT.

2. Во втором сценарии устройства подключаются с использованием [шлюза SLS](https://github.com/slsys/Gateway) на основе микроконтроллера ESP32. Для удобства использования Robonomics разработали [собственную модификацию](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) шлюза.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

Шлюз SLS действует как координатор сообщений протокола Zigbee и позволяет использовать большинство доступного оборудования Zigbee. Для интеграции с Home Assistant используется протокол MQTT.

## Удаленное управление

Удаленное управление умным домом выполняется с использованием [децентрализованного приложения Robonomics](https://dapp.robonomics.network/) (dapp), которое обеспечивает доступ к функциям парачейна удобным для пользователя способом. Безопасность и неизменяемость пользовательских данных обеспечивается, с одной стороны, отправкой зашифрованных данных в IPFS (которые могут быть расшифрованы только ключом пользователя), а с другой стороны, размещением хэша IPFS этих данных на блокчейне.

</List>



