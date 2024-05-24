---
title: "레슨 #4b, 게이트웨이 설정: Robonomics SLS 게이트웨이"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: 홈 어시스턴트 코스
lessonNumber: 5
metaOptions: [로보노믹스와 홈 어시스턴트를 활용한 주권 스마트 홈 배우기]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 이것은 무엇에 관한 것입니까

이것은 Robonomics SLS 게이트웨이를 사용하여 장치를 연결하기 위한 시나리오 설정입니다. Robonomics는 [Smart Logic System](https://github.com/slsys/Gateway) 프로젝트에서 개발한 게이트웨이에서 디자인 영감을 받아 회로의 일부를 수정했습니다. Robonomics에서 게이트웨이를 주문하거나 [블루프린트](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01)를 사용하여 직접 만들 수 있습니다.

게이트웨이에 필요한 소프트웨어를 설치하고 구성한 후 홈어시스턴트에 연결합니다.

<robo-academy-note type="note" title="Attention">
  펌웨어를 업데이트하는 SmartRF Flash Programmer는 Windows 운영 체제가 필요합니다.
</robo-academy-note>

## 지침

<List type="numbers">

<li>

지그비 마이크로컨트롤러 펌웨어 설치

<List>

<li>

먼저 게이트웨이의 CC2652P 마이크로컨트롤러를 플래시해야 합니다. SLS 게이트웨이 하단의 <code>ON</code> 스위치 <code>2</code>, <code>4</code>, <code>7</code>을 설정하고 나머지는 <code>OFF</code>로 설정해야 합니다.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

USB-A<>USB-C 케이블로 컴퓨터에 게이트웨이를 연결하세요.

<robo-academy-note type="warning" title="WARNING">
  현재 게이트웨이가 USB-C<>USB-C 유형을 지원하지 않기 때문에 USB-A<>USB-C 유형의 케이블만 사용해야 합니다.
</robo-academy-note>

</li>

<li>

CC2652 펌웨어는 Texas Instrument의 SmartRF Flash Programmer v2가 필요합니다. [공식 사이트](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2)에서 다운로드한 후 설치하세요.

</li>

<li>

CC2652P 마이크로컨트롤러용 펌웨어를 [GitHub 저장소](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator)에서 다운로드하세요.

</li>

<li>

프로그램을 실행하세요. <code>Connected device</code> 창에서 CC2652P 마이크로컨트롤러를 선택하고 펌웨어 경로를 설정하고, 깃발을 <code>Erase, Program, Verify</code>로 설정하고 사진과 같이 <code>Start</code>를 누르세요.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

펌웨어 플래싱이 성공하면 <code>Success!</code> 메시지가 표시됩니다. 이제 USB 케이블을 분리할 수 있습니다.

</li>
</List>
</li>

<li>

마이크로컨트롤러 펌웨어 설치

<List>

<li>

이제 소프트웨어 설치를 위해 게이트웨이를 설정해야 합니다. 게이트웨이를 라즈베리 파이에 직접 연결하여 해당 장치에서 다음 명령을 모두 입력하는 것이 좋습니다. 

</li>

<li>

SLS 게이트웨이 하단의 <code>ON</code> 스위치 <code>1</code>, <code>3</code>을 설정하고 나머지는 <code>OFF</code>로 설정해야 합니다. 그런 다음 게이웨이를 라즈베리 파이의 USB 타입-C 포트에 연결하세요.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

SSH를 통해 라즈베리 파이에 연결하세요.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

펌웨어가 있는 저장소를 복제하세요:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

SLS 게이트웨이를 플래시하려면 <code>Clear</code> 및 <code>Flash_16mb</code> 스크립트를 실행해야 합니다:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **문제 해결**

게이트웨이 펌웨어를 업데이트하는 데 문제가 발생하는 경우 추가 조치를 취해야 합니다:

<List>

<li>

pySerial 모듈이 설치되어 있는지 확인하세요:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

사용자에게 USB 포트에 대한 액세스 권한을 부여하십시오:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

일부 경우에는 스크립트에서 펌웨어를 업데이트하기 위해 대역폭 설정을 변경해야 할 수 있습니다. 나노 편집기로 <code>Flash_16mb.sh</code> 스크립트를 열고 보레이트 매개변수를 <code>921600</code>에서 더 작은 값(예: <code>115200</code>)으로 변경하십시오.
</li>
</List>
</li>

<li class="no-bullet">

\- **추가**

다른 운영 체제(macOS 및 Windows)를 사용하여 펌웨어를 업데이트하는 옵션도 제공합니다. 해당 스크립트는 OS에 따라 이름이 다른 폴더에 있습니다.

</li>
</List>
</li>

<li>

게이트웨이 설정

<List>

<li>

게이트웨이 뒷면의 스위치를 새 위치로 설정하십시오. 스위치 <code>5</code> (RX Zigbee to ESP) 및 <code>6</code> (TX Zigbee to ESP)는 <code>ON</code> 위치에 있어야 하며, 다른 스위치는 <code>OFF</code> 위치에 있어야 합니다.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

타입-C 전원 케이블을 연결하십시오. 중앙의 표시등이 녹색으로 변해야 합니다.

</li>

<li>

첫 번째 시작 시, 게이트웨이는 SSID가 <code>zgw****</code>인 Wi-Fi를 공유하기 시작합니다. 이 네트워크에 연결하십시오. 신호가 상당히 약할 수 있으므로 SLS 게이트웨이를 퓨터에 가까이 두는 것이 좋습니다.

연결이 성공하면 웹 인터페이스가 열릴 것입니다(또는 192.168.1.1 주소에서 찾을 수 있습니다).

</li>

<li>

Wi-Fi 페이지로 이동하여 사용자 / 패스를 입력하고 <code>Save</code> 버튼을 눌러 Wi-Fi 자격 증명을 입력하십시오. 그 후 <code>Reboot</code> 버튼을 누르십시오. 게이트웨이가 다시 시작되고 WI-Fi 네트워크에 연결됩니다.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

웹 인터페이스에 액세스하려면 SLS 게이트웨이의 로컬 IP를 찾으십시오. 이를 위해 [Fing](https://www.fing.com/products) 앱이나 터미널에서 <code>arp -a</code> 또는 Nmap을 사용할 수 있습니다: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

여기서 <code class="bold">xxx</code>는 로컬 네트워크의 IP 주소입니다. 게이트웨이 이름은 다음과 같아야 합니다: <code>zgw****</code>. 브라우저에 게이트웨이 IP를 붙여넣어 게이트웨이의 웹 인터페이스를 엽니다.
</li>

<li>

<code>설정</code>으로 이동 -> <code>하드웨어</code>로 이동하고 설정이 이미지와 같은지 확인하십시오. 필요한 경우 설정을 수정하고 <code>저장</code> 버튼을 클릭하십시오.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

필요한 값이 있는 테이블:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

그런 다음 게이트웨이를 다시 부팅하십시오. 오른쪽 상단 모서리에서 <code>작업</code> -> <code>시스템 재부팅</code>을 선택하십시오. Zigbee 정보 창에서 CC2652P 마이크로컨트롤러가 있는 게이트웨이가 제대로 작동하는지 확인하십시오. DeviceState는 <code>OK</code>여야 합니다.

</li>

<li>

게이트웨이를 다시 부팅하십시오. 오른쪽 상단 모서리에서 <code>작업</code> -> <code>재부팅</code> 시스템을 선택하십시오.

</li>

<li>

Home Assistant에 장치를 자동으로 추가하도록 구성하십시오. <code>Zigbee</code> -> <code>구성</code>으로 이동한 다음 <code>Home Assistant MQTT Discovery</code>와 <code>Clear States</code>를 선택하십시오. 변경 사항을 저장하고 다시 SLS 게이트웨이를 부팅하십시오.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **추가**:

이미 집에 활성화된 SLS 게이트웨이가 있고 지금 다른 하나를 구성하고 있다면 서로 충돌할 것입니다. 이 문제를 해결하려면 새로 장치의 채널을 변경해야 합니다.

이를 위해 <code>Zigbee</code> -> <code>구성</code>으로 이동하고 다른 채널로 채널을 변경하십시오 (예: 채널 15).

</li>

<li>

<code>Zigbee</code> -> <code>가입</code>으로 이동하여 장치를 연결하십시오. 센서를 페어링 모드로 설정하고 장치를 연결 모드로 전환하는 가장 일반적인 방법은 전원 버튼을 길게 누르거나 5회 켜고 끄는 것입니다. <code>가입 활성화</code> 버튼을 눌러 Zigbee 장치를 검색을 시작하십시오. 활성 센서가 표시됩니다.

</li>
</List>
</li>

<li>

SLS 게이트웨이를 Home Assistant에 연결하기

<List>

<li>

SLS 게이트웨이에서 MQTT를 구성해야 합니다. SLS 게이트웨이 웹 인터페이스로 돌아가서 <code>설정</code> -> <code>링크</code> -> <code>MQTT 설정</code>으로 이동하십시오.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

브로커 주소를 추가하십시오 (로컬 네트워크의 Home Assistant가 있는 Raspberry Pi의 주소, [Fing](https://www.fing.com/products) 앱이나 RPi에서 <code>ip -a</code> 명령을 사용하여 찾을 수 있습니다), 포트 (기본값은 1883), 브로커 사용자 이름 및 암호 (이전에 생성한 것) 및 주제 이름 (임의로 선택할 수 있음). 또한 로컬 Raspberry Pi IP 주소는 정적이어야 합니다.

<code>활성화</code> 및 <code>상태 지</code>를 클릭하지 않도록 주의하십시오.

</li>

<li>

변경 사항을 저장하십시오. 이제 장치가 Home Assistant에 자동으로 표시됩니다.

</li>
</List>

</li>

<li>

장치 연결 

<List>

<li>

<code>Zigbee</code> -> <code>가입</code>으로 이동하여 장치를 연결하십시오. 센서를 페어링 모드로 설정하고 장치를 연결 모드로 전환하는 가장 일반적인 방법은 전원 버튼을 길게 누르거나 5회 켜고 끄는 것입니다.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Zigbee 장치를 검색하려면 활성화 조인 버튼을 누르세요. 활성 센서를 볼 수 있을 것입니다.

</li>

</List>
</li>

</List>