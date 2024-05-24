---
title: "레슨 #3, MQTT 브로커 설정 및 Hass 초기화"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 홈 어시스턴트 코스
lessonNumber: 3
metaOptions: [로보노믹스와 홈 어시스턴트를 활용한 주권 스마트 홈 배우기]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 소개

라즈베리 파이의 구성을 마치면, 다음 단계는 라즈베리 파이에 MQTT 브로커를 설치하는 것입니다. 위에서 언급했듯이, 브로커는 서로 다른 MQTT 클라이언트 간의 메시지 라우팅을 담당합니다. 오픈 소스 MQTT 브로커인 Eclipse Mosquitto를 설치하고 구성할 것입니다.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

또한, Home Assistant 설정을 완료하고 MQTT 통합을 추가할 것입니다.

## 지침

<List type="numbers">

<li>


Mosquitto 브로커 설치

<List>
<li>

라즈베리 파이에 [Mosquitto 브로커](https://mosquitto.org/)를 설치하십시오:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

YOUR_USERNAME(원하는 것을 사용하십시오) 및 암호(명령 후 암호를 입력하라는 메시지가 표시됩니다)를 입력하십시오:

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

구성 파일 편집:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

다음을 파일에 추가하십시오:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

파일을 저장하고 서비스를 다시 시작하십시오:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

마지막으로, 브로커 상태를 확인하십시오:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

다음과 같은 내용이 표시되어야 합니다:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Home Assistant 및 MQTT 설정

<List>

<li>

웹 브라우저를 열고 <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>로 이동하십시오. (이전 레슨에서 찾은 IP 주소와 동일한 IP 주소로). 라즈베리 파이 주소는 라우터 설정 따라 시간이 지남에 따라 변경될 수 있음에 유의하십시오. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

첫 페이지에서 원하는 이름, 사용자 이름, 암호를 입력하고 "<code>계정 생성</code>"을 클릭하십시오
</li>

<li>

다음으로, 집 이름을 입력하고 위치 및 단위 시스템을 설정하십시오. "<code>DETECT</code>"를 클릭하여 위치를 찾고 해당 위치를 기반으로 시간대 및 단위 시스템을 설정하십시오. 위치를 보내기 원치 않는 경우, 이러한 값을 수동으로 설정할 수 있습니다.

</li>

<li>

다음 화면에서 Home Assistant는 네트워크에서 발견한 장치를 표시합니다. 아래에 표시된 것보다 적은 항목이 표시되어도 걱정하지 마십시오. 나중에 수동으로 장치를 추가할 수 있습니다. 지금은 <code>FINISH</code>를 클릭하고 주요 Home Assistant 화면으로 이동하십시오.

</li>

<li>

이제 MQTT 통합을 설치해야 합니다. <code>Settings</code> -> <code>Devices & Services.</code>로 이동하십시오.

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

오른쪽 하단 모서리에 있는 <code>ADD INTEGRATION</code> 버튼을 누르십시오. 열린 창에서 <code>MQTT</code>를 찾으십시오.

</li>

<li>

MQTT를 선택하고 브로커 주소 — <code>localhost</code> 포트 — <code>1883</code> 및 사용자 이름 및 암호(이전에 Mosquitto Broker를 위해 생성한 것과 동일한)를 설정한 다음 <code>SUBMIT</code>을 누르십시오.
</li>

</List>
</li>
</List>