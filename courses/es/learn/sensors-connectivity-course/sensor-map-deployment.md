---
title: "Lección #6, Implementación de mapa de sensores"
description: 'IMPLEMENTACIÓN DE MAPA DE SENSORES'
lessonNumber: 6
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Después de ensamblar un sensor y configurar el módulo de conectividad de sensores, es hora de implementar un mapa de sensores descentralizado personal.


## Requisitos & Instalación

<List type="numbers">

<li>

Dado que el mapa de sensores funciona con JavaScript, primero necesitas instalar el `node` y el gestor `yarn`

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Descarga y construye el mapa:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Ejecute el mapa en modo `development` para realizar pruebas.

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Vaya a la URL desde la terminal, debería ver el mapa de sensores. Después de eso, deténgalo con `Ctrl+C`.

</li>

</List>

## Configuración

<List type="numbers">

<li>

Encuentra tu ID de IPFS con:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Ve a la carpeta `src` y renombra los archivos:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Inserta tu ID de IPFS en `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Abre el archivo `config.json` y cambia la siguiente parte del archivo de configuración:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Aquí debes insertar la latitud (`lat`) y longitud (`lng`) de tu ciudad. Opcionalmente, puedes configurar el [servicio de dirección del viento](https://github.com/danwild/wind-js-server) y proporcionar la URL en el campo `WIND_PROVIDER`.

</li>

</List>


## Construcción

<List type="numbers">

<li>

Ejecuta el siguiente comando para construir los archivos para su lanzamiento:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Esto creará un directorio `dist` con todos los componentes del sitio web estático.

</li>

<li>

Para verificar si todo está correcto, ve al directorio `dist` y abre el archivo `index.html`. Después de un tiempo, los datos del sensor de tu módulo de conectividad de sensores aparecerán en el mapa.

</li>

</List>

