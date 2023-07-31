---
title: "Architecture"
description: This course is all about getting to know the Feecc system and all of its components.
metaOptions: [Learn, Getting Used to Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In this lesson, we will take a closer look at the Feecc architecture and look at all the components of the software.
</RoboAcademyText>

The Feecc platform consists of several services, from control of engineer workbench to providing analytics. Each service is responsible for some kind of functionality required for deployment in an enterprise environment.

## Feecc Engineer Workbench

The main task of Engineer Workbench is to organize the workspace of the assembly engineer. Depending on the task the engineer may need the following devices:

- IP camera to organize video recording of the production process;
- RFID reader for identification in the system by personal RFID card;
- barcode reader for scanning product labels;
- label printer for labeling the manufactured products;
- digital sensors collecting data from various devices / stations.

Engineer Workbench software usually consists of the following containers. First, the software that requires installation **on the computer on which the employee works** during the assembly of the product:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — the heart of the Feecc platform that provides users with access to all Feecc features and configurations; it also contains lightweight services for printing labels using a label printer and recording video from RTSP streams;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — a web interface for employee interaction with the Feecc platform;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — a Python daemon for sending USB peripheral events;

Second, the software that can be installed **both on the employee’s computer and on a server in the local network**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — a microservice for publishing files to IPFS, and more specifically, file CIDs to Robonomics Network;

Figure below shows the Feecc Engineer Workplace architecture in a corporate environment. IPFS Gateway can be hosted on each employee's computer, which will enhance the decentralization of the system. 

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="An architecture of Feecc"/>

### Supported hardware for one workspace:

#### RFID scanner

A USB RFID scanner is needed to authorize engineers in the field with their internal badges. Incoming information is processed using the `feecc-hid-reader-daemon`.

#### Barcode scanner

The USB barcode scanner is necessary for identifying products by barcodes, sending commands to services and for the correct assignment of certificates. The incoming information is also processed with the `feecc-hid-reader-daemon`. Reading in two dimensions is desirable, but not required.

#### Employee’s computer

A small single-board computer processes signals from external devices (barcode scanner, RFID scanner), sends requests for printing images on the printer, starting and stopping video recording, sending data to IPFS Gateway. It runs the following services: `feecc-workbench-frontend`, `feecc-workbench-daemon` with label printer and camera support, `feecc-hid-reader-daemon`. An Internet connection via Wi-Fi or LAN is required.
    
It is worth specifying that any computer can be used instead of a single-payer computer with a monitor. The operating system GNU/LINUX must be installed on it natively or through a virtual machine.
    
Minimum technical specifications:
    
- CPU: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.8GHz or similar;
- RAM: 4GB LPDDR4-3200 or similar.

#### Screen

The monitor is used by the employee to enter and view information about the current production step. It also displays hints for the engineer on the current stage. Other input devices also can be used.

#### Label printer

The label printer is used to print QR codes and bar codes for further placement of labels on the product for identification and verification purposes. Interaction with the printer is carried out with the help of the corresponding service of `feecc-workbench-daemon`. In our case we use XPrinter 236B printers.

#### IP Camera

IP camera for capturing production processes for inclusion in the product certificate. Located above the assembly area of the product. Interaction with the camera is performed using of the corresponding service of `feecc-workbench-daemon`.

Required technical specifications: PoE power supply, RTSP data transfer protocol. In our case we use Hikvision HiWatch DS-i200d.

### Supported hardware for several workspace:

#### Router or switch

Router or switch with PoE 802.3af support and PoE powering on the output ports is required for powering IP cameras and connecting them to the `feecc-workbench-daemon` service. In our case we use MikroTik hEX PoE (one for 3-4 workplaces) and power supply.

#### Server (optional)

A larger server also can be installed that can run `feecc-ipfs-gateway`. It can be located in place of one of the computers of the employees' workplaces. 

Minimum technical specifications: 

- CPU: Intel Xeon E-2200 processor or similar;
- RAM: 8GB;
- Storage: 1TB HDD;
- LAN interface: 1 Gbit/s.

## Feecc Analytics

The main task of Feecc Analytics is to organize the process of traceability of finished products and their pre-sales inspection in the product control department.

Feecc Analytics depends on the following containers:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — the main software for deploying analytics service;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — the frontend software for analytics service;

It is usually deployed on a single server locally for data security purposes within only the organization.

The hardware required for Feecc Analytics to work is a local or remote server (virtual machine) on which the web application will run and barcode scanner. Each authorized employee can access the web application from his/her computer with a username and password.

## Feecc Validator

The main task of the Feecc Validator is to compare data from different data stores in order to validate the integrity of the digital product certificate.

Feecc Validator depends on the following containers:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — a microservice, designed to handle validating certificates and getting data associated with the unit provided user has only one of the data pieces;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — a web interface for interaction with validating microservice.

As Feecc Analytics, it can be deployed on a single server locally and requires barcode scanner.

<RoboAcademyText fWeight="500">
In the next lesson, we will take a closer look at the Feecc system through a small demo that runs locally on your computer.
</RoboAcademyText>