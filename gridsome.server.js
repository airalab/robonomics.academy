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
const imgsInfo = require('./src/data/images-info.yaml');

// For generated images comfiguration
const defaultOptions = {
  typeName: "DocPage",
  backgroundColors: [
    "#F4E282"
  ],
  imgWidth: "1280px",
  imgHeight: "650px",
  domain: "robonommics.academy",
  basePath: "src/pages/online-courses/",
  outputDir: "static/og/"
};

// For additional covers generation
// const additionalCovers = [
//   {imgName: "online-courses.png" , arr: ['Online courses']},
//   {imgName: "apply-for-certificate.png", arr: ['Apply for certificate']},
//   {imgName: "online-courses-ru.png" , arr: ['Онлайн курсы']},
//   {imgName: "apply-for-certificate-ru.png", arr: ['Подать заявку на сертификат']},
//   {imgName: "online-courses-it.png" , arr: ['Corsi online']},
//   {imgName: "apply-for-certificate-it.png", arr: ['Applica per il certificato']},
//   {imgName: "online-courses-es.png" , arr: ['Cursos online']},
//   {imgName: "apply-for-certificate-es.png", arr: ['Solicitar certificado']},
//   {imgName: "online-courses-de.png" , arr: ['Online courses']},
//   {imgName: "apply-for-certificate-de.png", arr: ['Apply for certificate']},
//   {imgName: "online-courses-ko.png" , arr: ['Online courses']},
//   {imgName: "apply-for-certificate-ko.png", arr: ['Apply for certificate']}
// ]

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

      imgsInfo.forEach(img => {
        img.courses.forEach(imgCourse => {
          if(imgCourse.title === course.title) {
            const output = `${options.outputDir}${course.path}${imgCourse.imgName}`
            generateImage(output, imgCourse.options, options)
          }
        })
      })

      course.lessons.forEach((lesson) => { // Generate images for lessons themselves

        imgsInfo.forEach(img => {
          img.lessons.forEach(imgLessons => {
            if(lesson.title === imgLessons.title) {
              const imgName = lesson.path
              const output = `${options.outputDir}${course.path}/${imgName}-${img.locale}.png`
              generateImage(output, imgLessons.options, options)
            }
          })
        })

      })
    })

    imgsInfo.forEach(img => {

      // for certificates page
      generateImage(options.outputDir + img.certificate.imgName, img.certificate.options, options)

      // for online courses page
      generateImage(options.outputDir + img['online-course'].imgName, img['online-course'].options, options)
    })

    // additionalCovers.forEach((el) => {
    //   generateImage(options.outputDir + el.imgName, el.arr, options)
    // })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
