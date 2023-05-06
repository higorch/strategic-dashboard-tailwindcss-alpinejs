/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        "content-header": "70px",
        "content-footer": "75px",
      },
      minHeight: {
        "content-body": "calc(100vh - 145px)",
      },
      colors: {
        "theme": {
          "primary": "#f1f3f4"
        }
      }
    },
  },
  plugins: [],
}