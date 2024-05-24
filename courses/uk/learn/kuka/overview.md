---
title: Підключіть маніпулятор Kuka
description: Підключіть маніпулятор
metaOptions: [Вчитися]
defaultName:  Connect Kuka manipulator
---

Відео з прикладом роботи можна знайти тут:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Вимоги

<List>

<li class="flex">

ROS мелодійний, Gazebo (інструкція з встановлення [тут](http://wiki.ros.org/melodic/Встановлення/Ubuntu))
</li>

<li>Деякі додаткові пакети

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(завантажте з [тут](https://www.npackd.org/p/ipfs/0.4.22) та встановіть)

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

Вузол Robonomics (бінарний файл) (завантажте останню версію [тут](https://github.com/airalab/robonomics/releases))

</li>

<li>Розширення браузера IPFS (не обов'язково)</li>

</List>

<br/>

***

<br/>

## Інсталяція
Встановіть маніпулятор Kuka та пакети управління

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Запуск моделі gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

У новому вікні

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Запуск robonomics
Перейдіть до папки з файлом robonomics та створіть локальну мережу robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Перейдіть до [порталу Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) та перейдіть на локальний вузо

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Потім перейдіть до Рахунки та створіть рахунок `KUKA`. Збережіть мнемонічний ключ рахунку, ви його знадобитеся пізніше. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Надішліть деякі одиниці на новий рахунок з одного з рахунків за замовчуванням.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Запуск ipfs
Запустіть ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Запуск пакету управління
У каталозі конфігурації пакету управління kuka_control вам потрібно створити файл конфігурації з цими рядками, де `<your_mnemonic>` - це збережений мнемонічний ключ:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Тепер ви можете запустити сценарій управління:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Надсилання транзакції
На [порталі Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) перейдіть до `Розробник/Екстрактори`, змініть `екстрактор` на `запуск`. Виберіть свій рахунок `KUKA` в `роботі` та змініть `параметр` на `Так`. Натисніть `Надіслати транзакцію`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

У вікні з пакетом управління kuka_control ви побачите:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Потім перейдіть до `Розробник/Стан ланцюга` на порталі Robonomics, виберіть `даталог` та `datalogItem((AccountId,u64)): RingBufferItem` в запиті та додайте `KUKA` datalog з кнопкою '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Тепер ви можете знайти телеметрію робота в IPFS за цим посиланням з вашим хешем `https://gateway.ipfs.io/ipfs/<hash>`.

## Усунення неполадок

Якщо `catkin_make` не працює з повідомленням, що він не може знайти MoveArm.h, спробуйте видалити останні чотири рядки в CMakeLists.txt у пакеті kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Виконайте `catkin_make` без цих рядків, потім поверніть їх і знову виконайте `catkin_make`.