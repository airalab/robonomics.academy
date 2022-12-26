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

| Property   | Required | Default | Type    | Description                                                                        |
|------------|----------|---------|---------|------------------------------------------------------------------------------------|
| language   | true     | -       | String  | You must specify the code language for the right highlighting                      |
| codeClass  | false    | -       | String  | If your code is long you may want to use "big-code" class for styling purposes        | 
| noCopyIcon | false    | false   | Boolean | By default all code pieces have copy icon but if it's not needed you may remove it |



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
