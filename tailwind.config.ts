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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'SebneueSemiHeavy': ['SebneueSemiHeavy', 'sans-serif'],
        'SebneueSemiBold': ['SebneueSemiBold', 'sans-serif'],
        'ItalianRegular': ['ItalianRegular', 'sans-serif'],
        'ItalianThin': ['ItalianThin', 'sans-serif'],
        'ItalianMedium': ['ItalianMedium', 'sans-serif'],
        'ItalianDemibold': ['ItalianDemibold', 'sans-serif'],
        'ItalianLight': ['ItalianLight', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
export default config;
