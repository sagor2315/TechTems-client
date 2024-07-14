/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#304151",
        secondary: "#D1FDFE",
        textPrimary: "#D1FDFE",
        textSecondary: "#022140",
        headerColor: "#2A3040",
        headerButton: "#3F5261",
        borderColor: "#FFF9C7"
      },

      fontFamily: {
        inter: "Inter ",
      },

    },
  },
  plugins: [],
}

