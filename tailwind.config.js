/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'jobfair-blue': '#204293',
        'jobfair-light-blue': '#2955bd',
        'agenda-best-yellow': '#ffb521',
        'brown-best': '#563232'
      },
      backgroundImage: {
        'opening': "url('https://cdn-icons-png.flaticon.com/512/1376/1376490.png')",

      },
    },
  },
  plugins: [],
}

