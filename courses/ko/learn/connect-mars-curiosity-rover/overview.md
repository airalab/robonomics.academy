---
title: 화성 큐리오시티 로버 연결
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: 로보노믹스 파라체인 제어 하에 화성 큐리오시티 로버 연결.
metaOptions: [배우다]
defaultName: Connect Mars Curiosity Rover
---

**로보노믹스 파라체인 제어가 화성 큐리오시티 로버 이동을 가능하게 하는 방법을 살펴봅시다. 요구 사항:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (설치 매뉴얼 [여기](http://wiki.ros.org/melodic/설치))

</li>


<li>추가 패키지:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

최대 IPFS [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS 동반 확장](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

로보노믹스 노드 (바이너리 파일) (최신 릴리스 다운로드 [여기](https://github.com/airalab/robonomics/releases). 이 튜토리얼은 v1.1에서 테스트되었습니다)

</li>

</List>

<br/>

성공적인 발사를 보여주는 비디오가 여기 있습니다:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. 시뮬레이션 설정

큐리오시티 로버 패키지 다운로드:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

로버가 부드럽게 생성되도록 시작 조건을 조정해야 합니다:

<List>

<li>다음으로 이동

`src/master/curiosity_mars_rover_description/worlds` 파일의 14번째 줄을 변경하세요` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>다음으로 이동

`src/master/curiosity_mars_rover_description/launch`로 이동하고 파일 `mars_curiosity_world.launch`의 4번째 줄을 변경하십시오 
`<arg name="paused" default="false"/>`

소스 명령을 추가하는 것을 잊지 마세요 `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> 콘솔을 다시 부팅하고 시뮬레이션을 시작하십시오:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

참고: 이미지가 어두우면 즉 그림자가 있으면 Gazebo 툴바에서 `카메라`를 `직교`로 변경하십시오.
시뮬레이션은 잠시 닫을 수 있습니다.

------------

<br/>

### 2. 로보노믹스 컨트롤러 패키지 다운로드
터미널에 로버용 컨트롤러 패키지를 다운로드하려면:

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

### 3. DAPP에서 계정 관리
테스트 중이므로 로컬 로보노믹스 네트워크를 로보노믹스 바이너리 파일로 생성하겠습니다:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="실행ning node"/>


[Robonomics Parachain 포턈](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)로 이동하고 로컬 노드로 전환하십시오 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


계정으로 이동하고 **CURIOSITY** 및 **EMPLOYER** 계정을 생성하십시오.

**중요**! 각 계정의 주소를 복사하십시오 (계정 아이콘을 클릭하여 주소를 복사하십시오) 및 큐리오시티의 계정 **니모닉 시드** (계정 생성 시 얻음)
이 계정에 일부 돈(단위)을 이체하십시오. 로보노믹스 계정에 대한 자세한 내용은 [여기](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)에서 확인할 수 있습니다

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


이 주소, 시드 및 노드 주소 (개발자 노드의 기본값은 `ws://127.0.0.1:9944`)를 `robonomics_ws/src/robonomics_sample_controller/src`의 `config.config`에 추가하십시오. 따옴표 없이.

------------

<br/>

### 4. 로보노믹스 시작

더 나아가기 전에 [IPFS Companion Extension](https://github.com/ipfs/ipfs-companion)이 설치되어 있는지 확인하십시오.

별도의 터미널에서 IPFS를 시작하십시오:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #IPFS 설치 당 한 번만 수행하면 됩니다
ipfs daemon
</LessonCodeWrapper>

라이브 중이 아닌 경우 다른 별도의 터미널에서 큐리오시티 시뮬레이션을 시작하십시오:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

정지할 때까지 기다리십시오

다른 터미널서 컨트롤러를 시작하십시오:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

이제 로버가 움직이고 데이터를 수집하는 트랜잭션을 보낼 수 있습니다. 이를 위해 동일한 [Robonomics Parachain 포털](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)을 사용할 수 있습니다.
`개발자->Extrinsics`로 이동하고 큐리오시티의 고용주 계정을 선택하고 `launch` extrinsic, 큐리오시티의 계정을 대상 계정으로 선택하고 매개변수로 `yes`를 입력하십시오.
Extrinsic을 제출하십시오.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

로봇이 움직이기 시작해야 합니다. 다른 계정에서 명령을 수락하지 않으며 `no` 매개변수가 있는 명령도 수락하지 않습니다. 로버는 주변을 돌아다니며 약 1분 동안 데이터를 수집할 것입니다.
작업이 완료되면:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


로보노믹스 포털에서 `개발자 -> Chain state`로 이동하고 선택된 `datalog -> RingBufferItem`으로 쿼리를 사용하여 `CURIOSITY` 데이터로그를 얻으십시오: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


이제 텔레메트리의 IPFS 해시가 블록체인에 저장되었습니다. 데이터를 보려면 해시를 복사하고 게이트웨이에서 찾으십시오:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


이 텔레메트리는 분산 저장소에 보관되며 그 해시는 블록체인에 저장됩니다!
