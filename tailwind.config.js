/** @type {import('tailwindcss').Config} */
const {theme: defaultTheme} = require("./tailwind.default.config");
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        13: '3.125rem',
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
      },
      fontSize: {
        '3xl': ['2.25rem', {lineHeight: '2.5rem'}],
        '4xl': ['2.5rem', {lineHeight: '1'}]
      },
      colors: {
        custom: {
          purple: '#4D44B5',
          orange: '#FB7D5B',
          yellow: '#FCC43E',
          text: '#303972',
          green: '#4CBC9A',
          red: '#FF4550',
          background: '#F3F4FF',
          gray1: '#F5F5F5',
          gray2: '#C1BBEB',
          gray3: '#A098AE',
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

