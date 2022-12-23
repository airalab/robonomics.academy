---
title: "Урок #5, сервис GraphNav. Картографирование и навигация по карте"
description: В четвертом уроке вы научитесь записывать и воспроизводить автономные миссии с помощью сервиса GraphNav.
lessonNumber: 5
courseID: 2
metaOptions: [Онлайн Курсы, Разработка программного обеспечения для Spot от Boston Dynamics]
---


<section class="container__reg">

## О чем вы узнаете

В четвертом уроке вы научитесь записывать и воспроизводить автономные миссии с помощью сервиса GraphNav.

</section>


<section class="container__reg">

## Задача

В этом уроке вы не сможете решить задачу, не написав собственный скрипт на Python.

<List type="numbers">
<li>Запишите карту, избегая препятствий. Вы можете использовать инструмент дистанционного управления WASD. Сохраните свой результат в <code>/home/student/result</code>.</li>
<li>Переместите Spot через записанные путевые точки. Вы можете использовать инструмент командной строки службы GraphNav.</li>
</List>

</section>

<section class="container__reg">

## Инструкция

<List type="numbers">

<li>

Spot SDK включает в себя API, клиентские библиотеки и примеры, которые поддерживают разработку автономных навигационных режимов для робота Spot. В совокупности этот сервис называется GraphNav. Карты записываются и сохраняются, а позже их можно использовать с любым роботом из вашего парка. В процессе записи карты вы можете назначать действия и обратные вызовы API путевым точкам вдоль маршрута карты.

Прочтите [GraphNav Tech Summary](https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary), чтобы понять, как это работает. [Инициализация](https://dev.bostondynamics.com/docs/concepts/autonomy/initialization) также является важной частью, она понадобится вам в этом уроке.

Вы можете посмотреть записанные карты на примере [View Map](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map). Для этого вам нужно скопировать карту на свой компьютер:

<lessonCodeWrapper language="python" codeClass="big-code">
scp -r student@strelka.ygg.merklebot.com:&lt;path_to_the_map_on_spot&gt; &lt;path_to_the_map_to_download&gt;
</lessonCodeWrapper>

Также вам нужно [установить пакеты Spot](https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-package).

Изучите [примеры записи и воспроизведения миссий](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line), чтобы использовать их для записи карты и воспроизведения записанной миссии. Используйте пример [wasd](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd) для перемещения робота во время записи карты.

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

Вы можете запустить инструмент удаленного управления из справочника примеров.

<lessonCodeWrapper language="bash">
cd ~/spot-sdk/python/examples/wasd
python3 wasd.py --username &lt;SPOT_AUTH_USERNAME&gt; --password &lt;SPOT_AUTH_PASSWORD&gt; &lt;SPOT_ADDRESS&gt;
</lessonCodeWrapper>

Инструмент командной строки GraphNav находится по адресу

<lessonCodeWrapper language="bash">
~/spot-sdk/python/examples/graph_nav_command_line
</lessonCodeWrapper>

</li>

</List>
</section>

<section class="container__reg">

### Готовы приступить к практике?

Как только почувствуете, что готовы, вы можете купить часовой практический сеанс, указав свои учетные данные для доступа (SSH-ключ) и время, когда вы хотите подключиться к Spot для решения задачи.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Арендовать Spot" />

</section>