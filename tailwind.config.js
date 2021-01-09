const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./dist/**/*.html'], // only look at the built dir
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors, transparent: 'transparent', current: 'currentColor' },
    extend: {},
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
}
