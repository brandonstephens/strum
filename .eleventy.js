module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local', // launches localhost on npm start
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
