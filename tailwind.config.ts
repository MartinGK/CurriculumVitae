import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050608",
        panel: "#0c1017",
        line: "rgba(255,255,255,0.10)",
        muted: "#9ca3af",
        silver: "#e5e7eb",
        accent: "#a7f3d0"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,0.42)",
        glow: "0 0 80px rgba(167,243,208,0.10)"
      }
    }
  },
  plugins: []
};

export default config;
