---
title: "Урок №6, Налаштування інтеграції робономіки"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: курс домашнього асистента
lessonNumber: 7
metaOptions: [Вивчайте, Суверенний Розумний Дім з Robonomics та Домашнім Асистентом]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Про що йдеться

У цьому уроці ви додасте Robonomics до Home Assistant та створите обліковий запис, пов'язаний з підпискою. Ця інтеграція дозволяє Home Assistant використовувати функції паралели Robonomics, передусім, надсилати зашифровані дані розумного будинку до децентралізованого хмари.


## Теорія

Ваші дані розумного будинку надсилаються за допомогою <code>record()</code> екстриксів з палітри <code>datalog</code>, що дозволяє зберігати зашифровані дані пристроїв на блокчейні. 

Щоб бути точнішим, інтеграція використовує IPFS для зберігання даних, а потім надсилає хеші IPFS до екстриксів datalog, які в свою чергу зберігаються в блокчейні. Але оскільки ця функція викликається через підписку IoT, вся функція виглядає так: <code>rws.call(datalog.record(YOUR_IPFS_HASH))</code>.

## Інструкції

<List type="numbers">

<li>

Додавання Robonomics до Home Assistant

<List>

<li>

У веб-інтерфейсі Home Assistant перейдіть до <code>Налаштування</code>-><code>Пристрої та сервіси</code> та натисніть <code>ДОДАТИ ІНТЕГРАЦІЮ</code>. Знайдіть <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Клацніть на Robonomics та заповніть конфігурацію: 

\- Додайте seed з облікового запису <code>SUB_CONTROLLER</code> до seed облікового запису адміністратора

\- Додайте публічну адресу облікового запису <code>SUB_OWNER</code> (яку ви раніше створили) до адреси власника підписки

\- Встановіть інтервал надсилання даних (за замовчуванням це 10 хвилин)

\- (Необов'язково) Ви можете додати облікові дані для сервісу пінінгу Pinata, щоб розповсюдити ваші дані ширше по мережі IPFS

</li>

<li>

Натисніть <code>ПІДТВЕРДИТИ</code> після завершення налаштувань. Якщо ви все правильно заповнили, ви побачите вікно успіху.

</li>
</List>
</li>

<li>

Додавання користувачів у додаток Robonomics 

<List>

<li>

Вам потрібно створити окремого користувача для Home Assistant, який буде керувати пристроями розумного будинку. Ви не можете використовувати раніше створені облікові записи, оскільки <code>SUB_OWNER</code> та <code>SUB_CONTROLLER</code> забезпечують безпеку, і перший користувач, якого ви створили під час першого запуску Home Assistant, не має облікового запису Robonomics Parachain.

</li>

<li>
Почніть з створення облікового запису на Robonomics Parachain, як ви робили в попередньому уроці.
</li>

<li>

Додайте цей обліковий запис до підписки в [dapp](https://dapp.robonomics.network/#/subscription/devices). Тепер у списку доступу повинно бути три адреси: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> та <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Перейдіть до служби dapp під назвою [Обліковий запис Home Assistant](https://dapp.robonomics.network/#/home-assistant). Виберіть обліковий запис, який ви щойно створили, у правій бічній панелі (переконайтеся, що ви вибрали потрібний обліковий запис, натиснувши на значок профілю).

Введіть належний ключ <code>USER</code> у відповідне поле. Додайте адреси <code>SUB_OWNER</code> та <code>SUB_CONTROLLER</code> у поля адміністраторських кредитів. Якщо все вірно, ви побачите статус підтвердження <code>VERIFIED</code>.

</li>

<li>

Створіть пароль для нового користувача, якого ви щойно зареєстрували, а потім підтвердіть транзакцію, яка тепер буде безкоштовною через підписку. Пізніше ви зможете відновити пароль у вкладці <code>Відновлення</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Після процесу реєстрації увійдіть в Home Assistant за допомогою вашої адреси користувача як логіну та нового пароля, який ви створили. Тепер ви мжете використовувати додаток Robonomics для керування вашим будинком через Robonomics.

</li>
</List>
</li>
</List>