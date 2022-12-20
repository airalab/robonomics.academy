---
title: "Lección #4, Encuentre y siga un objeto, navegue entre ellos"
description: En la tercera lección, aprenderá cómo encontrar objetos del mundo e ir hacia ellos.
lessonNumber: 4
courseID: 2
metaOptions: [Cursos online, Desarrollo de software de Boston Dynamics Spot]
---

<section class="container__narrow">

## Sobre qué se trata esto

En la tercera lección, aprenderá cómo encontrar objetos del mundo e ir hacia ellos.

</section>


<section class="container__narrow">

## El reto

Comienza con Spot en el lugar con algunos fiduciales (una marca en el objeto) alrededor. Crear y ejecutar el script de Python detecta al menos dos fiduciales y mueve Spot a cada uno de ellos dentro de 1 m.

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

Spot tiene el Servicio Mundial de Objetos que proporciona una forma de rastrear y almacenar objetos detectados en el mundo alrededor de Spot. Un objeto del mundo se considera un elemento de nivel superior en la escena que tiene cierta cantidad de información semántica asociada. Más información puedes encontrarla en la pestaña [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services#world-object) en la documentación de Spot SDK.

Usando el servicio mundial de objetos, puede encontrar fiduciales cerca del Spot.

Spot puede encontrar objetos alrededor más rápido si se pone de pie.

En la tarea, deberá encontrar las coordenadas de los fiduciales e ir a ellos. Ya sabes cómo moverte a las coordenadas locales desde la [Lección 2](/online-courses/boston-dynamics-course/3-remote-controlled-and-programmed-motion). El ejemplo de cómo encontrar un fiduciario y sus coordenadas está en ejemplo [fiducial_follow example](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py).

En su secuencia de comandos, en primer lugar, debe encontrar un objeto fiduciario con World Object Service:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects
</lessonCodeWrapper>


Luego obtenga coordenadas fiduciales en un marco visual:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial = fiducial_objects[0]
vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())
</lessonCodeWrapper>

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

<section class="container__narrow">

### ¿Estás listo para practicar?

Una vez que se sienta listo, puede comprar una sesión de práctica de 1 hora especificando sus credenciales de acceso (clave SSH) y la hora en que desea conectarse a Spot para resolver la tarea.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alquile un Spot" />

</section>