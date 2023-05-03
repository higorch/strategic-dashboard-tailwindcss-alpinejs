/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "side-header": "100px",
        "side-footer": "75px",
        "content-header": "70px",
        "content-footer": "75px",
      },
      minHeight: {
        "side-body": "calc(100vh - 175px)",
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