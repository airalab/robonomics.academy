---
title: Керування роботом Бакстера
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Керування роботом Бакстера
metaOptions: [Вивчайте]
defaultName: Control Baxter robot
---
Приклад того, як це працює:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Вимоги:

<List>

<li class="flex">

ROS Melodic + Gazebo (інструкція з встановлення [тут][db2])  

</li>

<li>додаткові пакети:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effабоt-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS до 0.6.0 (завантажте з [тут][db3] та встановіть)

</li>

<li> пакети Python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Завантажте останній [реліз][db4] від вузла Robonomics тут (останній перевірений реліз v1.1)

</li>

<li>Розширення для браузера IPFS (не обов'язково)</li>

</List>

<br/>

## 0. встановити розширення CV Bridge для python3

<List>

<li> Створити робоче середовище catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Навчіть catkin встановлювати змінні cmake. Використовуйте вашу поточну версію `python`. Для мене це `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Клонувати джерело cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Знайдіть версію cv_bridge у вашому сховищі:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Перевірте правильну версію в git-репозиторії. У нашому випадку це 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Збірка:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Розширення середовища новим пакетом:

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

## 1. Завантажити пакети симуляції та котролера
Завантажити пакети:

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

Не забудьте додати команду source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Запустіть симуляцію
Давайте запустимо світ gazebo та поставимо нашого Бакстера в ньому:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Відкрийте ще одне вікно в терміналі:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Ви можете поставити деякі моделі перед нашим Бакстером. Це буде цікавіше.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Керуйте обліковими записами в DAPP

Оскільки ми тестуємо, давайте створимо локальну мережу робономіки з бінарним файлом робономіки. Перейдіть до папки з файлом робономіки та запустіть:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Перейдіть на [портал паралельної мережі Robonomics][db5] та перейдіть на локальний вузол

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Перейдіть до облікових записів та створіть облікові записи __Baxter__ та __Роботодавець__ (__Робот__ не обов'язковий)

__Важливо!__ Скопіюйте кожний **Мнемонічний** та **адресу** облікового запису (щоб скопіюват адресу, натисніть на значок облікового запису). **Мнемонічний** - це приватний ключ облікового запису.
Перекажіть деякі гроші (одиниці) на ці облікові записи:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Додайте **Мнемонічний** та **адресу** Бакстера до `config.yaml` в `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Запустіть симуляцію

У новому вікні запустіть:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Відкрийте окремий термінал та запустіть *пакет контролера*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Тепер ви можете відправити транзакцію, що запускає Бакстера на рух та збір даних. Для цього ви можете використовувати той самий [портал паралельної мережі Robonomics][db5]. Перейдіть до **Розробник->Екстранси** та виберіть обліковий запис роботодавця Бакстера, екстрансічний запуск, обліковий запис Бакстера як цільовий обліковий запис та `так` як параметр. Подайте екстрансічний запит.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Робот повинен почати рухатися. Він не прийматиме команди від інших облікових записів, а також команди з параметром `ні`.
Ви повинні побачити наступне:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

коли робота закінчена, перейдіть на портал Robonomics до `Розробник > Ланцюжковий стан`. Виберіть `datalog.datalogItem(AccountId,u64)` в **запиті стану**. Якщо ви хочете показати всі datalog, вимкніть `включити опцію` додайте перегляд повідомлення datalog Бакстера за допомогою кнопки "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Тепер хеш IPFS телеметрії та фотографій збережено в блокчейні. Щоб побачити дані, просто скопіюйте хеш та вставте його в рядок пошуку за URL-адресою: gateway.ipfs.io/ipfs/<br вставте свій хеш тут >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Клацніть __Переглянути на шлюзі__ і все!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Симуляція Бакстера v2.0

Приклад того, як це працює:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Вимоги:

<List>

<li class="flex">


ROS Melodic + Gazebo (інструкція з встановлення [тут][db2])  

</li>

<li>додаткові пакети:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS до 0.6.0 (завантажте з [тут][db3] та встановіть)

</li>

<li> пакети Python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Вузол Robonomics (бінарний файл) (завантажте останній [реліз][db4] тут)

</li>

<li class="flex">

Створіть облікові записи __Baxter__ та __Роботодавець__ на **Порталі Robonomics** (ви можете знайти посібник ["Створення облікового запису на Порталі Robonomics"][db8] тут).
</li>

<li>Розширення для браузера IPFS (не обов'язково)</li>

</List>

<br/>

## 0. встановити розширення CV Bridge для python3

<List>

<li> Створити робоче середовище catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Навчіть catkin встановлювати змінні cmake. Використовуйте вашу поточну версію `python`. Для мене це `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Клонувати джерело cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Знайдіть версію cv_bridge у вашому сховищі:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Перевірте правильну версію в git-репозиторії. У нашому випадку це 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Збірка:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Розширення середовища новим пакетом:

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

## 1. Завантажити пакети симуляції та котролера
Нам потрібно створити 2 робочі простори - один для основних пакетів Бакстера та інший для основної програми управління.
Перший робочий простір. Це основна програма управління. Вона буде працювати під python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Другий робочий простір. Тут будуть всі пакети Бакстера. Симуляція дуже стара, тому вона може працювати тільки під python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Ці пакети були створені для ROS indigo. Нам потрібно змінити деякі файли, щоб запустити їх на ROS melodic.
Ми використовуватимемо файли **patch**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

І давайте побудуємо всі наші пакети:  
Спочатку побудуйте пакети Бакстера

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Потім поверніться до першого робочого простору та побудуйте його також:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Не забудьте додати команду source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Запустіть симуляцію
### Давайте почнемо нашу симуляцію:
Спочатку перейдіть до `robot_ws` та скопіюйте та відредагуйте baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Знайдіть свою локальну IP-адресу за допомогою команди:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Відредагуйте наступні значення в `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - вкажіть свою локальну IP-адресу. Див. `ip a`
- ros_version - наприклад "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Запустіть сценарій оболонки бакстера з вказаною симуляцією:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Ви можете поставити деякі моделі перед нашим Бакстером. Це буде цікавіше.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Керуйте обліковими записами в DAPP

Оскільки ми тестуємо, давайте створимо локальну мережу робономіки з бінарним файлом робономіки. Перейдіть до папки з файлом робономіки та запустіть:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Перейдіть на [портал паралельної мережі Robonomics][db5] та перейдіть на локальний вузол

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Перейдіть до облікових записів та створіть облікові записи __Baxter__ та __Роботодавець__.

Ви можете знайти посібник "Створення облікового запису на Порталі Robonomics" [тут][db8]

__Важливо!__ Скопіюйте кожний **Мнемонічний** та **адресу** облікового запису (щоб скопіюват адресу, натисніть на значок облікового запису). **Мнемонічний** - це приватний ключ облікового запису.

Перекажіть деякі гроші (одиниці) на ці облікові записи:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Додайте **Мнемоніку** та **адресу** Бакстера до `config.yaml` в `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Запустіть симуляцію

У новому вікні запустіть:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Відкрийте окремий термінал та запустіть *пакет контролера*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Тепер ви можете відправити транзакцію, що запускає Бакстера на рух та збір даних. Для цього ви можете використовувати той самий портал [Портал Робономіки Парачейн][db5]. Перейдіть до **Розробник->Екстрансіки** та виберіть обліковий запис роботодавця Бакстера, екстрансік `launch`, обліковий запис Бакстера як цільовий обліковий запис та `yes` як параметр. Надішліть екстрансік.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Робот повинен почати рухатися. Він не прийматиме команди від інших облікових записів, а також команди з параметром `ні`.
Ви повинні побачити наступне:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Коли робота закінчиться, перейдіть на Портал Робономіки до `Розробник > Ланцюжок стану`. Виберіть `datalog.datalogItem(AccountId,u64)` в **запиті стану**. Якщо ви хочете показати всі datalog'и, то вимкніть `опцію включення`, додайте перегляд повідомлення datalog Бакстера, використовуючи кнопку "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Тепер IPFS-хеш телеметрії та фотографій збережено в блокчейні. Щоб побачити дані, просто скопіюйте хеш і вставте його в рядок пошуку за URL-адресою:  
#### gateway.ipfs.io/ipfs/<вставте ваш хеш тут>

Це все!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Встановлення>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>