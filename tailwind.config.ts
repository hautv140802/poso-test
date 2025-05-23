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
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
