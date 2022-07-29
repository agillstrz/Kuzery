/** @type {import('tailwindcss').Config} */

module.exports = { 
  content: ['index.html'],
  theme: {
    extend: {
      height:{
        desc : '50px',
      },
      
      colors: {
        clifford: '#da373d',
      },
      fontFamily : {
        agil : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

