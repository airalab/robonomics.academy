---
title: Controlar el robot Baxter
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Controlar el robot Baxter
metaOptions: [Aprender]
defaultName: Control Baxter robot
---
Example of how it woks:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Requisitos:

<List>

<li class="flex">

ROS Melodic + Gazebo (manual de instalación [aquí][db2])  

</li>

<li>paquetes adicionales:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effot-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS hasta 0.6.0 (descargar desde [aquí][db3] e instalar)

</li>

<li> paquetes de python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Descargar el último [lanzamiento][db4] del nodo Robonomics aquí (último lanzamiento probado v1.1)

</li>

<li>Extensión del navegador IPFS (no es necesario)</li>

</List>

<br/>

## 0. install CV Bridge extension fo python3

<List>

<li> Crear espacio de trabajo de catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instruir a catkin para establecer variables de cmake. Utilice su versión actual de `python`. Para mí, es `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clonar src de cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Encontrar la versión de cv_bridge en su repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Verificar la versión correcta en el repositorio de git. En nuestro caso es 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Construir:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Extender el entorno con el nuevo paquete:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Probar:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. Descargar paquetes de simulación y controlador
Descargar paquetes:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

No olvides agregar el comando source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Iniciar la simulación
Vamos a iniciar el mundo de gazebo y poner nuestro baxter en él:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Abrir una ventana más en la terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Puedes poner algunos modelos frente a nuestro baxter. Será más interesante.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gestionar cuentas en DAPP

Dado que estamos probando, creemos una red local de robonomics con el archivo binario de robonomics. Ve a la carpeta con el archivo de robonomics y ejecuta:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Ir al [portal de Parachain de Robonomics][db5] y cambiar a nodo local

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Ir a Cuentas y crear cuentas de __Baxter__ y __Empleador__ (no es necesario __Robot__)

__¡Importante!__ Copiar el **Mnemónico** y la **dirección** de cada cuenta (para copiar la dirección haz clic en el icono de la cuenta). El **Mnemónico** es la clave privada de la cuenta.
Transferir algo de dinero (unidades) a estas cuentas:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Agregar el **Mnemónico** y la **dirección** de Baxter a `config.yaml` en `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Iniciar la simulación

En una nueva ventana ejecutar:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Abrir una terminal separada y iniciar el *paquete de control*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Ahora puedes enviar una transacción que haga que Baxter comience a moverse y recopilar datos. Para hacerlo, puedes usar el mismo [portal de Parachain de Robonomics][db5]. Ve a **Desarrollador->Extrínsecos** y selecciona la cuenta del empleador de Baxter, el extrínseco `launch`, la cuenta de Baxter como cuenta objetivo y `sí` como parámetro. Enviar el extrínseco.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

El robot debería comenzar a moverse. No aceptará comandos de otras cuentas ni comandos con parámetro `no`.
Deberías ver lo siguiente:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

cuando el trabajo haya terminado ve al Portal de Robonomics a `Desarrollador > Estado de la cadena`. Elige `datalog.datalogItem(AccountId,u64)` en **consulta de estado**. Si deseas mostrar todos los datalogs, entonces desactiva la opción `incluir` y agrega ver el mensaje de datalog de Baxter usando el botón "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Ahora el hash de IPFS de la telemetría y las fotos está guardado en la cadena de bloques. Para ver los datos simplemente copia el hash e insértalo en la barra de búsqueda con la URL: gateway.ipfs.io/ipfs/<br poner tu hash aquí >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Haz clic en __Ver en el Gateway__ ¡y eso es todo!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Simulación de Baxter v2.0

Ejemplo de cómo funciona:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Requisitos:

<List>

<li class="flex">


ROS Melodic + Gazebo (manual de instalación [aquí][db2])  

</li>

<li>paquetes adicionales:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS hasta 0.6.0 (descargar desde [aquí][db3] e instalar)

</li>

<li> paquetes de python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Nodo de Robonomics (archivo binario) (descargar el último [lanzamiento][db4] aquí)

</li>

<li class="flex">

