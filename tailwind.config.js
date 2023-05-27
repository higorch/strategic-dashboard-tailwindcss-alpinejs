/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "theme": {
          "primary": "#eef9f9"
        }
      }
    },
  },
  plugins: [],
}