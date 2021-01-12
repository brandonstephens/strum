// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const CLASS_INACTIVE = 'strum-inactive'

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const updateUrl = (array) => {
  window.history.pushState(null, '', `?s=${array.join('')}`)
}

const getState = () => {
  const beats = document.querySelectorAll('[id^="beat"]')
  return Object.entries(beats).map((beat) => (beat[1].classList.contains(CLASS_INACTIVE) ? 0 : 1))
}

const screenReaderLabel = (isDown, isActive) => {
  return `${isDown ? 'down' : 'up'} ${isActive ? 'strum' : 'rest'}`
}

const getQueryParams = () => {
  return (
    window.location.search &&
    window.location.search
      .substring(1)
      .split('&')
      .filter((x) => x.startsWith('s='))[0]
      .split('=')[1]
      .split('')
      .map((x) => Number(x))
  )
}

const updateState = (state) => {
  const beats = document.querySelectorAll('[id^="beat"]')

  // reset
  Object.entries(beats).forEach((beat) => beat[1].classList.remove(CLASS_INACTIVE))
  Object.entries(beats).forEach((beat) => (beat[1].querySelector('.sr-only').innerHTML = ''))

  // update
  Object.entries(beats).forEach((beat, index) => (state[index] === 0 ? beat[1].classList.add(CLASS_INACTIVE) : null))
  Object.entries(beats).forEach(
    (beat, index) =>
      (beat[1].querySelector('.sr-only').innerHTML = screenReaderLabel(index % 2 === 0, state[index] === 1))
  )
}

const toggleBeat = (target) => {
  // update screen reader label
  const isDown = target.querySelector('.sr-only').innerHTML.includes('down')
  const isActive = !target.querySelector('.sr-only').innerHTML.includes('strum')
  target.querySelector('.sr-only').innerHTML = screenReaderLabel(isDown, isActive)

  target.classList.toggle(CLASS_INACTIVE)
  updateUrl(getState())
}

const shuffleState = () => {
  const randomArray = Array.apply(null, Array(8)).map((x) => randomInt(0, 1))
  updateState(randomArray)
  updateUrl(randomArray)
}

// -----------------------------------------------------------------------------
// Init App
// -----------------------------------------------------------------------------
updateState(getQueryParams())

const shuffleButton = document.getElementById('shuffle')
shuffleButton.addEventListener('click', (event) => {
  shuffleState()
})

const strumPattern = document.getElementById('strumPattern')

strumPattern.addEventListener('click', (event) => {
  if (event.target.id.includes('beat')) {
    toggleBeat(event.target)
    return
  }
})
