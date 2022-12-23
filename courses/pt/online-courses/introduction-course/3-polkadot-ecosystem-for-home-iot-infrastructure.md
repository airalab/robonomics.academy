---
title: "Lição #3, Ecossistema Polkadot para Infraestrutura IoT Doméstica"
description: Nesta lição, você tentará controlar uma lâmpada inteligente que funciona através do Home Assistant, que possui módulos Robonomics adicionais.
lessonNumber: 3
courseID: 1
metaOptions: [Cursos on-line, Curso introdutório]
---

<section class="container__reg">

A lição 2 explicou os princípios fundamentais da Robonomics e mencionou Polkadot / Kusama como uma blockchain promissora para sua implementação. Em particular, gostaríamos de mostrar como funcionam as assinaturas IoT da  Parachain Robonomics. Durante a primeira lição, seu endereço foi incluído na assinatura do curso IoT, e você já conseguiu usá-lo duas vezes: quando você procurou seu reflexo no espelho negro e quando entregou seus resultados do teste.

</section>

<section class="container__reg">

## Intro

Nesta lição, você tentará controlar uma lâmpada inteligente que funciona através do Home Assistant, que possui módulos Robonomics adicionais. Seu objetivo é ligar/desligar a lâmpada usando a interface padrão Polkadot/Substrate na Parachain Robonomics. A lâmpada está sendo transmitida no [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) para que você possa assistir ao seu resultado em tempo real. Além disso, um conjunto mais detalhado de instruções sobre o uso de uma assinatura IoT está disponível em [nosso wiki](https://wiki.robonomics.network/docs/subscription-launch/).

</section>

<section class="container__reg">

## Instruções

<List type="numbers">

<li>

Abra o portal [Polkadot/Substrate](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics) da Robonomics.

Você deve ver o menu Extrinsics (funções no ecossistema Polkadot). Se estiver travado, use o menu no canto superior esquerdo da página, navegue até <code> Kusama & Parachains -> Robonomics</code>, e pressione <code>Switch</code>. Em seguida, navegue até <code>Developer</code> no cabeçalho superior e depois para <code>Extrinsics</code>.

</li>

<li>
No primeiro campo onde você pode ler "using the selected account", escolha a mesma conta polkadot.js que você usou na lição anterior.
</li>

<li>
No segundo campo "submit the following extrinsic", selecione <code>rws</code> extrinsics e após escolha <code>call(subscriptionId, call)</code>. Isso permitirá que você envie uma chamada de função usando a assinatura IoT.
</li>

<li>
No campo <code>subscriptionId: AccountId32</code> cole o endereço do proprietário desta assinatura: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

No campo <code>call: Call</code> escolha o comando <code>launch(robot, param)</code>.

Isto irá mostrar mais dois campos: <code>robot</code> e <code>param</code>.

</li>

<li>
No campo <code>robot: AccountId32</code> fcole este endereço da lâmpada inteligente: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

No campo <code>param: H256</code> você precisa especificar 1 (on) ou 0 (off) para ligar/desligar a lâmpada. 

Você pode fazer isso com:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

ou

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Pressione o botão "Submit Transaction". 

Não se esqueça de abrir a [transmissão no Youtube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) antes de assinar a transação.

</li>


</List>
</section>

<Result>

A lição será considerada concluída após o envio de uma transação bem sucedida e sua ocorrência no explorer Polkadot para sua conta na polkadot.js.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>