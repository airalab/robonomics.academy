---
title: Conectar el Rover Curiosity de Marte
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Conectar el rover Curiosity de Marte bajo el control de la paracaídas de Robonomics.
metaOptions: [Aprender]
defaultName: Connect Mars Curiosity Rover
---

**Veamos cómo el control de la paracaídas de Robonomics permite que el rover Curiosity de Marte se mueva. Requisitos:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (manual de instalación [aquí](http://wiki.ros.org/melodic/Instalación))

</li>


<li>paquetes adicionales:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS hasta [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Extensión complementaria de IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Nodo de Robonomics (archivo binario) (descargue la última versión [aquí](https://github.com/airalab/robonomics/releases). Este tutorial se probó bien en la versión 1.1)

</li>

</List>

<br/>

Aquí está el video que muestra el lanzamiento exitoso:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Configurar una simulación

Descargar el paquete del rover Curiosity:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Necesitamos ajustar las condiciones iniciales para que nuestro rover aparezca suavemente:

<List>

<li>Ir a

`src/master/curiosity_mars_rover_description/worlds` y cambiar la línea 14 del archivo` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Ir a

`src/master/curiosity_mars_rover_description/launch` y cambiar la línea 4 del archivo `mars_curiosity_world.launch` a 
`<arg name="paused" default="false"/>`

No olvides agregar el comando fuente a `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Reiniciar la consola y lanzar la simulación:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Nota: si la imagen está oscura, por ejemplo, sombreada, cambie `Cámara` a `Ortográfica` en la barra de herramientas de Gazebo.
La simulación se puede cerrar por un tiempo.

------------

<br/>

### 2. Descargar el paquete del controlador de Robonomics
Para descargar un paquete de controlador para el Rover escriba en la terminal:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. Administrar cuentas en DAPP
Dado que estamos probando, creemos una red de robonomics local con el archivo binario de robonomics:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Ejecutarning node"/>


Ir a [portal de Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) y cambiar a nodo local 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Ir a Cuentas y crear las cuentas **CURIOSITY** y **EMPLEADOR**.

**¡Importante**! Copie la dirección de cada cuenta (para copiar la dirección haga clic en el icono de la cuenta) y la **semilla mnemotécnica** de la cuenta de Curiosity (obtenida al crear la cuenta)
Transferir algo de dinero (unidades) a estas cuentas. Puede leer más sobre las cuentas en Robonomics [aquí](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Agregue estas direcciones, semilla y dirección del nodo (por defecto `ws://127.0.0.1:9944` para el nodo de desarrollador) en `config.config` en `robonomics_ws/src/robonomics_sample_controller/src`. Sin comillas.

------------

<br/>

### 4. Iniciar Robonomics

Antes de continuar, asegúrese de haber instalado la [Extensión de Compañero de IPFS](https://github.com/ipfs/ipfs-companion).

En una terminal separada inicie IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #solo necesita hacer esto una vez por instalación de IPFS
ipfs daemon
</LessonCodeWrapper>

En otra terminal separada inicie la simulación de Curiosity si no está en vivo:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Espere hasta que se quede quieto

En otra terminal inicie el controlador:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Ahora puede enviar una transacción que haga que el Rover comience a moverse y a recopilar datos. Para hacerlo, puede usar el mismo [portal de la Paracaídas de Robonomics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Ir a `Desarrollador->Extrínsecos` y seleccionar la cuenta empleadora de Curiosity, el extrínseco `lanzamiento`, la cuenta de destino de Curiosity y `sí` como parámetro.
Enviar el extrínseco.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

El robot debería comenzar a moverse. No aceptará comandos de otras cuentas ni comandos con parámetro `no`. El rover se moverá y recopilará datos durante aproximadamente un minuto.
Más tarde, cuando se haya completado el trabajo:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


En el portal de Robonomics vaya a `Desarrollador -> Estado de la cadena` y obtenga un datalog de `CURIOSITY` usando el botón “+” con `datalog -> RingBufferItem` seleccionado como consulta: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Ahora el hash de IPFS de la telemetría está guardado en la cadena de bloques. Para ver los datos simplemente copie el hash y encuéntralo en una puerta de enlace:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


¡Esta telemetría se mantiene en un almacenamiento descentralizado, y su hash está almacenado en una cadena de bloques!
