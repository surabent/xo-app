import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lofi: {
          one: "#f4f4f4",
          two: "#94b0c2",
          three: "#566c86",
          four: "#333c57",
          five: "#1a1c2c",
          "sky-1": "#73eff7",
          "sky-2": "#41a6f6",
          "sky-3": "#3b5dc9",
          "sky-4": "#29366f",
          "green-1": "#257179",
          "green-2": "#38b764",
          "green-3": "#a7f070",
          "yellow-1": "#ffcd75",
          "orange-1": "#ef7d57",
          "red-1": "#b13e53",
          "magenta-1": "#5d275d",
        },
      },
      animation: {
        "scale-slow": "scale 2s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-mid": "spin 2s linear infinite",
        "press-slow": "press 1s linear infinite",
        pedestrian: "pedestrian 15s linear infinite",
        "pedestrian-reverse": "pedestrian-reverse 15s linear infinite",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        press: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
        },
        pedestrian: {
          from: { transform: "translateY(-20dvh)" },
          to: { transform: "translateY(120dvh)" },
        },
        "pedestrian-reverse": {
          from: { transform: "translateY(110dvh)" },
          to: { transform: "translateY(-20dvh)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
