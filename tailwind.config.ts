import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        KodeMono: ["Kode Mono", "monospace"],
        RobotoMono: ["Roboto Mono", "monospace"],
        Lora: ["Lora", "serif"]
      },
      colors: {
        secondary: "#00b8a3"
      },
      screens: {
        md: "700px",
        lg: "990px"
      }
    },
  },
  plugins: [],
};
export default config;
