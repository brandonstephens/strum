const strum = require('./src/shortcodes/strum')

module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local', // launches localhost on npm start
    ghostMode: false,
  })

  eleventyConfig.setUseGitIgnore(false)

  // copy static assets
  eleventyConfig.addPassthroughCopy('./src/assets')
  eleventyConfig.addPassthroughCopy('./src/styles')
  eleventyConfig.addPassthroughCopy('./src/scripts')
  eleventyConfig.addPassthroughCopy('./src/manifest.json')

  // custom shortcodes for use in templates
  eleventyConfig.addShortcode('strum', strum)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
