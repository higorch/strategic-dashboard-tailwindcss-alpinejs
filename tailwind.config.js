/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "theme": {
          "primary": "#f1f3f4"
        }
      }
    },
  },
  plugins: [],
}