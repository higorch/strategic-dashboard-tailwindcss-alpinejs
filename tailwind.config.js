/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "side-header": "110px",
        "side-footer": "70px",
        "content-header": "70px",
        "content-footer": "50px",
      },
      minHeight: {
        "side-body": "calc(100vh - 180px)",
        "content-body": "calc(100vh - 120px)",
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