---
title: "레슨 #2, 라즈베리 파이 설정"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: 홈 어시스턴트 코스
lessonNumber: 2
metaOptions: [로보노믹스와 홈 어시스턴트를 활용한 주권 스마트 홈 배우기]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## 소개

이 레슨에서는 라즈베리 파이를 IoT 허브로 준비할 것입니다. 필요한 모든 구성 요소를 순차적으로 설치하고 구성할 것입니다. 즉,

<List>

- 서버 운영 체제로 라즈베리 파이용 Ubuntu Linux 배포판;
- 홈 어시스턴트 패키지;
- IPFS 패키지;
- robonomics-interface 라이브러리.

</List>

## 지침

<List type="numbers">

<li>

라즈베리 파이의 준비 및 구성

<List>

  <li>

  라즈베리 파이용 [64비트 Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) 또는 그 이상의 이미지를 다운로드합니다.
  </li>

  <li>

  이미지 파일을 작성하는 도구인 [Raspberry Pi Imager](https://www.raspberrypi.com/software/)를 컴퓨터에 다운로드하고 설치합니다.
  </li>

  <li>

  SD 카드를 삽입하고 Raspberry Pi Imager를 실행합니다. 다운로드한 운영 체제로 필요한 이미지를 선택하고 저장 드롭다운 메뉴에서 SD 카드를 선택합니다.

  </li>

  <li>

  설정을 열고 <code>SSH 활성화</code> 옵션을 <code>비밀번호 인증 사용</code> 매개변수와 함께 선택합니다.

  \- <code>사용자 이름 및 암호 설정</code>에서 라즈베리 파이 사용자의 사용자 이름과 암호를 추가합니다.

  \- <code>무선 LAN 구성</code>��서 Wi-Fi와 해당 암호를 제공하고 드롭다운 목록에서 국가를 선택합니다. 그런 다음 <code>작성</code> 이미지를 선택합니다.

  <robo-academy-note type="okay">
  실제 Wi-Fi 이름과 Wi-Fi 암호를 입력했는지 확인하세요.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  쓰기가 완료될 때까지 기다린 후 SD 카드를 라즈베리 파이에 삽입하고 전원을 켭니다. 일정 시간이 걸려 Wi-Fi 네트워크에 연결해야 합니다.

  </li>
  
  <li>

  이제 장치의 주소를 찾아야 합니다. 이를 위해 [Fing 앱](https://www.fing.com/products), <code>arp -a</code> 명령 또는 [nmap](https://nmap.org/download.html)과 같은 네트워크 스캔을 위한 다양한 방법을 사용할 수 있습니다. 다음에는 후자를 사용할 것입니다.

  명령을 사용하여 nmap을 설치합니다

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  그런 다음 로컬 네트워크에서 주소를 찾으세요. <code>192.168.xxx.xxx</code> 또는 <code>172.xxx.xxx.xxx.</code>와 같이 보일 것입니다. nmap이 로컬 네트워크에서 많은 주소를 찾을 수 있으므로 주의하세요.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  다음과 같이 네트워크를 스캔하고 주소의 마지막 옥텟을 <code>0</code>으로 바꿔주세요:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  명령의 출력은 다음과 같을 것입니다:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  이 예에서 주소는 <code>192.168.43.56.</code>입니다.

  </li>

  <li>

  발견한 IP로 라즈베리 파이에 SSH로 연결하세요. 이전에 만든 사용자 이름과 암호를 사용하세요.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  추가 지침은 라즈베리 파이 자체에서 SSH를 통해 실행됩니다.
  
  </li>
</List>
</li>

<li>

홈 어시스턴트 설치

<List>
  <li>

  <robo-academy-note type="okay">

아래에 표시된 일부 소프트웨어 버전은 오래되었을 수 있습니다. 최신 버전은 [로보노믹스 홈 어시스턴트 이미지 설치 저장소](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage)를 참조할 수 있습니다.

  </robo-academy-note>

  시작하기 전에 라즈베리 파이 시스템을 업데이트하고 필요한 패키지를 설치하세요. 설치 중에 서비스 재시작 요청이 포함된 창이 표시됩니다. <span class="accent">ok</span>를 선택하고 <code>tab</code> 버튼을 누르고 엔터를 누르세요.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  <code>homeassistant</code> 사용자와 홈 어시스턴트 코어를 위한 디렉토리를 만드세요:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  홈 어시스턴트 코어를 위한 가상 환경을 만들고 전환하세요. 이 작업은 <code>homeassistant</code> 사용자로 수행해야 하므로 명령을 실행한 후 사용자는 다음과 같이 보일 것입니다: <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  결과적으로 괄호 안에 가상 환경의 이름을 찾을 수 있습니다:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  필요한 Python 패키지를 설치하세요:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  홈 어시스턴트 코어를 처음으로 시작합니다. 이렇게 하면 <code class="nowb">.homeassistant</code> 구성 디렉토리가 <code>/home/homeassistant</code> 디렉토리에 자동으로 생성되고 기본 종속성이 설치됩니다.
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  초기 설정이 진행 중일 때 웹 인터페이스를 통해 설치를 확인하십시오. <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. 이 예에서는: <code>http://192.168.43.56:8123</code>. 로컬 네트워크에 연결된 컴퓨터에서 웹 UI를 열 수 있습니다.

  환영 창과 로그인 / 비밀번호 생성이 표시될 때까지 기다리고 <code>Ctrl+C</code>로 홈 어시스턴트를 중지합니다.
  </li>
</List>
</li>

<li>

IPFS 설치

<List>

  <li>

  IPFS 설치를 위해 IPFS를 다운로드하고 systemd 서비스를 만들기 위해 스크립트를 사용할 수 있습니다. 먼저 홈 어시스턴트의 가상 환경을 종료하십시오:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  그런 다음 실행하십시오:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Systemd 서비스

<List>

<li>

Systemd 서비스는 홈 어시스턴트의 자동화된 시작에 유용합니다. 홈 어시스턴트를 위한 새 서비스를 만듭니다:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

다음을 붙여넣으십시오

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

서비스를 활성화하고 시작하십시오:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

로보노믹스 통합

<List>

<li>

라즈베리 파이에서 <code>homeassistant</code> 사용자로 로그인하십시오:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

가상 환경을 소스로 사용하고 필요한 Python 패키지를 설치하십시오:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

그런 다음 <code>.homeassistant</code> 디렉토리로 이동하여 <code class="nowb">custom_components</code> 폴더를 만들고 통합이 있는 저장소를 복제하십시오:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

그 후 homeassistant 사용자를 종료하고 서비스를 다시 시작하십시오:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



