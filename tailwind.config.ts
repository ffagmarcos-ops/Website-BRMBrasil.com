import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rbm: {
          navy: "#061F40",
          blue: "#0754A6",
          "blue-bright": "#0878D1",
          green: "#39A844",
          lime: "#9BC51C",
          cyan: "#08AFC4",
          purple: "#50319A",
          orange: "#F36C0A",
          light: "#F5F7FA",
          border: "#DDE4EC",
          dark: "#172033",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(6, 31, 64, 0.06), 0 2px 6px -1px rgba(6, 31, 64, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(6, 31, 64, 0.12), 0 4px 12px -2px rgba(6, 31, 64, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
