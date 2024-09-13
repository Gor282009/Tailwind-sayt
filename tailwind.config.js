/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brandDark: "#0b0b0d",
        brandBlue: "#125795",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif",],
        merriwather: ["Merriwather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        media: {
          sm: "(min-width: 640px)",
          md: "(min-width: 768px)",
          lg: "(min-width: 1024px)",
          xl: "(min-width: 1280px)",
          "2xl": "(min-width: 1536px)",
        }
      }
    },
  },
  plugins: [],
}