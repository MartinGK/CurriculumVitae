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
        }, // Add a new primary color
        secondary: {
          1: "#1F2937",
        }, // Add a new secondary color
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
      },
    },
  },
};
