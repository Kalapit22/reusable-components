/** @type {import('tailwindcss').Config} */

/* or refers to oriana*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      /* General oriana application*/
      "or-gray": '#F5F9F9',
      "or-green": "#34F5C6",
      "or-red": "#E72121",
      "or-blue":"#00255C",
      "or-skyblue":"#00D9FF",
      "or-gray-border":"#DEE1ED",
      "or-blue-modal":"#005969",
      "or-located":"#98D44C",

      /* Pagination*/
      "or-actualpage":"#0097B2",
      "or-arrow-color":"#81C5E2",
      
      /* States used in the table*/
      "or-st-green":"#15AEC9",
      "or-st-orange":"#DBBA01", 
      "or-st-violet": "#C158C2",
      "or-st-red": "#E72121",
      "or-st-blue":"#15AEC9",

      /* States used in the */

    },
    extend: {},
  },
  plugins: [],
}