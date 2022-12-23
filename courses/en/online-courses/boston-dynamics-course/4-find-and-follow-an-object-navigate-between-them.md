---
title: "Lesson #4, Find and follow an object, navigate between them"
description: In the third lesson you will learn how to find World Objects and go to them.
lessonNumber: 4
courseID: 2
metaOptions: [Online Courses, Boston Dynamics Spot Software Developing]
---

<section class="container__reg">

## What's this about

In the third lesson you will learn how to find World Objects and go to them.

</section>


<section class="container__reg">

## The challenge

You start with Spot in the place with some fiducials (a mark on the object) around. Create and execute Python script detects at least two fiducials and moves Spot to each of them within 1 m.

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services#world-object) tab in Spot SDK documentation

Using world object service you can find fiducials near the Spot. 

Spot can find objects around faster if he stands.

In the task you will need find fiducials' coordinates and go to them. You already know how to move to the local coordinates from the [Lesson 2](/online-courses/boston-dynamics-course/2-remote-controlled-and-programmed-motion). The example of how to find a fiducial and it's coordinates is in [fiducial_follow example](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py).

In your script, firstly, you need to find fiducial object with World Object Service:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects
</lessonCodeWrapper>


Then get fiducial coordinates in a visual frame:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial = fiducial_objects[0]
vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())
</lessonCodeWrapper>

</li>

<li>
Connect to Spot from a terminal or using your development environment remote execution function.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Develop and demonstrate your solution to the challenge.

We create [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) for you, so you should not create it. For Spot authentication use username and password from <code>/home/student/credentials</code> file. Spot address is <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__reg">

### Are you ready to practice?

Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Rent a spot" />

</section>