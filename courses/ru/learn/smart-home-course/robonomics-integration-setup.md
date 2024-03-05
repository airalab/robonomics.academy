---
title: "Урок №6. Настройка интеграции Робономики"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: курс домашнего помощника
lessonNumber: 7
metaOptions: [Изучите суверенный умный дом с помощью Robonomics и Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## О чем это

В этом уроке вы добавите Robonomics в Home Assistant и создадите учетную запись, связанную с подпиской. Эта интеграция позволяет Home Assistant использовать функции парачейна Robonomics, прежде всего, отправлять зашифрованные данные умного дома в децентрализованное облако.


## Теория

Ваши данные умного дома отправляются с использованием экструзии <code>record()</code> из паллета <code>datalog</code>, что позволяет сохранить зашифрованные данные устройства в блокчейне. 

Для более точной настройки интеграция использует IPFS для хранения данных, а затем отправляет хеши IPFS в экструзию datalog, которая в свою очередь хранится в блокчейне. Но поскольку эта функция вызывается через подписку IoT, вся функция выглядит так: <code>rws.call(datalog.record(YOUR_IPFS_HASH))</code>.

## Инструкции

<List type="numbers">

<li>

Добавление Robonomics в Home Assistant

<List>

<li>

На веб-интерфейсе Home Assistant перейдите в <code>Настройки</code>-><code>Устройства и Сервисы</code> и нажмите <code>ДОБАВИТЬ ИНТЕГРАЦИЮ</code>. Найдите <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Нажмите на Robonomics и заполните конфигурацию: 

\- Добавьте seed из учетной записи <code>SUB_CONTROLLER</code> в seed учетной записи администратора

\- Добавьте публичный адрес учетной записи <code>SUB_OWNER</code> (которую вы создали ранее) в адрес владельца подписки

\- Установите интервал отправки данных (по умолчанию 10 минут)

\- (По желанию) Вы можете добавить учетные данные для сервиса Pinata для распространения ваших данных по широкой сети IPFS

</li>

<li>

Нажмите <code>ПОДТВЕРДИТЬ</code> после завершения конфигурации. Если вы все заполнили правильно, вы увидите окно Успех.

</li>
</List>
</li>

<li>

Добавление пользователей в приложение Robonomics 

<List>

<li>

Вам нужно создать отдельного пользователя для Home Assistant, который будет управлять устройствами умного дома. Вы не можете использовать ранее созданные учетные записи, потому что <code>SUB_OWNER</code> и <code>SUB_CONTROLLER</code> обеспечивают безопасность, и первый пользователь, которого вы создали при первом запуске Home Assistant, не имеет учетной записи Robonomics Parachain.

</li>

<li>
Начните с создания учетной записи на Robonomics Parachain, как вы делали в предыдущем уроке.
</li>

<li>

Добавьте эту учетную запись в подписку в [приложении](https://dapp.robonomics.network/#/subscription/devices). Теперь в списке доступа должно быть три адреса: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> и <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Перейдите на службу приложения с названием [Учетная запись Home Assistant](https://dapp.robonomics.network/#/home-assistant). Выберите учетную запись, которую вы только что создали, на правой боковой панели (убедитесь, что вы выбрали нужную учетную запись, нажав на значок профиля).

Введите сид <code>USER</code> в соответствующее поле. Добавьте адреса <code>SUB_OWNER</code> и <code>SUB_CONTROLLER</code> в поля администраторских кредитов. Если все верно, вы увидите статус проверки <code>VERIFIED</code>.

</li>

<li>

Создайте пароль для нового пользователя, которого вы только что зарегистрировали, а затем подтвердите транзакцию, которая теперь будет без комиссии из-за подписки. Позже вы сможете восстановить пароль во вкладке <code>Restore</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

После процесса регистрации войдите в Home Assistant с вашим адресом пользователя в качестве логина и вновь созданным паролем. Теперь вы можете использовать приложение Robonomics для управления своим домом через Robonomics.

</li>
</List>
</li>
</List>