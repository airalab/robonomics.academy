---
title: "Lección #5, Suscripciones IoT usando Robonomics Parachain"
description: Aprenderá cómo comprar una suscripción IoT en Robonomics Parachain utilizando tokens reales de nuestra red.
lessonNumber: 5
courseID: 1
metaOptions: [Cursos online, Curso de Introducción]
---

<section class="container__narrow">

La última lección de nuestro curso de introducción es probablemente la más desafiante, porque requerirá algo de destreza y paciencia de su parte. Aprenderá cómo comprar una suscripción IoT en Robonomics Parachain utilizando tokens reales de nuestra red.

</section>

<section class="container__narrow">

## Intro

Una suscripción IoT es una clave de acceso a todas las funciones relacionadas con el cambio de estado del gemelo digital de un sistema ciberfísico y el almacenamiento de información sobre este utilizando el ecosistema Polkadot/Kusama. Ser propietario de una suscripción libera al usuario de la necesidad de tener que pagar una tarifa por la transacción. En cambio, el usuario puede enviar una transacción gratuita una vez en un cierto período de tiempo.

La forma principal de comprar una suscripción es participar en la subasta de suscripción y, por lo tanto, en esta lección debe obtener tokens XRT para realizar ofertas y enviar transacciones. Más información sobre este proceso también está disponible en [nuestra wiki](https://wiki.robonomics.network/docs/get-subscription).

</section>

<section class="container__reg">

## Instrucciones

<List type="numbers">

<li>

You need around 2 XRT Robonomics Parachain tokens ([sobre el token](https://robonomics.network/xrt/)). Si no dispones de este, tienes varias opciones para conseguirlo:

a) If you pass both tests after Lesson 2 and Lesson 4 with 90% correct answers, you can request free tokens for the lesson. Check your scores on [the special checking dapp](https://lk.robonomics.academy/). Specifically, you need to score 15 out of 17 for Lesson 2 and 10 out of 11 for Lesson 4, and you have two attempts to do this. To get tokens, contact the Academy Administrator on our [Discord](https://discord.gg/xqDgG3EGm9) (IBerman#5862).

b) Buy XRT tokens on one of the exchanges (check out the [list of exchanges](https://www.coingecko.com/en/coins/robonomics-network#markets/)). Tenga cuidado si no está familiarizado con los exchanges de criptomonedas, recuerde que todas las compras en los exchanges de criptomonedas pueden tener riesgos potenciales, compre solo la cantidad requerida de token para aprobar esta lección. Also, keep in mind that Robonomics exists on two networks, Ethereum and Kusama, so each network has its own XRT token. You need a token that used by parachain in Kusama network.

c) If you have XRT token in Ethereum network (ERC-20 format), use [Exodus](https://old.dapp.robonomics.network/#/exodus) process to transfer tokens from the Ethereum network to Kusama. Keep in mind that the transfer of tokens is carried out once a week.

</li>

<li>

Las suscripciones IoT se compran a través de un proceso de subasta regular en el que el mejor postor obtiene una suscripción.

Antes de intentar participar en la subasta, debe comprobar si hay alguna disponible. Abra el portal Robonomics [Polkadot/Substrate](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate) con el menú Chain state. Select <code>rws</code> consulta con <code>auctionQueue()</code> y presione un botón '+'. Debería ver los ID de las subastas disponibles; recordar el ID de uno de ellos. Si no se muestran subastas o no están disponibles, contáctenos en nuestro Discord en "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)" channel.


Ahora, en el mismo menú Chain state, seleccione <code>rws</code> con <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> y en el campo <code>u32</code> ingrese el ID recordado de la subasta. Después de presionar el botón '+', verá información sobre una subastainteresada. Si el campo <code>winner</code> tiene valor <code>null</code> entonces nadie tiene esta suscripción y puede intentar obtenerla.

</li>

<li>

Haga una oferta con sus tokens XRT.

Vaya al menú Developer -> Extrinsic y para la misma cuenta polkadot.js que usó en la lección anterior, elija extrinsic <code>rws</code> with <code>bid(index, amount)</code>. En el campo <code>index</code> ingrese el ID de la subasta interesada. En el campo <code>amount</code> debe ingresar su número de tokens para la oferta, convertidos a "wieners" (1 XRT = 1 000 000 000 Wn). Consulte el precio de suscripción actual en nuestra [dapp](https://dapp.robonomics.network/#/subscription). 

Envíe la transacción y, si tiene suerte, obtendrá la suscripción IoT. Puede verificar que su dirección de Polkadot sea propietaria de la suscripción a través del mismo menú Chain state. 

</li>

<li>

El último paso es agregar dispositivos para su suscripción IoT.


Esto simplemente significa que asigna a su suscripción direcciones de Polkadot adicionales que usted o sus dispositivos pueden usar para ejecutar extrinsics (por ejemplo, para iniciar dispositivos o enviar datos de dispositivos a blockchain).

Antes de comenzar, cree una nueva cuenta para Robonomics Parachain (guía en [nuestra wiki](https://wiki.robonomics.network/docs/create-account-in-dapp/)), y llámela 'dispositivo inteligente' por conveniencia.

Luego, vaya al menú Developer -> Extrinsic y seleccione <code>rws</code> con <code>setDevices()</code>. En la lista de dispositivos, use el botón 'add devices' para agregar dispositivos y seleccione una cuenta creada recientemente para dispositivos inteligentes. Después de eso, envíe la transacción.

La dirección del dispositivo debe agregarse a la suscripción. Puede verificarlo en el menú Chain state a través de consulta <code>rws</code> con <code>devices()</code> para su cuenta polkadot.js que tiene la suscripción.

</li>

</List>
</section>

<Result>

La lección se considerará completada después de la transacción exitosa de comprar una suscripción IoT y agregarle un dispositivo.Transactions should appear in the Polkadot explorer for your account.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>