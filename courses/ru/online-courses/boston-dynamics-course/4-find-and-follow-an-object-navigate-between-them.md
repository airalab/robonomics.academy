---
title: "Урок #4, Поиск объекта и следование за ним, перемещение между объектами"
description: В третьем уроке вы научитесь находить объекты по всему миру и идти к ним.
lessonNumber: 4
courseID: 2
metaOptions: [Онлайн Курсы, Разработка программного обеспечения для Spot от Boston Dynamics]
---

<section class="container__reg">

## О чем вы узнаете

В третьем уроке вы научитесь находить объекты по всему миру и идти к ним.

</section>


<section class="container__reg">

## Задача

Вы начинаете использовать Spot в месте, где есть несколько опорных точек (отметки на объекте). Создайте и выполните скрипт Python, который находит как минимум две опорные точки и перемещает Spot к каждой из них в пределах 1 метра.

</section>

<section class="container__reg">

## Инструкция

<List type="numbers">

<li>

У Spot есть служба World Object Service, которая позволяет отслеживать и сохранять объекты, обнаруженные в окружающем Spot мире. Мировой объект считается элементом сцены более высокого уровня, с которым связано некоторое количество семантической информации. Более подробную информацию вы можете найти в разделе [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services#world-object) в документации Spot SDK.

Используя службу мировых объектов, вы можете найти опорные точки рядом со Spot.

Spot может быстрее находить предметы вокруг, если стоит.

В задании вам нужно будет найти координаты опорных точек и отправиться к ним. Вы уже знаете, как перейти к локальным координатам из [Урока 2](/online-courses/boston-dynamics-course/3-remote-controlled-and-programmed-motion). Пример того, как найти опорную точку и ее координаты, находится в [fiducial_follow example](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py).

Во-первых, в вашем скрипте, вам нужно найти опорный объект с помощью World Object Service:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects
</lessonCodeWrapper>


Затем получите опорные координаты в визуальной рамке:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial = fiducial_objects[0]
vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())
</lessonCodeWrapper>

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