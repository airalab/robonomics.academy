---
title: "Lesson #2, Emergency stop, initialization, body position control"
description: During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.
lessonNumber: 2
courseID: 2
metaOptions: [Online Courses, Boston Dynamics Spot Software Developing]
---

<section class="container__narrow">

## What's this about

During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.

Watch our introductory video if you haven't seen it already: [https://youtu.be/qdk7BjWJpr](https://youtu.be/qdk7BjWJpr)

</section>


<section class="container__narrow">

## The challenge

Create a Python script controls robot body position. Run your script on Spot to let it execute a sequence of motions:

<List type="numbers">
<li>Stand-up</li>
<li>Trace your initials with it's face (one letter, at least 3 points)</li>
<li>Sit-down</li>
</List>

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Read [Understanding Spot Programming](https://dev.bostondynamics.com/docs/python/understanding_spot_programming) page in Spot SDK documentation. You need to understand what is E-Stop and how make initialization in your Python script in order to let the robot execute commands.

You can find more detailed information for this lesson in [Base Services](https://dev.bostondynamics.com/docs/concepts/base_services), [Geometry and Frames](https://dev.bostondynamics.com/docs/concepts/geometry_and_frames), [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services) and [E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) section of the Spot SDK documentation. 


</li>

<li>

Connect to SpotCORE by SSH from terminal

<lessonCodeWrapper language="bash">ssh student@strelka.ygg.merklebot.com</lessonCodeWrapper>

</li>

<li>

Create a script can authenticate in Spot, acquire control (lease) and power on the robot.

We create [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) for you, so you should not create it. For Spot authentication use username and password from <code>/home/student/credentials</code> file. Spot address is <code>192.168.50.3</code>.

In [Taking ownership of Spot (Leases)](https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases) section use

<lessonCodeWrapper language="python">lease = lease_client.acquire()</lessonCodeWrapper>

before

<lessonCodeWrapper language="python" codeClass="big-code">lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</lessonCodeWrapper>

</li>

<li>

Try your script with stand-up and sit-down commands. Ensure robot moves as expected.

Make sure you run script by Python3 with <code>pythoon3</code> command. Command <code>python</code> refers to an obsolete Python 2 interpreter.

</li>

<li>

Add body position control to your script. Experiment with <code>bosdyn.geometry.EulerZXY</code> robot command argument builder in order to identify what yaw, roll and pitch parameters you need to set to solve the challenge. The range of Pitch, Yaw and Roll is from -0.5 to 0.5.

</li>

</List>
</section>

<section class="container__narrow">

### Are you ready to practice?

Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Rent a spot" />

</section>