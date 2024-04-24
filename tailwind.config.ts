import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
        NotoSerif: ["Noto Serif Display", "serif"],
      },
      aspectRatio: {
        portrait: "3:2",
        landscape: "16:9",
        TV: "4:3",
      },
    },
  },
  plugins: [],
};
export default config;
