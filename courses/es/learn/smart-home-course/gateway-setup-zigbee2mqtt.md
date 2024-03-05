---
title: "Lección #4a, Configuración de la Puerta de Enlace: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 4
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introducción

Este es un escenario de configuración para conectar dispositivos utilizando el adaptador Zigbee y el puente Zigbee2MQTT. Si tienes el [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (que tiene todo el firmware necesario), simplemente puedes seguir estas instrucciones. Sin embargo, si tienes otro adaptador, lo primero que necesitas hacer es flashearlo con el software Zigbee2MQTT. Puedes encontrar instrucciones para tu dispositivo [aquí](https://www.zigbee2mqtt.io/guide/adapters/).

También necesitarás un dispositivo inteligente para probar su conexión con Home Assistant.


## Instrucciones

<List type="numbers">

<li>

Instalación de Software

<List>

  <li>
    Configura el repositorio del entorno de ejecución de Node.js e instálalo con las dependencias requeridas:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Verifica que las versiones correctas de Node.js (v14.X, V16.x, V17.x o V18.X) y el gestor de paquetes <code class="nowb">npm</code> (6.X, 7.X o 8.X) instalados automáticamente con Node.js, hayan sido instalados:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Crea un directorio para Zigbee2MQTT y establece tu usuario como propietario de él:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Clona el repositorio de Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Instalar dependencias. Tenga en cuenta que <code>npm ci</code> podría producir algunas advertencias que se pueden ignorar.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Conexión y Configuración del Adaptador

<List>

<li>

Conecta el adaptador Zigbee a la Raspberry Pi. Luego necesitas encontrar la ubicación del stick. Para esto escribe el siguiente comando:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

La salida debería verse como:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

En este ejemplo, el directorio de conexión del stick es <code>ttyUSB0</code>.
</li>

<li>

Editar el archivo <code>configuration.yaml</code> antes de iniciar Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

La configuración básica necesita algunos ajustes. Cambie las siguientes declaraciones:

\- <code>homeassistant:</code> a <code>true</code>, se conectará automáticamente los sensores a Home Assistant;

\- descomente <code>user</code> y <code>password</code> bajo <code>mqtt</code> e ingrese su nombre de usuario y contraseña (como una cadena, con comillas) del Broker MQTT;

\- cambie el puerto en <code>serial</code> -> <code>port</code> al directorio de conexión del stick. En este ejemplo: <code>/dev/ttyUSB0</code>.

El archivo de configuración ajustado debería verse así:

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


**Extra:**

Si ya tiene un adaptador o gateway Zigbee activo en su hogar, y ahora está configurando otro stick, entonces entrarán en conflicto entre sí. Para resolver este problema, debe cambiar el canal en el nuevo dispositivo. Para esto, agregue las siguientes cadenas al final del archivo de configuración:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Iniciar Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Si se inicia correctamente, verás algo como:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Emparejamiento de dispositivo

<List>

<li>

Es hora de conectar tu dispositivo inteligente. La forma más común de cambiar un dispositivo al modo de conexión es mantener presionado su botón de encendido o encenderlo/apagarlo 5 veces. Asegúrate de que Zigbee2MQTT esté en funcionamiento.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Cuando el dispositivo se conecte, deberías ver un mensaje como:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Recuerda el ID del sensor: en este ejemplo — <code>0x00158d0003eeeacf</code>.

Ahora deberías ver este sensor con ID en tu interfaz web de Home Assistant. Ve a <code>Configuración</code> -> <code>Dispositivos y Servicios</code> -> <code>Dispositivos</code> para comprobarlo:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Después de agregar todos los sensores, puedes detener el programa con <code>Ctrl+C</code>. Si no quieres agregar más dispositivos, puedes abrir el archivo de configuración nuevamente y establecer <code>permit_join:</code> en <code>false</code>.
</li>

</List>
</li>

<li>

Creando Servicio para Autostart

<List>

<li>

Ahora necesitas crear un servicio. Crea el archivo:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Agrega lo siguiente a este archivo cambiando <code>TU_NOMBRE_DE_USUARIO_DE_RASPPI_AQUÍ</code>. Si no sabes tu nombre de usuario, usa el comando <code>whoami</code>.

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

Verifica que la configuración funcione:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

La salida debería verse como:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Habilita el servicio para iniciar Zigbee2MQTT automáticamente al arrancar:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>