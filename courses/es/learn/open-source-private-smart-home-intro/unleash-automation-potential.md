---
title: "Libera el potencial de la automatización"
lastUpdate: Mon August 28 2023 12:46:49 GMT+0400 (Samara Standard Time)
description: Aprenderás sobre automatizaciones básicas que hacen la vida cotidiana más fácil en el ejemplo de un stand de casa inteligente.
metaOptions: [Aprender]
defaultName: Introduction to open source solution for private smart homes
---

<RoboAcademyText>La última vez, pasamos por el proceso de instalar y conectar varios dispositivos inteligentes en el stand de demostración. En un apartamento o casa real, por supuesto, habrá sus propias características. Al trabajar con electricidad, debes seguir precauciones de seguridad y no trabajar si no sabes lo que estás haciendo.

Ahora pasemos a lo más interesante, por lo que fue necesario cambiar los interruptores e instalar sensores en los locales.</RoboAcademyText>

**La automatización del hogar implica el uso de tecnología y dispositivos inteligentes para controlar y automatizar diversas funciones en el hogar. Aquí hay algunos ejemplos de automatización del hogar:**

* *Iluminación inteligente*: Puedes controlar y automatizar la iluminación utilizando bombillas o interruptores inteligentes. Esto te permite encender y apagar la luz, ajustar el brillo, cambiar colores.
* *Control de clima*: Los termostatos inteligentes te permiten controlar la temperatura en tu hogar de forma remota. Con ellos, puedes ajustar los ajustes según tu horario y optimizar tu consumo de energía.
* *Sistemas de seguridad*: La automatización del hogar puede incluir características de seguridad como cerraduras inteligentes, videoporteros, cámaras de vigilancia o incluso simples sensores de movimiento. Estos dispositivos te permiten controlar el acceso a tu hogar desde cualquier parte del mundo.
* *Control de electrodomésticos*: Con enchufes inteligentes, puedes automatizar el funcionamiento de electrodomésticos y dispositivos electrónicos. Por ejemplo, puedes programar la cafetera para que se encienda y comience a preparar café antes de que te despiertes.
* *Sistemas de entretenimiento*: los sistemas de audio y video encajarán perfectamente en la automatización del hogar. Por ejemplo, puedes configurar la reproducción de música según un evento o horario.

**Ahora discutamos algunos de los pros y contras de la automatización del hogar en general.**

Pros:

* *Comodidad*: La automatización del hogar está diseñada principalmente para ahorrarte de las actividades rutinarias que se realizan a diario.
* *Eficiencia energética*: Todo comienza teniendo en cuenta los principales consumidores de electricidad. Teniendo estadísticas a mano, puedes establecer un horario o ser más consciente sobre el uso de ciertos dispositivos.
* *Mejora de la seguridad*: Puedes monitorear tu hogar y recibir notificaciones en caso de alguna actividad sospechosa.
Personalización e integración: Los sistemas de automatización del hogar suelen ser flexibles y pueden personalizarse para satisfacer tus necesidades específicas. También pueden integrarse con otros dispositivos inteligentes, proporcionando un control y automatización perfectos de varios sistemas.

Contras:

* *Costo*: El costo inicial de adquirir y configurar dispositivos puede ser relativamente alto, especialmente para sistemas complejos.
* *Complejidad*: Instalar y configurar sistemas de automatización del hogar puede ser una tarea compleja que requiere conocimientos técnicos y habilidades de resolución de problemas.
* *Riesgos de privacidad y seguridad*: Los dispositivos conectados pueden ser vulnerables a hackeos o accesos no autorizados, lo que puede comprometer tu privacidad y seguridad. Es importante seguir las mejores prácticas de seguridad y mantener tus dispositivos actualizados.

En general, la automatización del hogar ofrece muchos beneficios en términos de comodidad, eficiencia energética y seguridad. Sin embargo, vale la pena pensar de antemano sobre la base técnica de los dispositivos, en qué protocolo trabajarán y cómo organizar su conexión entre sí.

Volviendo a nuestro stand de demostración de hogar inteligente, veamos algunas automatizaciones básicas en acción.

## Control de cortinas

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRMibK3Huppxfhvjk3Hs5NBn4ndFoxHHA2mJn22URnwf4', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Al conectar el mecanismo de apertura/cierre de las cortinas al servidor doméstico, puedes controlar las cortinas desde la aplicación. Pero lo más importante es que ahora puedes programar un horario o vincular tu despertador con la apertura de las cortinas. ¡Despertar con luz natural se considera auspicioso!

## Sensor de puerta y luz

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmR1WHAAdmPxSP2neFV8VhqFShbeVaYUsNLQ7n9Exh3JUz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Una de las automatizaciones más simples es encender la luz con un sensor de apertura de puerta. Puede ser útil en la despensa, donde no necesitas estar constantemente. Así que, cuando abres la puerta, la luz se encenderá automáticamente, y cuando termines tus asuntos y cierres la puerta, la luz no brillará así como así.

## Sensor de fugas y válvula inteligente

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVEdwbE1wagebNybfneGKWpAPp3fyXBNnFRt2vduyMSCP', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Saber que tienes una fuga es la mitad de la batalla. Como dicen, prevenido está prevenido. Pero si vinculas el sensor y la válvula, se tomarán todas las medidas necesarias para prevenir la inundación incluso antes de que tengas tiempo de asustarte.

## Sensor de movimiento y luz

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmWMAC3dUvuUg6Zxszoe3aJDatPCaw48QVSyujWyrhKJih', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Quizás el uso más obvio de un sensor de movimiento es encender las luces. Tales automatizaciones se pueden configurar en el baño o en el pasillo

## Estadísticas del Stand de Demostración

Durante el trabajo del stand, logramos recopilar las siguientes estadísticas

|Statistics|
|--------------------------|--------|
| Total transactions       | 6557   |
| Users                    | 16     |
| Logins                   | 50     |
| Pinned files in IPFS     | 58     |
| Data in IPFS             | 980 Mb |

[Por defecto](https://www.home-assistant.io/integrations/recorder/), Home Assistant solo mantiene un historial de 10 días. La integración de Robonomics, si la suscripción está [activada](https://dapp.robonomics.network/#/rws-activate), sube el historial cada 10 minutos. Por lo tanto, no necesitas pensar en copias de seguridad adicionales de tu historial. Por ejemplo, a continuación se muestran varios gráficos de historial de sensores

<LessonImages figure figureCaption="Image 1. Turn on the boiler button" src="smart-home-intro/unleash-boiler.png" alt="Image 1. Turn on the boiler button"/>

<LessonImages figure figureCaption="Image 2. Temperature sensor" src="smart-home-intro/unleash-temperature.png" alt="Image 2. Temperature sensor"/>

<LessonImages figure figureCaption="Image 3. Humidity sensor" src="smart-home-intro/unleash-humidity.png" alt="Image 3. Humidity sensor"/>

Al terminar una serie de artículos sobre el stand y la automatización, me gustaría decir que las posibilidades del sistema propuesto no se limitan a esto. Los escenarios de automatización específicos dependerán del caso específico y del inquilino, porque todo se hace para la comodidad de la vida en el hogar.
