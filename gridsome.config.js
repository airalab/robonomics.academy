// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml')
const fs   = require('fs')

module.exports = {
  siteName: 'Robonomics Academy',
  siteDescription: 'The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects. Get new skills in using modern web technologies to build IoT solutions.',
  siteUrl: 'https://robonomics.academy',
  titleTemplate: '%s',

  plugins: [
    {
      use: "gridsome-plugin-translateit",
      options: {
        locales: ["en", "ru", "es", "de", "it", "pt"],
        slugifyDefaultLocale: true,
        defaultLocale: "en",
        translations: yaml.load(fs.readFileSync('./src/data/locales/translations.yaml', 'utf8')),
        routes: yaml.load(fs.readFileSync('./src/data/locales/routes.yaml', 'utf8')),
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Course',
        baseDir: './courses', 
        // pathPrefix: '/online-course',
        template: './src/templates/Course.vue',
        plugins: [
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}],
        ]
      }
    },
    {
      use: "gridsome-plugin-google-sheets-post"
    },
    {
      use: 'gridsome-plugin-seo'
    },
    // {
    //   use: 'gridsome-plugin-yandex-metrika',
    //   options: {
    //     id: 91120268
    //   }
    // }
  ]
}
