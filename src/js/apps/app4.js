export default class {
  constructor(appId) {
    this.app = document.getElementById(appId);
    this.boxes = document.querySelectorAll('.box');
    this.playerTurn = 'x';
  }

  init() {
    if (this.app) {
      this.initListeners();
    }
  }

  play(target) {
    const currentBox = target;
    currentBox.textContent = this.playerTurn;
    currentBox.dataset.player = this.playerTurn;
    if (this.checkResult(this.playerTurn)) {
      console.log(`Переможець - ${this.playerTurn}`);
    }
    this.updateStep();
  }

  checkResult(playerTurn) {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winCombinations.some(combination =>
      combination.every(i => {
        return this.boxes[i].dataset.player === playerTurn;
      }),
    );
  }

  updateStep() {
    this.playerTurn = this.playerTurn === 'x' ? '0' : 'x';
  }

  initListeners() {
    this.boxes.forEach(box => {
      box.addEventListener('click', e => {
        this.play(e.currentTarget);
      });
    });
  }
}
