/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gajraj: ["var(--font-gajraj-one)"],
        labrada: ["var(--font-labrada)"],
        labrada_italic: ["var(--font-labrada-italic)"],
      },
      keyframes: {
        slideThrough: {
          "0%": { transform: "translateX(50%)" },
          // '50%': {transform : 'translateX(20%)'},
          "50%": { transform: "translateX(0px)" },
          
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide_through: "slideThrough 20s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