Crear cuentas de __Baxter__ y __Empleador__ en el **Portal de Robonomics** (puedes encontrar el tutorial "Crear una cuenta en el Portal de Robonomics" [aquí][db8]).
</li>

<li>Extensión del navegador IPFS (no es necesario)</li>

</List>

<br/>

## 0. instalar la extensión CV Bridge para python3

<List>

<li> Crear espacio de trabajo de catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instruir a catkin para establecer variables de cmake. Utilice su versión actual de `python`. Para mí, es `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clonar src de cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Encontrar la versión de cv_bridge en su repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Verificar la versión correcta en el repositorio de git. En nuestro caso es 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Construir:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Extender el entorno con el nuevo paquete:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Probar:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. Descargar paquetes de simulación y controlador
Necesitaremos crear 2 espacios de trabajo - uno para los paquetes principales de Baxter y otro para el programa de control principal.
Primer espacio de trabajo. Es el programa de control principal. Se ejecutará bajo python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Segundo espacio de trabajo. Allí estarán todos los paquetes de Baxter. La simulación es muy antigua, por lo que solo se puede ejecutar bajo python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Estos paquetes fueron creados para ROS indigo. Debemos cambiar algunos archivos para ejecutarlos en ROS melodic.
Usaremos archivos de **parche**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

Y construyamos todos nuestros paquetes:  
Primero construir los paquetes de Baxter

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Luego regresar al primer espacio de trabajo y construirlo también:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

No olvides agregar el comando source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Iniciar la simulación
### Vamos a iniciar nuestra simulación:
Primero ve a `robot_ws` y copia y edita baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Encuentra tu dirección IP local con el comando:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Edita los siguientes valores en `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- tu_ip - pon tu dirección IP local. Ver `ip a`
- versión de ros - por ejemplo "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Ejecutar el script de shell de baxter con sim especificado:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Puedes poner algunos modelos frente a nuestro baxter. Será más interesante.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gestionar cuentas en DAPP

Dado que estamos probando, creemos una red local de robonomics con el archivo binario de robonomics. Ve a la carpeta con el archivo de robonomics y ejecuta:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Ir al [portal de Parachain de Robonomics][db5] y cambiar a nodo local

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Ir a Cuentas y crear cuentas de __Baxter__ y __Empleador__.

Puedes encontrar el manual "Crear una cuenta en el Portal de Robonomics" [aquí][db8]

__¡Importante!__ Copiar el **Mnemónico** y la **dirección** de cada cuenta (para copiar la dirección haz clic en el icono de la cuenta). El **Mnemónico** es la clave privada de la cuenta.

Transferir algo de dinero (unidades) a estas cuentas:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Agrega el **mnemónico** y la **dirección** de Baxter a `config.yaml` en `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Iniciar la simulación

En una nueva ventana ejecutar:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Abrir una terminal separada y iniciar el *paquete de control*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Ahora puedes enviar una transacción que haga que Baxter comience a moverse y recopilar datos. Para hacerlo, puedes usar el mismo portal [Portal de Parachain de Robonomics][db5]. Ve a **Desarrollador->Extrínsecos** y selecciona la cuenta del empleador de Baxter, el extrínseco `lanzamiento`, la cuenta de Baxter como cuenta de destino y `sí` como parámetro. Envía el extrínseco.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

El robot debería comenzar a moverse. No aceptará comandos de otras cuentas ni comandos con parámetro `no`.
Deberías ver lo siguiente:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Cuando el trabajo haya terminado, ve al Portal de Robonomics a `Desarrollador > Estado de la cadena`. Elige `datalog.datalogItem(AccountId,u64)` en **consulta de estado**. Si deseas mostrar todos los datalogs, entonces desactiva la opción `incluir` y agrega la vista del mensaje de datalog de Baxter usando el botón "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Ahora el hash de IPFS de la telemetría y las fotos se guarda en la cadena de bloques. Para ver los datos simplemente copia el hash e insértalo en la barra de búsqueda con la URL:  
#### gateway.ipfs.io/ipfs/< coloca tu hash aquí>

¡Eso es todo!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Instalación>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>