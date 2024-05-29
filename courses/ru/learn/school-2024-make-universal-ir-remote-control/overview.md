---
title: "Robonomics School 2024 / Как самостоятельно организовать производство устройств Robonomics Open Hardware на любой фабрике в мире"
lastUpdate:
description: "Как самостоятельно организовать производство устройств Robonomics Open Hardware на любой фабрике в мире"
metaOptions: Learn, "Robonomics School 2024 / Как самостоятельно организовать производство устройств Robonomics Open Hardware на любой фабрике в мире"
defaultName: "Robonomics School 2024 / How to independently order the production of Robonomics Open Hardware devices at any factory in the world"
---

<LessonImages imageClasses="mb"  src='school-2024-make-universal-IR-remote-control/Hardware-Academy.jpg' alt="Robonomics Harware" />

Живя в современном мире, человеку невозможно представить свое существование без электронных устройств, которые созданы для того, чтобы облегчить или упростить его быт. Однако зачастую эти самые устройства имеют ряд скрытых (и не очень) мотивов от их производителей, например, таких как сбор персональных данных или навязывание различных сервисов. Одним из вариантов избежать попадания в ловушки, расставленные современными производителями IoT устройств для умного дома, является самостоятельное производство open hardware устройств на базе open source прошивок. На первый взгляд, данный путь кажется сложным и требующим глубоких знаний в схемотехнике, микроэлектронике, да еще и нужно иметь навыки работы с паяльником - но это не так. Давайте попробуем разобраться, каким образом можно почувствовать себя производителем электронных устройств на примере сборки Universal IR Remote Control.

<LessonVideo autoplay loop controls :videos="[{src: 'https://violet-defensive-toucan-388.mypinata.cloud/ipfs/QmXyQ51gEWUWyQTAdYko49v6gdFPyFeDkAvB5vSN2Nbfae', type:'webm'}, {src: 'https://violet-defensive-toucan-388.mypinata.cloud/ipfs/QmXyQ51gEWUWyQTAdYko49v6gdFPyFeDkAvB5vSN2Nbfae', type:'mp4'}]" />

Universal IR Remote Control состоит из трех частей - корпуса LK-AC93, Wi-Fi антены с IPEX разъемом и печатной платы.

Корпус и антену можно приобрести на [aliexpress.com](http://aliexpress.com/):

- [2.4G Antenna IPEX](https://www.aliexpress.com/item/1005004307252605.html?spm=a2g0o.order_list.order_list_main.5.682b1802xZXYAs)
- корпус [LK-AC93](https://www.aliexpress.com/item/1005004558596523.html?spm=a2g0o.order_detail.order_detail_item.3.435bf19cE2LJQp) производства [Shenzhen Shiny Enclosure Technology Co., Ltd.](https://www.shinyenclosure.com/)

Производство печатной платы можно заказать на одном из множества фабрик, таких как [JLCPCB](https://jlcpcb.com/), [PCBWay](https://www.pcbway.com/), [NextPCB](https://www.nextpcb.com/). Процесс заказа печатной платы на данных фабриках идентичен, я же опишу его на примере [JLCPCB](https://jlcpcb.com/).

Для заказа производства печатной платы нам потребуются три файла:

- [gerber](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/Gerber_PCB.zip) - описание проекта печатной платы для ее изготовления
- [BOM](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/BOM.xlsx) - список компонентов, которые необходимо установить на печатную плату
- [PickAndPlace](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/PickAndPlace.csv) - инструкция, куда именно необходимо установить компоненты эти файлы расположены в [github](https://github.com/airalab/hardware/tree/main/IR/ESP32/PCB) репозитории.

## Итак, приступим:

1. Зарегистрируйтесь и авторизуйтесь на сайте [](https://jlcpcb.com/)[https://jlcpcb.com](https://jlcpcb.com)
2. На главной странице сайта, нажав на поле "Add gerber file", загрузите [gerber](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/Gerber_PCB.zip) файл из репозитория

<LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_2.png"/>

3. На открывшейся странице выберите следующие пункты и нажмите "Confirm": 
   <List>
 <li> 
 PCB Qty: необходимое количество (минимум 5) 
 </li>
  <li> 
  PCB Thickness: 1 
  </li> 
  <li> 
  PCB Assembly: ON 
  </li> 
  </List> 
  <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_3.png"/>
4. На открывшейся странице нажмите "NEXT"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_4.png"/>
5. На открывшейся странице загрузите [BOM](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/BOM.xlsx) и [PickAndPlace](https://github.com/airalab/hardware/blob/main/IR/ESP32/PCB/PickAndPlace.csv) файлы, после чего нажмите "Process BOM & CPL"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_5.png"/>
6. На открывшейся странице сервис отобразит список компонентов из BOM файла для проверки их наличия на складе, в случае их отсутствия предложит их замену на аналоги. Если ошибок нет - нажмите "NEXT".
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_6.png"/>
7. На открывшейся странице отобразится расположение компонентов на плате, нажмите "NEXT".
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_7.png"/>
8. На открывшейся странице отобразятся детали заказа и их стоимость, в выпадающем списке "Product Description" необходимо указать "IR Remote Control - HS Code 854390", после чего нажмите "SAVE TO CART"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_8.png"/>
9. На открывшейся странице выделите заказ и нажмите "Secure Checkout"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_9.png"/>
10. На открывшейся странице укажите Shipping and Billing Information и нажмите "Continue"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_10.png"/>
11. В появившемся пункте выберите предпочтительный метод доставки, нажмите "Continue"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_11.png"/>
12. В появившемся пункте примите "I agree to the Customer Dorplance Sternet" и нажмите "Submit Order"
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_12.png"/>
13. На открывшейся странице произведите оплату наиболее удобным способом
 <LessonImages src="school-2024-make-universal-ir-remote-control/jlcpcb_13.png"/>
 
Поздравляем! Самое сложное позади.

Спустя несколько недель все три компонента будут доставлены и можно приступить к сборке:
<LessonImages src="school-2024-make-universal-ir-remote-control/parts.jpg"/>
 
1. отделите плату, используя перфорации, от излишков текстолита
<LessonImages src="school-2024-make-universal-ir-remote-control/parts1.jpg"/>

2. подключите антену к соответствующему разъему IPEX на плате
<LessonImages src="school-2024-make-universal-ir-remote-control/parts2.jpg"/>

3. установите плату с антеной в верхнюю часть корпуса
<LessonImages src="school-2024-make-universal-ir-remote-control/parts3jpg"/>

4. установите нижнюю часть корпуса и закрепите ее винтами
<LessonImages src="school-2024-make-universal-ir-remote-control/parts4.jpg"/>
 
Готово. Далее можно приступать к загрузке прошивки и настройке Universal IR Remote Control, используя инструкцию, расположенную по адресу [wiki.robonomics.network](https://wiki.robonomics.network/docs/ir-controller/)
<LessonImages src="school-2024-make-universal-ir-remote-control/finish.jpg"/>

P. S. Если хочешь, чтобы что-то было сделано хорошо, сделай это самостоятельно.
