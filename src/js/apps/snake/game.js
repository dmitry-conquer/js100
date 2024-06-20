import { groundImage, foodImage } from './images.js';
import { CELL_SIZE } from './constants.js';
import snake from './snake-object.js';
import { foodPosition, updateFoodPosition } from './food.js';

const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

const snakeGame = {
  init() {
    this.score = 0;
    this.dir = null;
    this.addListeners();
    this.startGame();
  },
  startGame() {
    this.gameLoop = setInterval(() => {
      this.drawGame();
      this.moveSnake();
    }, 100);
  },

  changeDirection(e) {
    if (e.keyCode === 37 && this.dir !== 'right') {
      this.dir = 'left';
    } else if (e.keyCode === 38 && this.dir !== 'down') {
      this.dir = 'up';
    } else if (e.keyCode === 39 && this.dir !== 'left') {
      this.dir = 'right';
    } else if (e.keyCode === 40 && this.dir !== 'up') {
      this.dir = 'down';
    }
  },

  moveSnake() {
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (this.dir === 'left') snakeX -= CELL_SIZE;
    if (this.dir === 'right') snakeX += CELL_SIZE;
    if (this.dir === 'up') snakeY -= CELL_SIZE;
    if (this.dir === 'down') snakeY += CELL_SIZE;

    if (snakeX === 0 || snakeX === CELL_SIZE * 18) {
      this.gameOver();
    }
    if (snakeY === CELL_SIZE * 2 || snakeY === CELL_SIZE * 18) {
      this.gameOver();
    }
    if (snake.slice(1).find(obj => obj.x === snakeX && obj.y === snakeY)) {
      this.gameOver();
    }

    if (snakeX === foodPosition.x && snakeY === foodPosition.y) {
      this.score++;
      foodPosition.x = updateFoodPosition().x;
      foodPosition.y = updateFoodPosition().y;
    } else {
      snake.pop();
    }
    const newHead = {
      x: snakeX,
      y: snakeY,
    };
    snake.unshift(newHead);
  },

  gameOver() {
    clearInterval(this.gameLoop);
    console.log('Game over');
  },

  drawGame() {
    ctx.drawImage(groundImage, 0, 0);
    ctx.drawImage(foodImage, foodPosition.x, foodPosition.y);
    this.drawSnake();
    this.drawScore();
  },

  drawSnake() {
    snake.forEach(cell => {
      ctx.fillStyle = 'red';
      ctx.fillRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
    });
  },

  drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '30px IBM Plex Mono';
    ctx.fillText(this.score, CELL_SIZE * 2, CELL_SIZE * 1.5);
  },

  addListeners() {
    document.addEventListener('keydown', e => {
      this.changeDirection(e);
    });
  },
};

export default snakeGame;
