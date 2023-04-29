/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "side": "270px",
      },
      height: {
        "side-header": "90px",
        "side-footer": "70px",
        "side-body": "calc(100vh - 160px)",
        "content-header": "70px",
        "content-footer": "50px",
      },
      minHeight: {
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