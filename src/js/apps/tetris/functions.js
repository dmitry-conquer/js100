const getRandomElement = array => {
  const radnomIndex = Math.floor(Math.random() * array.length);
  return array[radnomIndex];
};

const convertPositionsToIndex = (row, column) => {
  const index = 10 * row + column;
  return index;
};

const rotateMatrix = matrix => {
  const rotatedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    rotatedMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      rotatedMatrix[i][j] = matrix[matrix.length - j - 1][i];
    }
  }
  return rotatedMatrix;
};

export { getRandomElement, convertPositionsToIndex, rotateMatrix };
