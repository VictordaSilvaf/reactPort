/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenx: {
          100: '#6c918c',
          200: '#aecdc0',
          300: '#d4fce4',
          350: '#3e9b78',
          400: '#5be2a3',
          500: '#2c6c5c',
        }
      }
    },
  },
  plugins: [],
}