/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18216d", // Adjust to your preferred primary color
        secondary: "#F59E0B", // Adjust to your preferred secondary color
      },
    },
  },
  plugins: [],
}
