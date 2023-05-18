---
title: "Lección #3, Ecosistema de Polkadot para infraestructura IoT en el hogar"
lastUpdate: Thu May 04 2023 12:55:52 GMT+0400 (Samara Standard Time)
description: En esta lección, intentará controlar una bombilla inteligente que funciona a través de Home Assistant, que tiene módulos Robonomics adicionales.
lessonNumber: 3
metaOptions: [Cursos online, Curso de Introducción]
defaultName: Introduction to the ideas of Robonomics
---


La Lección 2 explicó los principios fundamentales de Robonomics y mencionó a Polkadot / Kusama como una plataforma de ecosistema blockchain prometedora para su implementación. Es hora de echar un vistazo más de cerca a las funciones de Robonomics Parachain como parte del ecosistema Polkadot en la red Kusama. En particular, nos gustaría mostrar cómo funcionan las suscripciones IoT de Robonomics Parachain. Durante la primera lección, su dirección se agregó a la suscripción del curso IoT y ya logró usarla dos veces: cuando buscó su reflejo en el espejo negro y cuando entregó los resultados de su prueba.


## Intro

En esta lección, intentará controlar una bombilla inteligente que funciona a través de Home Assistant, que tiene módulos Robonomics adicionales. Su objetivo es encender/apagar la bombilla usando la interfaz estándar de Polkadot/Substrate en Robonomics Parachain. La bombilla está transmitiendo en [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) para que puedas ver tu resultado en tiempo real. Además, hay disponible un conjunto de instrucciones más detalladas sobre el uso de una suscripción IoT en [nuestra wiki](https://wiki.robonomics.network/docs/subscription-launch/).


## Instrucciones

<List type="numbers">

<li>

Abre el portal Robonomics [Polkadot/Substrate](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics).

Debería ver el menú Extrinsics (funciones en el ecosistema de Polkadot). Si está atascado, use el menú en la parte superior izquierda de la página, vaya a <code> Kusama & Parachains -> Robonomics</code> y presione <code>Switch</code>. Luego navegue hasta <code>Developer</code> en el encabezado superior y luego a <code>Extrinsics</code>.

</li>

<li>
En el primer campo donde puede leer "using the selected account", elija la misma cuenta de polkadot.js que usó en las lecciones anteriores.
</li>

<li>
En el segundo campo "submit the following extrinsic", seleccione <code>rws</code> Extrinsecs y elija <code>call(subscriptionId, call)</code>. Esto le permitirá enviar una llamada de función mediante la suscripción IoT.
</li>

<li>
En el campo <code>subscriptionId: AccountId32</code> pegue la dirección del propietario de esta suscripción: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

En el campo  <code>call: Call</code> elija el comando <code>launch(robot, param)</code>.

Esto le mostrará dos campos más: <code>robot</code> y <code>param</code>.

</li>

<li>
En el campo <code>robot: AccountId32</code> pegue esta dirección de la bombilla inteligente: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

En el campo <code>param: H256</code> debes especificar 1 (encendido) o 0 (apagado) para encender/apagar la bombilla.

Puedes hacer esto con:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

o

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Presione el botón "Submit Transaction".

No olvides abrir la [transmisión en YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) antes de firmar la transacción.

</li>


</List>

<Result>

La lección se considerará completada después de enviar una transacción exitosa y su aparición en el explorador Polkadot para su cuenta polkadot.js.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>