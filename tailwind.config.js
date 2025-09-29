/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        gold: "#D4AF37",
        charcoal: "#1f1f1f",
        smoke: "#2b2b2b",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.35)",
      },
    },
  },
  plugins: [],
};
