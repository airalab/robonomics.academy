---
title: Управление роботом Бакстер
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Управление роботом Бакстер
metaOptions: [Учиться]
defaultName: Control Baxter robot
---
Пример того, как это работает:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Требования:

<List>

<li class="flex">

ROS Melodic + Gazebo (руководство по установке здесь)  

</li>

<li>дополнительные пакеты:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effилиt-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS до 0.6.0 (скачать отсюда и установить)

</li>

<li> пакеты python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Скачать последний релиз узла Robonomics здесь (последний протестированный релиз v1.1)

</li>

<li>Расширение браузера IPFS (не обязательно)</li>

</List>

<br/>

## 0. установите расширение CV Bridge для python3.

<List>

<li> Создать рабочее пространство catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Инструкция catkin по установке переменных cmake. Используйте вашу текущую версию `python`. Для меня это `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Клонировать исходный код cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Найти версию cv_bridge в вашем репозитории:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Переключиться на правильную версию в git-репозитории. В нашем случае это 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Сборка:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Расширение среды новым пакетом:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Тест:

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

## 1. Скачать пакеты симуляции и контроллера
Скачать пакеты:

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

Не забудьте добавить команду source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Запустить симуляцию
Давайте запустим мир gazebo и поместим нашего бакстера в него:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Откройте еще одно окно в терминале:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Вы можете поставить некоторые модели перед нашим бакстером. Это будет более интересно.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Управление учетными записями в DAPP

Поскольку мы проводим тестирование, давайте создадим локальную сеть робономики с помощью двоичного файла робономики. Перейдите в папку с файлом робономики и запустите:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Перейдите на портал Робономики Парачейн и переключитесь на локальный узел

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Перейдите в раздел Учетные записи и создайте учетные записи __Baxter__ и __Работодатель__ (__Робот__ не обязателен)

__Важно!__ Скопируйте каждый **Мнемонический** и **адрес** учетной записи (для копирования адреса щелкните по значку учетной записи). **Мнемонический** - это закрытый ключ для учетной записи.
Переведите немного денег (единиц) на эти учетные записи:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Добавьте **Мнемонический** и **адрес** Бакстера в `config.yaml` в `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Запустить симуляцию

Запустите в новом окне:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Откройте отдельный терминал и запустите *пакет контроллера*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Теперь вы можете отправить транзакцию, запускающую бакстер на движение и сбор данных. Для этого вы можете использовать тот же портал Робономики Парачейн. Перейдите в **Разработчик->Экстрансики** и выберите учетную запись работодателя Бакстера, экстрансик `launch`, учетную запись Бакстера в качестве целевой учетной записи и `yes` в качестве параметра. Отправьте экстрансик.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Робот должен начать двигаться. Он не будет принимать команды от других учетных записей и команды с параметром `no`.
Вы должны увидеть следующее:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

когда работа закончится, перейдите на портал Робономики в `Разработчик > Состояние цепи`. Выберите `datalog.datalogItem(AccountId,u64)` в **запросе состояния**. Если вы хотите показать все данные журнала, то отключите `включить опцию`, добавьте просмотр сообщения журнала Бакстера, используя кнопку "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Теперь хэш IPFS телеметрии и фотографий сохранен в блокчейне. Чтобы увидеть данные, просто скопируйте хэш и вставьте его в строку поиска с URL: gateway.ipfs.io/ipfs/<вставьте ваш хэш здесь >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Нажмите  __Просмотр на шлюзе__ и это все!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Симуляция Бакстера v2.0

Пример работы:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Требования:

<List>

<li class="flex">


ROS Melodic + Gazebo (руководство по установке здесь)  

</li>

<li>дополнительные пакеты:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS до 0.6.0 (скачать отсюда и установить)

</li>

<li> пакеты python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Узел Robonomics (двоичный файл) (скачать последний релиз здесь)

</li>

<li class="flex">

