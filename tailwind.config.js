module.exports = {
  content: ['./src/scss/**/*.scss', './src/**/*.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },

  // plugins: [require("@tailwindcss/typography")],
};
