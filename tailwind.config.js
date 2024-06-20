module.exports = {
  content: ['./src/scss/**/*.scss', './src/**/*.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      ibm: ['IBM Plex Mono', 'monospace'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },

  // plugins: [require("@tailwindcss/typography")],
};
