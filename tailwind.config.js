/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gradient: {
          light: {
            stops: ["#C8AFE9", "#652FAD"],
          },
          dark: {
            stops: ["#170A29", "#090410"],
          },
        },
        bg: {
          dark: "#090410",
        },
        text: {
          light: "#FCFCFC",
          mid: "#CCCCCC",
          dark: "#090410",
        },
      },
    },
  },
  plugins: [],
};
