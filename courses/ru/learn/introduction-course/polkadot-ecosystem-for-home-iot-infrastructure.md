---
title: "Урок №3, Экосистема Polkadot для домашней инфраструктуры IoT"
lastUpdate: Thu May 04 2023 12:58:21 GMT+0400 (Samara Standard Time)
description: В этом уроке вы попробуете управлять умной лампочкой, которая работает через Home Assistant с дополнительными модулями Робономики.
lessonNumber: 3
metaOptions: [Онлайн курсы, Вводный курс]
defaultName: Вступлениеduction to the ideas of Robonomics
---

Урок 2 объясняет основные принципы Робономики и рассказывает о Polkadot / Kusama, как о перспективной блокчейн-платформе для реализации этих принципов. Пришло время более подробно рассмотреть функции парачейна Робономики как части экосистемы Polkadot в сети Kusama. В частности, мы хотели бы показать, как работают IoT-подписки парачейна Робономики. На первом занятии ваш адрес был добавлен в подписку на IoT-курс, и вы уже успели им воспользоваться дважды: когда искали свое отражение в черном зеркале и когда сдавали результаты теста.


## Вступление

В этом уроке вы попробуете управлять умной лампочкой, которая работает через Home Assistant с дополнительными модулями Робономики. Ваша цель — включать/выключать лампочку с помощью стандартного интерфейса Polkadot/Substrate в парачейне Робономики. Лампочка транслируется на [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live), поэтому вы можете наблюдать за своим результатом в режиме реального времени. Кроме того, более подробный набор инструкций по использованию IoT-подписки доступен на нашем сайте [wiki](https://wiki.robonomics.netwилиk/docs/subscription-launch/).


## Инструкция

<List type="numbers">

<li>

Откройте портал Робономики на [Polkadot/Substrate](https://polkadot.js.илиg/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.netwилиk%2F#/extrinsics).

Вы увидите меню Extrinsics (экстринсики - это функции в экосистеме Polkadot). Если Extrinsics не открывается, перейдите с помощью меню в левом верхнем углу страницы в раздел <code> Kusama & Parachains -> Robonomics</code>, и нажмите <code>Switch</code>. Затем перейдите наверх к <code>Developer</code> а затем к <code>Extrinsics</code>.


</li>

<li>
В первом поле "using the selected account", выберите тот же аккаунт Polkadot.js, который вы использовали в предыдущем уроке.
</li>

<li>
Во втором поле "submit the following extrinsic", найдите <code>rws</code> экстринсик и выберите <code>call(subscriptionId, call)</code>. Это позволит вам отправить вызов функции с помощью IoT-подписки.
</li>

<li>
В поле <code>subscriptionId: AccountId32</code> ведите адрес владельца этой подписки: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

В поле <code>call: Call</code> выберите команду <code>launch(robot, param)</code>.

Затем появятся еще два поля: <code>robot</code> и <code>param</code>.

</li>

<li>
В поле <code>robot: AccountId32</code> введите адрес умной лампочки: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

В поле <code>param: H256</code> нужно указать 1 (on) или 0 (off), чтобы включить/выключить лампочку.

Это можно сделать с помощью:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

или

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Нажмите кнопку «Отправить транзакцию».

Не забудьте открыть [трансляцию на YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) перед подписанием транзакции.

</li>


</List>

<Result>

Урок будет считаться пройденным после отправки успешной транзакции и ее появления в обозривателе Polkadot в вашем аккаунте Polkadot.js.

Вы можете посмотреть свои результаты в [специальном децентрализованном приложении](https://lk.robonomics.academy/). Для авторизации используйте тот же аккаунт Polkadot.js, который использовался во время курса.

</Result>