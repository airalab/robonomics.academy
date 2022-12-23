---
title: "Lección #5, Servicio GraphNav. Mapear y navegar en el mapa"
description: En la cuarta lección, aprenderá a grabar y jugar misiones autónomas con el servicio GraphNav.
lessonNumber: 5
courseID: 2
metaOptions: [Cursos online, Desarrollo de software de Boston Dynamics Spot]
---


<section class="container__reg">

## Sobre qué se trata esto

En la cuarta lección, aprenderá a grabar y jugar misiones autónomas con el servicio GraphNav.

</section>


<section class="container__reg">

## El reto

En esta lección, puede resolver el desafío sin escribir su propio script de Python.

<List type="numbers">
<li>Graba un mapa sorteando obstáculos. Puede utilizar la herramienta de control remoto WASD. Guarda tu misión en <code>/home/student/result</code>.</li>
<li>Mueva Spot a través de waypoints registrados. Puede utilizar la herramienta de líneas de comandos del servicio GraphNav.</li>
</List>

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

Spot SDK incluye API, bibliotecas de clientes y ejemplos que respaldan el desarrollo de comportamientos de navegación autónomos para el robot Spot. En conjunto, este servicio se conoce como GraphNav. Los mapas se graban y guardan y luego se pueden reproducir con cualquier robot de su flota. Durante el proceso de grabación del mapa, puede asignar acciones y devoluciones de llamada de la API a los puntos intermedios a lo largo de la ruta del mapa.

Lea [el resumen técnico de GraphNav](https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary) para saber cómo funciona. [La inicialización](https://dev.bostondynamics.com/docs/concepts/autonomy/initialization) también es una parte importante, será útil en esta lección.

Puede ver mapas grabados con [View Map](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map) ejemplo. FPara eso necesitas copiar el mapa a tu computadora:

<lessonCodeWrapper language="python" codeClass="big-code">
scp -r student@strelka.ygg.merklebot.com:&lt;path_to_the_map_on_spot&gt; &lt;path_to_the_map_to_download&gt;
</lessonCodeWrapper>

También necesita [instalar spot packages](https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-package).

Estudia [ejemplos de grabación y reproducción de misiones](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line) para usarlos para grabar el mapa y reproducir la misión grabada. Use el ejemplo [wasd](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd) para mover el robot mientras graba el mapa.

</li>

<li>

Conéctese a Spot desde un terminal o utilizando la función de ejecución remota de su ambiente de desarrollo.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Desarrolle y demuestre su solución al desafío.

Nosotros creamos [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para usted, por lo que no debe crearlo. Para la autenticación Spot, use el nombre de usuario y la contraseña de <code>/home/student/credentials</code> archivo. La dirección de Spot es <code>192.168.50.3</code>.

Puede ejecutar la herramienta de control remoto desde el directorio de ejemplos.

<lessonCodeWrapper language="bash">
cd ~/spot-sdk/python/examples/wasd
python3 wasd.py --username &lt;SPOT_AUTH_USERNAME&gt; --password &lt;SPOT_AUTH_PASSWORD&gt; &lt;SPOT_ADDRESS&gt;
</lessonCodeWrapper>

La herramienta de línea de comandos GraphNav se encuentra en

<lessonCodeWrapper language="bash">
~/spot-sdk/python/examples/graph_nav_command_line
</lessonCodeWrapper>

</li>

</List>
</section>

<section class="container__reg">

### ¿Estás listo para practicar?

Una vez que se sienta listo, puede comprar una sesión de práctica de 1 hora especificando sus credenciales de acceso (clave SSH) y la hora en que desea conectarse a Spot para resolver la tarea.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alquile un Spot" />

</section>