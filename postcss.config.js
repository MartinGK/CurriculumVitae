module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    "postcss-preset-env",
    [
      "tailwindcss",
      {
        // Agrega otras opciones de configuración de Tailwind aquí
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}","./app/**/*.{js,ts,jsx,tsx}"],
      },
    ],
  ],
};
