/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#D2691E', // SaddleBrown or similar for caramel
        blue: '#00008B',   // DarkBlue for cocoa
        yellow: '#FFD700', // Gold for orange
        green: '#228B22',  // ForestGreen for almond
      },
    },
  },
  plugins: [],
}