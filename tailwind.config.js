/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      md: { max: "1200px" },
      sm: { max: "770px" },
      xs: { max: "300px" },
      tall: { raw: "(max-height: 610px)" },
    },
    extend: {
      fontFamily: {
        creepster: ["Creepster", "cursive"],
      },
    },
  },
  plugins: [],
};
