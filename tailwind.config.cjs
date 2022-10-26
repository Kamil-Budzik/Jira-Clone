/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5051F9',
        gray: {
          300: '#F3F4F8',
          400: '#FBFAFF',
          500: '#768396',
        },
      },
    },
  },
  plugins: [],
};
