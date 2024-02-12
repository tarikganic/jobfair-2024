/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "jobfair-blue": "#204293",
        "jobfair-light-blue": "#2955bd",
        "agenda-best-yellow": "#ffb521",
        "brown-best": "#563232",
      },
      fontFamily: {
        inter:['Inter', 'sans-serif'],
      },
      backgroundImage: {
        opening:
          "url('https://cdn-icons-png.flaticon.com/512/1376/1376490.png')",
      },
      screens: {
        mobile: { max: "639px", min: "0px" },
      },
      height:{
        '150': '150rem',
      },
      width:{
        'almost': '80%',
      },
    },
  },
  plugins: [],
};
