/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#F97316",
        }, 
        secondary: {
          1: "#fdc500",
        }, 
        background: {
          1: "#343541",
          2: "#343541",
        },
        card: {
          1: "#FFFFFF",
        },
        footer: {
          1: "#000000",
        },
        boca:{
          1:"#00296b",
          2:"#003f88",
          3:"#00509d",
          4:"#fdc500",
          5:"#ffd500"
        }
      },
    },
  },
};
