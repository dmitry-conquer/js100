class Search {
  constructor(options = {}) {
    this.defaults = {};
    this.settings = { ...this.defaults, ...options };
    this.button = document.getElementById('wp-search-button');
    this.input = document.getElementById('wp-search-input');
    this.results = document.getElementById('wp-search-results');
    this.body = document.getElementById('wp-search-body');
    this.baseUrl = 'https://mediacomponents.com/wp-json/wp/v2';
    this.allResults = [];
    this.init();
  }

  init() {
    this.#addEventListeners();
  }

  async fetchAllContent(type) {
    return fetch(`${this.baseUrl}/${type}?per_page=100`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok for ${type}`);
        }
        return response.json();
      })
      .then(content => {
        this.allResults = [...this.allResults, ...content];
        return content;
      })
      .catch(error => {
        console.error(`Error ${type}:`, error);
      });
  }

  async #getData() {
    const postsPromise = this.fetchAllContent('posts');
    const pagesPromise = this.fetchAllContent('pages');
    return Promise.all([postsPromise, pagesPromise])
      .then(([posts, pages]) => {
        const allContent = [...posts, ...pages];
        this.#render(allContent);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  #highlightResult(string, substring) {
    return string.replace(new RegExp(substring, 'gi'), match => `<b style="color: red;">${match}</b>`);
  }

  #render(data) {
    let template;
    const filteredData = data.filter(post => post.title.rendered.toLowerCase().includes(this.input.value.toLowerCase())).slice(0, 5);
    if (filteredData.length) {
      template = filteredData.map(article => `<div class="wp-search-item"><a target="_blank" href="${article.link}">${this.#highlightResult(article.title.rendered, this.input.value)}</a></div>`).join('');
    } else {
      const message = 'No results found.';
      this.results.innerHTML = '';
      template = `<div class="wp-search-empty">${message}</div>`;
    }
    this.results.innerHTML = template;
    this.#toggleResults();
  }

  #checkEmptyInput() {
    return this.input.value === '';
  }

  #toggleResults() {
    if (this.#checkEmptyInput()) {
      this.results.innerHTML = '';
    }
  }

  #toogleSearchForm() {
    this.body.classList.toggle('open');
  }

  #outClickSearchForm(e) {
    if (!e.target.closest('#wp-search-body') && e.target !== this.button) {
      this.body.classList.remove('open');
    }
  }

  #addEventListeners() {
    this.input.addEventListener('input', () => {
      this.allResults = [];
      this.#getData();
    });

    this.button.addEventListener('click', () => this.#toogleSearchForm());
    document.addEventListener('click', e => this.#outClickSearchForm(e));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchWp = new Search({});
});