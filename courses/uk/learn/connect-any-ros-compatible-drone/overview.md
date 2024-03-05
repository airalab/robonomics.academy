---
title: Підключіть дрон, сумісний з ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Підключіть будь-якого робота, сумісного з ROS, під управлінням паракейну Robonomics.
metaOptions: [Вивчайте]
defaultName: Підключіть ROS-compatible drone
---


## Частина 1. Запуск за транзакцією

**У цій статті ми покажемо, що за допомогою інструментів Robonomics ви можете керувати будь-яким пристроєм, сумісним з ROS. Ми знайдемо випадковий пакет симуляції дрона в Інтернеті і налаштуємо його для роботи з Robonomics.**
**Вимоги:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (інструкція з встановлення [тут](http://wiki.ros.org/melodic/Встановлення))

</li>

<li class="flex">

Вузол Robonomics (бінарний файл) (завантажте останню версію [тут](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

Весь процес написання цієї частини демонстрації представлений у відео нижче.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Знайдіть симуляцію
Давайте шукати в Інтернеті. Пошук Google за `ROS drone simulator`. Перше посилання, ймовірно, покаже вам сторінку `tum_simulator` на [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Вона досить застаріла, тому ми краще знайдемо вілку для нашої системи. Пошук Google за `tum_simulator Ubuntu 18 Gazebo 9 fork`. Перший результат - це GitHub [репозиторій](https://github.com/tahsinkose/sjtu-drone) з відповідним пакетом. Завантажте його

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Не забудьте додати команду джерела до `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Тепер ми можемо запустити симуляцію, щоб побачити, що нам потрібно зробити, щоб взяти дрона під управління паракейну.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Огляд тем ROS
Коли симуляція запущена, у новій вкладці запустіть наступну команду, щоб побачити список тем, які використовуються дроном:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Давайте подивимося на `/cmd_vel`, `/drone/takeoff` та `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Як можна побачити, тут повинні бути повідомлення типів `Twist` та `Empty`, вони є частинами `std_msgs` та `geometry_msgs`, ми будемо використовувати це в контролері. Закрийте симуляцію на деякий час.

## 3. Завантажте пакет контролера
Загалом, основна відмінність від звичайного контролера робота ROS - це блок коду, який перевіряє всі транзакції в мережі за допомогою [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). Сам пакет доступний на GitHub. Завантажте його та побудуйте робоче середовище:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Керування обліковими записами в DAPP
Оскільки ми тестуємо, давайте створимо локальний вузол мережі robonomics з бінарним файлом robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Важливо!** Перед наступними запусками необхідно видалити каталог `db` з

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Після успішного запуску створіть облікові записи, дотримуючись [цієї](https://wiki.robonomics.network/docs/create-account-in-dapp/) інструкції. **Не забудьте зберегти кожний ключ та адресу облікового запису! Вам знадобляться вони для транзакцій**. Додайте ці адреси, ключі та шлях до бінарного файлу robonomics у файл `config.config` в `robonomics_ws/src/robonomics_sample_controller/src`. Перекажіть деякі гроші (одиниці) на ці облікові записи:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Запуск дрона під управлінням паракейну

До цього часу **лише запущений** має бути локальний вузол robonomics. У окремому терміналі запустіть симуляцію дрона:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Запустіть скрипт:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Тепер ви можете відправити транзакцію, що запускає дрона на польот. Для цього вам слід використовувати підкоманду `write` Robonomics IO бінарного файлу robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Де `<DRONE_ADDRESS>` та `<EMPLOYER’S_KEY>` замінюються раніше збереженими рядками відповідно.
Ви повинні побачити журнал `"Taking Off"` і дрон повинен почати літати:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

Ось як будь-який робот, сумісний з ROS, може бути керований паракейном Robonomics.


##  Частина 2. Збереження даних в блокчейн

**У цій частині ми продовжимо використовувати інструменти Robonomics, щоб дрон був керований паракейном. Цього разу ми додамо опції відправлення даних в IPFS та зберігання хешу в ланцюжку. Нижче наведено інструкцію та фрагменти коду. Вимоги:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (інструкція з встановлення [тут](http://wiki.ros.org/melodic/Інсталяція))
</li>

<li class="flex">

IPFS 0.4.22 (завантажте з [тут](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) та встановіть)
</li>

<li class="flex">

Вузол Robonomics (бінарний файл) (завантажте останню версію [тут](https://github.com/airalab/robonomics/releases))
</li>

<li>Залежності Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

The entire process of coding this part of demo is presented in a video below.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Додайте залежності
Якщо ми запустимо симуляцію і подивимося список тем (див. частину 1), ми побачимо, що є одна тема, яка містить дані фронтальної камери та використовує тип повідомлення `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Спробуйте зробити фотографію кожну 1 секунду і після польоту опублікуйте ці фотографії в IPFS. Якщо ви вже завершили перший навчальний посібник, вам не потрібно завантажувати ще щось. Це сценарій `drone_sample_controller_pictures.py`.

## 2. Управління обліковими записами в DAPP
Як і в попередньому навчальному посібнику, створіть локальний вузол мережі robonomics з файлом robonomics binary:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Important!** Before next launches it is necessary to remove a directory `db` with

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

After a successful launch create accounts following [this](https://wiki.robonomics.network/docs/create-account-in-dapp/) manual. **Do not forget to save each account's seed and address! You will need them for transactions**. Add these addresses, seeds and path to robonomics binary file to file `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Transfer some money (units) to these accounts:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Запуск
Up to now the **only thing running** should be the robonomics local node. In a separate terminal launch drone simulation:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

У іншому запуску демона ipfs:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Запустіть the script:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Тепер ви можете відправити транзакцію, що викликає польот дрона та зйомку фотографій. Для цього вам слід використовувати підкоманду `write` Robonomics IO в бінарному файлі robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Where `<DRONE_ADDRESS>`  and `<EMPLOYER’S_KEY>` are replaced with  previously saved strings accordingly.
Ви повинні побачити журнал `"Taking Off"` і дрон повинен почати літати та робити фотографії:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Пізніше, коли робота буде з��вершена, на порталі Robonomics перейдіть до `Розробник` -> `Стан ланцюжка` та додайте даталог `DRONE`, використовуючи кнопку `“+”` з вибраним запитом стану як `datalog`. Хеш IPFS телеметрії було збережено в блокчейні. Щоб побачити дані, просто скопіюйте хеш та додайте його до локальної [шлюз](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) адреси `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>