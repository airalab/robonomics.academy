---
title: 'Lesson #6, Robot service. Camera calibration and "Spot check" procedure'
description: "In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly."
lessonNumber: 6
courseID: 2
metaOptions: [Online Courses, Boston Dynamics Spot Software Developing]
---


<section class="container__narrow">

## What's this about

In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.

</section>


<section class="container__narrow">

## The challenge

Create and execute Python script implements behaviors described.

<List type="numbers">
<li>Run "spot check" and save the result of the calibration in a <code>/home/student/result</code> directory as a text file.</li>
<li>Run camera calibration procedure.</li>
</List>

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

First run 

Look at [Startup Procedure](https://support.bostondynamics.com/s/article/Startup-Procedure) page in Documentation.

</li>

<li>

Networking

Spot offers a variety of networking options to support a diverse set of applications and environments. Options include:

\- Spot as a connected peer. Physical connection to Spot.

\- Spot as a WiFi access point.

\- Spot as a WiFi client. Spot can join an existing WiFi network, and applications can also join the same WiFi network to talk to Spot.

For more information look at [Networking page](https://dev.bostondynamics.com/docs/concepts/networking).

Spot Core is connected to the Spot via payload port. Spot Core can be connected to the Internet with Wi-Fi dongle. The setup instructions you can find at [Spot Core Cockpit](https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check) page.

</li>

<li>

Calibration

Spot Check is a full calibration of the robot. Also you can run the camera calibration 

\- [run_spot_check](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164) runs full spot check routine. The robot should be sitting on flat ground when this routine is started. This routine calibrates robot joints and checks camera health.

\- [run_camera_calibration](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204). Run full camera calibration routine for robot. This function blocks until calibration has completed. This function should be called once the robot is powered on and standing with his back to the calibration stand at a distance of 1 meter. Calibration process takes about 20 minutes

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

<section class="container__narrow">

### Are you ready to practice?

Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Rent a spot" />

</section>