# Welcome to the Robonomics Academy Repository!

Robonomics Academy is the educational provider to the world of IoT and cyber-physical systems based on web3. The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 8 years of work with web 3.0 projects.

## How to Deploy Academy Site Locally

1. Install [Node.js](https://nodejs.org/en/download/package-manager/).

2. Activate [Yarn Package Manager](https://yarnpkg.com/), shipped with Node.js Corepack:

```
corepack enable
```

3. Clone the wiki repository:

```
git clone https://github.com/airalab/robonomics.academy.git
```

4. Go to the directory of the repository and run the following commands:

```
cd robonomics.academy
sudo yarn global add @gridsome/cli
yarn install
```

5. Deploy the wiki locally:

```
gridsome develop
```

> If you have the error `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS`, run the following command:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

## What you can use while editing lesson or adding a new one:

### How to highlight code:

If you want to highlight your code use: 

```c
<LessonCodeWrapper language="json" noCopyIcon>
  SOME CODE HERE
</LessonCodeWrapper>
```

`code wrapper with the "big-code" class`

```c
<LessonCodeWrapper language="json" codeClass="big-code">
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc
</LessonCodeWrapper>
```

**Properties for lesson-code-wrapper**

| Property   | Required | Default | Type    | Description                                                                            |
|------------|----------|---------|---------|----------------------------------------------------------------------------------------|
| language   | true     | -       | String  | You must specify the code language for the right highlighting                          |
| codeClass  | false    | -       | String  | If your code is long you may want to use "big-code" class for styling purposes         | 
| noCopyIcon | false    | false   | Boolean | By default all code pieces have copy icon but if it's not needed you may remove it     |
| noLines    | false    | false   | Boolean | By default all code pieces have number lines  but if it's not needed you may remove it |



**Available Languages:**
- Bash
- JSON
- Python
- YAML


### How to insert images:

If you want you image to zoom in you must use - "lesson-images"

`just image`

```c
<LessonImages src="course_name/course-lesson-1.jpg" alt="lesson image"/>
```

`figure with caption`

```c
<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>
```

**Properties for lesson-images**

| Property      | Required | Default | Type    | Description                                                                                                                                        |
|---------------|----------|---------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| src           | true     | -       | String  | You need to upload you images to src/assets/images/course-name/src-of-your-image.format<br>And then just use: course-name/src-of-your-image.format |
| alt           | false    | -       | String  | Alt attribute for your image                                                                                                                       |
| figure        | false    | false   | Boolean | If you want to use image with caption                                                                                                              |
| figureCaption | false    | -       | String  | Add some caption for the image                                                                                                                     |
| imageClasses  | false    | -       | String  | Add classes for styling                                                                                                                            |

### How to insert videos

There are two ways for inserting videos in your documents:

It is recommended to insert videos with built-in tag <lesson-video>, however you may also use standard way for Markdown files.

`local file`

```c
<LessonVideo autoplay loop controls :videos="[{src: '/videos/temp.mp4', type:'mp4'}]" />
```

`IPFS / Server`

You need to specify format of video` 

```c
<LessonVideo  :videos="[{src: 'https://crustipfs.art/ipfs/QmdZKkPJCa9GEN43iUBX81jfrFTDxcn7J6wWURrwNVwcKx', type:'webm'}, {src: 'https://crustipfs.art/ipfs/QmStCDsEHCYwVYvnDdmZBMnobPmrgZx3iJLm65b8XNzKQa', type:'mp4'}]" />
```

**Properties for LessonVideo**

**IF YOU ADDING A FILE WITH THE SIZE OF MORE THAN 10MB, PLEASE, ADD IT TO THE SERVER NOT A LOCAL FOLDER!**

- You may use any properties for [HTML5 video tag](https://www.w3schools.com/tags/tag_video.asp).

- Acceptable formats - mp4, webm, ogg.

| Property | Required | Default | Type    | Description                                                                                                                                                                                           |
|----------|----------|---------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| videos   | true     | -       | Array   | Array of objects [{src: 'path to video', type: 'type of video'}]                                                                                                                                      |    
| local    | false    | false   | Boolean | helps to get the right path for the file. - If your video located in a local folder prop must be set to true.                                                                                                                                      |                                                                                                                                                                                     |


### YouTube videos
You can embed any YouTube video in doc by inserting share link as separate paragraph without any additional quotes or tags, e.g.: `https://youtu.be/kQaSwNYHJQ8`


However, if you need an autoplay you must use special component:

```c
<robo-academy-youtube autoplay link="https://www.youtube.com/watch?v=5s4-S_z4VYE" />
```

**Properties for robo-academy-youtube**

| Property | Required | Default | Type    | Description             |
|----------|----------|---------|---------|-------------------------|
| link     | true     | -       | String  | link to youtube video   |
| autoplay | fasle    | false   | Boolean | autoplays youtube video |
| loop     | false    | false   | Boolean | loop youtube video      |

### Stylized Lists:

For stylized list you must use:

`ordered list`

```c
<List type="numbers">

<li>
  List item 1
</li>

<li>
  List item 2
</li>

</List>
```

`unordered list`

```c
<List>

<li>
  List item 1
</li>

<li>
  List item 2
</li>

</List>
```

`unordered list with plus`

```c
<List type="plus">

<li>
  List item 1
</li>

<li>
  List item 2
</li>

</List>
```

| Property | Required | Default | Type   | Description                                                                                                                                                          |
|----------|----------|---------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type     | false    | bullets | String | You can choose type of your list:<br><br>- bullets (unordered list)<br>- plus (unordered list with plus instead of bullets)<br>- numbers (ordered list with numbers) |


### How to add button or link-button:

If you may want to add link-button or just button use:

`button`

```c
<LessonButtonLink type="button" text="Rent a spot" />
```

`link-button`

```c
<LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Rent a spot" />
```

| Property | Required | Default | Type   | Description                                                                          |
|----------|----------|---------|--------|--------------------------------------------------------------------------------------|
| type     | false    | link    | String | If you need simple button use:<br>- button<br>If you need link-button use:<br>- link |
| src      | false    | -       | String | src for link                                                                         |
| text     | true     | -       | String | text for your button or link-button                                                   |


### NOTES & WARNINGS

You can add notes and give them specific types:

- warning (orange color)
- okay (green color)
- note (grey color)

`note with title`

```c
<robo-academy-note type="okay" title="Some import information" />
```

`note with content`

```c
<robo-academy-note type="okay">Learn with us</robo-academy-note>
```

`note with title and content`

```c
<robo-academy-note type="okay" title="Robonomics Academy">
  Learn with us
</robo-academy-note>
```
**Properties for robo-academy-note**

| Property | Required | Default | Type   | Description                                                   |
|----------|----------|---------|--------|---------------------------------------------------------------|
| type     | false    | -       | String | - there are three types in total:<br> <br>note, warning, okay |
| title    | false    | -       | String | adds title to your note                                       |
| gap      | false    | false   | Boolean| adds gap to your note                                         |


### Tabs
You can add tabs to the doc:

- Use tabs wrapper component: 

```c
<robo-academy-tabs></robo-academy-tabs>
```

- And then use as many tab items components as you like inside wrapper:

```c
  <robo-academy-tabs>
    <robo-academy-tab title="Linux">
      <pre>ip a</pre>
    </robo-academy-tab>
    <robo-academy-tab title="OSX">
      ifconfig
    </robo-academy-tab>
  </robo-academy-tabs>
```

`horizontal tabs`

```c
  <robo-academy-tabs>
    <robo-academy-tab title="Linux">
      <pre>ip a</pre>
    </robo-academy-tab>
    <robo-academy-tab title="OSX">
      ifconfig
    </robo-academy-tab>
  </robo-academy-tabs>
```

`vertical tabs`

```c
  <robo-academy-tabs mode="vertical">
    <robo-academy-tab title="Linux">
      <pre>ip a</pre>
    </robo-academy-tab>
    <robo-academy-tab title="OSX">
      <pre>ifconfig</pre>
    </robo-academy-tab>
  </robo-academy-tabs>
```

`tab item with border`

```c
  <robo-academy-tabs>
    <robo-academy-tab title="Linux">
      <pre>ip a</pre>
    </robo-academy-tab>
    <robo-academy-tab title="OSX" border>
      ifconfig
    </robo-academy-tab>
  </robo-academy-tabs>
```

**Properties for robo-academy-tabs (wrapper)**

| Property | Required | Default    | Type   | Description                                             |
|----------|----------|------------|--------|---------------------------------------------------------|
| mode     | false    | horizontal | String | you can choose tabs mode:<br>- horizontal<br>- vertical |


**Properties for robo-academy-tab (item)**

| Property | Required | Default | Type    | Description                       |
|----------|----------|---------|---------|-----------------------------------|
| title    | true     | -       | String  | title for the tab                 |
| border   | false    | false   | Boolean | add border to the content wrapper |


### Grid 
Helps to add grid layout to elements:

- Use grid wrapper component first: 

```c
<robo-academy-grid></robo-academy-grid>
```

- And then use as many grid items components as you like inside wrapper:

```c
  <robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
      <p>Zigbee smart devices (any from <a href="https://slsys.io/action/supported_devices.html">supported devices</a>)</p>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <p>Zigbee adapter <a href="https://jethome.ru/z2/">JetHome USB JetStick Z2</a> (or one of <a href="https://www.zigbee2mqtt.io/information/supported_adapters.html">supported</a>) or 
      <a href="https://easyeda.com/ludovich88/robonomics_sls_gateway_v01">Robonomics SLS Gateway</a></p>
    </robo-academy-grid-element/>
  </robo-academy-grid>
```

**Properties for robo-academy-grid**

| Property  | Required | Default | Type   | Description                                                      |
|-----------|----------|---------|--------|------------------------------------------------------------------|
| columns   | false    | 4       | Number | you can choose column number:<br> - from 1 to 6                  |
| align     | false    | -       | String | align items on the block axis:<br>- options: start, center, end  |
| justify   | false    | -       | String | align items on the inline axis:<br>- options: start, center, end |
| textAlign | false    | -       | String | align text inside grid<br>- options: left, center, right         |


