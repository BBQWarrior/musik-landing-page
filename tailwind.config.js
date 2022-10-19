/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/assets/*.json'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        garamond: ['Garamond'],
      },
      height: {
        968: '968px',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(180deg, #381DDB 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(./assets/Img.png); ',
      },
      textShadow: {
        counter: '0 0 5px rgba(255, 255, 255, 0.8)',
        title: '0 2px 2px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow'),
            require('tailwind-scrollbar')],
};
