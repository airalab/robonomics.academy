---
title: "Lección #5, Configuración de Suscripción Robonomics IoT"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 6
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## ¿De qué se trata esto?

La Suscripción Robonomics IoT permite a los usuarios utilizar todas las funciones de la paracadena durante un cierto período sin pagar las tarifas de transacción estándar. Al activar la suscripción, los dispositivos podrán enviar transacciones con prioridad.

En esta lección, crearás las cuentas de seguridad necesarias para el hogar inteligente y comprarás una suscripción IoT.

## Teoría

Una suscripción IoT, así como el método de compra y gestión, se implementa utilizando un palet <code>rws</code>, que contiene todas las funciones necesarias. En general, las suscripciones en Robonomics se venden con un modelo de subasta, que utiliza un extrínseco <code>rws.startAuction()</code> para crear una subasta para un ID de suscripción específico. Los usuarios pueden acceder a la subasta por ID y ofertar utilizando un extrínseco <code>rws.bid()</code>.

Después de finalizar la subasta, la dirección con la oferta ganadora se asigna a la suscripción. Ahora esta dirección podrá enviar transacciones a través del extrínseco <code>rws.call()</code> sin tarifas. Sin embargo, esto no significa que la dirección pueda hacerlo sin control en cualquier momento: cada suscripción tiene una cierta cantidad de un valor de <code>weight</code>, que debe acumularse antes de que se pueda realizar una transacción gratuita. Se agrega un cierto valor de <code>weight</code> a la suscripción en cada bloque generado en la paracadena, debido a esto, Robonomics regula el ancho de banda de la paracadena.

Además, el propietario de la suscripción puede utilizar el extrínseco <code>rws.setDevices()</code>, que comparte el uso de la suscripción a las direcciones especificadas. Al mismo tiempo, el <code>weight</code> permanece igual, por lo que cuantas más direcciones haya en la suscripción, más tiempo tendrá que esperar cada una de ellas antes de enviar la transacción gratuita.

Para controlar Home Assistant con Robonomics, necesitas dos cuentas en la paracadena de Robonomics. Estas cuentas proporcionarán seguridad para tu Home Assistant.

Con una de las cuentas (<code>SUB_OWNER</code>), comprarás una suscripción Robonomics. Esta cuenta actúa como el administrador principal de la suscripción IoT, y proporciona acceso a Home Assistant a otros usuarios (utilizando <code>rws.setDevices()</code>). Esta cuenta debe tener algunos tokens XRT para completar las transacciones de compra de suscripción.

