/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        mincho: ["'Shippori Mincho'", "serif"],
        dela: ["'Dela Gothic One'", "sans-serif"],
        sans: ["'Noto Sans JP'", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#c7c7c7",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252",
          600: "#3a3a3a",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0f0f0f",
          950: "#050505",
        },
        moss: {
          400: "#8a9a5b",
          500: "#6b7a3f",
          600: "#556635",
        },
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}