import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow_primary: "#FACA4A",
        secondary_50: "#F3F2F2",
        brand_500: "#0373F3",
        text_primary: "#1C252E",
        error_main: "#FF5630",
        grey_200: "#F4F6F8",
        error_darker: "#7A0916",
        text_disabled: "#919EAB",
        band_50: "#E6F1FF",
        brand_100: "#CDE4FE",
        text_secondary: "#637381",
        brand_600: "#025FCA",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)",
        "yellow-gradient": "linear-gradient(135deg, #FFD666 0%, #FFAB00 100%)",
      },
      boxShadow: {
        "card-1": "0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        "card-2": "0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
      },
    },
  },
  plugins: [],
};
export default config;
