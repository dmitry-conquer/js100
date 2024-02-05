const gridWidthInput = document.getElementById('grid-width');
const gridHeightInput = document.getElementById('grid-height');
const widthValue = document.getElementById('width-value');
const heightValue = document.getElementById('height-value');
const gridContainer = document.getElementById('grid-container');
const createGrid = document.getElementById('create-grid');
const resetGrid = document.getElementById('reset-grid');
const color = document.getElementById('current-color');
let isDrawing = false;
const erase = document.getElementById('erase');
let device = '';

if (gridContainer) {
  const events = {
    mouse: {
      move: 'mousemove',
      down: 'mousedown',
      up: 'mouseup',
    },
    touch: {
      down: 'touchstart',
      move: 'touchmove',
      up: 'touchend',
    },
  };

  const isTouchDevice = () => {
    try {
      document.createEvent('TouchEvent');
      device = 'touch';
      return true;
    } catch (e) {
      device = 'mouse';
      return false;
    }
  };
  isTouchDevice();

  const draw = id => {
    const el = document.getElementById(`${id}`);
    if (erase.checked && el.classList.contains('grid-item')) {
      el.style.backgroundColor = 'transparent';
    } else if (!erase.checked && el.classList.contains('grid-item')) {
      el.style.backgroundColor = color.value;
    }
  };

  const addMouseMoveEvent = item => {
    item.addEventListener(events[device].move, e => {
      const elementId = document.elementFromPoint(!isTouchDevice() ? e.clientX : e.touches[0].clientX, !isTouchDevice() ? e.clientY : e.touches[0].clientY).id;
      if (isDrawing && elementId) {
        draw(elementId);
      }
    });
  };

  createGrid.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    let count = 0;
    for (let i = 0; i < gridHeightInput.value; i++) {
      count++;
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < gridWidthInput.value; j++) {
        count++;
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.setAttribute('id', `itemid-${count}`);
        addMouseMoveEvent(item);
        row.appendChild(item);
      }
      gridContainer.appendChild(row);
    }
  });

  gridWidthInput.addEventListener('input', () => {
    widthValue.textContent = gridWidthInput.value;
  });
  resetGrid.addEventListener('click', () => {
    gridContainer.innerHTML = '';
  });
  gridHeightInput.addEventListener('input', () => {
    heightValue.textContent = gridHeightInput.value;
  });
  document.body.addEventListener(events[device].down, () => {
    isDrawing = true;
    document.body.style.overflow = 'hidden';
  });
  document.body.addEventListener(events[device].up, () => {
    isDrawing = false;
    document.body.style.overflow = 'visible';
  });
}
