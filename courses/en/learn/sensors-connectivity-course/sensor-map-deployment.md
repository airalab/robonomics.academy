---
title: "Lesson #6, Sensor map deployment"
description: 'SENSOR MAP DEPLOYMENT'
lessonNumber: 6
courseID: 4
metaOptions: [Learn, Sensors Connectivity & Decentralized Sensors Network]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

After assembling a sensor and setting up Sensors Connectivity module it is time to deploy personal decentralized sensor map.


## Requirements & Installation

<List type="numbers">

<li>

Since the sensor map is powered by JavaScript, first you need to install the `node` and the `yarn` manager:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Download and build the map:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Run the map in `development` mode for testing

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Go to URL from terminal, you should see the sensor map. After that, stop it with `Ctrl+C`.

</li>

</List>

## Configuration

<List type="numbers">

<li>

Find your IPFS ID with:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Go to `src` folder and rename the files:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Insert your IPFS ID in `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Open `config.json` file and change the next part of configuration file:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Here you have to insert latitude (`lat`) and longitude (`lng`) of your city. Optionally, you can set up [wind direction service](https://github.com/danwild/wind-js-server) and provide URL to it in `WIND_PROVIDER` field.

</li>

</List>


## Building

<List type="numbers">

<li>

Run the following command to build files for release:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

It will create `dist` directory with all components of static website.

</li>

<li>

To check if everything is correct, move to `dist` directory and open `index.html` file. After some time sensor's data from your Sensors Connectivity module will appear on the map.

</li>

</List>


