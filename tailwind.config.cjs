/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purplex: {
          100: '#2708c0',
          200: '#14049b',
          300: '#14049b',
          400: '#0a0289',
          500: '#000076',
        }
      }
    },
  },
  plugins: [],
}