const colors = require('tailwindcss/colors')

module.exports = {
  purge: [    
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {...colors},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
