module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local',
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
