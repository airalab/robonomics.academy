// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs");
const fsExtra = require("fs-extra");
const createImage = require("node-html-to-image");
const generateHtml = require("./functions/generateHtml");
const yaml = require("js-yaml");

let allPossiblePaths = [];
let allPossiblePathsPlayground = [];

require.extensions['.yaml'] = function(module, filename) { // To safely load .yaml file via require
  module.exports = yaml.load(fs.readFileSync(filename, 'utf8'));
}

const courses = require('./src/data/online-courses.yaml')
const imgsInfo = require('./src/data/images-info.yaml');

// For generated images configuration
const defaultOptions = {
  typeName: "Course",
  backgroundColors: [
    "#fffc00"
  ],
  imgWidth: "1280px",
  imgHeight: "650px",
  domain: "robonommics.academy",
  basePath: "src/pages/online-courses/",
  outputDir: "static/og/"
};

// This is helper function to simplify code. Output - image file. arrayPath - array of sections on image.
const generateImage = (output, arrayPath, options) => {
  fsExtra.access(output, (error) => { // Generate covers for courses
    if (error) {
      createImage({
        output,
        html: generateHtml(arrayPath, options)
      }).then(() => {
        console.log('Image was created successfully!')
      }).catch(e => console.log(e.message))
    } else {
      console.log(`The image ${output.split('/')[output.split('/').length-1]} already exists!`)
    }
  })
}

