---
title: "Lección #3, Configuración y conexión de sensores"
description: 'CONFIGURACIÓN Y CONEXIÓN DE SENSORES'
lessonNumber: 3
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Nuestros sensores utilizan el firmware Robonomics, una versión extendida del firmware sensor.community, con algunos sensores agregados y el esquema de envío de datos cambiado. El código fuente se puede encontrar [en el enlace](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Si tienes una placa Robonomics lista para usar, puedes ir a la sección "Conectar".

## Requisitos

**Para Linux:**

<List type="numbers">

<li>

Agrega un usuario al grupo `dialout` (para Ubuntu) para obtener acceso al puerto USB:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Reinicia la computadora.</li>

<li>

Descarga el ejecutable Robonomics `airrohr-flasher` desde [releases](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Cambia los permisos del archivo y ejecútalo:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Para Windows:**

<List type="numbers">

<li>

Instalar controladores para USB2serial (en Windows 10 debería iniciarse automáticamente) - Controladores para NodeMCU v3 (CH340): [enlace](http://www.wch.cn/downloads/file/5.html), [enlace alternativo](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Descargue el ejecutable Robonomics `airrohr-flasher` de [lanzamientos](https://github.com/airalab/sensors-connectivity/releases) y ejecútelo.

</li>

</List>

**Para MacOS:**

<List type="numbers">

<li>

Instala los controladores para USB2serial — Controladores para NodeMCU v3 (CH340): [enlace](http://www.wch.cn/downloads/file/178.html), [enlace alternativo](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Descargue el ejecutable Robonomics `airrohr-flasher` de [lanzamientos](https://github.com/airalab/sensors-connectivity/releases) y ejecútelo.

</li>

</List>


## Configuración

<List type="numbers">

<li>

Conecta el sensor a la PC y ejecuta el programa `airrohr-flasher`. Después de abrir el programa verás lo siguiente (dependiendo de tu sistema operativo):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

El campo `Board` debería llenarse automáticamente; si no, elige el puerto requerido de la lista desplegable.

<RoboAcademyNote type="okay" title="INFO">
Si <code>airrohr-flasher</code> no puede encontrar tu placa, asegúrate de haber completado la parte de <b>Requisitos</b> correctamente.
</RoboAcademyNote>

</li>

<li>

Selecciona el firmware con el idioma preferido y haz clic en `Upload`. La carga del firmware llevará un tiempo. Si luego decides cambiar el idioma o hacer una instalación clara (para restablecer la configuración), ve a la página `Erase flash` y presiona el botón para borrar la memoria flash del sensor.

</li>

<li>

Después de descargar el firmware, reinicia el ESP (simplemente desconecta y vuelve a conectar el USB).

</li>

<li>

Elige los sensores del menú de casillas de verificación. Elige SDS011 y cualquier sensor adicional. Presiona `Save configuration`.

</li>

<li>

Después de descargar la configuración, reinicia el ESP (simplemente desconecta y vuelve a conectar el USB).

</li>

</List>

## Conectar

<List type="numbers">

<li>

Después de reiniciar, la placa creará una red Wi-Fi llamada `RobonomicsSensor-xxxxxxxxx`. Conéctese desde su teléfono o computadora: verá la ventana de autorización (si no, abra el navegador y vaya a `192.168.4.1`).

</li>

<li>

Selecciona tu red Wi-Fi de la lista (o escríbela tú mismo si no está en la lista) y completa el campo de contraseña.

</li>

<li>

Escribe las coordenadas del lugar donde se instalará el sensor.

<RoboAcademyNote type="warning" title="WARNING">
Las coordenadas del sensor se mostrarán en un mapa de acceso público. Si no quieres mostrar tu información privada, escribe coordenadas cercanas pero no exactas.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Haga clic en `Guardar configuración y reiniciar`. La placa se reiniciará y se conectará a la red Wi-Fi especificada. 

</li>

<li>

Abra el [mapa de sensores Robonomics](https://sensors.robonomics.network/#/) y busque el lugar donde instaló el sensor. En un par de minutos podrás ver tu sensor con datos en el mapa.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Eso es todo con la instalación predeterminada. Para una configuración más avanzada (enviar datos a tu propio servidor), lee la siguiente sección.

## Adicional Configuración

Antes de la configuración, necesitas encontrar la dirección del sensor en tu red Wi-Fi. Para hacer esto, puedes usar `airrohr-flasher` (tu computadora debe estar en la misma red que el sensor). Inícialo y ve a la pestaña `Discovery`, luego presiona `Refresh`, espera un momento y aparecerá la dirección de tu sensor.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Haz doble clic en esta dirección (o escríbela en tu navegador), llegarás al menú del sensor:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Ahora puedes empezar a personalizar tu configuración.


## API personalizada

También puedes configurar el envío de datos a tu propio servidor. Para hacer esto, en la pestaña `APIs` haz clic en `Enviar a tu propia API` y especifica la dirección del servidor y el puerto (`65` para la conectividad de los sensores):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Haga clic en `Save and restart` para guardar la configuración.