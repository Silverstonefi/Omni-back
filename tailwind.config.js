/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      cabin: ["cabin", "sans-serif"],
      rye: ["Rye", "cursive"],
    },
    color: {
      dark: "#151c6d",
      primary: "#F53E03",
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
