/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    darkTheme: "dark",
    logs: false,
  },
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
