import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts-in-blog/*.{js, ts, jsx, tsx, mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xsm':'393'
      },
      colors: {
        'primary': '#358df9',
        'secondary': '#5e69ee',
        'accent': '#39AFEA',
        'neutral':'#F4F4FB'
      }
    },
  },
  plugins: [],
};
export default config;
