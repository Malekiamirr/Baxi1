/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranYekan: "IranYekan",
      },
      colors: {
        primary: "#F7A74B",
        secondary: "#BCBFDC",
        textPrimary: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
