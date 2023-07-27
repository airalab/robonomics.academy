# Welcome to the Robonomics Academy Repository!

Robonomics Academy is the educational provider to the world of IoT and cyber-physical systems based on web3. The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 8 years of work with web 3.0 projects.

## How to Deploy Academy Site Locally

1. Install [Node.js](https://nodejs.org/en/download/package-manager/).

2. Activate [Yarn Package Manager](https://yarnpkg.com/), shipped with Node.js Corepack:

```
corepack enable
```

3. Clone the academy repository:

```
git clone https://github.com/airalab/robonomics.academy.git
```

4. Go to the directory of the repository and run the following commands:

```
cd robonomics.academy
sudo yarn global add @gridsome/cli
yarn install
```

5. Deploy the academy locally:

```
gridsome develop
```

> If you have the error `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS`, run the following command:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

## How to upload new course/lesson:

- First of all, you need to add course/lesson information to `courses/all-courses.yaml`:

```
- id: '1' 
  title: 'Introduction to the ideas of Robonomics' // name of the course
  path: 'introduction-course' // path that will be displayed in url
  level: 3 // complexity of the course
  tags: ['course'] // tags for the course
  filters: [''] // options for filter (if there are any)
  progress: done // progress of the course (done, coming(if zero lessons are ready), progress (if some lessons are not finished))
  author: 'Fingerling42' // the course author (if there is one). For this option add author and use alias (see: courses/authors/authors.yaml)
  If you have more than one author use array - e.g. ['Ensrationis', 'Vourhey']
  published: true // set this option to false if you want to hide your course
  lessons:
    - id: '0'
      title: 'Introduction to the ideas of Robonomics'
      path: 'overview' // use this path for all intro lessons 
      status: done
    - id: '1' //  lesson id
      title: 'Broadcasting Through the Black Mirror' // lesson name
      path: 'broadcasting-through-the-black-mirror' // path that will be displayed in url (it must be the same as the name of lesson md file)
      status: in progress // lesson status (done or in progress)
```

- Then, you must create folder in `courses/learn/en/` - e.g *introduction-course* and add "intro page" for your course in `courses/learn/en/your-new-folder` - e.g *introduction-course.md*

Add some basic info to the doc: 

```
  ---
  title: "Introduction to the ideas of Robonomics" // course title
  description: Welcome Introduction Course! // course description 
  metaOptions: [Learn, Introduction to the ideas of Robonomics] // this information is needed for meta tags and images purposes. You need to type: Learn, Name_Of_Your_Course
  defaultName: Introduction to the ideas of Robonomics // name of your course in english ( also needed for meta info )
  ---
```

- Finally, add lessons for the new course (if there are any). Create **md** files for each lesson in new folder. The set up will be identical to the "intro page" of your course *md* file with the necessary adjustments :)


**NOTE** : 
 1. Make sure you use **alias** while adding author!  
 2. If your lesson is in progress you must add `status: in progress` for your lesson **AND** `progress: progress` or `progress: coming`  for your course!

 > progress - some lessons are ready, coming - zero lessons are done


> if your lesson/course wasn't published (published: false)  and it's your first doc then you need to go to courses/authors/authors.yaml, find your name and remove hide option
  


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
- UML
- LaTeX


### How to insert images:

If you want you image to zoom in you must use - "lesson-images"

`simple image`

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
<LessonVideo autoplay loop controls :videos="[{src: '/videos/temp.mp4', type:'mp4'}]" local />
```

`IPFS / Server`

You need to specify format of video` 

```c
<LessonVideo  :videos="[{src: 'https://crustipfs.art/ipfs/QmdZKkPJCa9GEN43iUBX81jfrFTDxcn7J6wWURrwNVwcKx', type:'webm'}, {src: 'https://crustipfs.art/ipfs/QmStCDsEHCYwVYvnDdmZBMnobPmrgZx3iJLm65b8XNzKQa', type:'mp4'}]" />
```

`video with cover`

```c
<LessonVideo  :videos="[{src: 'https://crustipfs.art/ipfs/QmdZKkPJCa9GEN43iUBX81jfrFTDxcn7J6wWURrwNVwcKx', type:'webm'}, {src: 'https://crustipfs.art/ipfs/QmStCDsEHCYwVYvnDdmZBMnobPmrgZx3iJLm65b8XNzKQa', type:'mp4'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />
```

**Properties for LessonVideo**

**IF YOU ADDING A FILE WITH THE SIZE OF MORE THAN 10MB, PLEASE, ADD IT TO THE SERVER NOT A LOCAL FOLDER!**

- You may use any properties for [HTML5 video tag](https://www.w3schools.com/tags/tag_video.asp).

- Acceptable formats - mp4, webm, ogg.

| Property | Required | Default | Type    | Description                                                                                                                                                                                           |
|----------|----------|---------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| videos   | true     | -       | Array   | Array of objects [{src: 'path to video', type: 'type of video'}]                                                                                                                                      |    
| local    | false    | false   | Boolean | helps to get the right path for the file. - If your video located in a local folder prop must be set to true.                                                                                         |   
| cover    | false    | -       | String  | adds cover to your video. You need add cover to courses/images/course_folder/image_name.png.                                                                                         |                                                                                                                                                                                                                                |


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

## Dialog

If you need to use special dialog-like-wrapper use this component: `<RoboAcademyDialog></RoboAcademyDialog>`


## Terminal

If you want your code or some text looked like from terminal and `<LessonCodeWrapper></LessonCodeWrapper>` doesn't work for you, then you may try this component: `<RoboAcademyTerminal title="Goals"></RoboAcademyTerminal>`

| Property | Required | Default  | Type   | Description                      |
|----------|----------|----------|--------|----------------------------------|
| title    | false    | terminal | String | Set title on top of the terminal |
