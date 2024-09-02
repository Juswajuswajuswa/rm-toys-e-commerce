/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main-text" : ['Lato', 'sans-serif'],
        "main": ['Caladea', 'serif'],
        "sub": ['Share Tech Mono', 'monospace']
      },
      colors: {
        "primary" : "#313031", // text and bg-colors for butttons and etc.
        "secondary" : "#ebd93e", // for products and forms back ground
        "card" : "#f3e9e9", // for products and forms back ground
        "yellow": "#e3d238"
      }
    },
  },
  plugins: [],
}