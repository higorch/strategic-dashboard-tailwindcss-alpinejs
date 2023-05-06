/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        "side-body": "calc(100vh - 180px)",
        "side-header": "90px",
        "side-footer": "90px",
        "content-header": "70px",
        "content-footer": "75px",
      },
      minHeight: {
        "content-body": "calc(100vh - 145px)",
      },
      colors: {
        "theme-gray": {
          "primary": "#f1f3f4",
          "secondary": "#d9dbdc",
        }
      }
    },
  },
  plugins: [],
}