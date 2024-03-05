---
title: "Lección #7, los sensores de Robonomics miden análisis y archivan nodos"
description: 'ROBONOMICS SENSORES MIDEN ANALÍTICAS Y NODO DE ARCHIVO'
lessonNumber: 7
metaOptions: [Aprende, Conectividad de Sensores y Red de Sensores Descentralizada]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Robonomics Sensors Measure Analytics and Archive Node o RoSeMAN es un servicio para acumular datos de sensores para mostrar el historial de mediciones. En este artículo configurarás el servicio.

## Requisitos

RoSeMAN requiere un servidor de base de datos [MongoDB](https://www.mongodb.com/docs/manual/introduction/), se asume que ya lo tienes. Además, debes activar la opción de registro de datos para el módulo de Conectividad de Sensores, como se muestra en el Escenario #3. Debes tener tokens XRT gratuitos en tu cuenta de Robonomics, que está conectada al módulo de Conectividad de Sensores. 


## Configuración

<List type="numbers">

<li>

Descargar el repositorio:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Crear archivos de configuración:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Abrir el archivo `config.json` y editar la ruta de la base de datos:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Agregar la dirección pública de tu cuenta al archivo `agents.json`. Puedes agregar varias direcciones al archivo si deseas recopilar datos de diferentes módulos de Conectividad de Sensores.

</li>


<li>

Instalar dependencias y construir el servidor:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Iniciar el servidor RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

El servidor web debería iniciarse en `http://127.0.0.1:3000`.

</li>

</List>

## Post-instalación

Después de implementar RoSeMAN en un servidor, debes obtener la dirección IP pública o la URL del servidor. Alternativamente, si ejecutas RoSeMAN y el mapa de sensores en el mismo servidor, puedes usar la dirección IP local.

Luego, debes abrir el archivo de configuración del mapa de sensores e insertar tu URL en el archivo `config.json` en el campo `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Reconstruye el mapa con `yarn build` y vuélvelo a iniciar; podrás ver el historial de mediciones.