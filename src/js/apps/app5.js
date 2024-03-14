export default class {
  constructor(appId) {
    this.app = document.getElementById(appId);
    this.coin = document.getElementById('coin');
    this.flipButton = document.getElementById('flip');
  }

  init() {
    if (this.flipButton) {
      this.initListeners();
    }
  }

  flip() {
    console.log('flip');
    const i = Math.floor(Math.random() * 2);
    this.coin.style.animation = '';
    if (i) {
      setTimeout(() => {
        this.coin.style.animation = 'flip-to-heads 2s forwards';
      }, 100);
    } else {
      setTimeout(() => {
        this.coin.style.animation = 'flip-to-tails 2s forwards';
      }, 100);
    }
  }

  initListeners() {
    this.flipButton.addEventListener('click', () => this.flip());
  }
}
