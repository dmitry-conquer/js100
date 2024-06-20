import {
  PLAYFIELD_COLUMNS, //
  PLAYFIELD_ROWS,
  TETRAMINO_NAMES,
  TETRAMINOES,
} from './constants.js';
import { getRandomElement, convertPositionsToIndex, rotateMatrix } from './functions.js';

export default class Tetris {
  constructor() {
    this.cells = document.querySelectorAll('#tetris>div');
    this.playfield = [];
  }

  init() {
    this.generatePlayField();
    this.generateTetramino();
    this.drawTetramino();
    this.initListeners();
  }

  generatePlayField() {
    this.playfield = new Array(PLAYFIELD_ROWS).fill().map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  }

  generateTetramino() {
    const name = getRandomElement(TETRAMINO_NAMES);
    const matrix = TETRAMINOES[name];

    const column = PLAYFIELD_COLUMNS / 2;
    const row = 3;

    this.tetramino = {
      name, //
      matrix,
      column,
      row,
    };
  }

  drawTetramino() {
    this.cells.forEach(cell => cell.removeAttribute('class'));
    const tetrominoMatrixSize = this.tetramino.matrix.length;
    for (let row = 0; row < tetrominoMatrixSize; row++) {
      for (let column = 0; column < tetrominoMatrixSize; column++) {
        if (!this.tetramino.matrix[row][column]) {
          continue;
        }
        if (this.tetramino.row + row < 0) {
          continue;
        }
        const cellIndex = convertPositionsToIndex(this.tetramino.row + row, this.tetramino.column + column);
        this.cells[cellIndex].classList.add(this.tetramino.name);
      }
    }
  }

  onKeydown(e) {
    switch (e.key) {
      case 'ArrowDown':
        this.tetramino.row += 1;
        this.drawTetramino();
        break;

      case 'ArrowLeft':
        this.tetramino.column -= 1;
        this.drawTetramino();
        break;

      case 'ArrowRight':
        this.tetramino.column += 1;
        this.drawTetramino();
        break;

      case ' ':
        this.tetramino.matrix = rotateMatrix(this.tetramino.matrix);
        this.drawTetramino();
        break;

      default:
        break;
    }
  }

  initListeners() {
    document.addEventListener('keydown', e => {
      this.onKeydown(e);
    });
  }
}
