---
title: Подключите совместимый с ROS дрон
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Подключите любого совместимого с ROS робота под управлением парачейна Robonomics.
metaOptions: [Учиться]
defaultName: Подключите совместимый с ROS дрон
---


## Часть 1. Запуск по транзакции

**В этой статье мы покажем, что с помощью инструментов Robonomics вы можете контролировать любое устройство, совместимое с ROS. Мы найдем случайный пакет симуляции дрона в Интернете и настроим его для работы с Robonomics.**
**Требования:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (инструкция по установке [здесь](http://wiki.ros.org/melodic/Установка))

</li>

<li class="flex">

Узел Robonomics (бинарный файл) (скачать последний релиз [здесь](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

Весь процесс написания этой части демонстрации представлен в видео ниже.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Найти симуляцию
Давайте покопаемся в Интернете. Поищите в Google `ROS drone simulator`. Первая ссылка скорее всего покажет вам страницу `tum_simulator` на [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Она довольно устарела, поэтому лучше найти форк для нашей системы. Поищите в Google `tum_simulator Ubuntu 18 Gazebo 9 fork`. Первый результат - GitHub [репо](https://github.com/tahsinkose/sjtu-drone) с соответствующим пакетом. Скачайте его

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Не забудьте добавить команду source в `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Теперь мы можем запустить симуляцию, чтобы увидеть, что нам нужно сделать, чтобы взять дрона под контроль парачейна.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Изучить темы ROS
Когда симуляция запущена, в новой вкладке выполните следующую команду, чтобы увидеть список тем, используемых дроном:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Давайте посмотрим на `/cmd_vel`, `/drone/takeoff` и `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Как можно видеть, должны быть сообщения типов `Twist` и `Empty`, они являются частями `std_msgs` и `geometry_msgs`, мы будем использовать это в контроллере. Ненадолго остановите симуляцию.

## 3. Скачать пакет контроллера
В целом, основное отличие от обычного контроллера робота ROS - это блок кода, который проверяет все транзакции в сети с использованием [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). Сам пакет доступен на GitHub. Скачайте его и постройте рабочее пространство:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Управление учетными записями в DAPP
Поскольку мы проводим тестирование, давайте создадим локальный узел сети robonomics с бинарным файлом robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Важно!** Перед следующими запусками необходимо удалить каталог `db` с

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

После успешного запуска создайте учетные записи, следуя инструкции [здесь](https://wiki.robonomics.network/docs/create-account-in-dapp/). **Не забудьте сохранить каждый seed и адрес учетной записи! Вам понадобятся они для транзакций**. Добавьте эти адреса, seed и путь к бинарному файлу robonomics в файл `config.config` в `robonomics_ws/src/robonomics_sample_controller/src`. Переведите некоторые деньги (единицы) на эти счета:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Запуск дрона под управлением парачейна

До сих пор **единственное, что запущено** должен быть локальный узел robonomics. В отдельном терминале запустите симуляцию дрона:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Запустите скрипт:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Теперь вы можете отправить транзакцию, запускающую дрона на полет. Для этого вы должны использовать подкоманду `write` Robonomics IO бинарного файла robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Где `<DRONE_ADDRESS>` и `<EMPLOYER’S_KEY>` заменены на ранее сохраненные строки соответственно.
Вы должны увидеть журнал `"Taking Off"` и дрон должен начать летать:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

Вот как любой совместимый с ROS робот может быть управляем парачейном Robonomics.


##  Часть 2. Сохранение данных в блокчейне

**В этой части мы продолжим использовать инструменты Robonomics, чтобы дрон был управляем парачейном. На этот раз мы добавим отправку данных в IPFS и опции хранения хеша в цепочке. Ниже приведены инструкция и фрагменты кода. Требования:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (инструкция по установке [здесь](http://wiki.ros.org/melodic/Установка))
</li>

<li class="flex">

IPFS 0.4.22 (скачать с [здесь](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) и установить)
</li>

<li class="flex">

Узел Robonomics (бинарный файл) (скачать последний релиз [здесь](https://github.com/airalab/robonomics/releases))
</li>

<li>Зависимости Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

Весь процесс написания этой части демонстрации представлен в видео ниже.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Добавить зависимости
Если мы запустим симуляцию и посмотрим список тем (см. часть 1), мы увидим, что есть одна тема, содержащая данные передней камеры и использующая тип сообщения `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Давайте попробуем сделать фотографию каждую секунду и после полета опубликуем эти фотографии в IPFS. Если вы завершили первое руководство, вам не нужно ничего дополнительно скачивать. Это скрипт `drone_sample_controller_pictures.py`.

## 2. Управление учетными записями в DAPP
Как сделано в предыдущем руководстве, создайте локальный узел сети robonomics с помощью двоичного файла robonomics:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Важно!** Перед следующими запусками необходимо удалить каталог `db` с

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

После успешного запуска создайте учетные записи, следуя инструкции [здесь](https://wiki.robonomics.network/docs/create-account-in-dapp/). **Не забудьте сохранить каждый seed и адрес учетной записи! Вам понадобятся они для транзакций**. Добавьте эти адреса, seed и путь к бинарному файлу robonomics в файл `config.config` в `robonomics_ws/src/robonomics_sample_controller/src`. Переведите некоторые деньги (единицы) на эти счета:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Запуск
До сих пор **единственное, что запущено** должен быть локальный узел robonomics. В отдельном терминале запустите симуляцию дрона:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Запустите ipfs демон:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Запустите скрипт:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Теперь вы можете отправить транзакцию, запускающую дрон для полета и съемки фотографий. Для этого вам следует использовать подкоманду `write` Robonomics IO двоичного файла robonomics:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Где `<DRONE_ADDRESS>` и `<EMPLOYER’S_KEY>` заменены на ранее сохраненные строки соответственно.
Вы должны увидеть журнал `"Взлет"`, и дрон должен начать летать и снимать фотографии:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Позже, когда работа будет выполнена, на портале Robonomics перейдите в `Разработчик` -> `Состояние цепи` и добавьте даталог `DRONE`, используя кнопку `“+”` с выбранным `datalog` в качестве запроса состояния. Хэш IPFS телеметрии был сохранен в блокчейне. Чтобы увидеть данные, просто скопируйте хэш и добавьте его в локальный [шлюз](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) адрес `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>