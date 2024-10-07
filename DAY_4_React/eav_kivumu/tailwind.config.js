/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'red': '#db0916',
          'my-bg': '#2d90d2'
        
      } 
    },
  },
  plugins: [],
}