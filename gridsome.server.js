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

require.extensions['.yaml'] = function(module, filename) { // To safely load .yaml file via require
  module.exports = yaml.load(fs.readFileSync(filename, 'utf8'));
}

const courses = require('./src/data/online-courses.yaml')

// For generated images comfiguration
const defaultOptions = {
  typeName: "DocPage",
  backgroundColors: [
    "#F4E282"
  ],
  imgWidth: "1920px",
  imgHeight: "1080px",
  domain: "robonommics.academy",
  basePath: "src/pages/online-courses/",
  outputDir: "static/og/"
};

// For additional covers generation
const additionalCovers = [
  {imgName: "online-courses.png" , arr: ['Online courses']},
  {imgName: "apply-for-certificate.png", arr: ['Apply for certificate']}
]

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
    courses.forEach((course) => {
      
      fsExtra.ensureDirSync(options.basePath + course.path)

      const output = `${options.outputDir}${course.path}/cover.png`
      generateImage(output, ['Online Courses', course.title], options)

      course.lessons.forEach((lesson) => { // Generate images for lessons themselves
        const imgName = lesson.path
        const output = `${options.outputDir}${course.path}/${imgName}.png`
        generateImage(output, ['Online Courses', course.title, lesson.title], options)
      })
    })

    additionalCovers.forEach((el) => {
      generateImage(options.outputDir + el.imgName, el.arr, options)
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
