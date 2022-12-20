---
title: "Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure"
description: In this lesson you will try to control a smart light bulb using Robonomics parachain.
lessonNumber: 3
courseID: 1
metaOptions: [Online Courses, Introduction Course]
---

<section class="container__narrow">

Lesson 2 explained the main principles of Robonomics and mentioned Polkadot / Kusama as a promising blockchain ecosystem platform for it’s implementation. It’s time to take a closer look at the functions of Robonomics parachain as a part of the Polkadot ecosystem in the Kusama network. In particular, we would like to show how IoT subscriptions of the Robonomics Parachain work. During the first lesson, your address was added to the course IoT subscription, and you have already managed to use it twice: when you looked for your reflection in the black mirror and when handed in your test results.

</section>

<section class="container__narrow">

## Intro

In this lesson you will try to control a smart light bulb. Your goal is to turn the bulb on/off using the standard Polkadot/Substrate interface on the Robonomics parachain. The bulb is broadcasting on [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) so you can watch your result in real time. Also, a more detailed set of instructions regarding using an IoT subscription is available on [our wiki](https://wiki.robonomics.network/docs/subscription-launch/).

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Open the Robonomics [Polkadot/Substrate portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics).

You should see the Extrinsics (functions in Polkadot ecosystem) menu.If Extrinsics does not open, then using the menu in the top left of the page, navigate to <code> Kusama & Parachains -> Robonomics</code>, and press <code>Switch</code>. Then navigate to <code>Developer</code> in the top header, and then to <code>Extrinsics</code>.

</li>

<li>
In the first field where it says "using the selected account", pick the same Polkadot.js account that you've used in the previous lessons.
</li>

<li>
In the second field "submit the following extrinsic", select <code>rws</code> extrinsics and choose <code>call(subscriptionId, call)</code>. This will allow you to dispatch a function call using the IoT subscription.
</li>

<li>
In the <code>subscriptionId: AccountId32</code> field paste this subscription's owner address: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

In the  <code>call: Call</code> field choose the <code>launch(robot, param)</code> command.

This will show you two more fields: <code>robot</code> and <code>param</code>.

</li>

<li>
In the <code>robot: AccountId32</code> field paste this address of the smart bulb: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

In the <code>param: H256</code> field you need to specify 1 (on) or 0 (off) to turn on/off the bulb.

You can do this with:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

or

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Press the "Submit Transaction" button.

Do not forget to open the [broadcast on YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) before signing the transaction.

</li>


</List>
</section>

<Result>

The lesson will be considered completed after sending a successful transaction and its appearance in the Polkadot explorer for your Polkadot.js account.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>