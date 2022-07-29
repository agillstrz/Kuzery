/** @type {import('tailwindcss').Config} */

module.exports = { 
  content: ['galery.html'],
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

