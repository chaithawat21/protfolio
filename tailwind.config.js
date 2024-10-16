/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg01.png')",
      },
      screens: {
        'sm': {'max':'450px'},
        'md': {'min':'451px','max':'768px'},
        'lg': {'min':'769px','max':'1150px'},
      },
    },
  },
  plugins: [],
}
