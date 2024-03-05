---
title: Подключите марсоход Curiosity
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Подключите марсоход Curiosity под управлением Robonomics parachain.
metaOptions: [Учиться]
defaultName: Connect Mars Curiosity Rover
---

**Давайте посмотрим, как управление Robonomics Parachain позволяет двигать марсоход Curiosity. Требования:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (инструкция по установке [здесь](http://wiki.ros.org/melodic/Установка))

</li>


<li>дополнительные пакеты:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS до [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Сопутствующее расширение IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Узел Robonomics (исполняемый файл) (скачать последнюю версию [здесь](https://github.com/airalab/robonomics/releases). Этот учебник успешно протестирован на v1.1)

</li>

</List>

<br/>

Вот видео успешного запуска:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Настройка симуляции

Скачать пакет марсохода Curiosity:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Нам нужно настроить начальные условия, чтобы наш марсоход появился плавно:

<List>

<li>Перейдите в

`src/master/curiosity_mars_rover_description/worlds` и измените строку 14 файла` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Перейдите в

`src/master/curiosity_mars_rover_description/launch` и измените строку 4 файла `mars_curiosity_world.launch` на 
`<arg name="paused" default="false"/>`

Не забудьте добавить исходную команду в `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Перезагрузите консоль и запустите симуляцию:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Примечание: если изображение темное, например, затененное, измените `Камера` на `Ортографическая` в панели инструментов Gazebo.
Симуляцию можно закрыть на некоторое время.

------------

<br/>

### 2. Скачать пакет управления Robonomics
Чтобы скачать пакет управления для Rover, введите в терминале:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. Управление учетными записями в DAPP
Поскольку мы проводим тестирование, давайте создадим локальную сеть robonomics с помощью исполняемого файла robonomics:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Запуститьning node"/>


Перейдите на портал [Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) и переключитесь на локальный узел 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Перейдите в Учетные записи и создайте учетные записи **CURIOSITY** и **EMPLOYER**.

**Важно**! Скопируйте адрес каждой учетной записи (для копирования адреса нажмите на значок учетной записи) и **мнемоническую фразу** учетной записи Curiosity (полученную при создании учетной записи)
Переведите немного денег (единиц) на эти учетные записи. Вы можете узнать больше о учетных записях в Robonomics [здесь](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Добавьте эти адреса, мнемоническую фразу и адрес узла (по умолчанию `ws://127.0.0.1:9944` для узла разработчика) в `config.config` в `robonomics_ws/src/robonomics_sample_controller/src`. Без кавычек.

------------

<br/>

### 4. Запуск Robonomics

Прежде чем продолжить, убедитесь, что у вас установлено [расширение IPFS Companion](https://github.com/ipfs/ipfs-companion).

В отдельном терминале запустите IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #вам нужно сделать это только один раз при установке IPFS
ipfs daemon
</LessonCodeWrapper>

В другом отдельном терминале запустите симуляцию Curiosity, если она не активна:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Подождите, пока она остановится

В другом терминале запустите контроллер:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Теперь вы можете отправить транзакцию, запускающую марсоход для начала движения и сбора данных. Для этого вы можете использовать тот же [портал Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Перейдите в `Разработчик->Экстрансиксы` и выберите учетную запись работодателя Curiosity, экстрансикс `launch`, учетную запись Curiosity в качестве целевой учетной записи и `yes` в качестве параметра.
Отправьте экстрансикс.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

Робот должен начать движение. Он не будет принимать команды от других учетных записей и команды с параметром `no`. Марсоход будет перемещаться и собирать данные примерно минуту.
Позже, когда работа будет выполнена:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


На портале Robonomics перейдите в `Разработчик -> Состояние цепи` и получите `CURIOSITY` даталог, используя кнопку “+” с выбранным `datalog -> RingBufferItem` в качестве запроса: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Теперь хэш IPFS телеметрии сохранен в блокчейне. Чтобы увидеть данные, просто скопируйте хэш и найдите его на шлюзе:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Эта телеметрия хранится в децентрализованном хранилище, и ее хэш хранится в блокчейне!
