/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '360px',
        xs: '470px',
      },
      fontFamily: {
        sans: ['PT Sans', 'Segoe UI', 'Tahoma', 'sans-serif'],
        ptbldhad: ['PTBLDHAD', 'PT Sans', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
