---
title: "Lección #2, Configuración de Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 2
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introducción

En esta lección, prepararás tu Raspberry Pi para convertirse en un centro de IoT. Instalarás y configurarás secuencialmente todos los componentes necesarios, a saber:

<List>

- Distribución de Ubuntu Linux para Raspberry Pi como sistema operativo de servidor;
- Paquetes de Home Assistant;
- Paquetes de IPFS;
- biblioteca de robonomics-interface.

</List>

## Instrucciones

<List type="numbers">

<li>

Preparación y configuración de Raspberry Pi

<List>

  <li>

  Descarga la imagen de [Ubuntu Server 22.04 LTS de 64 bits](https://ubuntu.com/download/raspberry-pi) o más reciente para Raspberry Pi.
  </li>

  <li>

  Descarga e instala una herramienta para escribir archivos de imagen llamada [Raspberry Pi Imager](https://www.raspberrypi.com/software/) en tu computadora.
  </li>

  <li>

  Inserta la tarjeta SD y ejecuta Raspberry Pi Imager. Selecciona la imagen requerida (que acabas de descargar) como sistema operativo y asegúrate de seleccionar tu tarjeta SD del menú desplegable de almacenamiento.

  </li>

  <li>

  Abre la configuración y marca la opción <code>Enable SSH</code> con el parámetro <code>Use password authentication</code>.

  \- En <code>Set username and password</code> agrega el nombre de usuario y la contraseña para tu usuario de Raspberry Pi.

  \- En <code>Configure wireless LAN</code> proporciona tu Wi-Fi con su contraseña y elige tu país de la lista desplegable. Luego <code>Write</code> la imagen.

  <robo-academy-note type="okay">
  Asegúrate de ingresar el nombre real de tu Wi-Fi y tu contraseña de Wi-Fi.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Espera hasta que termine la escritura, luego inserta la tarjeta SD en la Raspberry Pi y enciéndela. Debería conectarse a tu red Wi-Fi, lo cual tomará un tiempo.

  </li>
  
  <li>

  Ahora necesitas encontrar la dirección del dispositivo. Para hacerlo, puedes usar varios métodos de escaneo de red, como [Fing App](https://www.fing.com/products), el comando <code>arp -a</code> o [nmap](https://nmap.org/download.html). Este último se usará a continuación.

  Instala nmap con un comando

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Luego encuentra tu dirección en tu red local. Debería verse como <code>192.168.xxx.xxx</code> o <code>172.xxx.xxx.xxx.</code> Presta atención ya que nmap puede encontrar muchas direcciones en tu red local.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Luego escanea tu red como se muestra a continuación reemplazando el último octeto de la dirección con <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  La salida del comando será algo como esto:

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

  En este ejemplo la dirección es <code>192.168.43.56.</code>

  </li>

  <li>

  Conéctate al Raspberry Pi a través de SSH con la IP encontrada. Utiliza el nombre de usuario y la contraseña que creaste anteriormente.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Las instrucciones adicionales se ejecutan a través de SSH en el propio Raspberry Pi.
  
  </li>
</List>
</li>

<li>

Instalación de Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Algunas versiones de software mostradas a continuación pueden estar desactualizadas. Para obtener las últimas versiones, puedes consultar el [repositorio de instalación de la imagen de Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Antes de comenzar, actualiza el sistema del Raspberry Pi e instala los paquetes necesarios. Durante la instalación verás una ventana con una solicitud de reinicio del servicio. Simplemente elige <span class="accent">ok</span> con el botón <code>tab</code> y presiona enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Crea el usuario <code>homeassistant</code> y el directorio para Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Crea un entorno virtual para Home Assistant Core y cámbiate a él. Esto debe hacerse como usuario <code>homeassistant</code>, por lo que después de ejecutar los comandos tu usuario se verá como <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  Como resultado, encontrarás un nombre del entorno virtual entre corchetes:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Instala los paquetes de Python requeridos:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Iniciar Home Assistant Core por primera vez. Esto completará la instalación creando automáticamente el directorio de configuración <code class="nowb">.homeassistant</code> en el directorio <code>/home/homeassistant</code>, e instalando cualquier dependencia básica:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Mientras la configuración inicial está en progreso, verifique su instalación a través de la interfaz web en <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. En este ejemplo: <code>http://192.168.43.56:8123</code>. Puede abrir una interfaz web desde cualquier computadora conectada a su red local.

  Espere hasta que aparezca la ventana de bienvenida con la creación de usuario / contraseña y luego detenga Home Assistant con <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Instalación de IPFS

<List>

  <li>

  Para la instalación de IPFS puede utilizar nuestro script para descargar IPFS y crear un servicio systemd con él. Primero, salga del entorno virtual de Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Luego ejecute:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Servicios de Systemd

<List>

<li>

El servicio de Systemd es útil para automatizar el inicio de Home Assistant. Cree un nuevo servicio para Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Pegue lo siguiente

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

Habilitar y iniciar el servicio:

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

Integración de Robonomics

<List>

<li>

Inicie sesión con el usuario <code>homeassistant</code> en su Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Active el entorno virtual y instale los paquetes de Python requeridos:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Luego vaya al directorio <code>.homeassistant</code>, cree la carpeta <code class="nowb">custom_components</code> y clone allí el repositorio con la integración:


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

Después de eso, salga del usuario homeassistant y reinicie el servicio:

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



