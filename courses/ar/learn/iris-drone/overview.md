---
title: توصيل الطائرة بدون طيار
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: الاتصال بالطائرة بدون طيار
metaOptions: [تعلم]
defaultName: اتصل unmanned aerial vehicle
---

**تبدأ الطائرة بدون طيار في التحرك بعد العملية وتخزين الملف مع الإحداثيات في IPFS. يعتمد البرنامج النصي للتحكم على [برنامج العرض التوضيحي لـ GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## المتطلبات

<List>

<li> التبعيات للتحكم:

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

ROS Melodic + Gazebo [دليل التثبيت](http://wiki.ros.org/melodic/التثبيت)
</li>

<li>حزم إضافية:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>إصدار IPFS 0.4.22

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

عقد Robonomics (ملف ثنائي) (تنزيل أحدث إصدار [هنا](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## إعداد البيئة

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

تعديل ملف `.bashrc` الخاص بك، وإضافة الأسطر التالية إلى الأسفل:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## تثبيت حزمة التحكم
في نافذة الطرفية الجديدة:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## شبكة Robonomics

لإنشاء شبكة Robonomics المحلية، انتقل إلى المجلد الذي يحتوي على ملف التنفيذ الثنائي لـ Robonomics وقم بتشغيله:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

إضافة مسار Robonomics إلى `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

انتقل إلى [بوابة Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) وانتقل إلى العقد المحلي.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

انتقل إلى **الحسابات** وأنشئ حسابات **DRONE** و **EMPLOYER**. احفظ أسماء الحسابات والمفاتيح والمسار إلى **robonomics** في `~/catkin_ws/src/drone_sim/src/config.py`. قم بتحويل بعض الأموال إلى الحسابات.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## تشغيل المحاكاة
تشغيل خادم IPFS

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

في نافذة الطرفية الأخرى، قم بتشغيل المحاكاة:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

انتظار حتى "انتظار الدفع" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

لإرسال عملية تشغيل، قم بتشغيل الأمر التالي في نافذة أخرى:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - حيث يجب استبدال **<drone_address>** و **<employer_key>** بالسلاسل من `config.py` على التوالي.

بعد دفع البيانات إلى IPFS، انتقل إلى **حالة السلسلة** في [بوابة Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). حدد **datalog** في الاستعلام وأضف datalog DRONE باستخدام زر `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

يمكنك العثور على تلميحات الطائرة بتشغيل `https://gateway.ipfs.io/ipfs/<hash>` عن طريق إدخال الهاش من أعلى.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

من المهم إزالة مجلد `db` قبل الإطلاقات القادمة باستخدام  
` rm -rf ~/.local/share/robonomics/chains/dev/db`