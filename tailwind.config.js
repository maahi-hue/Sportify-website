/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#121212",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
