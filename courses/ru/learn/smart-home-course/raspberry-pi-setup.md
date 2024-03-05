---
title: "Урок №2, Настройка Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: курс домашнего помощника
lessonNumber: 2
metaOptions: [Изучите суверенный умный дом с помощью Robonomics и Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Вступление

В этом уроке вы подготовите ваш Raspberry Pi к тому, чтобы он стал центром Интернета вещей. Вы последовательно установите и настроите все необходимые компоненты, а именно:

<List>

- Дистрибутив Ubuntu Linux для Raspberry Pi в качестве серверной операционной системы;
- Пакеты Home Assistant;
- Пакеты IPFS;
- Библиотека robonomics-interface.

</List>

## Инструкции

<List type="numbers">

<li>

Подготовка и настройка Raspberry Pi

<List>

  <li>

  Скачайте образ [64-битного Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) или новее для Raspberry Pi.
  </li>

  <li>

  Скачайте и установите инструмент для записи образов на карту памяти под названием [Raspberry Pi Imager](https://www.raspberrypi.com/software/) на ваш компьютер.
  </li>

  <li>

  Вставьте SD-карту и запустите Raspberry Pi Imager. Выберите необходимый образ (который вы только что скачали) в качестве операционной системы и убедитесь, что выбрали вашу SD-карту из выпадающего меню хранилища.

  </li>

  <li>

  Откройте настройки и убедитесь, что опция <code>Включить SSH</code> выбрана с параметром <code>Использовать аутентификацию по паролю</code>.

  \- В разделе <code>Установить имя пользователя и пароль</code> добавьте имя пользователя и пароль для вашего пользователя Raspberry Pi.

  \- В разделе <code>Настроить беспроводную сеть</code> укажите ваш Wi-Fi с паролем и выберите свою страну из выпадающего списка. Затем нажмите <code>Записать</code> образ.

  <robo-academy-note type="okay">
  Убедитесь, что вы вводите фактическое имя вашей Wi-Fi сети и пароль от нее.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Дождитесь завершения записи, затем вставьте SD-карту в Raspberry Pi и включите его. Он должен подключиться к вашей Wi-Fi сети, что займет некоторое время.

  </li>
  
  <li>

  Теперь вам нужно найти адрес устройства. Для этого вы можете использовать различные методы сканирования сети, такие как [Fing App](https://www.fing.com/products), команду <code>arp -a</code> или [nmap](https://nmap.org/download.html). Последний будет использоваться далее.

  Установите nmap с помощью команды

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Затем найдите свой адрес в локальной сети. Он должен выглядеть как <code>192.168.xxx.xxx</code> или <code>172.xxx.xxx.xxx.</code> Обратите внимание, что nmap может найти много адресов в вашей локальной сети.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Затем отсканируйте свою сеть, как показано ниже, заменив последний октет адреса на <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  Вывод команды будет выглядеть примерно так:

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

  В этом примере адрес будет <code>192.168.43.56.</code>

  </li>

  <li>

  Подключитесь к Raspberry Pi через SSH с найденным IP. Используйте имя пользователя и пароль, которые вы создали ранее.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Дальнейшие инструкции выполняются через SSH на самом Raspberry Pi.
  
  </li>
</List>
</li>

<li>

Установка Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Некоторые показанные ниже версии программного обеспечения могут быть устаревшими. Для получения последних версий вы можете обратиться к [репозиторию установки образа Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Перед началом обновите систему Raspberry Pi и установите необходимые пакеты. Во время установки вы увидите окно с запросом на перезапуск службы. Просто выберите <span class="accent">ok</span> с помощью кнопки <code>tab</code> и нажмите enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Создайте пользователя <code>homeassistant</code> и каталог для Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Создайте виртуальное окружение для Home Assistant Core и переключитесь на него. Это должно быть сделано от имени пользователя <code>homeassistant</code>, поэтому после выполнения команд ваш пользователь будет выглядеть как <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  В результате вы найдете имя виртуального окружения в скобках:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Установите необходимые пакеты Python:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Запустите Home Assistant Core впервые. Это завершит установку автоматическим созданием каталога конфигурации <code class="nowb">.homeassistant</code> в каталоге <code>/home/homeassistant</code> и установкой всех основных зависимостей:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Пока идет начальная настройка, проверьте свою установку через веб-интерфейс по адресу <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. В этом примере: <code>http://192.168.43.56:8123</code>. Вы можете открыть веб-интерфейс с любого компьютера, подключенного к вашей локальной сети.

  Дождитесь появления приветственного окна с созданием логина / пароля, а затем остановите Home Assistant с помощью <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Установка IPFS

<List>

  <li>

  Для установки IPFS вы можете использовать наш скрипт для загрузки IPFS и создания службы systemd с ним. Сначала выйдите из виртуальной среды для Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Затем выполните:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Службы Systemd

<List>

<li>

Служба systemd полезна для автоматизации запуска Home Assistant. Создайте новую службу для Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Вставьте следующее

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

Включите и запустите службу:

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

Интеграция Robonomics

<List>

<li>

Войдите под пользователем <code>homeassistant</code> на вашем Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Активируйте виртуальную среду и установите необходимые пакеты Python:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Затем перейдите в каталог <code>.homeassistant</code>, создайте папку <code class="nowb">custom_components</code> и клонируйте туда репозиторий с интеграцией:


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

После этого выйдите из пользователя homeassistant и перезапустите службу:

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



