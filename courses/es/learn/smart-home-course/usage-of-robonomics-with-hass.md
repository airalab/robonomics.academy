---
title: "Lección #7, Uso de Robonomics con Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 8
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## ¿De qué se trata esto?

En esta lección, intentarás usar los principales servicios de IoT de Robonomics. El primero puede consultar la telemetría de dispositivos inteligentes para el hogar, lo que te permite recibir datos de Home Assistant de forma remota. El segundo servicio genera copias de seguridad de la configuración de tu Home Assistant y la restaura cuando sea necesario (por ejemplo, en caso de falla de las tarjetas SD).


## Acerca de las funciones de la parachain

A continuación verás cómo se utilizan las funciones de la parachain de Robonomics para proporcionar al usuario de Home Assistant el servicio necesario. 

Obtener telemetría se basa en el palet <code>datalog</code> que ya conoces. Cada cierto período de tiempo (pero no menos de lo que permite el peso acumulado), se envía una transacción <code>datalog.record()</code> a la parachain desde la dirección <code>SUB_CONTROLLER</code> con el hash de IPFS del archivo cifrado, donde se recopilan todos los datos de tus dispositivos IoT. De hecho, para obtener la telemetría, solicitas los datalogs necesarios de la parachain relacionados con tu suscripción de IoT y luego los descifras con tus claves.

Para crear una copia de seguridad, se utiliza otro palet de Robonomics llamado <code>digitalTwin</code>, que es una implementación de la idea de un gemelo digital, una versión digital del equipo real que copia sus características técnicas y datos históricos. Primero, se crea un ID único para el gemelo digital de tu Home Assistant usando el extrínseco <code>digitalTwin.create()</code>. Luego, utilizando el extrínseco <code>digitalTwin.setSource()</code>, este ID se vincula con algunos datos (el campo <code>topic</code>) y con una dirección en la parachain (el campo <code>source</code>). Para la copia de seguridad de Home Assistant, el hash del archivo de copia de seguridad se almacena en <code>topic</code>, y la dirección <code>SUB_OWNER</code> se almacena en <code>source</code>.

## Instrucciones

<List type="numbers">

<li>

Obtener Telemetría

<List>


<li>

Ve a la dapp y elige el servicio [Telemetría de SmartHome](https://dapp.robonomics.network/#/smarthome-telemetry).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

En el campo <code>CONTROLLER</code> ingresa la dirección <code>SUB_CONTROLLER</code>. Inserta la frase semilla para cifrar los datos.

</li>

<li>

En el bloque <code>Obtener telemetría</code> elige una marca de tiempo de la lista desplegable y presiona el botón <code>DESCARGAR TELEMETRÍA</code>.


La descarga de la telemetría puede llevar algún tiempo. Después de terminar, verás la información de tus sensores.

</li>
</List>
</li>


<li>

Creación de Copia de Seguridad

<List>

<li>

Para crear copias de seguridad, se llama a un servicio que genera un archivo seguro con los archivos de configuración. Este servicio luego agrega el archivo a IPFS y almacena el CID resultante en Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
Para restaurar tu configuración, es necesario utilizar una puerta de enlace IPFS personalizada como Pinata (pinata.cloud) o Crust Network (crust.network). Sin ella, tu copia de seguridad se almacenará únicamente en tu nodo IPFS local, lo que puede impedirte restaurar la configuración de tu Home Assistant en caso de una falla del nodo local. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

En la interfaz web de Home Assistant, ve a <code>Herramientas de Desarrollo</code> -> <code>Servicios</code>. Busca <code>Robonomics: Guardar Copia de Seguridad en Robonomics</code> y presiona <code>LLAMAR SERVICIO</code>.

</li>

<li>

Espera hasta que veas la notificación <code>La copia de seguridad se actualizó en Robonomics</code> aparezca en <code>Notificaciones</code>.

</li>

<li>

Para restaurar tu configuración, necesitarás instalar una nueva instancia de Home Assistant (y repetir todos los pasos anteriores) con la integración de Robonomics Home Assistant utilizando las mismas semillas que creaste anteriormente. También necesitarás configurar un broker MQTT con el mismo nombre de usuario y contraseña.

<robo-academy-note type="warning" title="WARNING">
Dado que algunos dispositivos conectados a Home Assistant a través de Wi-Fi o MQTT requieren que especifiques explícitamente la dirección IP local de tu Raspberry Pi, al restaurar una copia de seguridad, es posible que no estén disponibles debido a un cambio en esta IP. Necesitarás volver a ingresar la nueva dirección IP en la configuración de estos dispositivos. Para evitar esto, puedes configurar una IP local estática para tu Raspberry Pi en la configuración de tu enrutador (si admite esta función).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

En la interfaz web de Home Assistant, ve a <code>Herramientas de Desarrollo</code> -> <code>Servicios</code>. Busca <code>Robonomics: Restaurar desde la Copia de Seguridad en Robonomics</code> y presiona <code>LLAMAR SERVICIO</code>. Navega a la página <code>Resumen</code> para verificar el estado de tu copia de seguridad.

</li>

<li>

Una vez que Home Assistant haya terminado de reiniciarse, tu configuración se restaurará. Si el estado cambia a <code>restaurado</code> pero Home Assistant no se reinicia automáticamente, necesitarás reiniciarlo manualmente navegando a <code>Configuración</code> > <code>Sistema</code> y haciendo clic en el botón <code>REINICIAR</code> en la esquina superior derecha.

</li>

</List>
</li>

</List>

## Completando el Curso

<List>

<li class="flex"> 

¡Felicidades! Has completado con éxito la configuración y despliegue completo de tu hogar inteligente soberano. Ahora puedes solicitar un certificado de finalización del curso visitando nuestro canal de Discord. Escríbenos en el chat [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315) y nuestro representante se pondrá en contacto contigo.
</li>

<li class="flex">

La prueba de finalización del curso son transacciones correspondientes que se pueden verificar en el [explorador de Polkadot](https://robonomics.subscan.io/). Estas son transacciones sobre la compra de una suscripción, agregar un dispositivo a una suscripción y enviar registros de datos desde dispositivos.

</li>

</List>