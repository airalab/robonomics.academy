---
title: "Lesson #5, GraphNav service. Mapping and navigating on the map"
description: In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.
lessonNumber: 5
courseID: 2
metaOptions: [Online Courses, Boston Dynamics Spot Software Developing]
---


<section class="container__reg">

## What's this about

In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.

</section>


<section class="container__reg">

## The challenge

This lesson you can solve the challenge without writing your own Python script

<List type="numbers">
<li>Record a map avoiding obstacles. You can use WASD remote control tool. Save your mission in <code>/home/student/result</code>.</li>
<li>Move Spot through recorded waypoints. You can use GraphNav service command line tool.</li>
</List>

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

The Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.

Read [GraphNav Tech Summary](https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary) to learn how it works. [Initialization](https://dev.bostondynamics.com/docs/concepts/autonomy/initialization) is also important part, it will be useful in this lesson.

You can view recorded maps with [View Map](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map) example. For that you need to copy the map to your computer:

<lessonCodeWrapper language="python" codeClass="big-code">
scp -r student@strelka.ygg.merklebot.com:&lt;path_to_the_map_on_spot&gt; &lt;path_to_the_map_to_download&gt;
</lessonCodeWrapper>

Also you need [install spot packages](https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-package).

Study [recording and playing missions](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line) examples in order to use it to record the map and playback the mission recorded. Use [wasd](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd) example to move robot while recording the map.

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

You can run remote control tool from examples directory.

<lessonCodeWrapper language="bash">
cd ~/spot-sdk/python/examples/wasd
python3 wasd.py --username &lt;SPOT_AUTH_USERNAME&gt; --password &lt;SPOT_AUTH_PASSWORD&gt; &lt;SPOT_ADDRESS&gt;
</lessonCodeWrapper>

GraphNav command line tool is located at

<lessonCodeWrapper language="bash">
~/spot-sdk/python/examples/graph_nav_command_line
</lessonCodeWrapper>

</li>

</List>
</section>

<section class="container__reg">

### Are you ready to practice?

Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Rent a spot" />

</section>