module.exports = function (api) {

  const options = { ...defaultOptions };

  api.loadSource(async (actions) => {

    const collection = actions.getCollection('Course');

    collection.data().filter((e) => {
      if(e.path.includes('/en/'))
      allPossiblePaths.push({path: e.path, name: e.fileInfo.name})
    })

    courses.forEach((course) => {
      
      fsExtra.ensureDirSync(options.basePath + course.path)

      imgsInfo.forEach(img => {
        img.courses.forEach(imgCourse => {
          if(imgCourse.title === course.title) {
            const output = `${options.outputDir}${course.path}${imgCourse.imgName}`
            generateImage(output, imgCourse.options, options)
          }
        })
      })

      collection.data().forEach((lesson) => { // Generate images for lessons themselves

        if (lesson.internal.typeName === options.typeName) {

          
          const imgName = lesson.fileInfo.name;
          const lessonNamePart = lesson.title.substr(0, lesson.title.indexOf(',')); 
          const lessonTitle = lessonNamePart ? lesson.title.replace(lessonNamePart, '').slice(2).trim() : lesson.title;
          const locale = lesson.fileInfo.path.slice(0,2);
          const dir = lesson.fileInfo.directory.slice(9);
          const output = `${options.outputDir}${dir}/${imgName}-${locale}.png`
          const lessonOptions = [...lesson.metaOptions, lessonTitle];
          generateImage(output, lessonOptions, options)
          

        }

      })
    })

    imgsInfo.forEach(img => {

      // for certificates page
      generateImage(options.outputDir + img.certificate.imgName, img.certificate.options, options)

      // for online courses page
      // generateImage(options.outputDir + img['online-course'].imgName, img['online-course'].options, options)

      // for learn page
      // generateImage(options.outputDir + img.learn.imgName, img.learn.options, options)
    })

  })

  api.createPages(({ createPage }) => {

    // all locales
    const locales = ["ru", "it", "es", "de", "pt" ];

    const localesAll = ["ru", "it", "es", "de", "pt", "en"];

    const oldPaths = ['/online-courses/', '/playground/'];

    const oldCourses = [
      {
        old: 'introduction-course/1-broadcasting-through-the-black-mirror',
        new: 'introduction-course/broadcasting-through-the-black-mirror'
      },
      {
        old: 'introduction-course/2-at-the-intersection-of-cybernetics-and-economics',
        new: 'introduction-course/at-the-intersection-of-cybernetics-and-economics'
      },
      {
        old: 'introduction-course/3-polkadot-ecosystem-for-home-iot-infrastructure',
        new: 'introduction-course/polkadot-ecosystem-for-home-iot-infrastructure'
      },
      {
        old: 'introduction-course/4-robonomics-architecture',
        new: 'introduction-course/robonomics-architecture',
      },
      {
        old: 'introduction-course/5-iot-subscriptions-using-robonomics-parachain',
        new: 'introduction-course/iot-subscriptions-using-robonomics-parachain'
      },
      {
        old: 'introduction-course/5-iot-subscriptions-using-robonomics-parachain',
        new: 'introduction-course/iot-subscriptions-using-robonomics-parachain'
      },
      {
        old: 'smart-home-course/1-robonomics-hass-theory',
        new: 'smart-home-course/robonomics-hass-theory'
      },
      {
        old: 'smart-home-course/2-raspberry-pi-setup',
        new: 'smart-home-course/raspberry-pi-setup'
      },
      {
        old: 'smart-home-course/3-mqtt-broker-setup',
        new: 'smart-home-course/mqtt-broker-setup'
      },
      {
        old: 'smart-home-course/4-a-gateway-setup-zigbee2mqtt',
        new: 'smart-home-course/gateway-setup-zigbee2mqtt'
      },
      {
        old: 'smart-home-course/4-b-gateway-setup-robonomics-sls-gateway',
        new: 'smart-home-course/gateway-setup-robonomics-sls-gateway'
      },
      {
        old: 'smart-home-course/5-robonomics-iot-subscription-setup',
        new: 'smart-home-course/robonomics-iot-subscription-setup'
      },
      {
        old: 'smart-home-course/6-robonomics-integration-setup',
        new: 'smart-home-course/robonomics-integration-setup'
      },
      {
        old: 'smart-home-course/7-usage-of-robonomics-with-hass',
        new: 'smart-home-course/usage-of-robonomics-with-hass'
      },
      {
        old: 'sensors-connectivity-course/1-introduction',
        new: 'sensors-connectivity-course/introduction'
      },
      {
        old: 'sensors-connectivity-course/2-sensor-hardware',
        new: 'sensors-connectivity-course/sensor-hardware'
      },
      {
        old: 'sensors-connectivity-course/3-setting-up-and-connecting-sensors',
        new: 'sensors-connectivity-course/setting-up-and-connecting-sensors'
      },
      {
        old: 'sensors-connectivity-course/4-sensors-connectivity-module',
        new: 'sensors-connectivity-course/sensors-connectivity-module'
      },
      {
        old: 'sensors-connectivity-course/5-sensors-connectivity-config-options',
        new: 'sensors-connectivity-course/sensors-connectivity-config-options'
      },
      {
        old: 'sensors-connectivity-course/6-sensor-map-deployment',
        new: 'sensors-connectivity-course/sensor-map-deployment'
      },
      {
        old: 'sensors-connectivity-course/7-robonomics-sensors-measure-analytics-and-archive-node',
        new: 'sensors-connectivity-course/robonomics-sensors-measure-analytics-and-archive-node'
      },
    ]

    const oldPlayground = ['connect-mars-curiosity-rover', 'connect-any-ros-compatible-drone', 'kuka', 'iris-drone', 'baxter', 'ros-smart-projects', 'spot-try-it-out']

    const createNewRedirect = (path, redirect, ) => {
      localesAll.forEach(l => {
        createPage(
          {
              path: `/${l}${path}`,
              component: 'src/pages/redirect.vue',
              context: {
                redirect: redirect
              }
          }
        )
      })
    }
    
    oldPaths.forEach(path => {
      createNewRedirect(path, '/learn')
    })

    createNewRedirect(`/online-courses/introduction-course`, '/learn/introduction-course')
    createNewRedirect(`/online-courses/smart-home-course`, '/learn/smart-home-course')
    createNewRedirect(`/online-courses/sensors-connectivity-course`, '/learn/sensors-connectivity-course')

    oldCourses.forEach(path => {
      createNewRedirect(`/online-courses/${path.old}`, `/learn/${path.new}`,)
    })

    oldPlayground.forEach(path => {
      createNewRedirect(`/playground/${path}`, `/learn/${path}`)
    })
 

    allPossiblePaths.forEach(node => {

      const path = node.path.substring(4);

      locales.forEach(locale => {
        if (fs.existsSync(`courses/${locale}/${path.slice(0,-1)}.md`)) {
          console.log('exists');
        } else {
          createPage({
            path: `/${locale}/${path}`,
            component: './src/templates/AvailableCoursesTranslations.vue',
          })
        }
      })
    })
  })
}
