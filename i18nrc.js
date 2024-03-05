const { join } = require('path')
require('dotenv').config();

module.exports = {
  funcName: 't',
  entry: join(__dirname, './src/'), // for vue files
  // entry: join(__dirname, './courses/'), // for markdown files
  fileRegExp: /\.vue$/, // for vue files
  // fileRegExp: /\.md$/, // for markdown files
  output: {
    path: join(__dirname, './translations/'), // for vue
    // path: join(__dirname, './translations/lessons'), // for md
  },
  translator: 'openai',
  openaiConfig: {
    key: process.env.GRIDSOME_OPENAI_KEY,
    from: 'English',
    to: ["Chinese", "Japanese", "Korean", "Russian", "German", "Spanish", "Portuguese", "Italian", "French", "Ukrainian", "Arabic", "Greek", "Dutch"]
  }
}
