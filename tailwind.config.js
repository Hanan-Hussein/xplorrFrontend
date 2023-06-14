/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        textBrand: '#fb8500'
      },
      backgroundImage: {
        herobackground: "url('/src/assets/worldMap.svg')",
        vacationbackground: "url('/src/assets/vacation.jpg')",
        callActionBackground: "url('/src/assets/callAction.png')",
        testBackground: "url('/src/assets/testback.jpg')",
        destinationDeets: "url('/src/assets/travel.jpeg')"
      },

    },
  },
  plugins: [],
}

