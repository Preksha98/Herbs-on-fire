/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    fontFamily: {
      rampart: ['"Rampart One"', 'sans-serif'],
      lobster: ['"Lobster"', 'cursive'],
      cinzel: ['"Cinzel Decorative"', 'cursive'],
      cormorant: ["Cormorant Garamond", 'serif']
    },
  },
},

  plugins: [],
}
