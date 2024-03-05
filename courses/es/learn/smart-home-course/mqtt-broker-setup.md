---
title: "Lección #3, Configuración del Broker MQTT e Inicio de Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 3
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introducción

Después de terminar la configuración de Raspberry Pi, el siguiente paso es instalar el Broker MQTT en el Raspberry Pi. Como se mencionó anteriormente, el Broker es responsable de la ruta de mensajes entre diferentes clientes MQTT. Instalarás y configurarás Eclipse Mosquitto, un Broker MQTT de código abierto.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Además, completarás la configuración de Home Assistant y agregarás la integración MQTT a él.

## Instrucciones

<List type="numbers">

<li>


Instalación del Broker Mosquitto

<List>
<li>

Instala [Mosquitto Broker](https://mosquitto.org/) en tu Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Ingresa TU_NOMBRE_DE_USUARIO (usa el que desees) y contraseña (se te pedirá ingresar la contraseña después del comando):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Edita el archivo de configuración:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Agrega lo siguiente al archivo:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Guarda el archivo y reinicia el servicio:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Finalmente, verifica el estado del broker:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Deberías ver algo como esto:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Configuración de Home Assistant y MQTT

<List>

<li>

Abre el navegador web y ve a <code>http://%DIRECCION_IP_DE_RASPBERRY%:8123</code>. (con la misma dirección IP que encontraste en la lección anterior). Ten en cuenta que la dirección IP de Raspberry Pi puede cambiar con el tiempo debido a la configuración del enrutador. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

En la primera página, ingresa cualquier nombre, nombre de usuario, contraseña que desees y haz clic en "<code>CREAR CUENTA</code>"
</li>

<li>

A continuación, ingrese un nombre para su hogar y configure su ubicación y sistema de unidades. Haga clic en "<code>DETECT</code>" para encontrar su ubicación y configurar su zona horaria y sistema de unidades en función de esa ubicación. Si prefiere no enviar su ubicación, puede configurar estos valores manualmente.

</li>

<li>

En la siguiente pantalla, Home Assistant mostrará cualquier dispositivo que haya descubierto en su red. No se preocupe si ve menos elementos de los que se muestran a continuación; siempre puede agregar dispositivos manualmente más tarde. Por ahora, simplemente haga clic en <code>FINISH</code> y estará en la pantalla principal de Home Assistant.

</li>

<li>

Ahora necesitamos instalar una integración MQTT. Vaya a <code>Settings</code> -> <code>Devices & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Presione el botón <code>ADD INTEGRATION</code> en la esquina inferior derecha. En la ventana abierta, busque <code>MQTT</code>.

</li>

<li>

Seleccione MQTT y configure la dirección de su broker — <code>localhost</code> puerto — <code>1883</code> y su nombre de usuario y contraseña (los mismos que creó anteriormente para Mosquitto Broker) luego presione <code>SUBMIT</code>.
</li>

</List>
</li>
</List>