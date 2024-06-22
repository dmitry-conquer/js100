export default class Search {
  constructor(options = {}) {
    this.defaults = {
      baseUrl: '',
      postTypes: ['posts', 'pages'],
      showPosts: 6,
    };
    this.settings = { ...this.defaults, ...options };
    this.button = document.getElementById('wp-search-button');
    this.input = document.getElementById('wp-search-input');
    this.results = document.getElementById('wp-search-results');
    this.body = document.getElementById('wp-search-body');
    this.baseUrl = this.settings.baseUrl;
    this.searching = false;
    this.#init();
  }

  #init() {
    this.#addEventListeners();
  }

  async #getPostData(type) {
    return fetch(`${this.baseUrl}/${type}/?per_page=100`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok for ${type}`);
        }
        return response.json();
      })
      .then(content => content)
      .catch(error => {
        this.#showMessage('Search error!');
        console.error(`Error ${type}:`, error);
      });
  }

  async #getData() {
    this.#showMessage('Shearching...');
    const promises = [];
    this.settings.postTypes.forEach(type => {
      const promise = this.#getPostData(type);
      promises.push(promise);
    });
    Promise.all(promises)
      .then(content => {
        const allContent = content.reduce((arr, acc) => [...arr, ...acc]);
        this.#render(allContent);
      })
      .catch(error => {
        console.error('Error:', error);
        this.#showMessage('Search error!');
      });
  }

  #render(data) {
    const filteredData = data.filter(post => post.title.rendered.toLowerCase().includes(this.input.value.toLowerCase())).slice(0, this.settings.showPosts);
    if (filteredData.length) {
      const template = filteredData.map(article => `<div class="wp-search-item"><a target="_blank" href="${article.link}">${this.#highlightResult(article.title.rendered, this.input.value)}</a></div>`).join('');
      this.results.innerHTML = template;
    } else {
      this.#showMessage('No results found.');
    }
  }

  #highlightResult(string, substring) {
    return string.replace(new RegExp(substring, 'gi'), match => `<b style="color: red;">${match}</b>`);
  }

  #showMessage(message) {
    this.results.innerHTML = `<div class="wp-search-empty">${message}</div>`;
  }

  #isSearchEmpty() {
    return this.input.value === '';
  }

  #clearResults() {
    this.results.innerHTML = '';
  }

  #toogleSearchForm() {
    this.body.classList.toggle('open');
    this.input?.focus();
  }

  #outClickSearchForm(e) {
    if (!e.target.closest('#wp-search-body') && e.target !== this.button) {
      this.body.classList.remove('open');
    }
  }

  #addEventListeners() {
    this.input?.addEventListener('input', () => {
      if (!this.#isSearchEmpty()) {
        this.#getData();
      } else {
        this.#clearResults();
      }
    });
    this.button?.addEventListener('click', () => this.#toogleSearchForm());
    document.addEventListener('click', e => this.#outClickSearchForm(e));
  }
}
