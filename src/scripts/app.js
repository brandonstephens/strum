// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const DOWN = 'strum-down'
const UP = 'strum-up'
const INACTIVE = 'strum-inactive'

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
const updateUrl = (array) => {
  window.history.pushState(null, '', `?s=${array.join('')}`)
}

const getState = () => {
  const beats = document.querySelectorAll('[id^="beat"]')
  return Object.entries(beats).map((beat) => (beat[1].classList.contains(INACTIVE) ? 0 : 1))
}

const toggleBeat = (target) => {
  target.classList.toggle(INACTIVE)
  updateUrl(getState())
}

const getQueryParams = () => {
  return window.location.search
    .substring(1)
    .split('&')
    .filter((x) => x.startsWith('s='))[0]
    .split('=')[1]
    .split('')
    .map((x) => Number(x))
}

const updateState = () => {
  const state = getQueryParams()
  const beats = document.querySelectorAll('[id^="beat"]')
  Object.entries(beats).map((beat, index) => (state[index] === 0 ? beat[1].classList.add(INACTIVE) : null))
}

// -----------------------------------------------------------------------------
// Init App
// -----------------------------------------------------------------------------
updateState()

document.addEventListener('click', (event) => {
  event.preventDefault()

  if (!event.target.id.includes('beat')) {
    return
  }

  toggleBeat(event.target)
})
