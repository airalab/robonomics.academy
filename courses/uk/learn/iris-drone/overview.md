---
title: Підключення безпілотного літального апарату
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Підключити безпілотний літальний апарат
metaOptions: [Вчитися]
defaultName: Підключіть unmanned aerial vehicle
---

**Дрон починає рухатися після трансакції та зберігає файл з координатами в IPFS. Скрипт управління базується на [демонстраційному скрипті GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Вимоги

<List>

<li> залежності для управління:

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

ROS Melodic + Gazebo [інструкція з встановлення](http://wiki.ros.org/melodic/Встановлення)
</li>

<li>додаткові пакети:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Версія IPFS 0.4.22

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

Вузол Robonomics (бінарний файл) (завантажте останню версію [тут](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Налаштування середовища

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

Зміна вашого файлу `.bashrc`, додавання наступних рядків в кінець:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Встановлення пакету управління
У новому терміналі:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Мережа Robonomics

Щоб створити локальну мережу Robonomics, перейдіть до папки з бінарним файлом robonomic та запустіть:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Додайте шлях до robonomic в `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Перейдіть на портал [Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) та перейдіть на локальний вузол.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Перейдіть до **Облікові записи** та створіть облікові записи **DRONE** та **EMPLOYER**. Збережіть назви облікових записів та ключі та шлях до **robonomics** в `~/catkin_ws/src/drone_sim/src/config.py`. Перекажіть гроші на облікові записи.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Запуск симуляції
Запустіть демон IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

У іншому терміналі запустіть симуляцію:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Чекаючи до "Очікування оплати" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Щоб відправити трансакцію, запустіть у іншому вікні:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - де **<drone_address>** та **<employer_key>** повинні бути замінені на рядки з `config.py` відповідно.

Після того, як дані були завантажені в IPFS, перейдіть до **Стану Ланцюжка** на порталі [Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Виберіть **datalog** в запиті та додайте datalog DRONE, використовуючи кнопку `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Ви можете знайти телеметрію дрона, запустивши `https://gateway.ipfs.io/ipfs/<hash>` та вставивши хеш зверху.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Важливо видалити каталог `db` перед наступними запусками  
` rm -rf ~/.local/share/robonomics/chains/dev/db`