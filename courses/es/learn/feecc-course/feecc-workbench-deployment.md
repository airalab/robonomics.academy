---
title: "Implementación del Banco de Trabajo del Ingeniero"
description: Este curso trata sobre conocer el sistema Feecc y todos sus componentes.
metaOptions: [Aprender, Acostumbrarse a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
En esta lección, aprenderá cómo implementar usted mismo los componentes necesarios de Feecc Engineer Workbench.
</RoboAcademyText>

Entre los componentes:

- Demonio del Banco de Trabajo
- Interfaz del Banco de Trabajo
- Puerta de enlace IPFS
- Demonio del Lector HID

Todos los componentes se inician usando [Docker](https://docs.docker.com/engine/install/ubuntu/) y [Docker compose](https://docs.docker.com/compose/), asegúrese de tener ellos instalados.

## Preparación del software

1. Los componentes de Feecc utilizan la base de datos [MongoDB](https://www.mongodb.com/) para almacenar y acceder a los datos. Antes de usar Feecc, necesitas implementar MongoDB de la manera que te resulte conveniente. Aquí tienes algunas opciones de implementación: [usando tu propio servidor](https://www.mongodb.com/try/download/community), [base de datos en la nube en Atlas](https://www.mongodb.com/atlas) (gratis), [base de datos en la nube en DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (pago). 
    
    En cualquier caso, necesitas obtener tu URI de conexión a MongoDB, que deberás ingresar como el valor de la variable `MONGODB_URI` para todos los componentes del sistema.
    
2. Si deseas aprovechar el almacenamiento confiable y transparente de datos de tu sistema de producción, necesitas crear una cuenta en Robonomics. Para hacerlo, utiliza las instrucciones disponibles en el siguiente enlace: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Necesitas guardar la frase semilla de la cuenta ya que se utilizará más adelante en la variable `ROBONOMICS_ACCOUNT_SEED`.

## Preparación del Banco de Trabajo

Antes de comenzar, conecta todo el equipo necesario al ordenador o servidor:

- impresora de etiquetas mediante USB
- lectores de RFID/códigos de barras mediante USB
- cámara IP a través de enrutador PoE/conmutador de red
- monitor con teclado y ratón o pantalla táctil mediante USB y HDMI/VGA (opcional)

## Iniciando el Demonio del Lector HID

1. Clonar el repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Inicie el demonio:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Iniciando el Demonio del Banco de Trabajo

1. Clona el repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Configure el demonio según sus necesidades utilizando el archivo `docker-compose.yml`. El archivo contiene varias variables de entorno:

    - Configuración de MongoDB;
    - Configuración de Robonomics;
    - Configuración de IPFS;
    - parámetros de impresora;
    - parámetros de cámara;
    - parámetros de lectores de RFID / códigos de barras.
    
    La lista completa de variables está disponible en el [repositorio](https://github.com/Multi-Agent-io/feecc-workbench-daemon) del demonio. Los siguientes parámetros son obligatorios:
    
    - `MONGODB_URI`: tu URI de conexión a MongoDB;
    - `MONGODB_DB_NAME`: un nombre de base de datos de MongoDB;
    - `WORKBENCH_NUMBER`: número de banco de trabajo del empleado.

3. Inicie el demonio:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verifique su funcionalidad. Vaya al navegador y abra la página `http://127.0.0.1:5000/docs`, que debería contener documentación sobre la interfaz de API REST del sistema. Si la página no está disponible, entonces el servidor no se inició correctamente. Verifique los registros dentro del contenedor en busca de errores, corríjalos y repita los pasos de compilación y ejecución.

## Lanzamiento de la Puerta de enlace IPFS

1. Clona el repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Configure el microservicio según sus necesidades utilizando el archivo `docker-compose.yml`. El archivo contiene variables de entorno para la conexión con MongoDB, Robonomics y Pinata. La lista completa de variables está disponible en el [repositorio](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) de la puerta de enlace.

3. Lanzar el microservicio:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Lanzamiento del Frontend del Banco de Trabajo

1. Clona el repositorio:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Ir al directorio `configs` y configurar el servicio frontend según sus necesidades utilizando el archivo `config.json`. Los siguientes parámetros son particularmente importantes:
    - `socket` — insertar aquí la dirección del Demonio del Banco de Trabajo;
    - `interface_language` — idioma de la interfaz, opciones disponibles `en` y `ru`;
    - `dev_show_reducers` — habilitar/deshabilitar el modo desarrollador;
    - `pulling_period` — período de recepción de datos del backend en milisegundos;

3. Lanzar el contenedor frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verificar su funcionalidad. Ir al navegador y abrir la página `http://localhost:3000`, debería ver una página de autorización.

<RoboAcademyText fWeight="500">
En la próxima lección, revisaremos el servicio de Análisis de Feecc.
</RoboAcademyText>