/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navBar": "#001422",
        "navBarB": "#00345A",
        "navBarBH": "#003A64",
        "navBarBA": "#003D69",

        "itemsNav": "#28B892",
        "itemsNavH": "#2BD3A6",
      },
      fontFamily: {
        "default": ["Montserrat"]
      }
    },
  },
  plugins: [],
};
