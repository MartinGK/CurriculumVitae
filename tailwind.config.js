module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#f50537", 123: "#f50537" },
      },
    },
    red: "#f50537",
    black: "#000000",
    green: "#00FF00",
    white: "#FFFFFF",
    primary: {
      1: "#1a1a1a",
      2: "#333333",
      3: "#4c4c4c",
      4: "#666666",
      5: "#808080",
      6: "#999999",
      7: "#b3b3b3",
      8: "#cccccc",
      9: "d9d9d9",
      10: "#e5e5e5",
      11: "f2f2f2",
    },
    secondary: {
      1: "#f50537",
    },
    card: {
      1: "#FFFFFF",
    },
  },
};
