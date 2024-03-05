---
title: "레슨 #4a, 게이트웨이 설정: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: 홈 어시스턴트 코스
lessonNumber: 4
metaOptions: [로보노믹스와 홈 어시스턴트를 활용한 주권 스마트 홈 배우기]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 소개

이는 Zigbee 어댑터와 Zigbee2MQTT 브릿지를 사용하여 장치를 연결하기 위한 시나리오 설정입니다. [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (필요한 모든 펌웨어가 포함되어 있음)를 가지고 있다면 이 지침을 따라 진행할 수 있습니다. 그러나 다른 어댑터를 가지고 있다면, 먼저 Zigbee2MQTT 소프트웨어로 플래시해야 합니다. 당신의 장치에 대한 지침은 [여기](https://www.zigbee2mqtt.io/guide/adapters/)에서 찾을 수 있습니다.

Home Assistant와의 연결을 테스트하기 위해 스마트 장치가 필요합니다.


## 지침

<List type="numbers">

<li>

소프트웨어 설치

<List>

  <li>
    Node.js 런타임 환경 저장소를 설정하고 필요한 종속성과 함께 설치합니다:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Node.js (v14.X, V16.x, V17.x 또는 V18.X) 및 패키지 관리자 <code class="nowb">npm</code> (6.X, 7.X 또는 8.X)의 올바른 버전이 자동으로 Node.js와 함께 설치되었는지 확인합니다:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Zigbee2MQTT를 위한 디렉토리를 만들고 사용자를 소유자로 설정합니다:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Zigbee2MQTT 저장소를 복제합니다:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    의존성 설치. <code>npm ci</code>는 경고를 발생시킬 수 있으며 무시해도 됩니다.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

어댑터 연결 및 구성

<List>

<li>

Zigbee 어댑터를 Raspberry Pi에 연결합니다. 그런 다음 스틱의 위치를 찾아야 합니다. 이를 위해 다음 명령을 입력하십시오:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

출력은 다음과 같아야 합니다:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

이 예에서 스틱 연결 디렉토리는 <code>ttyUSB0</code>입니다.
</li>

<li>

Zigbee2MQTT를 시작하기 전에 <code>configuration.yaml</code> 파일을 편집하십시오:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

기본 구성에는 몇 가지 조정이 필요합니다. 다음 문을 변경하십시오:

\- <code>homeassistant:</code>를 <code>true</code>로 변경하면 센서가 자동으로 Home Assistant에 연결됩니다;

\- <code>mqtt</code> 아래의 <code>user</code> 및 <code>password</code>를 주석 처리 해제하고 MQTT 브로커의 사용자 이름과 암호(따옴표로 묶인 문자열)를 입력하십시오;

\- <code>serial</code> -> <code>port</code>에서 포트를 스틱 연결 디렉토리로 변경하십시오. 이 예에서는: <code>/dev/ttyUSB0</code>.

조정된 구성 파일은 다음과 같아야 합니다:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**추가의:**

이미 집에 활성화된 Zigbee 어댑터나 게이트웨이가 있고 새로운 스틱을 구성 중이라면 서로 충돌할 수 있습니다. 이 문제를 해결하려면 새 장치의 채널을 변경해야 합니다. 이를 위해 구성 파일 끝에 다음 문자열을 추가하십시오:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Zigbee2MQTT 시작:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

성공적으로 시작되면 다음과 같은 메시지가 표시됩니다:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

장치 페어링

<List>

<li>

스마트 장치를 연결할 시간입니다. 장치를 연결 모드로 전환하는 가장 일반적인 방법은 전원 버튼을 길게 누르거나 5회 이상 켜고 끄는 것입니다. Zigbee2MQTT가 실행 중인지 확인하세요.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

장치가 연결되면 다음과 같은 메시지가 표시됩니다:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

센서의 ID를 기억하세요: 이 예제에서는 <code>0x00158d0003eeeacf</code>입니다.

이제 Home Assistant WebUI에서 ID가 있는 센서를 확인해야 합니다. <code>설정</code> -> <code>장치 및 서비스</code> -> <code>장치</code>로 이동하여 확인하세요:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

모든 센서를 추가한 후 <code>Ctrl+C</code>로 프로그램을 중지할 수 있습니다. 더 이상 장치를 추가하고 싶지 않다면 구성 파일을 다시 열고 <code>permit_join:</code>을 <code>false</code>로 설정할 수 있습니다.
</li>

</List>
</li>

<li>

자동 시작을 위한 서비스 생성

<List>

<li>

이제 서비스를 생성해야 합니다. 파일을 만드세요:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

다음을 파일에 추가하고 <code>YOUR_RASPPI_USERNAME_HERE</code>를 변경하세요. 사용자 이름을 모르는 경우 <code>whoami</code> 명���을 사용하세요.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

구성이 작동하는지 확인하세요:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

출력은 다음과 같아야 합니다:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

부팅 시 Zigbee2MQTT를 자동으로 시작하도록 서비스를 활성화하세요:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>