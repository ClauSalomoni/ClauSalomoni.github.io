/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
         fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        wave: 'wave 10s linear infinite',
      },
      
      colors: {
        primary: "#6EC1E4",
        secondary: "#54595F",
        text: "#7A7A7A",
        accent: "#61CE70",
      },
   
      fontFamily: {
          sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
       },
  },
  plugins: [],
}

