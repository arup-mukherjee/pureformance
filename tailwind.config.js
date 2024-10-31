/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        california: ['California', 'Roboto', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};