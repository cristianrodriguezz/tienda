/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'victoria': {  DEFAULT: '#3F448D',
          50: '#EAF0F6',  
          100: '#D5DFEC',
          200: '#ABBBD9',
          300: '#8093C6',
          400: '#5665B3',
          500: '#3F448D',
          600: '#363474',
          700: '#30295B',
          800: '#261E43',
          900: '#1B132A'},
      }
    },
  },
  plugins: [],
}