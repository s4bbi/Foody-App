/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['poppins']
      }, 
      colors: {
        'yellow': '#F8C756'
      }
    },
  },
  plugins: [],
}

