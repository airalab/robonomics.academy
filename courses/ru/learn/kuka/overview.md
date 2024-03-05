---
title: Подключите манипулятор Kuka
description: Подключите манипулятор
metaOptions: [Учиться]
defaultName: Подключить Kuka manipulator
---

Видео с примером работы можно найти здесь:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Требования

<List>

<li class="flex">

ROS мелодичный, Gazebo (инструкция по установке [здесь](http://wiki.ros.org/melodic/Установка/Ubuntu))
</li>

<li>Некоторые дополнительные пакеты

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(скачать отсюда (https://www.npackd.org/p/ipfs/0.4.22) и установить)

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

Узел Robonomics (бинарный файл) (скачать последний релиз [здесь](https://github.com/airalab/robonomics/releases))

</li>

<li>Расширение браузера IPFS (не обязательно)</li>

</List>

<br/>

***

<br/>

## Установка
Установите манипулятор Kuka и пакеты управления

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Запуск модели gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

В новом окне

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Запуск robonomics
Перейдите в папку с файлом robonomics и создайте локальную сеть robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Перейдите на портал Robonomics Parachain (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) и переключитесь на локальный узел

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Затем перейдите в раздел Accounts и создайте учетную запись `KUKA`. Сохраните мнемонический ключ учетной записи, вам понадобится он позже. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Отправьте некоторые единицы на новую учетную запись с одной из учетных записей по умолчанию.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Запуск ipfs
Запустить ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Запуск пакета управления
В каталоге конфигурации в пакете управления kuka_control вам нужно создать файл конфигурации с этими строками, где `<your_mnemonic>` - сохраненное мнемоническое зерно:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Теперь вы можете запустить управляющий скрипт:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Отправка транзакции
На портале Robonomics Parachain (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) перейдите в `Developer/Extrinsics`, измените `extrinsic` на `launch`. Выберите свою учетную запись `KUKA` в `robot` и измените `param` на `Yes`. Затем нажмите `Submit Transaction`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

В окне с пакетом управления kuka_control вы увидите:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Затем перейдите в `Developer/Chain State` на портале Robonomics, выберите `datalog` и `datalogItem((AccountId,u64)): RingBufferItem` в запросе и добавьте `KUKA` datalog с помощью кнопки '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Теперь вы можете найти телеметрию робота в IPFS по этой ссылке с вашим хэшем `https://gateway.ipfs.io/ipfs/<hash>`.

## Устранение неполадок

Если `catkin_make` не работает с сообщением о том, что не удается найти MoveArm.h, попробуйте удалить последние четыре строки в CMakeLists.txt в пакете kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Выполните `catkin_make` без этих строк, затем верните их и выполните `catkin_make` снова.