module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: 'local', // launches localhost on npm start
  })

  eleventyConfig.addShortcode('strum', function (direction, active) {
    const icon = !active ? '✕' : direction === 'down' ? '↓' : direction === 'up' ? '↑' : ''

    const className = !active
      ? 'bg-coolGray-400 border-coolGray-500 ring-coolGray-600 text-coolGray-800 opacity-25'
      : direction === 'down'
      ? 'bg-blue-400 border-blue-500 ring-blue-600  text-blue-800'
      : direction === 'up'
      ? 'bg-purple-400 border-purple-500 ring-purple-600  text-purple-800'
      : ''

    return `<div
              class="transform scale-75 rounded-full w-16 h-16 border-8 md:ring-8 flex justify-center items-center ${className}"
            >
              ${icon}
            </div>`
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
