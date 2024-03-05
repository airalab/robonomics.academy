---
title: Conectar dron compatible con ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Conectar cualquier robot compatible con ROS bajo el control de la paracadena de Robonomics.
metaOptions: [Aprender]
defaultName: Connect ROS-compatible drone
---


## Parte 1. Lanzamiento por Transacción

**En este artículo mostraremos que con la ayuda de las herramientas de Robonomics puedes controlar cualquier dispositivo compatible con ROS. Encontraremos un paquete de simulación de dron aleatorio en la web y lo ajustaremos para que funcione con Robonomics.**
**Requisitos:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manual de instalación [aquí](http://wiki.ros.org/melodic/Instalación))

</li>

<li class="flex">

Nodo de Robonomics (archivo binario) (descarga la última versión [aquí](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

Todo el proceso de codificación de esta parte de la demostración se presenta en un video a continuación.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Encontrar una simulación
Vamos a navegar por la web. Busca en Google `simulador de dron ROS`. El primer enlace probablemente te mostrará la página `tum_simulator` en [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Está bastante desactualizado, así que es mejor encontrar un fork para nuestro sistema. Busca en Google `tum_simulator Ubuntu 18 Gazebo 9 fork`. El primer resultado es un repositorio de GitHub [repo](https://github.com/tahsinkose/sjtu-drone) con un paquete apropiado. Descárgalo

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

No olvides agregar el comando de origen a `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Ahora podemos ejecutar la simulación para ver qué necesitamos hacer para llevar el dron bajo control de la paracadena.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Inspeccionar los temas de ROS
Cuando la simulación esté en ejecución, en una nueva pestaña ejecuta el siguiente comando para ver la lista de temas utilizados por el dron:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Echemos un vistazo a `/cmd_vel`, `/drone/takeoff` y `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Como se puede ver, debería haber mensajes de los tipos `Twist` y `Empty`, que son partes de `std_msgs` y `geometry_msgs`, los usaremos en el controlador. Detén la simulación por un momento.

## 3. Descargar paquete de controlador
Globalmente, la principal diferencia del controlador de robot ROS casual es un bloque de código, que verifica todas las transacciones en la red usando [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). El paquete en sí está disponible en GitHub. Descárgalo y construye el espacio de trabajo:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Gestionar cuentas en DAPP
Como estamos probando, creemos un nodo de red local de robonomics con el archivo binario de robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**¡Importante!** Antes de los próximos lanzamientos es necesario eliminar un directorio `db` con

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Después de un lanzamiento exitoso, crea cuentas siguiendo este manual [aquí](https://wiki.robonomics.network/docs/create-account-in-dapp/). **¡No olvides guardar la semilla y la dirección de cada cuenta! Las necesitarás para las transacciones**. Agrega estas direcciones, semillas y la ruta al archivo binario de robonomics al archivo `config.config` en `robonomics_ws/src/robonomics_sample_controller/src`. Transfiere algo de dinero (unidades) a estas cuentas:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Lanzamiento del dron bajo control de la paracadena

Hasta ahora **lo único que se está ejecutando** debería ser el nodo local de robonomics. En una terminal separada lanza la simulación del dron:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Ejecuta el script:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Ahora puedes enviar una transacción que haga que el dron comience a volar. Para hacerlo, debes usar el subcomando `write` de Robonomics IO del archivo binario de robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Donde `<DIRECCIÓN_DEL_DRON>` y `<CLAVE_DEL_EMPLEADOR>` se reemplazan con las cadenas guardadas previamente.
Deberías ver el registro `"Despegando"` y el dron debería comenzar a volar:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

Así es como cualquier robot compatible con ROS puede ser controlado por el control de la paracadena de Robonomics.


##  Parte 2. Guardar Datos en la Cadena de Bloques

**En esta parte continuaremos usando las herramientas de Robonomics para hacer que un dron sea controlado por una paracadena. Esta vez agregaremos opciones de enviar datos a IPFS y almacenar el hash en la cadena. A continuación se muestra la instrucción y fragmentos de código. Requisitos:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (manual de instalación [aquí](http://wiki.ros.org/melodic/Instalación))
</li>

<li class="flex">

IPFS 0.4.22 (descarga desde [aquí](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) e instala)
</li>

<li class="flex">

Nodo de Robonomics (archivo binario) (descarga la última versión [aquí](https://github.com/airalab/robonomics/releases))
</li>

<li>Dependencias de Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

Todo el proceso de codificación de esta parte de la demostración se presenta en un video a continuación.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Agregar dependencias
Si lanzamos una simulación y miramos la lista de temas (ver parte 1), veremos que hay un tema que contiene datos de la cámara frontal y usa el tipo de mensaje `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Intentemos tomar una foto cada 1 segundo y después del vuelo publicar estas fotos en IPFS. Si has completado el primer tutorial, no necesitas descargar nada más. Es el script `drone_sample_controller_pictures.py`.

## 2. Gestionar cuentas en DAPP
Como se hizo en un tutorial anterior, crear un nodo de red local de robonomics con el archivo binario de robonomics:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**¡Importante!** Antes de los próximos lanzamientos es necesario eliminar un directorio `db` con

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Después de un lanzamiento exitoso, crea cuentas siguiendo este manual [aquí](https://wiki.robonomics.network/docs/create-account-in-dapp/). **¡No olvides guardar la semilla y la dirección de cada cuenta! Las necesitarás para las transacciones**. Agrega estas direcciones, semillas y la ruta al archivo binario de robonomics al archivo `config.config` en `robonomics_ws/src/robonomics_sample_controller/src`. Transfiere algo de dinero (unidades) a estas cuentas:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Lanzar
Hasta ahora **lo único que se está ejecutando** debería ser el nodo local de robonomics. En una terminal separada lanza la simulación del dron:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

En otro lanzamiento, iniciar el daemon de ipfs:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Ejecuta el script:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Ahora puedes enviar una transacción que haga que el dron comience a volar y tomar fotos. Para hacerlo, debes usar el subcomando `write` de Robonomics IO del archivo binario de robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Donde `<DIRECCIÓN_DEL_DRON>` y `<CLAVE_DEL_EMPLEADOR>` se reemplazan con las cadenas guardadas previamente.
Deberías ver el registro `"Despegando"` y el dron debería comenzar a volar y tomar fotos:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Más tarde, cuando el trabajo esté hecho, en el portal de Robonomics ve a `Desarrollador` -> `Estado de la cadena` y agrega un datalog `DRONE` usando el botón `“+”` con el datalog seleccionado como consulta de estado. El hash de IPFS de la telemetría se ha guardado en la cadena de bloques. Para ver los datos, simplemente copia el hash y agrégalo a la dirección local del [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>