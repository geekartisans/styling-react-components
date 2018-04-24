const autoprefixer = require('autoprefixer');
const postCssNested = require('postcss-nested');
const postCssExtend = require('postcss-extend');
const postCssUrl = require('postcss-url');

module.exports = {
  plugins: [
    autoprefixer,
    postCssExtend,
    postCssNested,
    postCssUrl({
      url: 'inline'
    })
  ]
} 