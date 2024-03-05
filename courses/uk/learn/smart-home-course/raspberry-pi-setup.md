---
title: "Урок №2, Налаштування Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: курс домашнього асистента
lessonNumber: 2
metaOptions: [Вивчайте, Суверенний Розумний Дім з Robonomics та Домашнім Асистентом]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Вступ

У цьому уроці ви підготуєте свій Raspberry Pi до перетворення на центр Інтернету речей. Ви послідовно встановите та налаштуєте всі необхідні компоненти, а саме:

<List>

- Дистрибутив Ubuntu Linux для Raspberry Pi як операційна система сервера;
- Пакети Home Assistant;
- Пакети IPFS;
- бібліотека robonomics-interface.

</List>

## Інструкції

<List type="numbers">

<li>

Підготовка та налаштування Raspberry Pi

<List>

  <li>

  Завантажте образ [64-бітного Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) або новіший для Raspberry Pi.
  </li>

  <li>

  Завантажте та встановіть інструмент для запису образів дисків під назвою [Raspberry Pi Imager](https://www.raspberrypi.com/software/) на ваш комп'ютер.
  </li>

  <li>

  Вставте SD-карту та запустіть Raspberry Pi Imager. Виберіть потрібний образ (який ви щойно завантажили) як операційну систему та переконайт��ся, що ви вибрали вашу SD-карту зі списку зберігання.

  </li>

  <li>

  Відкрийте налаштування та встановіть опцію <code>Увімкнути SSH</code> з параметром <code>Використовувати аутентифікацію за паролем</code>.

  \- У розділі <code>Встановити ім'я користувача та пароль</code> додайте ім'я користувача та пароль для вашого користувача Raspberry Pi.

  \- У розділі <code>Налаштувати бездротову мережу</code> вкажіть вашу Wi-Fi та її пароль та виберіть вашу країну зі списку. Потім <code>Записати</code> образ.

  <robo-academy-note type="okay">
  Переконайтеся, що ви вводите ваше справжнє ім'я Wi-Fi та пароль Wi-Fi.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Зачекайте, поки завершиться запис, потім вставте SD-карту в Raspberry Pi та увімкніть його. Він повинен підключитися до вашої Wi-Fi мережі, що займе деякий час.

  </li>
  
  <li>

  Тепер вам потрібно знайти адресу пристрою. Для цього ви можете використовуват�� різні методи для сканування мережі, наприклад [Fing App](https://www.fing.com/products), команду <code>arp -a</code> або [nmap](https://nmap.org/download.html). Останнє буде використано далі.

  Встановіть nmap за допомогою команди

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Потім знайдіть свою адресу в локальній мережі. Вона повинна виглядати як <code>192.168.xxx.xxx</code> або <code>172.xxx.xxx.xxx.</code> Зверніть увагу, оскільки nmap може знайти багато адрес у вашій локальній мережі.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Потім проскануйте свою мережу, як показано нижче, замінивши останній октет адреси на <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  Вивід команди буде схожий на це:

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

  У цьому прикладі адреса - <code>192.168.43.56.</code>

  </li>

  <li>

  Підключіться до Raspberry Pi через SSH за знайденою IP-адресою. Використовуйте ім'я користувача та пароль, які ви створили раніше.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Далі інструкції виконуються через SSH на самому Raspberry Pi.
  
  </li>
</List>
</li>

<li>

Установка Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Деякі показані нижче версії програмного забезпечення можуть бути застарілими. Для отримання останніх версій ви можете звернутися до [репозиторію установки зображення Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Перед початком оновіть систему Raspberry Pi та встановіть необхідні пакети. Під час установки ви побачите вікно з запитом на перезапуск служби. Просто виберіть <span class="accent">ok</span> за допомогою кнопки <code>tab</code> та натисніть enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Створіть користувача <code>homeassistant</code> та каталог для Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Створіть віртуальне середовище для Home Assistant Core та перейдіть до нього. Це повинно бути зроблено як користувач <code>homeassistant</code>, тому після виконання команд ваш користувач буде виглядати як <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  В результаті ви знайдете назву віртуального середовища у дужках:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Встановіть необхідні пакети Python:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Почніть Home Assistant Core вперше. Це завершить встановлення автоматично створивши каталог конфігурації <code class="nowb">.homeassistant</code> в каталозі <code>/home/homeassistant</code> та встановивши будь-які основні залежності:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Поки триває початкове налаштування, перевірте своє встановлення через веб-інтерфейс за адресою <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. У цьому прикладі: <code>http://192.168.43.56:8123</code>. Ви можете відкрити веб-інтерфейс з будь-якого комп'ютера, підключеного до вашої локальної мережі.

  Зачекайте, поки ви побачите вікна з вітанням з можливістю створення логіна / пароля, а потім зупиніть Home Assistant за допомогою <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Встановлення IPFS

<List>

  <li>

  Для встановлення IPFS ви можете скористатися нашим скриптом для завантаження IPFS та створення служби systemd з ним. Спочатку вийдіть з віртуального середовища для Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Потім виконайте:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Служби Systemd

<List>

<li>

Служба systemd корисна для автоматизації запуску Home Assistant. Створіть нову службу для Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Вставте наступне

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

Увімкніть та запустіть службу:

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

Інтеграція Robonomics

<List>

<li>

Увійдіть під користувачем <code>homeassistant</code> на вашому Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Активуйте віртуальне середовище та встановіть необхідні пакети Python:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Потім перейдіть до каталогу <code>.homeassistant</code>, створіть папку <code class="nowb">custom_components</code> та клонуйте туди репозиторій з інтеграцією:


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

Після цього вийдіть з користувача homeassistant та перезапустіть службу:

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



