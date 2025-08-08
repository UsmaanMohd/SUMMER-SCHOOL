//i use taiwind version 3.9.4

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,htm}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
