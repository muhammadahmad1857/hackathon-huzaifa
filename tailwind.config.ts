import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7F9",
        text: { dark: "#1A202C", light: "#90A3BF" },
        inputBg: "rgba(246, 247, 249, 1)",
        radio: "rgba(84, 166, 255, 1)",
        imageBg: "rgba(53, 99, 233, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
