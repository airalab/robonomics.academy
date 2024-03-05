---
title: "Lección #4b, Configuración de la Puerta de Enlace: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 5
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## ¿De qué se trata esto?

Esta es una configuración de escenario para conectar dispositivos utilizando la Puerta de Enlace Robonomics SLS. Robonomics tomó inspiración de diseño de la puerta de enlace desarrollada por el proyecto [Smart Logic System](https://github.com/slsys/Gateway) y modificó parte del circuito. Puedes ordenar una puerta de enlace de Robonomics o construir la tuya propia utilizando nuestros [planos](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Instalará el software necesario para la puerta de enlace, lo configurará y lo conectará a Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, un programa para actualizar firmware, requiere sistema operativo Windows.
</robo-academy-note>

## Instrucciones

<List type="numbers">

<li>

Instalación de Firmware del Microcontrolador Zigbee

<List>

<li>

Primero necesitas flashear el microcontrolador CC2652P de la puerta de enlace. Configura los interruptores <code>ON</code> <code>2</code>, <code>4</code> y <code>7</code> en la parte inferior de la Puerta de Enlace SLS, los demás deben estar <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Conecta la puerta de enlace a tu computadora con un cable USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Por favor utiliza solo cables de tipo USB-A<>USB-C, porque en este momento la puerta de enlace no soporta el tipo USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

El firmware CC2652 requiere SmartRF Flash Programmer v2 de Texas Instrument. Descárgalo desde [el sitio oficial](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) y luego instálalo.

</li>

<li>

Descarga el firmware para el microcontrolador CC2652P desde [el repositorio de GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Ejecuta el programa. En la ventana <code>Dispositivo Conectado</code> selecciona el microcontrolador CC2652P, establece la ruta al firmware, establece las banderas en <code>Borrar, Programar, Verificar</code> como en la imagen y presiona <code>Iniciar</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Después de un flasheo exitoso, verás un mensaje <code>¡Éxito!</code>. Ahora puedes desconectar el cable USB.

</li>
</List>
</li>

<li>

Instalación de Firmware del Microcontrolador

<List>

<li>

Ahora necesitas configurar la puerta de enlace para la instalación de software. Te recomendamos actualizar el firmware conectando la puerta de enlace directamente a tu Raspberry Pi e ingresando todos los siguientes comandos en ese dispositivo. 

</li>

<li>

Configura los interruptores <code>ON</code> <code>1</code> y <code>3</code> en la parte inferior de la puerta de enlace SLS, los demás deben estar <code>OFF</code>. Luego conecta la puerta de enlace a tu Raspberry Pi por el puerto tipo-C USB.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Conéctate al Raspberry Pi a través de SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Clona el repositorio con el firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Para flashear la puerta de enlace SLS necesitas ejecutar los scripts <code>Clear</code> y <code>Flash_16mb</code>:

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

\- **Solución de problemas**

Si estás experimentando problemas al actualizar el firmware de la puerta de enlace, necesitas seguir pasos adicionales:

<List>

<li>

Asegúrate de tener instalado el módulo pySerial:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Dale a tu usuario derechos de acceso al puerto USB:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

En algunos casos, es necesario cambiar la configuración de ancho de banda en el script para actualizar el firmware. Abre el script <code>Flash_16mb.sh</code> con el editor nano y cambia el parámetro de baudios de <code>921600</code> a un valor más pequeño (por ejemplo, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Extra**

También ofrecemos opciones para actualizar el firmware utilizando otros sistemas operativos (macOS y Windows). Puedes encontrar scripts correspondientes en una carpeta, cuyo nombre depende de tu SO.

</li>
</List>
</li>

<li>

Configuración del Gateway

<List>

<li>

Coloca los interruptores en la parte trasera del gateway en su nueva posición. Los interruptores <code>5</code> (RX Zigbee a ESP) y <code>6</code> (TX Zigbee a ESP) deben estar en la posición <code>ON</code>, los demás deben estar en la posición <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Conecta el cable de alimentación tipo-C. La luz indicadora en el centro debería ponerse verde.

</li>

<li>

En el primer arranque, el gateway comenzará a compartir Wi-Fi con el SSID <code>zgw****</code>. Conéctate a esta red. Ten en cuenta que la señal puede ser bastante débil, por lo que es mejor mantener el gateway SLS más cerca de tu computadora.

Si la conexión es exitosa, la interfaz web se abrirá (o puedes encontrarla en la dirección 192.168.1.1).

</li>

<li>

Ve a la página de Wi-Fi e inserta tus credenciales de Wi-Fi ingresando el usuario / contraseña y presiona el botón <code>Guardar</code>. Después presiona el botón <code>Reiniciar</code>. El gateway se reiniciará y se conectará a tu red WI-Fi.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Encuentra la IP local del gateway SLS para acceder a la interfaz web. Para eso puedes usar la aplicación [Fing](https://www.fing.com/products) o <code>arp -a</code> en tu terminal o Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

donde <code class="bold">xxx</code> es tu dirección IP en la red local. El nombre del gateway debería lucir así: <code>zgw****</code>. Abre la interfaz web del gateway pegando la IP del gateway en un navegador.
</li>

<li>

Ir a <code>Configuración</code> -> <code>Hardware</code> y asegurarse de que la configuración se vea como en la imagen. Corregir la configuración si es necesario y hacer clic en el botón <code>Guardar</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

La tabla con los valores requeridos:


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

Luego reiniciar el gateway. Elegir <code>Acciones</code> -> <code>Reiniciar sistema</code> en la esquina superior derecha. Asegurarse de que el gateway funcione correctamente con el microcontrolador CC2652P en la ventana de información de Zigbee. El estado del dispositivo debe ser <code>OK</code>.

</li>

<li>

Reiniciar el gateway. Elegir <code>Acciones</code> -> <code>Reiniciar</code> sistema en la esquina superior derecha.

</li>

<li>

Configurar la adición automática de dispositivos a Home Assistant. Ir a <code>Zigbee</code> -> <code>Configuración</code> luego elegir <code>Descubrimiento MQTT de Home Assistant</code> y <code>Borrar Estados</code>. Guardar los cambios y reiniciar nuevamente el gateway SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Extra**:

Si ya tienes un gateway SLS activo en tu hogar, y ahora estás configurando otro, entonces entrarán en conflicto entre sí. Para resolver este problema, necesitas cambiar el canal en el nuevo dispositivo.

Para hacer esto, ve a <code>Zigbee</code> -> <code>Configuración</code> y cambia el canal a otro (por ejemplo, canal 15).

</li>

<li>

Conecta tus dispositivos yendo a <code>Zigbee</code> -> <code>Unirse</code>. Pon tus sensores en modo de emparejamiento, la forma más común de cambiar un dispositivo al modo de conexión es mantener presionado su botón de encendido o encenderlos/apagarlos 5 veces. Presiona el botón <code>Habilitar Unión</code> para comenzar a buscar dispositivos Zigbee. Verás sensores activos.

</li>
</List>
</li>

<li>

Conectando el Gateway SLS a Home Assistant

<List>

<li>

Necesitas configurar MQTT en el Gateway SLS. Vuelve a la interfaz web de tu Gateway SLS y ve a <code>Configuración</code> -> <code>Enlace</code> -> <code>Configuración MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Agrega la dirección de tu broker (dirección del Raspberry Pi con Home Assistant en la red local, puedes encontrarla con la aplicación [Fing](https://www.fing.com/products) o usando el comando <code>ip -a</code> en tu RPi), el puerto (por defecto es 1883), tu nombre de usuario y contraseña del broker (que creaste anteriormente) y el nombre del tema (puedes elegir cualquiera). Además, la dirección IP local del Raspberry Pi debe ser estática.

No olvides hacer clic en <code>Habilitar</code> y <code>Retener estados</code>.

</li>

<li>

Guardar los cambios. Ahora los dispositivos se mostrarán automáticamente en Home Assistant.

</li>
</List>

</li>

<li>

Conectar Dispositivos 

<List>

<li>

Conecta tus dispositivos yendo a <code>Zigbee</code> -> <code>Unirse</code>. Pon tus sensores en modo de emparejamiento, la forma más común de cambiar un dispositivo al modo de conexión es mantener presionado su botón de encendido o encenderlos/apagarlos 5 veces.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Presiona el botón Habilitar Unión para comenzar a buscar dispositivos Zigbee. Verás sensores activos.

</li>

</List>
</li>

</List>