/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        "content": "calc(100% - 300px)"
      },
      colors: {
        "theme": {
          "primary": "#f9faff"
        }
      }
    },
  },
  plugins: [],
}