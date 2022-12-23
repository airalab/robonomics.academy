---
title: 'Lección #6, Servicio de Robot. Calibración de la cámara y procedimiento "Spot check"'
description: "En esta lección, aprenderá qué debe hacer si acaba de recibir el robot: la primera ejecución y la configuración de la red. También aprenderá cómo ejecutar el proceso de calibración que debe ejecutarse mensualmente."
lessonNumber: 6
courseID: 2
metaOptions: [Cursos online, Desarrollo de software de Boston Dynamics Spot]
---


<section class="container__reg">

## Sobre qué se trata esto

En esta lección, aprenderá qué debe hacer si acaba de recibir el robot: la primera ejecución y la configuración de la red. También aprenderá cómo ejecutar el proceso de calibración que debe ejecutarse mensualmente.

</section>


<section class="container__reg">

## El reto

Crear y ejecutar secuencias de comandos de Python implementando los comportamientos descritos.

<List type="numbers">
<li>Ejecute "spot chec" y guarde el resultado de la calibración en un <code>/home/student/result</code> directorio como un archivo de texto.</li>
<li>Ejecute el procedimiento de calibración de la cámara.</li>
</List>

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

Primera ejecución 

Mire [la página Procedimiento de inicio](https://support.bostondynamics.com/s/article/Startup-Procedure) en la Documentación.

</li>

<li>

Networking

Spot ofrece una variedad de opciones de networking para admitir un conjunto diverso de aplicaciones y entornos. Las opciones incluyen:

\- Spot como un par conectado. Conexión física a Spot.

\- Spot como punto de acceso WiFi.

\- Spot como cliente WiFi. Spot puede unirse a una red WiFi existente y las aplicaciones también pueden unirse a la misma red WiFi para hablar con Spot.

Para más información mira [la página Networking](https://dev.bostondynamics.com/docs/concepts/networking).

Spot Core está conectado al Spot a través del puerto de carga útil. Spot Core se puede conectar a Internet con un dongle Wi-Fi. Las instrucciones de configuración que puede encontrar en la [Spot Core Cockpit](https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check) página.

</li>

<li>

Calibración

Spot Check es una calibración completa del robot. También puede ejecutar la calibración de la cámara.

\- [run_spot_check](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164) ejecuta la rutina completa de verificación puntual. El robot debe estar sentado en un suelo plano cuando se inicia esta rutina. Esta rutina calibra las articulaciones del robot y verifica el estado de la cámara.

\- [run_camera_calibration](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204). Ejecute la rutina completa de calibración de la cámara para el robot. Esta función se bloquea hasta que se completa la calibración. Esta función debe llamarse una vez que el robot esté encendido y de espaldas al soporte de calibración a una distancia de 1 metro. El proceso de calibración tarda unos 20 minutos.

</li>

<li>

Conéctese a Spot desde un terminal o utilizando la función de ejecución remota de su ambiente de desarrollo.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Desarrolle y demuestre su solución al desafío.

Nosotros creamos [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para usted, por lo que no debe crearlo. Para la autenticación Spot, use el nombre de usuario y la contraseña de <code>/home/student/credentials</code> archivo. La dirección de Spot es <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__reg">

### ¿Estás listo para practicar?

Una vez que se sienta listo, puede comprar una sesión de práctica de 1 hora especificando sus credenciales de acceso (clave SSH) y la hora en que desea conectarse a Spot para resolver la tarea.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alquile un Spot" />

</section>