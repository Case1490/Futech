/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#1f1f20",
        Blue: "#2b4c7e",
        SteelBlue: "#567ebb",
        SlateGray: "#606d80",
        LightGray: "#ffffff",
      },
    },
  },
  plugins: [],
};