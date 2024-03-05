---
title: "Parada de emergencia, Inicialización, Control de posición del cuerpo"
description: Durante esta lección aprenderás cómo autorizarte como usuario, obtener control de potencia del motor y enviar comandos básicos a Spot.
metaOptions: [Aprende, Desarrollo de software para Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Durante esta lección, aprenderás cómo autorizarte como usuario, obtener control de potencia del motor y enviar comandos básicos a Spot.
</RoboAcademyText>

## Teoría

Como todos los robots serios, Boston Dynamics Spot tiene un mecanismo de protección — [Servicio de E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (Parada de Emergencia) que siempre debe estar activo durante la operación de Spot para evitar posibles daños físicos. Al activar E-Stop, se congelan instantáneamente todas las articulaciones (esto sucede sin apagar los motores si el robot estaba encendido).

En primer lugar, debemos tomar el control sobre el robot. Hay dos formas de hacerlo - *adquirir* o *tomar*. *Adquirir* significa pedir control de manera gentil, si alguien controla el robot ahora, tu solicitud será rechazada. De otra manera, *tomar* significa tomar el control de manera forzada, no importa si el operador actual existe.

Por lo tanto, para hacer algún movimiento, debes seguir el esquema:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Estados de Ejecución del Robot" imageClasses="mb"/>

Robot Execution States

En esta lección aprenderás cómo controlar la rotación del robot cambiando su *giro*, *balanceo* y *cabeceo*. En la imagen de abajo se muestra el sistema de coordenadas del marco del cuerpo:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Coordenadas de Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Los ángulos en un código se representan en radianes.
</RoboAcademyText>

Como resultado de la lección, dibujarás la primera letra de tu nombre en el aire con la cara de Spot. ¡Comencemos la configuración!

## Configurar Gitpod

Para esta lección, utilizaremos Gitpod, un IDE basado en la nube que te permite practicar sin instalar ningún software especial en tu computadora.

1. Regístrate en [Gitpod](https://gitpod.io/).
2. Ve a nuestro [entorno educativo de Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) y ábrelo en nuestro navegador. Verás la ventana con funciones típicas de un IDE. 
3. Haz clic en el icono de Menú, luego ve a Terminal y crea un nuevo terminal.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Copia y pega este comando:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

y presiona `Enter`.

1. Abre un nuevo terminal (ahora puedes hacerlo presionando el botón `+`) y prueba la conexión con el comando

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Deberías ver algo como esto:

<LessonCodeWrapper language="bash" codeClass="big-code">
gitpod /workspace/spot-edu-environment (main) $ ping6 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09
PING 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09(202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09) 56 data bytes
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=1 ttl=64 time=846 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=2 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=3 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=4 ttl=64 time=197 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=5 ttl=64 time=219 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=6 ttl=64 time=242 ms

</LessonCodeWrapper>

1. Antes de la hora programada te enviaremos la clave privada para establecer la conexión SSH.
2. Copia tu clave privada al archivo `id_ed25519`. Puedes encontrar el archivo en el explorador de la barra lateral de *stop-edu-enviroment*.
3. **Agrega una línea en blanco al final del** archivo `id_ed25519` ***, esto es necesario para que SSH funcione correctamente.*** Presiona `Ctrl+S` para guardar los cambios.

Si todo está bien, puedes comenzar a completar la lección editando `lesson1.py`

Para ejecutar el código, usa el comando:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Recuerda asegurarte de que nadie más esté ejecutando su programa en ese momento.
</RoboAcademyText>


## Programa la sesión de práctica

Utiliza el sitio web de programación de Spot para elegir el horario para tu sesión de práctica:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Práctica

Ahora haremos un script simple para Spot para dibujar en la pantalla usando los movimientos de su cabeza. 

<LessonCodeWrapper language="python" codeClass="big-code">
# Import Spot Control modules
import bosdyn.client
from bosdyn.client.robot_command import RobotCommandClient, blocking_stand
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.geometry import EulerZXY
import time
# ENTER YOUR AUTH DATA HERE
ROBOT_IP="192.168.50.3"
SPOT_USERNAME="student"
SPOT_PASSWORD=""
# Helpers to control camera drawing (you don't need to modify it)
import requests
VIDEOSERVER_URL="http://luke.merklebot:8000/"
VIDEOSERVER_TOKEN="1234"
def notify_start_line():
  requests.post(VIDEOSERVER_URL + "start_line", json={"token": VIDEOSERVER_TOKEN})
def notify_stop_line():
  requests.post(VIDEOSERVER_URL + "stop_line", json={"token": VIDEOSERVER_TOKEN})
def notify_clear_canvas():
    requests.post(VIDEOSERVER_URL + "clear_canvas", json={"token": VIDEOSERVER_TOKEN})
# Start with registering out SDK
sdk = bosdyn.client.create_standard_sdk('LessonOneClient')
# Create instance of robot and auth with credentials
robot = sdk.create_robot(ROBOT_IP)
robot.authenticate(SPOT_USERNAME, SPOT_PASSWORD)
# Create lease client and take exclusive control over Spot.  
lease_client = robot.ensure_client('lease')
lease = lease_client.take()
lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)
# Try to power on the robot
robot.power_on(timeout_sec=20)
if robot.is_powered_on():
    print("Powered On")
		# If everything went smooth, Spot face lights should turn green
else:
		# In case of some problems, e.g. somebody stole control over robot
    print("Failed")
    exit(0)
# Synchronize Spor inner time with ours - to avoid outdated commands
robot.time_sync.wait_for_sync()
# To execute robot movement, create command client through which orders are sent
command_client = robot.ensure_client(RobotCommandClient.default_service_name)
# Start movement with simple stand up
blocking_stand(command_client, timeout_sec=10)
# Rotate robot body:
#  1. Build command for body rotation. It’s not an easy task to control robot motion with commands on low level. 
#     Bosdyn Client allow as to use a shortcut - RobotCommandBuilder. It contains a number of predefined commands, 
#     you need just to choose one of your liking and insert parameters
footprint_R_body = EulerZXY(yaw=0.1, roll=0.1, pitch=0.1)
cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
#  2. Execute builded command
command_client.robot_command(cmd)
time.sleep(2)
# Return robot state back
command_client.robot_command(RobotCommandBuilder.synchro_stand_command(footprint_R_body=EulerZXY(yaw=0, roll=0, pitch=0)))
time.sleep(2)
# Change robot height
cmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)
command_client.robot_command(cmd)
# Now we are ready to draw letter. 
def draw_letter(command_client):
		# Choose points to draw (see the coords explanation bellow)
    points_xy_draw = (
        (125, 125),
        (375, 875),
        (500, 500),
        (250, 500),
        (500, 500),
        (625, 125),
    )
    for x, y in points_xy_draw:
        convert = lambda x: (x / 1000 - 0.5) * -1
        x, y = map(convert, (x, y))
        footprint_R_body = EulerZXY(
            yaw=x, 
            roll=0.0, 
            pitch=y,
        )
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
notify_clear_canvas()
notify_start_line()
draw_letter(command_client)
notify_stop_line()
# Turn off the robot gracefully
robot.power_off(cut_immediately=False)

</LessonCodeWrapper>

<RoboAcademyText fWeight="300" fSize="90%">
Si necesitamos mover la cabeza de Spot a algún punto en la cámara, debemos hacer algunos cálculos grandes con muchos parámetros no lineales, lo cual no es una tarea sencilla en absoluto. Pero podríamos decir que localmente, los ángulos de giro y cabeceo podrían usarse aproximadamente como coordenadas cartesianas con un coeficiente en una imagen.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Ahora puedes intentar ejecutar el script y ver el resultado. No olvides guardar tu código con Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### El video de Spot se puede encontrar aquí:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Desafío
Crea un script en Python que controle la posición del cuerpo del robot con una secuencia de movimientos:

1. Levantarse
2. Trazar tus iniciales con su cara (una letra, al menos 3 puntos)
3. Sentarse

## Resultados

Ahora sabes cómo:

- trabajar con el SDK de Spot
- construir un comando básico
- rotar el cuerpo del robot
- conectarte a Spot

E incluso dibujaste una letra. ¡Felicidades!


<RoboAcademyText fWeight="500">

Hemos recopilado un [rosbag](http://wiki.ros.org/rosbag) con los datos de las articulaciones de Spot, para que puedas visualizarlos (por ejemplo, con [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). El certificado se enviará a tu correo electrónico pronto.

</RoboAcademyText> 


## [Programa tu primera lección](https://meetings.hubspot.com/strelka)