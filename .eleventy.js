module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local', // launches localhost on npm start
  })

  eleventyConfig.addShortcode('strum', function (beat, active) {
    const isDown = beat % 2 !== 0
    const icon = !active ? '✕' : isDown ? '↓' : '↑'
    const className = !active ? 'inactive' : isDown ? 'down' : 'up'

    return `<button
              id="beat_${beat}"
              class="strum-base ${className}"
            >
              ${icon}
            </button>`
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
