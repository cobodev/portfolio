/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: '#171717',
        light: '#F5F5F5',
        neonPink: '#FF007F',
        neonTurquoise: '#00FFD1',
        terracotta: '#8A4B2D',
      },
      animation: {
        'breath': 'breath 3s infinite',
      },
    },
  },
  plugins: [],
}