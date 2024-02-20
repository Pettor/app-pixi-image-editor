/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    darkMode: "class",
    darkTheme: "dark",
    logs: false,
  },
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik"],
      },
      fontWeight: 500,
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
