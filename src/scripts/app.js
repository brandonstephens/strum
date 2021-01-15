// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const CLASS_INACTIVE = 'strum-inactive'

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

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

const toggleTheme = () => {
  const themeLabel = document.getElementById('label')
  const isDark = localStorage.theme === 'dark'

  if (isDark) {
    document.querySelector('html').classList.remove('dark')
    localStorage.theme = 'light'
    themeLabel.innerHTML = '☀️'
  } else {
    document.querySelector('html').classList.add('dark')
    localStorage.theme = 'dark'
    themeLabel.innerHTML = '🌙'
  }
}

const initToggle = () => {
  const isDark = localStorage.theme === 'dark'
  const themeLabel = document.getElementById('label')
  themeLabel.innerHTML = isDark ? '🌙' : '☀️'
}

// -----------------------------------------------------------------------------
// Init App
// -----------------------------------------------------------------------------
updateState(getQueryParams())
initToggle()

const shuffleButton = document.getElementById('shuffle')
shuffleButton.addEventListener('click', (event) => {
  shuffleState()
})

const shareButton = document.getElementById('share')
navigator.share && shareButton.classList.remove('button-disabled')
shareButton.addEventListener('click', (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Strum | Guitar Practice',
        text: 'A simple tool to help practice different strumming patterns.',
        url: window.location,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error))
  } else {
    alert('Sorry, share not supported on this browser. You can copy the url to share your pattern.')
  }
})

const themeButton = document.getElementById('theme')
themeButton.addEventListener('click', (event) => {
  toggleTheme()
})

const strumPattern = document.getElementById('strumPattern')
strumPattern.addEventListener('click', (event) => {
  if (event.target.id.includes('beat')) {
    toggleBeat(event.target)
    return
  }
})
