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
      },
      screens: {
        "celular": "768px",
        "tablet": "992px",
        "desktop": "1024px",
      },
      boxShadow: {
        "mode-light": "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        "mode-dark": "0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.20)"
      },
      backgroundImage: {
        "form-login": "url('../img/bg-login.jpg')",
      }
    },
  },
  plugins: [],
}