module.exports = function (beat) {
  const isDown = beat % 2 !== 0
  const icon = isDown ? '↓' : '↑'
  const className = isDown ? 'strum-down' : 'strum-up'

  return `<button id="beat_${beat}" class="strum ${className}">${icon}</button>`
}
