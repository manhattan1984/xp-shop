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
          "0%": { transform: "translateX(0)", visibility: "visible" },

          "100%": { transform: "translateX(-100%)" },
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
