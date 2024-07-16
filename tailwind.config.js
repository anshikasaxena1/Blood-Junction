/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '200px': '200px',
      },
      height: {
        '200px': '200px',
      },
      borderRadius: {
        'extra-large': '3rem',
      },
      spacing: {
        '100px': '100px',
        '100px': '100px',
      },
      fontSize: {
        '18px': '18px',
        '22px': '22px',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        customMaroon: '#780000',
        customBtn: "#4F000B",
        customShodowM: '#920000',
        customTextColor: '#902F2F',
        customRed: '#C1121F', 
        customWhite: '#F3E8EA',
        customWhiteInside: '#FDF5FD',
        
      },
      
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
  ],
}

