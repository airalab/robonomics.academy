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

require.extensions['.yaml'] = function(module, filename) { // To safely load .yaml file via require
  module.exports = yaml.load(fs.readFileSync(filename, 'utf8'));
}

const courses = require('./src/data/online-courses.yaml')
const imgsInfo = require('./src/data/images-info.yaml');

// For generated images configuration
const defaultOptions = {
  typeName: "Course",
  backgroundColors: [
    "#F4E282"
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
          const lessonTitle = lesson.title.replace('Lesson #', '').slice(3).trim();
          const locale = lesson.fileInfo.path.slice(0,2);
          const dir = lesson.fileInfo.directory.slice(18);
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
      generateImage(options.outputDir + img['online-course'].imgName, img['online-course'].options, options)
    })

  })

  api.createPages(({ createPage }) => {

    allPossiblePaths.forEach(node => {
      // all locales
      const locales = ["ru", "it", "es", "de", "pt" ];
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
