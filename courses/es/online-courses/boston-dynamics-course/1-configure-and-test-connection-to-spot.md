---
title: "Lección #1, Configurar y probar la conexión a Spot"
description: En esta lección, aprenderá cómo configurar la red Yggdrasil y establecer una conexión con el robot.
lessonNumber: 1
courseID: 2
metaOptions: [Cursos online, Desarrollo de software de Boston Dynamics Spot]
---

<section class="container__narrow">

## Sobre qué se trata esto

En esta lección, aprenderá cómo configurar la red Yggdrasil y establecer una conexión con el robot.

</section>


<section class="container__narrow">

## El reto

Nuestro objetivo es obtener respuestas de Spot a nuestras señales de [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)). Usamos Yggdrasil Network para exponer Spot a Internet, eso significa que primero necesitaremos configurar el soporte de Yggdrasil Network en su computadora.

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

Instalación de Yggdrasil

Yggdrasil es una implementación en etapa inicial de una red IPv6 totalmente cifrada de extremo a extremo. Antes de comenzar las lecciones, debe instalarlo en su computadora.

Para Linux: instrucciones de instalación [aqui](https://yggdrasil-network.github.io/installation-linux-deb.html).

Para MacOS: Descargue el archivo .pkg de [aqui](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg). Localice el archivo descargado en Finder. Haga clic con el botón derecho en él y haga clic en Abrir. Siga paso a paso el instalador como de costumbre.

Para Windows: Descargue el archivo .msi para [el sistema x64](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) o para [el sistema x32](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi)y ejecútelo con doble clic.
</li>

<li>

Abrir archivo de configuración

Necesitas agregar una lista de pares (nodos públicos) al archivo de configuración para poder conectarse a Spot.

Para MacOS y Linux:

Para eso, edite el arcivo <code>yggdrasil.conf</code> con este comando en un terminal:

<lessonCodeWrapper language="bash">sudo nano /etc/yggdrasil.conf</lessonCodeWrapper>

Para Windows: Ejecute <code>updateconfig.bat</code> en <code>C:/Program Files/Yggdrasil</code>.

Luego en <code>C:/ProgramData/Yggdrasil</code> abra <code>yggdrasil.conf</code> con cualquier editor de texto.

<code>ProgramData</code> es una carpeta oculta, por lo que debe mostrar los datos ocultos.

</li>

<li>

Write peers

En el archivo que abrió, busque la línea <code>Peers:</code> (está al principio del archivo) agregue 5-6 peers geográficamente cerca de usted (escríbalos dentro de los corchetes). Puede encontrar una lista de peers disponibles [aqui](https://github.com/yggdrasil-network/public-peers) o agregue peers del ejemplo a continuación. Ejemplo en yggdrasil.conf:

<lessonCodeWrapper language="json">
[
  tcp://213.188.199.150:10010
  tcp://213.188.210.9:10010
  tcp://[2a09:8280:1::3:312]:10010
  tcp://[2a09:8280:1::a:2e2]:10010
  tcp://46.151.26.194:60575
  tcp://ygg-ru.cofob.ru:18000
  tcp://ygg.tomasgl.ru:61933
  tls://185.22.60.71:8443
  tcp://51.15.118.10:62486
  tls://ygg.loskiq.dev:17314
  tls://longseason.1200bps.xyz:13122
]
</lessonCodeWrapper>

Compruebe si los peers en línea en [Peers públicos](https://publicpeers.neilalexander.dev/)

</li>

<li>

Guardar y cerrar el archivo de configuración.

Para Linux y MacOS:

Presione <code>Ctrl+x</code>, entonces presione <code>y</code> para guardar los cambios y presione <code>Enter</code>.

Para Windows: Guardar y cerrar archivo.

</li>

<li>

Reiniciar servicio

Para Linux: luego reinicie Yggdrasil usando este comando:

<lessonCodeWrapper language="bash">systemctl restart yggdrasil</lessonCodeWrapper>

Para macOS: descargue el servicio y ejecute Yggdrasil con el archivo de configuración modificado:

<lessonCodeWrapper language="bash" codeClass="big-code">
sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf
</lessonCodeWrapper>

Deberá hacerlo antes de cada lección.

Para Windows:

Presiona win + r y escriba <code>services.msc</code>, encuentre Yggdrasil srvice, ábralo y reinícielo (presione Stop y Start).

<LessonImages src="boston-dynamics-course/lesson-0-1.jpg" alt="tutorial"/>
</li>

<li>

Verifica la conexión

Comprueba si Yggdrasil funciona bien. Para eso, intente hacer ping a la dirección de Spot:

<lessonCodeWrapper language="bash">ping -6 strelka.ygg.merklebot.com</lessonCodeWrapper>

Para abrir el terminal en Windows presione <code>Win+R</code>, escriba <code>cmd</code> y presione <code>Enter</code>.

En MacOS use <code>ping6</code> en lugar de <code>ping</code>.

Si no puede hacer ping a Spot o tuvo algún error durante la configuración de Yggdrasil, busque en [la página de Solución de problemas](https://dapp.spot-sdk.education/docs/spot-troubleshooting). Si no puede encontrar la solución allí, envíe un correo electrónico a **spot@robonomics.network**.

</li>

<li>

Crear clave ssh

Se conectará a Spot a través de ssh, por lo que debe crear claves ssh que utilizará para reservar lecciones.

Ejecute el siguiente comando en la terminal:

<lessonCodeWrapper language="bash">ssh-keygen -t rsa</lessonCodeWrapper>

SSH Client está disponible de forma predeterminada solo en Windows 10, por lo que si usa versiones anteriores, debe instalarlo. Por ejemplo, puedes usar [PuTTY](https://www.putty.org/). Recuerde la ruta a su clave (por defecto es <code>/home/&lt;user&gt;/.ssh/id_rsa.pub</code> o <code>C:\Users\&lt;user&gt;\.ssh\id_rsa.pub</code>).
</li>
</List>
</section>

<section class="container__narrow">

### ¿Estás listo para practicar?

Una vez que se sienta listo, puede comprar una sesión de práctica de 1 hora especificando sus credenciales de acceso (clave SSH) y la hora en que desea conectarse a Spot para resolver la tarea.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alquile un Spot" />

</section>