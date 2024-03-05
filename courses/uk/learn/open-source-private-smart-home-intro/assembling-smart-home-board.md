---
title: "Збірка розумної домашньої плати"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Ви дізнаєтеся, як зібрати розумну домашню плату!
metaOptions: [Вивчайте]
defaultName: Вступduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Панель розумного будинку 

Ця панель призначена для використання як центральний пристрій керування з найбільш використовуваними перемикачами та даними, відображеними на ній. Також можна підключити домофон і використовувати його як внутрішній монітор. В основному це просто планшет, що працює під управлінням операційної системи Android у нашому випадку. Все, що вам потрібно зробити, - це надати живлення. Ми вважаємо, що цю панель слід встановити там, де ви розмістите внутрішній монітор

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Вимикач світла

Розумні вимикачі світла виглядають більш-менш як звичайні, за винятком того, що використовуються кнопки натискання замість перемикачів. Кнопка натискання повертається на своє місце після натискання. Немає різниці в пі��ключенні між звичайним вимикачем і розумним: підключіть нейтральний провід до N, живлення до L і лінію освітлення до L1. Після збирання вимикача для парування через ZigBee натисніть кнопку принаймні 5 секунд.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

У випадку двокнопкового вимикача (або більше), єдине відмінність - друга (третя, ...) лінія світла. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Розумна лампочка 

Розумні лампочки, швидше за все, є найлегший спосіб спробувати щось розумне, вам навіть не потрібно бути електриком. Їх можна керувати віддалено і змінювати яскравість або колір. Ви можете встановити їх разом з розумними вимикачами або окремо. Використання таких пристроїв може відкрити цілу сторінку автоматизації в залежності від вашого настрою або погодних умов! Нові лампочки готові бути підключені через ZigBee. У разі, якщо ви не можете знайти одну, перемикайте її ввімкненням і вимиканням 5 разів


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Розумна розетка 

Існує ряд «нерозумних» пристроїв, які нам зазвичай потрібно іноді вмикати та вимикати. Якщо ми живимо такий пристрій через розумну розетку, ми можемо вмикати/вимикати його відповідно до наших потреб, розкладу чи умов. Також такі розетки можуть контролювати споживання енергії, щоб ми мали дані про те, скільки споживає цей пристрій. Підключення досить просте, для підключення розумної розетки натисніть кнопку на 5 секунд

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Перемикач котла 

Причина існування перемикача котла як самостійного пристрою полягає в тому, що він може витримати більше навантаження. Зазвичай котли споживають 3 кВт або навіть більше, тому звичайні (навіть розумні) перемикачі не підходять в цій ситуації. Перемикач котла призначений для роботи в таких умовах. Підключення та парування практично такі ж, як для перемикача світла

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Wifi/Zigbee Термостат

Виглядає як звичайний термостат, але має можливість керування бездротово. Є варіанти: підключити систему опалення безпосередньо до термостата або розділити їх. У останньому випадку термостат повідомить нам про режим (тепло, холод, вентилятор і т.д.) та температуру

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Вимикач штор

Ще один спеціалізований вимикач, на цей раз для штор. З технічної точки зору не обов'язково використовувати лише цей вимикач, ми могли б використовувати будь-який вимикач з трьома кнопками і підключити його до мотора штор, але цей має спеціальні піктограми. Щоб спарити вимикач, тримайте середню кнопку довго

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Контролер розподільного клапана

Виберіть контролер відповідно до клапанів, які у вас є. Найочевидніший сценарій - поєднати цей контролер з датчиком витоку води. Щоб спарити пристрій, утримуйте кнопку протягом 5 секунд

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Датчик витоку води

Досить простий пристрій, який відсилає сигнал, коли його два контакти з'єднані. Вода проводить електрику, і коли під датчиком є вода, його контакти замикані. Датчик працює від батарейки і зазвичай служить 1-2 роки. Щоб спарити датчик через ZigBee, тримайте кнопку протягом деякого часу 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## ІК-контролер

Подумайте про нього як про ваш пульт від телевізора ... але розумний! І він не обмежується роботою лише з телевізорами. Якщо ваш кондиціонер має пульт дистанційного керування, його можна замінити цим розумним. Щоб спарити його, натисніть кнопку скидання на задній панелі контролера протягом деякого часу. Є купа бібліотек з готовими командами, наприклад [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). Вам просто потрібно знайти модель вашого телевізора або кондиціонера

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Датчик дверей/вікон

Ще один датчик, який працює від батарейки, але допомагає в побудові простої системи безпеки або підключенні до світла та інших пристроїв. Щоб спарити його через ZigBee, вставте голку в отвір і натисніть її протягом деякого часу

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Датчик руху
Те ж саме, що й датчик дверей/вікон, може використовуватися в різних сценаріях. Найочевидніші - керування світлом або виявлення рухів, коли вас немає

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Датчик температури та вологості

Корисно знати умови, в яких ви живете, чи не так? Цей датчик надасть вам виміри температури та вологості. Потім ви можете ви��ористовувати ці дані для увімкнення/вимкнення вашого кондиціонера або інших систем опалення/охолодження. Щоб спарити датчик, є кнопка на задній стороні 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Камера безпеки

В кінці добре було б подивитися, що відбувається у вашому домі. Гарною автоматизацією буде підключення датчика руху до камери, щоб ви мали відео тривалістю 10 секунд, коли виявлено рух 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Розумна дошка 
Подивіться на результати [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw)
І грайте з нею самі [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

