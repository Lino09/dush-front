module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'dush-green': '#3CF16F',
        'dush-red': '#EA1B1B',
        'dush-text': '#061132',
        'dush-darkblue': '#394463'  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
