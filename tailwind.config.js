/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./publik/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#053B50',
        secondary: '#EDF1F8',
        button: '#F4E869',
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}