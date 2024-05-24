---
title: "Урок №3, Екосистема Polkadot для домашньої Інтернету речей"
lastUpdate: Thu May 04 2023 12:53:58 GMT+0400 (Samara Standard Time)
description: У цьому уроці ви спробуєте керувати розумною лампочкою, використовуючи паралель Robonomics.
lessonNumber: 3
metaOptions: [Вчитися, Вступ до ідей Робономіки]
defaultName:  Introduction to the ideas of Robonomics
---

Урок 2 пояснив основні принципи Robonomics та згадав Polkadot / Kusama як перспективну блокчейн-екосистему для його впровадження. Час приділити увагу функціям паралель Robonomics як частині екосистеми Polkadot в мережі Kusama. Зокрема, ми хотіли б показати, як працюють підписки IoT паралелі Robonomics. Під час першого уроку вашу адресу було додано до підписки на курс IoT, і ви вже встигли використати її двічі: коли шукали своє відображення в чорному дзеркалі та коли здавали результати тесту.

## Вступ

У цьому уроці ви спробуєте керувати розумною лампочкою. Ваша мета - увімкнути / вимкнути лампочку, використовуючи стандартний інтерфейс Polkadot/Substrate на паралелі Robonomics. Лампочка транслюється на [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live), тому ви можете спостерігати за результатом у реальному часі. Також більш детальний набір інструкцій щодо використання підписки IoT доступний на [нашому вікі](https://wiki.robonomics.netwабоk/docs/subscription-launch/).


## Інструкції

<List type="numbers">

<li>

Відкрийте портал Robonomics [Polkadot/Substrate](https://polkadot.js.абоg/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.netwабоk%2F#/extrinsics).

Ви повинні побачити меню Extrinsics (функції в екосистемі Polkadot). Якщо Extrinsics не відкривається, то, використовуючи меню у верхньому лівому куті сторінки, перейдіть до <code> Kusama & Parachains -> Robonomics</code>, і натисніть <code>Switch</code>. Потім перейдіть до <code>Developer</code> у верхньому заголовку, а потім до <code>Extrinsics</code>.

</li>

<li>
У першому полі, де написано 'викорстовуючи вибраний обліковий запис', виберіть той самий обліковий запис Polkadot.js, який ви використовували на попередніх уроках.
</li>

<li>
У другому полі "надіслати наступний екстрик", виберіть екстрикси <code>rws</code> та виберіть <code>call(subscriptionId, call)</code>. Це дозволить вам викликати функцію за допомогою підписки IoT.
</li>

<li>
У полі <code>subscriptionId: AccountId32</code> вставте адресу власника цієї підписки: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

У полі <code>call: Call</code> виберіть команду <code>launch(robot, param)</code>.

Це покаже вам ще два поля: <code>robot</code> та <code>param</code>.

</li>

<li>
У полі <code>robot: AccountId32</code> вставте цю адресу розумної лампочки: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

У полі <code>param: H256</code> вам потрібно вказати 1 (увімкнути) або 0 (вимкнути), щоб увімкнути / вимкнути лампочку.

Ви можете це зробити за допомогою:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

або

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Натисніть кнопку "Надіслати транзакцію".

Не забудьте відкрити [трансляцію на YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) перед підписанням транзакції.

</li>


</List>

<Result>

Урок буде вважатися завершеним після відправлення успішної транзакції та її відображення в досліднику Polkadot для вашого облікового запису Polkadot.js.

Ви можете перевірити свої результати на [спеціальному додатку для перевірки](https://lk.robonomics.academy/). Для авторизації в додатку для перевірки використовуйте той самий обліковий запис у Polkadot.js, який використовувався під час курсу.

</Result>