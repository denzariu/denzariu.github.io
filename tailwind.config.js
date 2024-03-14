/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'main': {
          300: '#c8aeff',
          400: '#b28eff',
          500: '#915eff',
          600: '#8254e5',
          700: '#6843b7'
        },
        'react': {
          100: '#61DBFB',
          900: '#20232A'
        }
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  base: "/websiter",
  plugins: [],
}

