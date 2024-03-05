---
title: "Demo de Feecc"
description: Este curso trata sobre conocer el sistema Feecc y todos sus componentes.
metaOptions: [Aprender, Acostumbrarse a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
En esta lección, probarás las funciones básicas de Feecc utilizando un banco de pruebas virtual como ejemplo, que emula una instancia de la vida real de un sistema de seguimiento de producción.
</RoboAcademyText>

Para fines de demostración, carece de algunas características típicas como la impresión de etiquetas o la grabación de video, pero mantiene el concepto principal de dicho sistema.

## Prerrequisitos

Para ejecutar la demo, necesitarás:

- Sistema similar a UNIX (probado en [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/) y [Docker compose](https://docs.docker.com/compose/)
- Navegador web (probado en Google Chrome y Mozilla Firefox)

## Instalación

Ejecuta los siguientes comandos:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Para verificar los contenedores en funcionamiento, ejecuta lo siguiente:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Deberías ver la siguiente salida:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Lanzamiento de la demo

1. Ve a http://localhost:3000/ en tu navegador, deberías ver una pantalla de bienvenida.

2. En esta etapa, el sistema debería solicitar al empleado que coloque su tarjeta RFID en el escáner para autorización. En la demostración, puedes usar `hid-emulator.py` para la autorización. Para hacer esto, ejecuta un contenedor Docker separado:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Es capaz de emular dos funciones: proporcionar una tarjeta RFID y escanear un código de barras; necesitas la primera función, ingresa `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Escáner RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Verás la pantalla para seleccionar el tipo de composición, elige `DISPOSITIVO ÚNICO`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Aparecerán notificaciones en la esquina inferior izquierda indicando el inicio del trabajo en el dispositivo para el cual se crea un ID único. La notificación azul también mostrará la actividad de la impresora virtual; en la configuración real, en este momento se imprime un código de barras con el ID del dispositivo.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Haz clic en `INICIAR COMPOSICIÓN` para comenzar a grabar el proceso de ensamblaje del dispositivo. Se te pedirá que pases por todos los pasos de ensamblaje necesarios; cada vez que un empleado complete un paso, deberá hacer clic en el botón `SIGUIENTE`, después de lo cual el video se guardará en IPFS. También es posible suspender el ensamblaje (`PAUSA`) para volver a él más tarde o detener el proceso por completo (`DETENER`).

6. Cuando se completen todas las etapas de ensamblaje, aparecerá el botón `FINALIZAR`, después de lo cual Feecc sugiere guardar el certificado del dispositivo. Sin embargo, antes de hacer esto, abre el [nodo Robonomics local](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) en tu navegador, lo necesitarás más tarde. Después de eso, vuelve a Feecc y haz clic en `GUARDAR PASAPORTE`.
    
    Verás nuevas notificaciones en la esquina de la pantalla: notificación de que el certificado se ha subido a Robonomics e IPFS, así como dos mensajes azules sobre la impresión de la etiqueta de sello y el código QR que lleva al certificado.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. En la sección `Información de la cadena` en la pantalla del nodo local de Robonomics, deberías ver un nuevo evento `datalog.NewRecord` bajo la columna `eventos recientes`. Si lo expandes, se mostrará el CID de IPFS correspondiente al archivo de certificado del dispositivo en el campo `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

El código QR impreso contiene un enlace a este CID, que permite abrir el archivo de certificado en el navegador. Dado que tu nodo IPFS local puede que no tenga esa capacidad de descubrimiento, puedes acceder al archivo localmente con `localhost:8080/ipfs/CID.` El contenido del certificado se ve algo así:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. Ahora intentemos crear un certificado para un ensamblaje compuesto que consta de varios dispositivos. En el menú de selección de tipo, haz clic en `DISPOSITIVO COMPUESTO`, y luego en `DISPOSITIVO DE MUESTRA`. Copia su ID de unidad (ubicado en el campo Número de composición), ya que lo necesitarás más tarde. Luego, procede con los pasos estándar para ensamblar el dispositivo.

9. Después del ensamblaje, vuelve a `DISPOSITIVO COMPUESTO` y presiona `ENSAMBLAJE FINAL` para finalizar el ensamblaje compuesto. El sistema te pedirá que proporciones el ID de unidad de los dispositivos ensamblados, para lo cual el empleado debe escanear su código de barras. Para simular este proceso, vuelve a `hid-emulator.py` y selecciona la función `2` para escaneo de códigos de barras, e inserta el ID de unidad guardado allí.

10. A continuación, el sistema te pedirá que pases por las etapas necesarias del ensamblaje compuesto y generará un certificado para ello:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. Para eliminar la demo, ingresa el comando:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
En la próxima lección, procederemos a la implementación real de todos los componentes necesarios del sistema Feecc.
</RoboAcademyText>