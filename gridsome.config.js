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

  prefetch: { mask: '^$', },

  plugins: [
    {
      use: "gridsome-plugin-translateit",
      options: {
        locales: ["ar","de","el","en","es","fr","hi","it","ja","ko","nl","ru","uk","zh"],
        slugifyDefaultLocale: true,
        defaultLocale: "en",
        translations: [],
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
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://matomo.robonomics.network/',
        siteId: 1,
        // requireConsent: true,
        trackerFileName: 'unicorn',
        trackerUrl: 'https://matomo.robonomics.network/rainbow.php',
        trackerScriptUrl: 'https://matomo.robonomics.network/unicorn.js'
      }
    }
  ],


  chainWebpack: config => {

    // alias for easier access to files 
    config.resolve.alias.set('@imagesCourses', '/courses/images')
    config.resolve.alias.set('@imagesAuthors', '/courses/authors/avatars')

    config.mode('development')
  }


}
