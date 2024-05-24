---
title: Підключіть Mars Curiosity Rover
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Підключіть Mars Curiosity rover під керуванням Robonomics parachain.
metaOptions: [Вивчайте]
defaultName: Connect Mars Curiosity Rover
---

**Давайте подивимося, як керування Robonomics Parachain дозволяє рухати Mars Curiosity rover. Вимоги:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (інструкція з встановлення [тут](http://wiki.ros.org/melodic/Встановлення))

</li>


<li>додаткові пакети:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS до [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Супутнє розширення IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Вузол Robonomics (виконуваний файл) (завантажте останню версію [тут](https://github.com/airalab/robonomics/releases). Цей підручник успішно протестований на версії 1.1)

</li>

</List>

<br/>

Ось відео, що показує успішний запуск:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Налаштування симуляції

Завантажте пакет Curiosity rover:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Нам потрібно налаштувати початкові умови, щоб наш ровер почав рухатися плавно:

<List>

<li>Перейдіть до

`src/master/curiosity_mars_rover_description/worlds` і змініть рядок 14 файлу` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Перейдіть до

`src/master/curiosity_mars_rover_description/launch` і змініть рядок 4 файлу `mars_curiosity_world.launch` на 
`<arg name="paused" default="false"/>`

Не забудьте додати команду джерела `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Перезавантажте консоль та запустіть симуляцію:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Примітка: якщо зображення темне, наприклад, затінене, змініть `Camera` на `Orthorgraphic` в панелі інструментів Gazebo.
Симуляцію можна закрити на деякий час.

------------

<br/>

### 2. Завантаження пакету керування Robonomics
Для завантаження пакету керування для Rover введіть в термінал:

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

### 3. Керування обліковими записами в DAPP
Оскільки ми тестуємо, давайте створимо локальну мережу robonomics з використанням виконуваного файлу robonomics:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Запустітьning node"/>


Перейдіть на [портал Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) та переключіться на локальний вузол 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Перейдіть до Облікових записів та створіть облікові записи **CURIOSITY** та **EMPLOYER**.

**Важливо**! Скопіюйте адресу кожного облікового запису (щоб скопіювати адресу, натисніть на значок облікового запису) та **мнемонічне насіння** облікового запису Curiosity (отримане під час створення облікового запису)
Перекажіть деякі гроші (одиниці) на ці облікові записи. Ви можете дізнатися більше про облікові записи в Robonomics [тут](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Додайте ці адреси, насіння та адресу вузла (за замовчуванням `ws://127.0.0.1:9944` для вузла розробника) в `config.config` в `robonomics_ws/src/robonomics_sample_controller/src`. Без лапок.

------------

<br/>

### 4. Запуск Robonomics

Перш ніж продовжувати, переконайтеся, що ви встановили [розширення IPFS Companion](https://github.com/ipfs/ipfs-companion).

У окремому терміналі запустіть IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #вам потрібно це зробити лише один раз під час встановлення IPFS
ipfs daemon
</LessonCodeWrapper>

У іншому окремому терміналі запустіть симуляцію Curiosity, якщо вона не працює:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Зачекайте, доки вона не залишиться нерухомою

У іншому терміналі запустіть контролер:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Тепер ви можете відправити транзакцію, що викликає рух ровера та збір даних. Для цього ви можете використовувати той самий [портал Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Перейдіть до `Developer->Extrinsics` та виберіть обліковий запис робота Curiosity, зовнішній параметр `launch`, обліковий запис Curiosity як цільовий обліковий запис та `yes` як параметр.
Надішліть зовнішній параметр.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

Робот повинен почати рухатися. Він не прийматиме команди від інших облікових записів або команди з параметром `no`. Ровер буде рухатися та збирати дані протягом приблизно хвилини.
Пізніше, коли робота буде виконана:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


На порталі Robonomics перейдіть до `Developer -> Chain state` та отримайте `CURIOSITY` даталог, використовуючи кнопку “+” з вибраним запитом `datalog -> RingBufferItem` 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Тепер хеш IPFS телеметрії збережено в блокчейні. Щоб побачити дані, просто скопіюйте хеш та знайдіть його на шлюзі:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Ця телеметрія зберігається в децентралізованому сховищі, а ї хеш зберігається в блокчейні!
