/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
      fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Ephesis', 'serif'],
      },
      extend: {
      colors: {
        'myteal': '#008080',
        'mypeach': '#ff9966',
        'myblue': '#385664',
        }
      },  
  },
  plugins: [],
}
