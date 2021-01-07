const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors, transparent: 'transparent', current: 'currentColor' },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
