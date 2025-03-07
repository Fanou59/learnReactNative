/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik", "sans"],
        nunito: ["nunito", "sans"],
      },
    },
  },
  plugins: [],
};
