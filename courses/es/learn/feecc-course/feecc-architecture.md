---
title: "Arquitectura"
description: Este curso trata sobre conocer el sistema Feecc y todos sus componentes.
metaOptions: [Aprender, Acostumbrarse a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
En esta lección, echaremos un vistazo más de cerca a la arquitectura de Feecc y veremos todos los componentes del software.
</RoboAcademyText>

La plataforma Feecc consta de varios servicios, desde el control del banco de trabajo del ingeniero hasta la provisión de análisis. Cada servicio es responsable de algún tipo de funcionalidad requerida para implementación en un entorno empresarial.

## Banco de trabajo del ingeniero de Feecc

La tarea principal del Banco de trabajo del ingeniero es organizar el espacio de trabajo del ingeniero de ensamblaje. Dependiendo de la tarea, el ingeniero puede necesitar los siguientes dispositivos:

- Cámara IP para organizar la grabación de video del proceso de producción;
- Lector RFID para la identificación en el sistema mediante una tarjeta RFID personal;
- Lector de códigos de barras para escanear etiquetas de productos;
- Impresora de etiquetas para etiquetar los productos fabricados;
- Sensores digitales que recopilan datos de varios dispositivos / estaciones.

El software del Banco de trabajo del ingeniero generalmente consta de los siguientes contenedores. Primero, el software que requiere instalación **en la computadora en la que trabaja el empleado** durante el ensamblaje del producto:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — el corazón de la plataforma Feecc que proporciona a los usuarios acceso a todas las características y configuraciones de Feecc; también contiene servicios livianos para imprimir etiquetas usando una impresora de etiquetas y grabar video desde flujos RTSP;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — una interfaz web para la interacción del empleado con la plataforma Feecc;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — un demonio de Python para enviar eventos de periféricos USB;

Segundo, el software que se puede instalar **tanto en la computadora del empleado como en un servidor en la red local**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — un microservicio para publicar archivos en IPFS, y más específicamente, CIDs de archivos en la Red Robonomics;

La figura a continuación muestra la arquitectura del Lugar de Trabajo del Ingeniero de Feecc en un entorno corporativo. La Puerta de Enlace de IPFS (así como el nodo IPFS y MongoDB en forma de un par de clúster) pueden alojarse en la computadora de cada empleado, lo que mejorará la descentralización del sistema a costa de recursos computacionales.

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### Hardware compatible para un espacio de trabajo:

#### Escáner RFID

Se necesita un escáner RFID USB para autorizar a los ingenieros en el campo con sus insignias internas. La información entrante se procesa utilizando el `feecc-hid-reader-daemon`.

#### Escáner de códigos de barras

El escáner de códigos de barras USB es necesario para identificar productos por códigos de barras, enviar comandos a los servicios y para la correcta asignación de certificados. La información entrante también se procesa con el `feecc-hid-reader-daemon`. La lectura en dos dimensiones es deseable, pero no es obligatoria.

#### Computadora del empleado

Una pequeña computadora de placa única procesa señales de dispositivos externos (escáner de códigos de barras, escáner RFID), envía solicitudes para imprimir imágenes en la impresora, iniciar y detener la grabación de video, enviar datos a la Puerta de Enlace de IPFS. Ejecuta los siguientes servicios: `feecc-workbench-frontend`, `feecc-workbench-daemon` con soporte de impresora de etiquetas y cámara, `feecc-hid-reader-daemon`. Se requiere una conexión a Internet a través de Wi-Fi o LAN.
    
Vale la pena especificar que cualquier computadora puede ser utilizada en lugar de una computadora de un solo pagador con un monitor. El sistema operativo GNU/LINUX debe estar instalado en él de forma nativa o a través de una máquina virtual.
    
Especificaciones técnicas mínimas:
    
- CPU: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) SoC de 64 bits @ 1.8GHz o similar;
- RAM: 4GB LPDDR4-3200 o similar.

#### Pantalla

El monitor es utilizado por el empleado para ingresar y ver información sobre el paso de producción actual. También muestra pistas para el ingeniero sobre la etapa actual. Otros dispositivos de entrada también pueden ser utilizados.

#### Impresora de etiquetas

La impresora de etiquetas se utiliza para imprimir códigos QR y códigos de barras para la posterior colocación de etiquetas en el producto con fines de identificación y verificación. La interacción con la impresora se realiza con la ayuda del servicio correspondiente de `feecc-workbench-daemon`. En nuestro caso, utilizamos impresoras XPrinter 236B.

#### Cámara IP

Cámara IP para capturar procesos de producción para su inclusión en el certificado del producto. Ubicada sobre el área de ensamblaje del producto. La interacción con la cámara se realiza utilizando el servicio correspondiente de `feecc-workbench-daemon`.

Especificaciones técnicas requeridas: Fuente de alimentación PoE, protocolo de transferencia de datos RTSP. En nuestro caso, utilizamos Hikvision HiWatch DS-i200d.

### Hardware compatible para varios espacios de trabajo:

#### Enrutador o switch

Se requiere un enrutador o switch con soporte PoE 802.3af y alimentación PoE en los puertos de salida para alimentar las cámaras IP y conectarlas al servicio `feecc-workbench-daemon`. En nuestro caso, utilizamos MikroTik hEX PoE (uno para 3-4 lugares de trabajo) y fuente de alimentación.

#### Servidor (opcional)

También se puede instalar un servidor más grande que pueda ejecutar `feecc-ipfs-gateway`. Puede estar ubicado en lugar de una de las computadoras de los lugares de trabajo de los empleados. 

Ελάχιστες τεχνικές προδιαγραφές:

- CPU: Procesador Intel Xeon E-2200 o similar;
- RAM: 8GB;
- Almacenamiento: 1TB HDD;
- Interfaz LAN: 1 Gbit/s.

## Feecc Analytics

La tarea principal de Feecc Analytics es organizar el proceso de trazabilidad de productos terminados y su inspección previa a la venta en el departamento de control de productos.

Feecc Analytics depende de los siguientes contenedores:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — el software principal para implementar el servicio de análisis;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — el software frontend para el servicio de análisis;

Generalmente se implementa en un solo servidor localmente por motivos de seguridad de datos dentro de la organización.

El hardware necesario para que Feecc Analytics funcione es un servidor local o remoto (máquina virtual) en el que se ejecutará la aplicación web y un escáner de códigos de barras. Cada empleado autorizado puede acceder a la aplicación web desde su computadora con un nombre de usuario y contraseña.

## Feecc Validator

La tarea principal del Feecc Validator es comparar datos de diferentes almacenes de datos para validar la integridad del certificado digital del producto.

Feecc Validator depende de los siguientes contenedores:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — un microservicio, diseñado para manejar la validación de certificados y obtener datos asociados con la unidad proporcionada siempre que el usuario tenga solo una de las piezas de datos;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — una interfaz web para interactuar con el microservicio de validación.

Al igual que Feecc Analytics, se puede implementar en un solo servidor localmente y requiere un escáner de códigos de barras.

<RoboAcademyText fWeight="500">
En la próxima lección, examinaremos más de cerca el sistema Feecc a través de una pequeña demostración que se ejecuta localmente en su computadora.
</RoboAcademyText>