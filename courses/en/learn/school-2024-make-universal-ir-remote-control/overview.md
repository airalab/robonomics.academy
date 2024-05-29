---
title: "Robonomics School 2024 / How to independently order the production of Robonomics Open Hardware devices at any factory in the world"
lastUpdate:
description: "How to stop being afraid and become a hardware manufacturer using the example of Universal IR Remote Control"
metaOptions: [Learn, "Robonomics School 2024 / How to independently order the production of Robonomics Open Hardware devices at any factory in the world"]
defaultName: "Robonomics School 2024 / How to independently order the production of Robonomics Open Hardware devices at any factory in the world"
---

<LessonImages imageClasses="mb"  src='school-2024-make-universal-IR-remote-control/Hardware-Academy.jpg' alt="Robonomics Harware" />

Living in the modern world, it's hard to imagine life without electronic devices, which are designed to simplify our daily routines. However, these devices often have hidden (and not so hidden) motives from their manufacturers, such as collecting personal data or pushing various services. One way to avoid falling into the traps set by modern IoT device manufacturers for smart homes is to independently produce open hardware devices based on open-source firmware. At first glance, this path seems complicated and requires deep knowledge in circuit design, microelectronics, and also requires soldering skills - but this is not the case. Let's try to figure out how you can feel like a manufacturer of electronic devices on the example of assembling a Universal IR Remote Control.

<LessonVideo autoplay loop controls :videos="[{src: 'https://violet-defensive-toucan-388.mypinata.cloud/ipfs/QmXyQ51gEWUWyQTAdYko49v6gdFPyFeDkAvB5vSN2Nbfae', type:'webm'}, {src: 'https://violet-defensive-toucan-388.mypinata.cloud/ipfs/QmXyQ51gEWUWyQTAdYko49v6gdFPyFeDkAvB5vSN2Nbfae', type:'mp4'}]" />

The Universal IR Remote Control consists of three parts - the LK-AC93 case, a Wi-Fi antenna with an IPEX connector, and a printed circuit board.

You can purchase the case and the antenna on [aliexpress.com](http://aliexpress.com/) :
*  [2.4G Antenna IPEX](https://www.aliexpress.com/item/1005004307252605.html?spm=a2g0o.order_list.order_list_main.5.682b1802xZXYAs)
*  Case [LK-AC93](https://www.aliexpress.com/item/1005004558596523.html?spm=a2g0o.order_detail.order_detail_item.3.435bf19cE2LJQp) from [Shenzhen Shiny Enclosure Technology Co., Ltd.](https://www.shinyenclosure.com/)

You can order the production of the printed circuit board from one of the many factories, such as [JLCPCB](https://jlcpcb.com/), [PCBWay](https://www.pcbway.com/), [NextPCB](https://www.nextpcb.com/). The process of ordering a printed circuit board from these factories is identical, I will describe it using [JLCPCB](https://jlcpcb.com/) as an example.

To order the production of a printed circuit board, we need three files:

[gerber](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/Gerber_PCB.zip) - description of the printed circuit board project for its production

[BOM](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/BOM.xlsx) - a list of components that need to be installed on the printed circuit board

[PickAndPlace](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/PickAndPlace.csv) instructions on where exactly to install the components these files are located in the [github repository](https://github.com/airalab/hardware/tree/main/IR/ESP32/PCB) .

### So let's get started:

1. Register and login on the website [https://jlcpcb.com](https://jlcpcb.com/)

2. On the main page of the site by clicking on the field "Add gerber file" upload the [gerber](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/Gerber_PCB.zip) file from the repository 

<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_2.png"/>

3. On the opened page, select the following items and click "Confirm":

<List>
<li>
PCB Qty: necessary quantity (minimum 5)
</li>
<li>
PCB Thickness: 1
</li>
<li>
PCB Assembly: ON
</li>
</List>

<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_3.png"/>

4. On the opened page, click "NEXT"

<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_4.png"/>

5. On the opened page, upload the [BOM](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/BOM.xlsx) and [PickAndPlace](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/PickAndPlace.csv) files, then click "Process BOM & CPL" 
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_5.png"/>
6. On the opened page, the service will display a list of components from the BOM file for checking their availability in stock, in case of their absence will offer their replacement with analogs. If there are no errors - click "NEXT".
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_6.png"/>

7. On the opened page, the location of components on the board will be displayed, click "NEXT". 
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_7.png"/>

8. On the opened page, the order details and their cost will be displayed, in the drop-down list "Product Description" you need to indicate "IR Remote Control - HS Code 854390" then click "SAVE TO CART"
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_8.png"/>

9. On the opened page, highlight the order and click "Secure Checkout" 
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_9.png"/>

10. On the opened page, specify Shipping and Billing Information and click "Continue" 
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_10.png"/>

11. In the appeared point, choose the preferred delivery method click "Continue"
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_11.png"/>

12. In the appeared point, accept "I agree to the Customer Dorplance Sternet " and click "Submit Order"
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_12.png"/>

13. On the opened page, make a payment in the most convenient way
<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_13.png"/>

Congratulations! The hardest part is behind.

After a few weeks, all three components will be delivered and you can start assembling: 
<LessonImages src="school-2024-make-universal-ir-remote-control/parts.jpg"/>

1. Separate the board using the perforations from the excess laminate 
<LessonImages src="school-2024-make-universal-ir-remote-control/parts1.jpg"/>

2. Connect the antenna to the corresponding IPEX connector on the board 
<LessonImages src="school-2024-make-universal-ir-remote-control/parts2.jpg"/>

3. Install the board with the antenna in the upper part of the case 
<LessonImages src="school-2024-make-universal-ir-remote-control/parts3.jpg"/>

4. Install the lower part of the case and secure it with screws 
<LessonImages src="school-2024-make-universal-ir-remote-control/parts4.jpg"/>

Done. Next, you can start loading the firmware and setting up the Universal IR Remote Control using the instructions located at [wiki.robonomics.network](https://wiki.robonomics.network/docs/ir-controller/)
<LessonImages src="school-2024-make-universal-ir-remote-control/finish.jpg"/>

P. S. if you want a thing done well, do it yourself.
