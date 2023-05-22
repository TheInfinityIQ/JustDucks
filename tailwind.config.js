/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'source': ['Source Sans Pro', 'sans-serif']
    },
    fontSize: {
      '48': '48px',
      '16': '16px'
    },
    extend: {},
  },
  plugins: [],
}

