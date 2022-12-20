---
title: "Lección #2, Parada de emergencia, inicialización, control de la posición del cuerpo"
description: During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.
lessonNumber: 2
courseID: 2
metaOptions: [Cursos online, Desarrollo de software de Boston Dynamics Spot]
---

<section class="container__narrow">

## Sobre qué se trata esto

Durante esta lección, aprenderá cómo autorizarse como usuario, controlar la potencia del motor y enviar comandos básicos a Spot.

Mire nuestro video introductorio si aún no lo ha visto: [https://youtu.be/qdk7BjWJpr](https://youtu.be/qdk7BjWJpr)

</section>


<section class="container__narrow">

## El reto

Cree un script de Python que controle la posición del cuerpo del robot. Ejecute su script en Spot para permitirle ejecutar una secuencia de movimientos:

<List type="numbers">
<li>Ponerse de pie</li>
<li>Traza tus iniciales con su cara (una letra, al menos 3 puntos)</li>
<li>Sentarse</li>
</List>

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

Leer [comprendiendo la programación de Spot](https://dev.bostondynamics.com/docs/python/understanding_spot_programming) en la documentación de Spot SDK. Debe comprender qué es E-Stop y cómo realizar la inicialización en su secuencia de comandos de Python para permitir que el robot ejecute comandos.

Puede encontrar información más detallada para esta lección en la secció [Servicios básicos](https://dev.bostondynamics.com/docs/concepts/base_services), [Geometría y marcos](https://dev.bostondynamics.com/docs/concepts/geometry_and_frames), [Servicios de robot](https://dev.bostondynamics.com/docs/concepts/robot_services) y [E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) en la documentación de Spot SDK. 


</li>

<li>

Conéctese a SpotCORE por SSH desde el terminal

<lessonCodeWrapper language="bash">ssh student@strelka.ygg.merklebot.com</lessonCodeWrapper>

</li>

<li>

Cree un script que pueda autenticarse en Spot, adquiera el control (arrendamiento) y encienda el robot.

Nosotros creamos [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para usted, por lo que no debe crearlo. Para la autenticación Spot, use el nombre de usuario y la contraseña de <code>/home/student/credentials</code> archivo. La dirección de Spot es <code>192.168.50.3</code>.

En la sección [Tomar posesión de Spot (arrendamiento)](https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases) use

<lessonCodeWrapper language="python">lease = lease_client.acquire()</lessonCodeWrapper>

antes

<lessonCodeWrapper language="python" codeClass="big-code">lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</lessonCodeWrapper>

</li>

<li>

Pruebe su secuencia de comandos con comandos stand-up y sit-down. Asegúrese de que el robot se mueva como se esperaba.

Asegúrese de ejecutar el script de Python3 con <code>pythoon3</code> comando. El comando <code>python</code> se refiere a un intérprete de Python 2 obsoleto.

</li>

<li>

Agregue control de posición del cuerpo a su secuencia de comandos. Experimente con <code>bosdyn.geometry.EulerZXY</code> el generador de argumentos de comando de robot para identificar qué parámetros de guiñada, balanceo y cabeceo necesita configurar para resolver el desafío. El rango de cabeceo, guiñada y balanceo es de -0,5 a 0,5.

</li>

</List>
</section>

<section class="container__narrow">

### ¿Estás listo para practicar?

Una vez que se sienta listo, puede comprar una sesión de práctica de 1 hora especificando sus credenciales de acceso (clave SSH) y la hora en que desea conectarse a Spot para resolver la tarea.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alquile un Spot" />

</section>