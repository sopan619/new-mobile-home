/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      labell: ["La Belle Aurore", "sans-serif"],
    },
    extend: {
      colors: {
        "apna-main": "#3F0071",
        "apna-pink": "#FF7D7D",
        "apna-lime": "#CFFF8D",
        "apna-light": "#FAF7F0",
        "apna-dark": "#06283D",
      },
    },
  },
  plugins: [],
};
