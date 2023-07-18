/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mm: "350px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        font: "#09090B",
        inputBg: "#F4F4F5",
        primary: "#406E3F",
        secondary: "#030711",
        slight: "#1D283A",
        primary1: "#265530",
        primary3: "#263E2A",
      },
      borderColor: {
        input: "#E4E4E7",
        secondary: "#1D283A",
      },
    },
  },
  plugins: [],
};
