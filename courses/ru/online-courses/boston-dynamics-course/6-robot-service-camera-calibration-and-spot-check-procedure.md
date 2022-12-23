---
title: 'Урок #6, обслуживание роботов. Калибровка камеры и процедура «Выездной проверки»'
description: "В этом уроке вы узнаете, что делать, если у вас только что появился робот: первый запуск и настройка сети. Также вы узнаете, как запустить процесс калибровки, который следует проводить ежемесячно."
lessonNumber: 6
courseID: 2
metaOptions: [Онлайн Курсы, Разработка программного обеспечения для Spot от Boston Dynamics]
---


<section class="container__reg">

## О чем вы узнаете

В этом уроке вы узнаете, что делать, если у вас только что появился робот: первый запуск и настройка сети. Также вы узнаете, как запустить процесс калибровки, который следует проводить ежемесячно.

</section>


<section class="container__reg">

## Задача

Создание и выполнение скрипта Python реализует описанное поведение

<List type="numbers">
<li>Запустите «spot check» и сохраните результат калибровки в каталоге <code>/home/student/result</code> d в виде текстового файла.</li>
<li>Запустите процедуру калибровки камеры.</li>
</List>

</section>

<section class="container__reg">

## Инструкция

<List type="numbers">

<li>

Первый запуск

Просмотрите страницу [Startup Procedure](https://support.bostondynamics.com/s/article/Startup-Procedure) в документации.

</li>

<li>

Сеть

Spot предлагает различные сетевые опции для поддержки разнообразных приложений и окружения. Опции доступные Spot:

\- Spot в качестве подключенного узла. Физическое подключение к Spot.

\- Spot как точка доступа WiFi.

\- Spot как WiFi-клиент. Spot может подключаться к существующей сети Wi-Fi, и приложения также могут подключаться к той же сети Wi-Fi для связи со Spot.

Более подробную информацию читайте в разделе [Networking page](https://dev.bostondynamics.com/docs/concepts/networking).

Spot Core подключается к Spot через порт полезной нагрузки. Spot Core можно подключить к Интернету с помощью Wi-Fi ключа. Инструкцию по настройке вы можете найти на странице [Spot Core Cockpit](https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check).

</li>

<li>

Калибровка

Spot Check — это полная калибровка робота. Также вы можете запустить калибровку камеры

\- [run_spot_check](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164) запускает полную процедуру spot check. Робот должен сидеть на ровной поверхности, когда эта процедура запущена. Эта процедура калибрует соединение робота и проверяет исправность камеры.

\- [run_camera_calibration](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204). Запуск процедуры полной калибровки камеры робота. Эта функция блокируется до завершения калибровки. Функцию следует использовать, когда робот включен и стоит спиной к калибровочному стенду на расстоянии 1 метра. Процесс калибровки занимает около 20 минут.

</li>

<li>

Подключитесь к Spot с терминала или с помощью функции удаленного выполнения вашей среды разработки.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Разработайте и продемонстрируйте свое решение задачи.

Мы создаем [конечную точку E-Stop](https://dev.bostondynamics.com/python/examples/estop/readme) для вас, поэтому вам не нужно ее создавать. Для аутентификации Spot используйте имя пользователя и пароль из файла - <code>/home/student/credentials</code>. Адрес Spot: <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__reg">

### Готовы приступить к практике?

Как только почувствуете, что готовы, вы можете купить часовой практический сеанс, указав свои учетные данные для доступа (SSH-ключ) и время, когда вы хотите подключиться к Spot для решения задачи.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Арендовать Spot" />

</section>