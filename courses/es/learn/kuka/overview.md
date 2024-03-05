---
title: Conectar manipulador Kuka
description: Conectar Manipulador
metaOptions: [Aprender]
defaultName: Conectar Kuka manipulator
---

El video con un ejemplo de trabajo se puede encontrar aquí:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Requisitos

<List>

<li class="flex">

ROS melodic, Gazebo (instrucciones de instalación [aquí](http://wiki.ros.org/melodic/Instalación/Ubuntu))
</li>

<li>Algunos paquetes adicionales

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(descargar desde [aquí](https://www.npackd.org/p/ipfs/0.4.22) e instalar)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Nodo Robonomics (archivo binario) (descargar la última versión [aquí](https://github.com/airalab/robonomics/releases))

</li>

<li>Extensión del navegador IPFS (no es necesaria)</li>

</List>

<br/>

***

<br/>

## Instalación
Instalar el manipulador Kuka y los paquetes de control

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Ejecutar el modelo de gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

En una nueva ventana

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Ejecutar robonomics
Ir a la carpeta con el archivo de robonomics y crear una red de robonomics local:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Ir a [Portal de Parachain Robonomics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) y cambiar a nodo local

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Luego ir a Cuentas y crear la cuenta `KUKA`. Guarda la clave mnemotécnica de la cuenta, la necesitarás más tarde. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Enviar algunas unidades a la nueva cuenta desde una de las cuentas predeterminadas.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Ejecutar ipfs
Ejecutar ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Ejecutar paquete de control
En el directorio de configuración en el paquete de control de kuka_control necesitas crear un archivo de configuración con estas líneas, donde `<tu_mnemotécnico>` es la semilla mnemotécnica guardada:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Ahora puedes ejecutar el script de control:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Enviando transacción
En [Portal de Parachain Robonomics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) ve a `Desarrollador/Extrínsecos`, cambia `extrínseco` a `lanzamiento`. Elige tu cuenta `KUKA` en `robot` y cambia `param` a `Sí`. Luego presiona `Enviar transacción`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

En la ventana con el paquete de control de kuka_control verás:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Luego ve a `Desarrollador/Estado de la Cadena` en el portal de Robonomics, selecciona `datalog` y `datalogItem((AccountId,u64)): RingBufferItem` en la consulta y agrega el datalog `KUKA` con el botón '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Ahora puedes encontrar la telemetría del robot en IPFS a través de este enlace con tu hash `https://gateway.ipfs.io/ipfs/<hash>`.

## Solución de problemas

Si `catkin_make` no funciona con el mensaje de que no puede encontrar MoveArm.h, intenta eliminar las últimas cuatro líneas en CMakeLists.txt en el paquete kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Haz `catkin_make` sin estas líneas, luego vuélvelas a colocar y haz `catkin_make` de nuevo.