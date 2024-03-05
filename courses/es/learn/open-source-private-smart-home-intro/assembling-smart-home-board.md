---
title: "Ensamblaje de Placa de Casa Inteligente"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: ¡Aprenderás cómo ensamblar una placa de casa inteligente!
metaOptions: [Aprender]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Panel de Casa Inteligente 

Este panel está destinado a ser utilizado como un dispositivo de control central con los interruptores más utilizados y los datos mostrados en él. También es posible conectar un intercomunicador y utilizarlo como un monitor interior. Básicamente es solo una tableta que ejecuta el sistema operativo Android en nuestro caso. Todo lo que necesita hacer es proporcionar energía. Creemos que este panel debería instalarse donde colocaría un monitor interior

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Interruptor de luz

Los interruptores de luz inteligentes se parecen más o menos a los ordinarios, excepto que se utilizan botones pulsadores en lugar de interruptores. Un botón pulsador vuelve a su posición después de presionarlo. No hay diferencia en la conexión entre un interruptor regular y uno inteligente: conecte el cable neutral a N, el cable de alimentación a L y la línea de iluminación a L1. Después de ensamblar el interruptor para emparejarlo a través de ZigBee, presione el botón durante al menos 5 segundos.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

En el caso del interruptor de dos botones (o más), la única diferencia es la segunda (tercera, ...) línea de luces. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Bombilla inteligente 

Las bombillas inteligentes son probablemente la forma más fácil de probar algo inteligente, ni siquiera necesitas ser un electricista. Se pueden controlar de forma remota y pueden cambiar su brillo o color. Puedes instalarlas junto con interruptores inteligentes o por separado. ¡El uso de estos dispositivos puede abrir toda una página de automatizaciones dependiendo de tu estado de ánimo o condiciones exteriores! Las nuevas bombillas están listas para conectarse a través de ZigBee. En caso de que no puedas encontrar una, enciéndela y apágala 5 veces


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Enchufe inteligente 

Hay una serie de dispositivos “no inteligentes” que normalmente necesitamos encender y apagar en ocasiones. Si encendemos dicho dispositivo a través del enchufe inteligente, podemos encenderlo/apagarlo según nuestras necesidades, horario o condiciones. Además, estos enchufes pueden controlar el consumo de energía, por lo que tenemos datos sobre cuánto consume este dispositivo. La conexión es bastante sencilla, para emparejar el pulsador del enchufe inteligente durante 5 segundos

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Interruptor de caldera 

La razón por la que el interruptor de caldera existe como un dispositivo dedicado es que puede soportar más carga. Por lo general, las calderas consumen 3 kWh o incluso más, por lo que los interruptores regulares (incluso inteligentes) no son adecuados en esta situación. El interruptor de caldera está diseñado para funcionar en estas condiciones. Las conexiones y el emparejamiento son prácticamente iguales que para el interruptor de luz

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Termostato Wifi/Zigbee

Parece un termostato ordinario pero viene con la capacidad de ser controlado de forma inalámbrica. Hay opciones: conectar un sistema de calefacción directamente al termostato o separarlos. En el último caso, el termostato nos dirá el modo (calor, frío, ventilador, etc.) y la temperatura

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Interruptor de Cortina

Otro interruptor dedicado, esta vez para cortinas. Desde un punto de vista técnico, no es necesario usar solo este interruptor, podríamos usar cualquier interruptor de tres botones y conectarlo al motor de la cortina, pero este viene con iconos especiales. Para emparejar el interruptor, mantén presionado el botón central

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Controlador de Válvula Inteligente

Elige un controlador según las válvulas que tengas. El escenario más obvio es combinar este controlador con un sensor de fugas de agua. Para emparejar el dispositivo, mantén presionado el botón durante 5 segundos

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Sensor de Fugas de Agua

Un dispositivo bastante simple que envía una señal cuando sus dos contactos están conectados. El agua conduce electricidad y cuando hay agua debajo del sensor, sus contactos se cortocircuitan. El sensor funciona con una batería y generalmente dura de 1 a 2 años. Para emparejar el sensor a través de ZigBee, mantén presionado su botón por un tiempo 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## Controlador de IR

¡Piensa en él como tu control remoto de TV... pero inteligente! Y no se limita a trabajar solo con televisores. Si tu A/C tiene un control remoto, podría ser reemplazado por este inteligente. Para emparejarlo, presiona el botón de reinicio en la parte trasera del controlador por un tiempo. Hay un montón de bibliotecas con comandos listos para usar, por ejemplo [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). Todo lo que tienes que hacer es encontrar el modelo de tu TV o A/C

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Sensor de Puerta/Ventana

Otro sensor que funciona con una batería pero ayuda a construir un sistema de seguridad simple o conectarlo a luces y otros dispositivos. Para emparejarlo a través de ZigBee, coloca una aguja en el agujero y presiónala por un tiempo

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Sensor de Movimiento
Lo mismo que el sensor de puerta/ventana, podría usarse en varios escenarios. Los más obvios son controlar luces o detectar movimientos cuando estás fuera

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Sensor de Temperatura y Humedad

¡Es bueno saber las condiciones en las que vives, verdad? Este sensor te proporcionará mediciones de temperatura y humedad. Luego puedes usar estos datos para encender/apagar tu A/C u otros sistemas de calefacción/refrigeración. Para emparejar el sensor hay un botón en la parte trasera 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Cámara de Seguridad

Al final es bueno echar un vistazo a lo que sucede en tu hogar. Una buena automatización sería conectar el sensor de movimiento con la cámara para que tengas un video de 10 segundos cuando se detecte movimiento 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Tablero Inteligente 
Echa un vistazo a los resultados [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
Y juega con él mismo [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

