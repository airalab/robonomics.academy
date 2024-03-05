---
title: "Lección #6: Configuración de la integración de Robonomics"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 7
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## ¿De qué se trata esto?

En esta lección, agregarás Robonomics a Home Assistant y crearás una cuenta asociada con la suscripción. Esta integración permite a Home Assistant utilizar las funciones de la paracadena de Robonomics, en primer lugar, enviar datos de hogar inteligente encriptados a una nube descentralizada.


## Teoría

Tus datos de hogar inteligente se envían utilizando el extrínseco <code>record()</code> del palet <code>datalog</code> que te permite guardar datos de dispositivos encriptados en la cadena de bloques. 

Para ser más precisos, la integración utiliza IPFS para almacenar datos y luego enviar los hashes de IPFS al extrínseco datalog, que a su vez se almacena en la cadena de bloques. Pero como esta función se llama a través de una suscripción de IoT, toda la función se ve así: <code>rws.call(datalog.record(TU_HASH_IPFS))</code>.

## Instrucciones

<List type="numbers">

<li>

Agregando Robonomics a Home Assistant

<List>

<li>

En la interfaz web de Home Assistant ve a <code>Configuración</code>-><code>Dispositivos y Servicios</code> y presiona <code>AGREGAR INTEGRACIÓN</code>. Busca <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Haz clic en Robonomics y completa la configuración: 

\- Agrega la semilla de la cuenta <code>SUB_CONTROLLER</code> a la semilla de la cuenta de administrador

\- Agrega la dirección pública de la cuenta <code>SUB_OWNER</code> (que creaste previamente) a la dirección del propietario de la suscripción

\- Establece el intervalo de envío de datos (por defecto es de 10 minutos)

\- (Opcional) Puedes agregar credenciales para el servicio de anclaje Pinata para difundir tus datos de manera más amplia en la red IPFS

</li>

<li>

Presiona <code>ENVIAR</code> después de terminar la configuración. Si completaste todo correctamente, verás la ventana de Éxito.

</li>
</List>
</li>

<li>

Agregando usuarios en Robonomics Dapp 

<List>

<li>

Necesitas crear un usuario separado para Home Assistant, quien controlará los dispositivos inteligentes del hogar. No puedes usar cuentas creadas previamente porque <code>SUB_OWNER</code> y <code>SUB_CONTROLLER</code> proporcionan seguridad, y el primer usuario que creaste cuando iniciaste por primera vez Home Assistant no tiene una cuenta en la Parachain de Robonomics.

</li>

<li>
Comienza creando una cuenta en la Parachain de Robonomics, como lo hiciste en la lección anterior.
</li>

<li>

Agrega esta cuenta a la suscripción en la [dapp](https://dapp.robonomics.network/#/subscription/devices). Ahora deberían haber tres direcciones en la lista de acceso: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> y <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Ve al servicio de dapp llamado [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Elige la cuenta que acabas de crear en la barra lateral derecha (verifica que has elegido la cuenta deseada presionando el ícono de perfil).

Ingresa la semilla de <code>USER</code> en el campo requerido. Agrega las direcciones de <code>SUB_OWNER</code> y <code>SUB_CONTROLLER</code> en los campos de créditos de administrador. Si todo es correcto, verás el estado de verificación <code>VERIFIED</code>.

</li>

<li>

Crea una contraseña para un nuevo usuario que acabas de registrar y luego confirma la transacción, que ahora será sin cargo debido a la suscripción. Más tarde puedes restaurar la contraseña en la pestaña <code>Restore</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Después del proceso de registro, inicia sesión en Home Assistant con la dirección de tu usuario como inicio de sesión y la contraseña recién creada. Ahora puedes usar la dapp de Robonomics para controlar tu hogar a través de Robonomics.

</li>
</List>
</li>
</List>