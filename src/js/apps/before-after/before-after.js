export default class Beforeafter {
  constructor(id) {
    this.slider = document.getElementById(id);
    this.beforePart = this.slider.querySelector('.before');
    this.#initListeners();
    this.state = false;
  }

  #initListeners() {
    if (!this.#isMobile()) {
      this.slider.addEventListener('mousemove', e => {
        if (this.state) {
          const sliderWidth = this.slider.getBoundingClientRect().width;
          const procentage = ((e.clientX - this.slider.getBoundingClientRect().left) / sliderWidth) * 100;
          this.beforePart.style.width = `${procentage}%`;
        }
      });
    } else {
      this.slider.addEventListener('touchmove', e => {
        if (this.state) {
          const sliderWidth = this.slider.getBoundingClientRect().width;
          const touch = e.touches[0];
          const procentage = ((touch.clientX - this.slider.getBoundingClientRect().left) / sliderWidth) * 100;
          this.beforePart.style.width = `${procentage}%`;
        }
      });
    }

    if (this.#isMobile()) {
      this.slider.addEventListener('touchstart', () => {
        this.state = true;
      });

      this.slider.addEventListener('touchend', () => {
        this.state = false;
      });
    } else {
      this.slider.addEventListener('mousedown', () => {
        this.state = true;
      });

      this.slider.addEventListener('mouseup', () => {
        this.state = false;
      });
    }
  }

  #isMobile() {
    return window.innerWidth <= 768; // Перевірка, чи пристрій є мобільним (наприклад, ширина менша або дорівнює 768px)
  }
}
