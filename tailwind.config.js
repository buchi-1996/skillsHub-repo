module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif']
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '0.7rem',
          xl: '3rem',
          '2xl': '6rem',
        },
      },
      borderColor: {
        'primary-b': '#011242'
      },
      backgroundColor: {
    'primary-color': '#011242',
    'secondary-color': '#4DD95B',
    'cyan-bg': "#53E3E3",
    'light-blue': "#E8F6FF",
    'green-light': "#4DD95B",
    'dark-blue': "#224DC8",
    'darker-blue': "#011242"
  },

  textColor: {
    'primary-text': '#011242'
  }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
