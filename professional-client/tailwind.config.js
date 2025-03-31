/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#31308f", // Adjust to your preferred primary color
        secondary: "#08a6ee", // Adjust to your preferred secondary color
      },
    },
  },
  plugins: [],
}
