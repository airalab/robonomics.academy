---
title: "Lección #4, módulo de conectividad de sensores"
description: 'MÓDULO DE CONECTIVIDAD DE SENSORES'
lessonNumber: 4
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

En los siguientes artículos, aprenderás más sobre el módulo de Conectividad de Sensores. Después de eso, puedes unirte a alojar nuestra Red de Sensores Descentralizados o crear tu propio mapa de sensores.

## Acerca de la Conectividad de Sensores

La Red de Sensores Descentralizados utiliza el módulo `sensors-connectivity` de Python ([código fuente](https://github.com/airalab/sensors-connectivity)). Este módulo permite a cualquier usuario lanzar su propio servidor para recibir datos de sensores y procesarlos más adelante. En este momento, los desarrolladores han lanzado varios servidores de este tipo y cualquier sensor puede enviar datos a ellos. Ejecutar múltiples servidores evita la pérdida de datos en caso de problemas con alguno de ellos, ya que los sensores cambiarán de un servidor no funcional a uno funcional. Básicamente, puedes pensar en el módulo de Conectividad de Sensores como una caja negra con una entrada (datos del sensor) y muchas salidas.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

El módulo de Conectividad de Sensores es un conjunto de estaciones (estación_1, estación_2 ... estación_n), que reciben varios datos, incluidos datos de sensores a través del protocolo HTTP. También pueden ser sensores conectados a la computadora a través de USB u cualquier otra fuente de datos. Los datos recibidos de las estaciones son procesados por el módulo y pasados a los alimentadores (alimentador_1, alimentador_2 ... alimentador_n). Los alimentadores envían los datos procesados al usuario; en nuestro caso, los datos se envían al canal IPFS descentralizado. 

Un mapa de la [Red de Sensores Descentralizados](https://sensors.robonomics.network/#/) es una aplicación descentralizada (dapp) que se ejecuta en la computadora. Lee datos del canal IPFS y los muestra en el mapa. No hay una conexión directa entre el servidor que recopila datos de los sensores y el mapa que ve el usuario; los datos se transfieren entre ellos a través de IPFS pubsub, lo que reduce la carga en los servidores. 

Además, de vez en cuando, se almacena un archivo con datos del último período de tiempo en IPFS, y luego se registra un hash de estos datos en la cadena de bloques. Dado que IPFS es una red direccionada por contenido, almacenar datos en ella garantiza que cualquier cambio de datos no pase desapercibido, porque la dirección del archivo necesario contiene un hash de su contenido, que cambiará con cualquier cambio de datos. La cadena de bloques se utiliza para pasar el hash al usuario, quien puede usarlo para obtener los datos necesarios de IPFS (esto sucede cuando se solicita un historial del mapa).

## Configuración del módulo para Linux

**Requisitos previos e Instalación**

<List type="numbers">

<li>

Para construir el módulo `sensors-connectivity` el demonio de IPFS debe estar instalado con una versión no superior a `0.8.x`. Suponiendo que trabajas en Linux, ejecuta lo siguiente (para la versión `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Instale el paquete con herramientas de desarrollo `python3-dev` y el instalador de paquetes para Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Instale el módulo como un paquete PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Si ve el siguiente aviso: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Ejecute el siguiente comando:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Configuración

<List type="numbers">

<li>

Cree un directorio para el archivo de configuración y el archivo de base de datos donde desee. Esta base de datos guardará los hashes de IPFS de los datos del sensor, la marca de tiempo y el estado del servicio:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
El nombre del archivo de base de datos puede ser cualquiera, pero la extensión debe ser <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Cree un archivo de configuración en el mismo directorio:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Copie y pegue lo siguiente en el archivo e inserte la ruta completa al archivo de base de datos en el campo db_path. Esta configuración será suficiente para obtener datos de sensores a través de HTTP y enviarlos al mapa de Robonomics:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

</List>

## Lanzamiento


<List type="numbers">

<li>

Inicie el daemon de IPFS:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Después de configurar la configuración, ejecute el servicio con la ruta al archivo de configuración en otra terminal:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Verá registros en la terminal (además, se agregarán a ~/.logs). Ejemplo:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## Post-instalación

Para conectar su módulo `sensors-connectivity` a nuestra Red de Sensores Descentralizada y ver sus datos en el mapa, debe enviar su ID de IPFS a [vm@multi-agent.io](mailto:vm@multi-agent.io) o [ping@airalab.org](mailto:ping@airalab.org). Agregaremos su ID a una lista de control de acceso.

Obtenga su `ID` de IPFS con el siguiente comando después de ejecutar el daemon de IPFS:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>