Создайте учетные записи __Baxter__ и __Работодатель__ на **Портале Робономики** (вы можете найти учебник "Создать учетную запись на Портале Робономики" здесь).
</li>

<li>Расширение браузера IPFS (не обязательно)</li>

</List>

<br/>

## 0. установить расширение CV Bridge для python3

<List>

<li> Создать рабочее пространство catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Инструкция catkin по установке переменных cmake. Используйте вашу текущую версию `python`. Для меня это `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Клонировать исходный код cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Найти версию cv_bridge в вашем репозитории:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Переключиться на правильную версию в git-репозитории. В нашем случае это 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Сборка:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Расширение среды новым пакетом:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Тест:

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

## 1. Скачать пакеты симуляции и контроллера
Нам нужно создать 2 рабочих пространства - одно для основных пакетов Бакстера и другое для основной программы управления.
Первое рабочее пространство. Это основная программа управления. Она будет работать под python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Второе рабочее пространство. Здесь будут все пакеты Бакстера. Симуляция очень старая, поэтому она может работать только под python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Эти пакеты были созданы для ROS indigo. Нам нужно изменить некоторые файлы, чтобы запустить их на ROS melodic.
Мы будем использовать файлы **patch**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

И давайте соберем все наши пакеты:  
Сначала соберите пакеты Бакстера

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Затем вернитесь в первое рабочее пространство и также соберите его:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Не забудьте добавить команду source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Запустить симуляцию
### Давайте начнем нашу симуляцию:
Сначала перейдите в `robot_ws` и скопируйте и отредактируйте baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Найдите свой локальный IP-адрес с помощью команды:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Отредактируйте следующие значения в `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - введите свой локальный IP-адрес. См. `ip a`
- ros_version - например "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Запустите скрипт оболочки бакстера с указанием sim:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Вы можете поставить некоторые модели перед нашим бакстером. Это будет более интересно.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Управление учетными записями в DAPP

Поскольку мы проводим тестирование, давайте создадим локальную сеть робономики с помощью двоичного файла робономики. Перейдите в папку с файлом робономики и запустите:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Перейдите на портал Робономики Парачейн и переключитесь на локальный узел

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Перейдите в Учетные записи и создайте учетные записи __Baxter__ и __Работодатель__.

Вы можете найти руководство "Создать учетную запись на Портале Робономики" здесь

__Важно!__ Скопируйте каждый **Мнемонический** и **адрес** учетной записи (для копирования адреса щелкните по значку учетной записи). **Мнемонический** - это закрытый ключ для учетной записи.

Переведите немного денег (единиц) на эти учетные записи:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Добавьте **мнемонику** и **адрес** Бакстера в `config.yaml` в `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Запустить симуляцию

Запустите в новом окне:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Откройте отдельный терминал и запустите *пакет контроллера*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Теперь вы можете отправить транзакцию, запускающую движение Бакстера и сбор данных. Для этого вы можете использовать тот же портал [Robonomics Parachain portal][db5]. Перейдите в **Разработчик->Экстрансиксы** и выберите учетную запись работодателя Бакстера, экстрансикс `launch`, учетную запись Бакстера в качестве целевой учетной записи и `yes` в качестве параметра. Отправьте экстрансикс.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Робот должен начать двигаться. Он не будет принимать команды от других учетных записей и команды с параметром `no`.
Вы должны увидеть следующее:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Когда работа закончится, перейдите на портал Robonomics в `Разработчик > Состояние цепи`. Выберите `datalog.datalogItem(AccountId,u64)` в **запросе состояния**. Если вы хотите показать все данные журнала, то отключите `включить опцию`, добавьте просмотр сообщения журнала Бакстера, используя кнопку "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Теперь IPFS-хеш телеметрии и фотографий сохранен в блокчейне. Чтобы увидеть данные, просто скопируйте хеш и вставьте его в строку поиска с URL:  
#### gateway.ipfs.io/ipfs/<вставьте ваш хэш здесь>

Вот и все!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Установка>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>