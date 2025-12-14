import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        notary: {
          navy: '#1a2332',
          gold: '#d4af37',
          cream: '#faf8f3'
        }
      }
    },
  },
  plugins: [],
};
export default config;
