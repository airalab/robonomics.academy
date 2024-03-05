---
title: Подключение беспилотного летательного аппарата
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Подключить беспилотный воздушный аппарат
metaOptions: [Учиться]
defaultName: Подключить unmanned aerial vehicle
---

**Дрон начинает движение после транзакции и сохраняет файл с координатами в IPFS. Управляющий скрипт основан на [демонстрационном скрипте GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Требования

<List>

<li> зависимости для управления:

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

ROS Melodic + Gazebo [руководство по установке](http://wiki.ros.org/melodic/Установка)
</li>

<li>дополнительные пакеты:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Версия IPFS 0.4.22

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

Узел Robonomics (бинарный файл) (скачать последний релиз [здесь](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Настройка окружения

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

Изменение вашего файла `.bashrc`, добавление следующих строк внизу:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Установка пакета управления
В новом терминале:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Сеть Robonomics

Чтобы создать локальную сеть Robonomics, перейдите в папку с бинарным файлом robonomic и запустите:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Добавьте путь к robonomic в `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Перейдите на [портал Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) и переключитесь на локальный узел.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Перейдите в **Аккаунты** и создайте аккаунты **DRONE** и **EMPLOYER**. Сохраните имена аккаунтов, ключи и путь к **robonomics** в `~/catkin_ws/src/drone_sim/src/config.py`. Переведите некоторые деньги на счета.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Запуск симуляции
Запустите демон IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

В другом терминале запустите симуляцию:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Ждать до "Ожидание оплаты" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Чтобы отправить транзакцию, запустите в другом окне:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - где **<drone_address>** и **<employer_key>** должны быть заменены соответственно на строки из `config.py`.

После того как данные были загружены в IPFS, перейдите в **Chain State** на [портале Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Выберите **datalog** в запросе и добавьте DRONE datalog, используя кнопку `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Вы можете найти телеметрию дрона, запустив `https://gateway.ipfs.io/ipfs/<hash>` и вставив хэш из вышеуказанного.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Важно удалить каталог `db` перед следующими запусками  
` rm -rf ~/.local/share/robonomics/chains/dev/db`