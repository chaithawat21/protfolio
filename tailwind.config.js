/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg01.png')",

      },
      screens: {
        'sm': {'max':'450px'},
        'md': {'min':'451px','max':'768px'}
      },
    },
  },
  plugins: [],
}
