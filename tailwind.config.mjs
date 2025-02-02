/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ['lalezar', 'sans-serif'],
         
        arabicUI: ['arabicUI', 'sans-serif'],
        arabicUI2: ['arabicUI2', 'sans-serif'],
        arabicUI3: ['arabicUI3', 'sans-serif'],
        arabicUI4: ['arabicUI4', 'sans-serif'],
        arabicUI5: ['arabicUI5', 'sans-serif'],
      },
      colors: {
        primary:"#f3ad31",
        primary2:"#3a3d44"
      },
    },
  },
  plugins: [],
};
