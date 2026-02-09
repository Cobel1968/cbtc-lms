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
        cbtc: {
          blue: "#005C97",    // The Logo Blue
          magenta: "#E91E63", // The Logo Magenta
          yellow: "#FFB300",  // The Logo Yellow
          navy: "#022B42",    // Deep Corporate Navy
          slate: "#F1F5F9"    // Clean Gray
        },
      },
    },
  },
  plugins: [],
};
export default config;