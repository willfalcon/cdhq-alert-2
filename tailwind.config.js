/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{php,js}', './parts/**/*.{php, js}'],
  theme: {
    extend: {
      colors: {
        blue: '#3493BF',
        lightBlue: '#AFE7F7',
        orange: '#DD5A3F',
        green: '#329B79',
        purple: '#381429',
        black: '#381429',
        gray: '#3D3534',
        offWhite: '#F6F7EE',
        darkGreen: '#014321',
      },
    },
  },
  plugins: [],
};
