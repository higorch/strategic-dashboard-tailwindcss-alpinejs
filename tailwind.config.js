/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "header-side": "90px",
        "footer-side": "70px",
        "menu-side": "calc(100vh - 160px)"
      }
    },
  },
  plugins: [],
}