---
title: Operar Boston Dynamics Spot
lastUpdate: Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)
description: Operar Boston Dynamics Spot
metaOptions: [Aprender]
defaultName: Operate Boston Dynamics Spot
---

Con este tutorial podrás ver en simulación lo que hizo el Spot real.

## Requisitos

* ROS melódico de escritorio (instrucciones de instalación [aquí](http://wiki.ros.org/melodic/Instalación/Ubuntu))

<br/>

## Instalar paquete

Crear espacio de trabajo y clonar paquetes:
<LessonCodeWrapper language="bash">
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/clearpathrobotics/spot_ros.git
git clone https://github.com/ros/geometry2 --branch 0.6.5
</LessonCodeWrapper>

Abrir el archivo `view_model.launch`

<LessonCodeWrapper language="bash" codeClass="big-code">
nano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch
</LessonCodeWrapper>



Y configurar el parámetro `use_sim_time` a `true`, el archivo debe verse así:

```xml
<launch>
  <param name="/use_sim_time" value="true"/>
  <include file="$(find spot_description)/launch/description.launch"/>

  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />

  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />
</launch>
```

Luego instalar dependencias:

<LessonCodeWrapper language="bash">
cd ~/catkin_ws/
rosdep install --from-paths src --ignore-src -y
catkin_make
</LessonCodeWrapper>

## Ejecutar

Obtener archivo de ejemplo rosbag:

<LessonCodeWrapper language="bash" codeClass="big-code">
wget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef
</LessonCodeWrapper>

Ejecutar rviz con el modelo Spot:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_model.launch
</LessonCodeWrapper>

Luego en una nueva terminal:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
roslaunch spot_viz view_robot.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot.jpg" alt="spot_viz"/>


Reproducir el archivo rosbag y verás al robot moverse:

<LessonCodeWrapper language="bash">
rosbag play spot_rosbag.bag
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="spot-try-it-out/spot2.jpg" alt="spot_viz"/>


¿Buscas posibilidades para operar Boston Dynamics Spot en la vida real? Tenemos un [curso y servicio de control remoto](/online-courses/boston-dynamics-course/) para ello.