La segunda cuenta (<code>SUB_CONTROLLER</code>) controlará todos los procesos de Home Assistant de los dispositivos (como la telemetría). Las transacciones de tus dispositivos se enviarán en nombre de la cuenta <code>SUB_CONTROLLER</code>. Tú (y cualquier persona) podrán ver estas transacciones en cualquier explorador de paracadenas como [Subscan](https://robonomics.subscan.io/). Sin embargo, solo tú podrás descifrar el contenido de estas transacciones siempre que poseas de forma segura las frases de semilla necesarias.

## Instrucciones

<List type="numbers">

<li>

Creación de Cuentas de Paracadena de Propietario y Controlador

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Ambas cuentas deben crearse con cifrado ed25519.
</robo-academy-note>

</li>

<li>

Ve a la [aplicación de Paracadena Robonomics](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) en el Portal de Polkadot / Substrate. Verifica la esquina superior izquierda para asegurarte de que estás conectado a la Paracadena Robonomics.

</li>

<li>

Debido al uso del formato *ed25519*, necesitas crear una cuenta utilizando la interfaz de Polkadot-JS y seleccionar el cifrado requerido. 

Esta función está desactivada de forma predeterminada en la interfaz de Polkadot-JS. Para habilitarla, ve a <code>Configuración</code> -> <code>General</code> -> <code>opciones de cuenta</code> y selecciona <code>Permitir almacenamiento local de cuentas en el navegador</code> en el menú desplegable <code>creación de cuentas en el navegador</code>.
 
</li>

<li>

Ve a <code>Cuentas</code> -> <code>Cuentas</code> y presiona el botón <code>Agregar cuenta</code>. Verás un menú emergente con la semilla de la cuenta. Tiene dos formas: *Mnemónico* (legible por humanos) y *Crudo* (una secuencia de dígitos y letras).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Abre <code>Opciones avanzadas de creación</code>, cambia el tipo de criptografía para crear la cuenta a <code>Edwards - ed25519</code>. Guarda la frase de semilla mnemónica de forma segura y presiona <code>Siguiente</code>.

</li>

<li>

En el siguiente menú, necesitas establecer el nombre de la cuenta y la contraseña. Dale un nombre <code>SUB_OWNER</code> por conveniencia y presiona <code>Siguiente</code>.

</li>

<li>

En la última ventana haz clic en <code>Guardar</code> para finalizar la creación de la cuenta. También generará archivos JSON de respaldo que debes almacenar de forma segura. Más tarde puedes usar este archivo para recuperar tu cuenta si recuerdas la contraseña.

</li>

<li>

Repite estos pasos para la cuenta <code>SUB_CONTROLLER</code>.

</li>
</List>
</li>

<li>

Añadiendo cuentas a la extensión Polkadot.js

<List type="numbers">

<li>

Para mayor comodidad, deberías usar la extensión Polkadot.js y agregar estas cuentas recién creadas a ella. Para una cuenta ed25519 solo puedes hacerlo con un archivo JSON de respaldo. Puedes usar los archivos guardados cuando creaste las cuentas.

Puedes obtener estos archivos nuevamente creando un archivo de respaldo de la cuenta. Presiona en los tres puntos de tu cuenta, elige <code>Crear un archivo de respaldo para esta cuenta</code> e ingresa tu contraseña.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Abre una extensión y presiona el botón <code>+</code> en la esquina superior derecha, luego elige <code>Restaurar cuenta desde archivo JSON de respaldo</code>.

</li>

<li>

En una ventana abierta carga el archivo JSON, ingresa la contraseña y presiona <code>Restaurar</code>

</li>

<li>

Asegúrate de que la red Robonomics esté seleccionada para las cuentas en la extensión Polkadot.js. En el Portal de Polkadot / Substrate ve a <code>Configuración</code> -> <code>Metadatos</code> y haz clic en el botón <code>Actualizar metadatos</code>. 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Confirma la actualización de metadatos en el popup. Ahora la extensión mostrará la etiqueta de la red para la cual se utiliza la dirección.

</li>

</List>
</li>

<li>

Activando Suscripción Robonomics

<List >

<li>

<robo-academy-note type="okay">
Para este paso, debes tener una cantidad suficiente de tokens XRT (mínimo 2-3 XRTs) en tu cuenta <code>SUB_OWNER</code>.
</robo-academy-note>

Ve a la dapp de Robonomics a la [página de suscripción](https://dapp.robonomics.network/#/subscription) y presiona <code>conectar cuenta</code> en la barra lateral derecha.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

En el siguiente menú emergente conecta la extensión Polkadot.js. Verás tu dirección de cuenta con saldo.

</li>

<li>

Antes de comprar, verifica que hayas elegido la cuenta <code>SUB_OWNER</code>. Presiona el ícono del perfil de la dirección, deberías ver la cuenta <code>SUB_OWNER</code> bajo el campo <code>Verificar cuenta propietaria</code>.

</li>

<li>

Finalmente, presiona el botón <code>ENVIAR</code> e ingresa la contraseña de tu cuenta. Después espera hasta que se complete el proceso de activación. Verás el estado de tu suscripción después de un tiempo.

Si no hay suscripciones disponibles, **por favor contacta** al equipo de Robonomics.

</li>
</List>
</li>

<li>

Añadiendo Cuenta a la Suscripción

<List type="numbers">

<li>

Ahora necesitas agregar la cuenta <code>SUB_CONTROLLER</code> a **la lista de acceso**. Abre la extensión y haz clic en el ícono cerca del nombre de la cuenta. Se copiará la dirección de la cuenta.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Pega esta dirección en el campo <code>Dirección de la parachain de Robonomics</code> en la parte **Gestionar acceso**.

Dale un nombre y presiona el botón <code>+</code>. Ingresa tu contraseña de <code>SUB_OWNER</code> en la ventana emergente y espera hasta que se complete el proceso de activación.

</li>

<li>

Repite los pasos para la cuenta <code>SUB_OWNER</code>.
</li>
</List>
</li>
</List>