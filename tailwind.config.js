/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#2b3945",
        vDarkMode: "#111517",
        vDarkBlue: "#202c37",
        DarkGray: "#858585",
        vDarkGray: "#fafafa",
      },
    },
  },

  darkMode: "class",
  plugins: [],
};
