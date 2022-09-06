/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {

    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px"
    }
  },
  plugins: [],
}
