/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'opus-dark': '#1a1a1a',
        'opus-gray': '#2a2a2a',
        'opus-light': '#f5f5f5',
      }
    },
  },
  plugins: [],
}
