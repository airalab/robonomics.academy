---
title: Conectividad de Sensores y Red de Sensores Descentralizada
description:  Descubre cómo puede funcionar una red de monitoreo de calidad del aire civil y los beneficios de una solución descentralizada para monitorear la calidad del aire en tu hogar o comunidad.
lessonNumber: 1
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

## Acerca del curso

Descubre cómo puede funcionar una red de monitoreo de calidad del aire civil y los beneficios de una solución descentralizada para monitorear la calidad del aire en tu hogar o comunidad.

## ¿Qué es la Red de Sensores Descentralizada?

La Red de Sensores de Robonomics es una red de monitoreo de calidad del aire civil. Cualquiera puede ensamblar su propio sensor o utilizar una solución lista para usar del equipo de desarrollo y configurarlo en su hogar. La red de sensores utiliza software de código abierto y diagramas de cableado de componentes abiertos. En particular, uno de los sensores principales utilizados es el sensor de partículas finas PM10 y PM2.5.


## ¿Qué es PM10 y PM2.5?

PM10 es una partícula de una sustancia de 10 micrones o menos, PM2.5 es una partícula de 2.5 micrones de diámetro o menos. Flotan constantemente en el aire y no se asientan debido a su pequeño tamaño (para comparación, el grosor de un cabello humano es de 100 micrones). Estas partículas pueden aparecer por diversas razones, incluyendo procesos industriales asociados con la manipulación de materiales a granel o la combustión y procesamiento de minerales. También se emiten después de incendios forestales y tormentas de polvo. Además, pueden provenir del transporte convencional al quemar combustible o al desgaste de neumáticos y pavimento. Los neumáticos de los automóviles se desgastan en finas migas y el viento las dispersa por las calles de toda la ciudad.

## ¿Por qué necesitamos medirlos?

PM10 y PM2.5 son los más peligrosos porque su tamaño les permite penetrar en los pulmones de las personas, mientras que las partículas más grandes tienden a quedar atrapadas en la nariz o la garganta. Las partículas más grandes de PM10 irritan las vías respiratorias, la nariz, la garganta y los ojos. Las partículas más pequeñas de 2.5 micrones pueden penetrar profundamente en los pulmones e incluso llegar al torrente sanguíneo. Los efectos de estas partículas en el cuerpo humano pueden ser devastadores:

<List>

<li>envenenamiento por sustancias nocivas</li>
<li>reacciones alérgicas</li>
<li>infecciones bacterianas y fúngicas</li>
<li>cáncer</li>
<li>irritación de las membranas mucosas</li>
<li>exacerbación de síntomas respiratorios</li>

</List>

## ¿Por qué una Red de Sensores Descentralizada?

Existen redes de monitoreo público como el proyecto alemán [sensor.community](https://sensor.community), pero utilizan la arquitectura cliente-servidor habitual, lo cual en este caso es una desventaja. Los datos de todos los sensores junto con las solicitudes de los usuarios se envían a un servidor, el cual no siempre puede manejar tal carga. Por lo tanto, hay situaciones en las que el mapa con los datos no está disponible en los momentos más importantes.

Con la Red de Robonomics, los sensores envían datos a varios servidores diferentes, y cualquier usuario puede poner en marcha el servidor de Conectividad de Sensores para su sensor y verlo en el mapa. El mapa en sí no está sobrecargado porque es una aplicación descentralizada (dapp) que funciona directamente desde tu navegador con los datos que los servidores envían al canal IPFS pub-sub.