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
        brm: {
          navy: "#0B1D3A",
          blue: "#1E4FA3",
          "blue-bright": "#1E4FA3",
          green: "#19A37F",
          lime: "#19A37F",
          cyan: "#19A37F",
          purple: "#50319A",
          orange: "#F36C0A",
          light: "#E6E8EB",
          border: "#E6E8EB",
          dark: "#4A4F57",
        },
        rbm: {
          navy: "#0B1D3A",
          blue: "#1E4FA3",
          "blue-bright": "#1E4FA3",
          green: "#19A37F",
          lime: "#19A37F",
          cyan: "#19A37F",
          purple: "#50319A",
          orange: "#F36C0A",
          light: "#E6E8EB",
          border: "#E6E8EB",
          dark: "#4A4F57",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(11, 29, 58, 0.06), 0 2px 6px -1px rgba(11, 29, 58, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(11, 29, 58, 0.12), 0 4px 12px -2px rgba(11, 29, 58, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
