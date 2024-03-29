---
title: "Assembling Smart Home Board"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: You will learn how to assemble smart home board!
metaOptions: [Learn]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Smart Home Panel 

This panel is intended to be used as a central control device with the most used switches and data displayed on it. Also it’s possible to connect an intercom and use it as an indoor monitor. Basically it’s just a tablet running Android OS in our case. All you need to do is provide power. We think this panel should be installed where you would place an indoor monitor

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Light Switch

Smart light switches look more or less like the ordinary ones, except push buttons are used instead of switches. A push button comes back to its position after pressing. There is no difference in connection between a regular switch and a smart one: connect neutral wire to N, power wire to L and the lightning line to L1. After assembling the switch in order to pair it via ZigBee push the button for at least 5 seconds.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

In the case of the two button switch (or more), the only difference is the second (third, …) line of lights. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Smart Light Bulb 

Smart light bulbs are probably the most easy way to try something smart out, you don’t even need to be an electrician. They could be controlled remotely and can change its brightness or color. You can install them along with smart switches or separately. Using such devices can open a whole page of automations depending on your mood or outdoor conditions! New light bulbs are ready to be connected via ZigBee. In case you can’t find one, switch it on and off 5 times


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Smart Socket 

There are a number of “not smart” devices that we usually need to turn on and off sometimes. If we power such a device up via the smart socket we can turn it on/off according to our needs, schedule or conditions. Also such sockets can monitor energy consumption so we have data on how much this device consumes. Connection is quite easy, to pair the smart socket push button for 5 seconds

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Boiler Switch 

The reason the boiler switch exists as a dedicated device is it can bear more load. Usually boilers consume 3kWh or even more, so the regular (even smart) switches are not suitable in this situation. The boiler switch is designed to work under these conditions. The connections and pairing is pretty much the same as for the light switch

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Wifi/Zigbee Thermostat

It looks like an ordinary thermostat but comes with an ability to be controlled wirelessly. There are options: connect a heating system directly to the thermostat or separate them. In the latter case thermostat will tell us the mode (heat, cool, fan, etc) and temperature

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Curtain Switch

Another dedicated switch, this time for curtains. From a technical point of view it’s not necessary to use this switch only, we could use any three button switch and attach it to the curtain motor, but this one comes with special icons. In order to pair the switch long press on the middle button

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Smart Valve Controller

Choose a controller according to the valves you have. The most obvious scenario is to combine this controller with a water leakage sensor. To pair the device hold the button for 5 seconds

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Water Leakage Sensor

Quite a simple device that sends a signal when its two contacts are connected. Water conducts electricity and when there is water under the sensor its contacts are shorted out. The sensor works on a battery and usually lasts for 1-2 years. To pair the sensor via ZigBee long press on its button for a while 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## IR Controller

Think of it as your remote TV controller… but smart one! And it’s not limited to work with TVs only. If your A/C has a remote controller, it could be replaced with this smart one. In order to pair it, push the reset button on the back of the controller for a while. There are a bunch of libraries with ready to use commands, for example [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). All you have to do is to find the model of your TV or A/C

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Door/Window Sensor

Another sensor that works on a battery but helps in building a simple security system or connecting it to lights and other devices. To pair it via ZigBee, put a needle in the hole and push it for a while

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Motion Sensor
The same as the door/window sensor, could be used in various scenarios. The most obvious ones are controlling lights or detect motions when you are away

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Temperature & Humidity Sensor

It’s good to know the conditions you live in, right? This sensor will provide you with temperature and humidity measurements. Then you can use this data to turn your A/C on/off or other heating/cooling systems. To pair the sensor there is a button on the back 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Security Camera

In the end it’s good to have a look at what happens with your home. A good automation would be to connect the motion sensor with the camera so you’ll have a 10 seconds long video when motion is detected 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Smart Board 
Have a look at the results [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
And play with it yourself [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

