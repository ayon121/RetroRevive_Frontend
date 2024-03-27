/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Rubik : "'Rubik Scribble', system-ui" ,
        Hind : "'Hind Siliguri', sans-serif;",
        Titan : "'Titan One', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

