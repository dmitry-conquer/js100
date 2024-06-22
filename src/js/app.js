import Search from './apps/search-wp/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchWp = new Search({
    baseUrl: 'https://mediacomponents.com/wp-json/wp/v2',
    postTypes: ['posts', 'pages', 'our-work'],
    showPosts: 10,
  });
});

// import Beforeafter from './apps/before-after/before-after.js';

// const beforeAfterSlider = new Beforeafter('before-after');
