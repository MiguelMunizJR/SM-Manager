/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBar: "#001422",
        navBarB: "#00345A",
        navBarBH: "#003A64",
        navBarBA: "#003D69",
        navBarDark: "#000308",
        itemsNav: "#28B892",
        itemsNavH: "#2BD3A6",
        itemsNavDark: "#229D7C",
        itemsNavDarkH: "#1F8E70",
        containerDark: "#020711",
      },
      fontFamily: {
        default: ["Montserrat"],
      },
      keyframes: {
        reload: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        modalForm: {
          "0%": { transition: "opacity: 0" },
          "100%": { transition: "opacity: 1" },
        },
      },
      animation: {
        reload: "reload .45s linear",
        modalForm: "modalForm 1s linear",
      },
      backgroundImage: {
        "hero-login": "url(./public/pexels-jonathan-borba-2922326.jpg)"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
