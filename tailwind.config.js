/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-transparent': 'linear-gradient(to right, rgb(97, 75, 239),rgb(137, 121, 243))'
      },
    },
    
  },
  plugins: [],
}

