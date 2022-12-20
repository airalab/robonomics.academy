---
title: "Lesson #1, Configure and test connection to Spot"
description: In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.
lessonNumber: 1
courseID: 2
metaOptions: [Online Courses, Boston Dynamics Spot Software Developing]
---

<section class="container__narrow">

## What's this about

In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.

</section>


<section class="container__narrow">

## The challenge

Our goal is to get answers from Spot to our [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)) signals. We use Yggdrasil Network to expose Spot to the internet, that means we will need to configure Yggdrasil Network support on your computer first.

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Yggdrasil Installation

Yggdrasil is an early-stage implementation of a fully end-to-end encrypted IPv6 network. Before starting the lessons you need to install it on your computer.

For Linux: Installation instructions [here](https://yggdrasil-network.github.io/installation-linux-deb.html).

For MacOS: Download .pkg file from [here](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg). Locate the downloaded file in Finder. Right-click it and click Open. Step through the installer as usual.

For Windows: Download .msi file for [x64 system](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) or for [x32 system](https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi) and run it with double click.
</li>

<li>

Open configuration file 

You need to add a list of peers (public nodes) to configuration file so that you will be able to connect to Spot.

For MacOS and Linux:

For that, edit the <code>yggdrasil.conf</code> file with this command in a terminal:

<lessonCodeWrapper language="bash">sudo nano /etc/yggdrasil.conf</lessonCodeWrapper>

For Windows: Run <code>updateconfig.bat</code> in <code>C:/Program Files/Yggdrasil</code>.

Then in <code>C:/ProgramData/Yggdrasil</code> open <code>yggdrasil.conf</code> with any text editor.

<code>ProgramData</code> is a hidden folder, so you need to show hidden data.

</li>

<li>

Write peers

In the file that you opened find line <code>Peers:</code> it is at the beginning of the file) add 5-6 peers geographically near to you (write them inside the brackets). You can find list of available peers [here](https://github.com/yggdrasil-network/public-peers) or add peers from example below. Example in yggdrasil.conf:

<lessonCodeWrapper language="json">
[
  tcp://213.188.199.150:10010
  tcp://213.188.210.9:10010
  tcp://[2a09:8280:1::3:312]:10010
  tcp://[2a09:8280:1::a:2e2]:10010
  tcp://46.151.26.194:60575
  tcp://ygg-ru.cofob.ru:18000
  tcp://ygg.tomasgl.ru:61933
  tls://185.22.60.71:8443
  tcp://51.15.118.10:62486
  tls://ygg.loskiq.dev:17314
  tls://longseason.1200bps.xyz:13122
]
</lessonCodeWrapper>

Check if the peers online in [Public Peers](https://publicpeers.neilalexander.dev/)

</li>

<li>

Save and close configuration file

For Linux and MacOS:

Press <code>Ctrl+x</code>, then press <code>y</code> to save changes and press <code>Enter</code>.

For Windows: Save and close file.

</li>

<li>

Restart service 

For Linux: Then restart Yggdrasil using this command:

<lessonCodeWrapper language="bash">systemctl restart yggdrasil</lessonCodeWrapper>

For macOS: Unload the service and run Yggdrasil with changed config file:

<lessonCodeWrapper language="bash" codeClass="big-code">
sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf
</lessonCodeWrapper>

You will need to do that before every lesson.

For Windows:

Press win + r and type <code>services.msc</code>, find Yggdrasil service, open it and restart (press Stop and Start).

<LessonImages src="boston-dynamics-course/lesson-0-1.jpg" alt="tutorial"/>
</li>

<li>

Check Connection

Check if Yggdrasil works well. For that try to ping Spot address:

<lessonCodeWrapper language="bash">ping -6 strelka.ygg.merklebot.com</lessonCodeWrapper>

To open terminal in Windows press <code>Win+R</code>, type <code>cmd</code> and press <code>Enter</code>.

On MacOS use <code>ping6</code> instead of <code>ping</code>.

If you can't ping Spot or you had any errors during the Yggdrasil setup look in [Troubleshooting page](https://dapp.spot-sdk.education/docs/spot-troubleshooting). If you can't find the solution there, please email **spot@robonomics.network**.

</li>

<li>

Create ssh key 

You will connect to Spot via ssh, so you need to create ssh keys which you will use in booking lessons.

Run following command in the terminal:

<lessonCodeWrapper language="bash">ssh-keygen -t rsa</lessonCodeWrapper>

SSH Client is available by default only in Windows 10, so if you use older versions you need to install it. For example you can use [PuTTY](https://www.putty.org/). Remember the path to your key (by default it is <code>/home/&lt;user&gt;/.ssh/id_rsa.pub</code> or <code>C:\Users\&lt;user&gt;\.ssh\id_rsa.pub</code>).
</li>
</List>
</section>

<section class="container__narrow">

### Are you ready to practice?

Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Rent a spot" />

</section>