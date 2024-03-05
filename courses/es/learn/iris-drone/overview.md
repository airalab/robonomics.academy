---
title: Conectar vehículo aéreo no tripulado
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Conectar vehículo aéreo no tripulado
metaOptions: [Aprender]
defaultName: Connect unmanned aerial vehicle
---

**El dron comienza a moverse después de la transacción y almacena el archivo con las coordenadas en IPFS. El script de control se basa en el [script de demostración de GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Requisitos

<List>

<li> dependencias para el control:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [tutorial de instalación](http://wiki.ros.org/melodic/Instalación)
</li>

<li>paquetes adicionales:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Versión de IPFS 0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Nodo de Robonomics (archivo binario) (descargar la última versión [aquí](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Configuración del entorno

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

Modifique su archivo `.bashrc`, agregando las siguientes líneas al final:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Instalación del paquete de control
En una nueva Terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Red de Robonomics

Para crear una red de robonomics local, vaya a la carpeta con el archivo binario de robonomics y ejecute:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Agregue la ruta de robonomics a `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Vaya al [portal de Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) y cambie a nodo local.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Vaya a **Cuentas** y cree cuentas **DRONE** y **EMPLEADOR**. Guarde los nombres de cuenta, las claves y la ruta de **robonomics** en `~/catkin_ws/src/drone_sim/src/config.py`. Transfiera algo de dinero a las cuentas.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Ejecución de la simulación
Ejecute el daemon de IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

En otra terminal, inicie la simulación:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Esperando hasta "Esperando pago" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Para enviar una transacción, ejecute en otra ventana:
`echo "ON" | ./robonomics io write launch -r <dirección_del_dron> -s <clave_del_empleador>` - donde **<dirección_del_dron>** y **<clave_del_empleador>** deben ser reemplazados con las cadenas de `config.py` correspondientemente.

Después de que los datos se hayan enviado a IPFS, vaya al **Estado de la Cadena** en el [portal de Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Seleccione **datalog** en la consulta y agregue el datalog de DRONE usando el botón `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Puede encontrar la telemetría del dron ejecutando `https://gateway.ipfs.io/ipfs/<hash>` insertando el hash anterior.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Es importante eliminar el directorio `db` antes de los próximos lanzamientos  
` rm -rf ~/.local/share/robonomics/chains/dev/db`