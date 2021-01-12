const strum = require('./src/shortcodes/strum')

module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local', // launches localhost on npm start
  })

  eleventyConfig.addPassthroughCopy('./src/scripts/*.js')
  eleventyConfig.addPassthroughCopy('./src/assets')

  eleventyConfig.addShortcode('strum', strum)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
