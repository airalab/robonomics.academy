---
title: "Lección #3, Movimiento programado y controlado a distancia"
description: En la segunda lección, aprenderá a usar los servicios de Spot Command y caminar con Spot.
lessonNumber: 3
courseID: 2
metaOptions: [Cursos online, Desarrollo de software de Boston Dynamics Spot]
---

<section class="container__reg">

## Sobre qué se trata esto

En la segunda lección, aprenderá a usar los servicios de Spot Command y caminar con Spot.

</section>


<section class="container__reg">

## El reto

Tienes una lista de puntos con sus coordenadas locales en el <code>/home/student/lessons</code> directorio.

La lista de movimientos:

<List>
<li>Darse la vuelta a sí mismo</li>
<li>Asentir</li>
<li>Para cambiar la postura de las piernas del robot</li>
<li>TPara ir de lado al siguiente punto</li>
<li>Acostarse en posición de cambio de batería (este comando se debe realizar en último lugar porque corta la alimentación a los motores)</li>
</List>

<br>

Cree y ejecute un script de Python que implemente el comportamiento descrito. Puede encontrar las coordenadas locales de Spot con (antes de que necesite crear <code>state_client</code>, puedes encontrar información al respecto en [Comprensión de la programación Spot](https://dev.bostondynamics.com/docs/python/understanding_spot_programming)):


<lessonCodeWrapper language="python" codeClass="big-code">
from bosdyn.client.frame_helpers import get_vision_tform_body
get_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot
</lessonCodeWrapper>

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

Puedes controlar Spot con <code>Robot Command Service</code>. En primer lugar, debe crear un comando para suministrarlo al servicio de comando. Spot SDK tiene una clase <code>RobotCommandBuilder</code> para esto. 

La lista completa de métodos y sus descripciones las puede encontrar [aqui](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593). En esta lección, es posible que necesite usar:

\- Stand Command 

<lessonCodeWrapper language="python" codeClass="big-code">
def stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())
</lessonCodeWrapper>

\- Go to point 

<lessonCodeWrapper language="python" codeClass="big-code">
def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, build_on_command=None)
</lessonCodeWrapper>

Verifique el uso [aqui](https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py).

¡Atención! El ejemplo considera el movimiento del robot en relación con la posición actual. En su caso debe especificar los movimientos relativos al punto donde se encendió el robot. Eso significa que puede establecer <code>goal_x</code> y <code>goal_y</code> como valores en la tarea.

\- Comando de velocidad

<lessonCodeWrapper language="python" codeClass="big-code">
def synchro_velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, frame_name=BODY_FRAME_NAME
</lessonCodeWrapper>

\- Comando de posicionamiento

<lessonCodeWrapper language="python" codeClass="big-code">
def stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy=0.05, params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY(), build_on_command=None)
</lessonCodeWrapper>

El ejemplo de uso esta [aqui](https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py).


\- Posicionamiento para cambiar bateria

<code>def battery_change_pose_command(dir_hint=1)</code>

Ejemplo de comando de velocidad de construcción y funcionamiento:

<lessonCodeWrapper language="python" codeClass="big-code">
from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder
import time

command_client=robot.ensure_client(RobotCommandClient.default_service_name)
cmd=RobotCommandBuilder.velocity_command(0.5, 0, 0.5)
command_client.robot_command(cmd, end_time_secs=time.time() + 2)
</lessonCodeWrapper>

</li>

<li>
Conéctese a Spot desde una terminal o utilizando la función de ejecución remota de su ambiente de desarrollo.
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