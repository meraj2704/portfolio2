/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bg1:'var(--bg-1)',
        bg2:'var(--bg-2)',
        brand1:'var(--brand-1)',
        brand2:'var(--brand-2)',
        grey:'var(--grey)',
        white:'var(--white)',
        html:'var(--html)',
        css:'var(--css)',
        js:'var(--js)',
        react:'var(--react)'
      }
    },
  },
  plugins: [],
};
