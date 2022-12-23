---
title: "Урок #2, аварийная остановка, инициализация, контроль положения тела"
description: Во время этого урока вы узнаете, как авторизоваться как пользователь, управлять мощностью двигателя и отправлять основные команды Spot.
lessonNumber: 2
courseID: 2
metaOptions: [Онлайн Курсы, Разработка программного обеспечения для Spot от Boston Dynamics]
---

<section class="container__reg">

## О чем вы узнаете

Во время этого урока вы узнаете, как авторизоваться как пользователь, управлять мощностью двигателя и отправлять основные команды Spot.

Посмотрите наш вводный видео урок, если вы его еще не видели: [https://youtu.be/qdk7BjWJpr](https://youtu.be/qdk7BjWJpr)

</section>


<section class="container__reg">

## Задача

Создайте скрипт Python, управляющий положением тела робота. Запустите свой скрипт на Spot, чтобы он выполнил последовательность движений:

<List type="numbers">
<li>Встать</li>
<li>Обвести свои инициалы с помощью головы Spot (одна буква, не менее 3 точек)</li>
<li>Сесть</li>
</List>

</section>

<section class="container__reg">

## Инструкция

<List type="numbers">

<li>

Прочтите страницу [Understanding Spot Programming](https://dev.bostondynamics.com/docs/python/understanding_spot_programming) в документации Spot SDK. Вам нужно понять, что такое E-Stop и как выполнить инициализацию в вашем скрипте Python, чтобы позволить роботу выполнять команды.

Более подробную информацию об этом уроке можно найти в разделах [Base Services](https://dev.bostondynamics.com/docs/concepts/base_services), [Geometry and Frames](https://dev.bostondynamics.com/docs/concepts/geometry_and_frames), [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services) и [E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) документации Spot SDK.


</li>

<li>

Подключитесь к SpotCORE по SSH с терминала

<lessonCodeWrapper language="bash">ssh student@strelka.ygg.merklebot.com</lessonCodeWrapper>

</li>

<li>

Создайте скрипт, который может аутентифицироваться в Spot, получить управление (аренду) и включить робота.

Мы создаем [конечную точку E-Stop](https://dev.bostondynamics.com/python/examples/estop/readme) для вас, поэтому вам не нужно ее создавать. Для аутентификации Spot используйте имя пользователя и пароль из файла - <code>/home/student/credentials</code>. Адрес Spot: <code>192.168.50.3</code>.

В разделе [Taking ownership of Spot (Leases)](https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases) используйте 

<lessonCodeWrapper language="python">lease = lease_client.acquire()</lessonCodeWrapper>

перед

<lessonCodeWrapper language="python" codeClass="big-code">lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</lessonCodeWrapper>

</li>

<li>

Опробуйте свой скрипт с помощью команд: «встать» и «сесть». Убедитесь, что робот движется, как и ожидалось.

Убедитесь, что вы запускаете скрипт на Python3 с помощью команды <code>pythoon3</code>. Команда <code>python</code> относится к устаревшему интерпретатору Python 2.

</li>

<li>

Добавьте в свой скрипт контроль положения тела. Поэкспериментируйте с <code>bosdyn.geometry.EulerZXY</code> конструктором аргументов команды робота, чтобы определить, какие параметры: вращение, перевороты и управление голосом, вам нужно установить для решения задачи. Диапазон управления голосом, вращения и переворота варьируется от -0,5 до 0,5.

</li>

</List>
</section>

<section class="container__reg">

### Готовы приступить к практике?

Как только почувствуете, что готовы, вы можете купить часовой практический сеанс, указав свои учетные данные для доступа (SSH-ключ) и время, когда вы хотите подключиться к Spot для решения задачи.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Арендовать Spot" />

</section>