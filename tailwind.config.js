module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {},
    extend: {
      fontSize: {},
      colors: {
        primary: {
          DEFAULT: "#000",
        },
        secondary: {
          DEFAULT: "#FFF",
        },
      },
    },
    fontFamily: {
      font: ["Font name", "sans-serif"],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
