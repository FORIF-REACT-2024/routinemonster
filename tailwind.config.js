/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: '#f0f8ff', // 원하는 HEX 색상 코드
          100: '#cfe2ff',
          200: '#9cc5ff',
          300: '#6aa8ff',
          400: '#388bff',
          500: '#0066ff',
          600: '#0055cc',
          700: '#0044aa',
          800: '#003388',
          900: '#002266',
        },
      },
    },

  },
  plugins: [],
}

