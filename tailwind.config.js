/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': '#3a3b3c',
        'gray-2': '#242526',
        'gray-3': '#b8bbbf',
        'gray-4': '#18191a',
        facebook: '#2374e1',
        primary: '#e7e9ed',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
