---
title: "Lesson #7, Robonomics sensors measure analytics and archive node"
description: 'ROBONOMICS SENSORS MEASURE ANALYTICS AND ARCHIVE NODE'
lessonNumber: 7
courseID: 4
metaOptions: [Online Courses, Sensors Connectivity & Decentralized Sensors Network]
---

Robonomics Sensors Measure Analytics and Archive Node or RoSeMAN is a service for accumulating sensors data to show measurement history. In this article you will setup the service.

## Requirements

RoSeMAN requires [MongoDB](https://www.mongodb.com/docs/manual/introduction/) database server, it is assumed that you already have it. Also, you have to turn on datalog option for Sensors Connectivity module, as shown in Scenario #3. You should have free XRT tokens on your Robonomics account, which connected to Sensors Connectivity module. 


## Setup

<List type="numbers">

<li>

Download repository:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Create configuration files:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Open `config.json` file and edit database path:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Add public address of your account to `agents.json` file. You can add several addresses to file, if you want to collect data from different Sensors Connectivity modules.

</li>


<li>

Install dependencies and build server:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Start RoSeMAN server:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Web server should launch at `http://127.0.0.1:3000`.

</li>

</List>

## Post-installation

After deployment of the RoSeMAN to a server you have to get public IP address or URL to server. Alternatively, if you run RoSeMAN and the sensors map on the same server, you can use local IP address.

Next, you have to open the sensors map configuration file and insert your URL in `config.json` file into `REMOTE_PROVIDER` field:


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Rebuild map with `yarn build` and start it again; you will be able to see measurement history.