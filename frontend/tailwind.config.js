/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#DBEAFE'
      }
    },
  },
  plugins: [],
}