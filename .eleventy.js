const strum = require('./src/shortcodes/strum')
const htmlmin = require('html-minifier-terser')

module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local', // launches localhost on npm start
  })

  eleventyConfig.addPassthroughCopy('./src/assets')

  //pwa stuff
  eleventyConfig.addPassthroughCopy('./src/serviceWorker.js')
  eleventyConfig.addPassthroughCopy('./src/manifest.json')

  eleventyConfig.addShortcode('strum', strum)

  if (process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addTransform('htmlmin', (content, path) =>
      path.endsWith('.html')
        ? htmlmin.minify(content, {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
          })
        : content
    )
  }

  return {
    isProduction: process.env.ELEVENTY_PRODUCTION ? 'true' : 'false',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
