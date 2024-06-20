import { CELL_SIZE, X_CELLS, Y_CELLS } from './constants.js';

const foodPosition = {
  x: Math.floor(Math.random() * X_CELLS + 1) * CELL_SIZE,
  y: Math.floor(Math.random() * Y_CELLS + 3) * CELL_SIZE,
};

const updateFoodPosition = () => {
  const FOOD_POSITION = {
    x: Math.floor(Math.random() * X_CELLS + 1) * CELL_SIZE,
    y: Math.floor(Math.random() * Y_CELLS + 3) * CELL_SIZE,
  };
  return FOOD_POSITION;
};

export { foodPosition, updateFoodPosition };
