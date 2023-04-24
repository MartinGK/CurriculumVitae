module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grey: {
      },
    },
  },
  plugins: [],
  theme: {
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
    boca: {
      1: "#00296b",
      2: "#003f88",
      3: "#00509d",
      4: "#fdc500",
      5: "#ffd500",
    },
  },
};
