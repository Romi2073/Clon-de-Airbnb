/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        15: '60px',
        1.25: '5px',
      }
    },
  },
  plugins: [],
}

