---
title: "Implementación de Analítica"
description: Este curso trata sobre conocer el sistema Feecc y todos sus componentes.
metaOptions: [Aprender, Acostumbrarse a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
En esta lección, aprenderás cómo implementar los componentes de Analítica de Feecc.
</RoboAcademyText>

## Lanzamiento del Backend de Analítica

1. Clonar el repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Configurar el servicio backend según tus necesidades utilizando el archivo `.env`:
    - `MONGO_CONNECTION_URL` — tu URI de conexión a MongoDB;
    - `MONGO_DATABASE_NAME` — un nombre de base de datos de MongoDB;
    - `SECRET_KEY` — clave secreta para el cifrado y descifrado;
    - `IPFS_GATEWAY_HOST` — URL de la Puerta de Enlace de IPFS;
    - `USE_DATALOG` — enviar datos de analítica a Robonomics (`true` o `false`);
    - `ROBONOMICS_SEED` — frase semilla para la cuenta de Robonomics.

3. Lanzar el contenedor backend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verificar su funcionalidad. Ve al navegador y abre la página `http://localhost:5002/docs`. Si todo se hizo correctamente, verás una página (generada por Swagger) con todos los puntos finales de la API REST de Analítica de Feecc. Ahora estás listo para lanzar el frontend.

## Lanzamiento del Frontend de Analítica

1. Clona el repositorio:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Ve a `src` y configura el servicio frontend según tus necesidades utilizando el archivo `config.json`. Asegúrate de ingresar la URL del Backend de Analítica de Feecc en el parámetro `base_url` (en forma de `xx.xx.xx.xx:puerto`).

3. Lanzar el contenedor frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verificar su funcionalidad. Ve al navegador y abre la página `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Con esto, se puede considerar completa la familiarización con el sistema Feecc. Si tienes alguna pregunta adicional, puedes ponerte en contacto con los desarrolladores en Multi-Agent Systems (multi-agent.io) o dejar un problema en su GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>