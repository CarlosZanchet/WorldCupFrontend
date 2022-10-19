/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',

      gray: {
        '50': '#f4f4f5',
        '300': '#d4d4d8',
        '700': '#3f3f46'
      },
      primary: {
        'contrast': '#f4f4f5',
        '900': '#7f1d1d',
        '800': '#991b1b',
      },
      secondary: {
        'contrast': '#f4f4f5',
        'hover': '#854D0E',
        '700': '#A16207',
        '600': '#ca8a04'
      },
      success: {
        background: 'rgb(12, 19, 13)',
        color: 'rgb(204, 232, 205)',
      },
      danger: {
        background: 'rgb(22, 11, 11)',
        color: 'rgb(244, 199, 199)',
      },
      info: {
        background: 'rgb(7, 19, 24)',
        color: 'rgb(184, 231, 251)',
      },
      warning: {
        background: 'rgb(25, 18, 7)',
        color: 'rgb(255, 226, 183)',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
