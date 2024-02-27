/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        accent: "#652FAD",
        bg: {
          light: "#FCFCFC",
          mid: "#F2F2F2",
          dark: "#200F37",
        },
        text: {
          dark: "#333333",
          mid: "#555555",
          light: "#FCFCFC",
        },
      },
    },
  },
  plugins: [],
};
