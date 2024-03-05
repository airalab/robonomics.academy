---
title: 쿠카 조작기 연결
description: 조작기 연결
metaOptions: [배우다]
defaultName: 연결 Kuka manipulator
---

작업 예제 비디오는 여기에서 찾을 수 있습니다:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## 요구 사항

<List>

<li class="flex">

ROS 멜로딕, Gazebo (설치 지침 [여기](http://wiki.ros.org/melodic/설치/Ubuntu))
</li>

<li>일부 추가 패키지

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(여기에서 다운로드(https://www.npackd.org/p/ipfs/0.4.22)하고 설치)

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

Robonomics 노드 (바이너리 파일) (최신 릴리스 다운로드 [여기](https://github.com/airalab/robonomics/releases))

</li>

<li>IPFS 브라우저 확장 프로그램 (필수 아님)</li>

</List>

<br/>

***

<br/>

## 설치
쿠카 조작기 및 제어 패키지 설치

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## 게이즈보 모델 실행

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

새 창에서

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## 로보노믹스 실행
로보노믹스 파일이 있는 폴더로 이동하여 로컬 로보노믹스 네트워크 생성:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

[로보노믹스 파라체인 포털](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)로 이동하여 로컬 노드로 전환

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

그런 다음 계정으로 이동하여 `KUKA` 계정을 생성하십시오. 계정의 니모닉 키를 저장하십시오. 나중에 필요합니다. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

기본 계정 중 하나에서 새 계정으로 일부 단위를 보내십시오.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## IPFS 실행
실행 ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## 제어 패키지 실행
kuka_control 패키지의 구성 디렉토리에서 이 라인이 있는 구성 파일을 만들어야 합니다. 여기서 `<your_mnemonic>`은 저장된 니모닉 시드입니다:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


이제 제어 스크립트를 실행할 수 있습니다:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## 트랜잭션 전송
[로보노믹스 파라체인 포털](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)에서 `Developer/Extrinsics`로 이동하여 `extrinsic`를 `launch`로 변경하십시오. `robot`에서 `KUKA` 계정을 선택하고 `param`을 `Yes`로 변경하십시오. 그런 다음 `Submit Transaction`을 누르십시오

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

kuka_control 패키지의 창에서 다음을 볼 수 있습니다:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

그런 다음 로보노믹스 포털에서 `Developer/Chain State`로 이동하여 `datalog`을 선택하고 쿼리에서 `datalogItem((AccountId,u64)): RingBufferItem`을 선택하고 `KUKA` 데이터로그를 추가하십시오 '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

이제 IPFS에서 로봇의 텔레메트리를 이 링크를 통해 찾을 수 있습니다. 당신의 해시로 `https://gateway.ipfs.io/ipfs/<hash>`

## 문제 해결

`catkin_make`가 MoveArm.h를 찾을 수 없다는 메시지와 함께 작동하지 않는 경우, kuka_manipulator_gazebo 패키지의 CMakeLists.txt에서 마지막 네 줄을 제거하려고 시도하십시오:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

이러한 줄을 제거한 상태로 `catkin_make`를 수행한 다음 다시 추가하고 `catkin_make`를 다시 수행하십시오.