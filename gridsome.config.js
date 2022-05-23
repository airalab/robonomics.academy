// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Academy',
  siteDescription: 'The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects. Get new skills in using modern web technologies to build IoT solutions.',
  siteUrl: 'https://robonomics.academy',
  titleTemplate: '%s',

  plugins: [
    {
      use: "gridsome-plugin-google-sheets-post"
    },
    {
      use: 'gridsome-plugin-seo'
    }
  ]
}
