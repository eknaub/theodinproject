/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */

// Default Values
const DEFAULTGRIDSIZE = 16;
const DEFAULTMODE = 'color';
const DEFAULTCOLOR = '#892be2';

// Current used values
let currentGridSize = DEFAULTGRIDSIZE;
let currentMode = DEFAULTMODE;
const currentColor = DEFAULTCOLOR;

window.onload = () => {
  updateGridSize(currentGridSize);
  updateMode('color');
  createGrid(currentGridSize);
};

const grid = document.getElementById('grid');
const slider = document.getElementById('myRange');
const output = document.getElementById('slidertext');
const clearBtn = document.getElementById('clear');
const colorBtn = document.getElementById('colormode');
const rainbowBtn = document.getElementById('rainbowmode');

slider.oninput = (e) => updateGridSize(e.target.value);
slider.onchange = () => reloadGrid();
clearBtn.addEventListener('click', () => reloadGrid());
colorBtn.onclick = () => updateMode('color');
rainbowBtn.onclick = () => updateMode('rainbow');

function updateMode(value) {
  currentMode = value;
  if (value === 'rainbow') {
    colorBtn.classList.remove('activemode');
    rainbowBtn.classList.add('activemode');
  } else if (value === 'color') {
    colorBtn.classList.add('activemode');
    rainbowBtn.classList.remove('activemode');
  }
}

function changeColor(e) {
  if (currentMode === 'rainbow') {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColor}`;
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  }
}

function updateGridSize(value) {
  currentGridSize = value;
  output.textContent = `Grid size: ${value} x ${value}`;
}

function reloadGrid() {
  clearGrid();
  createGrid(currentGridSize);
}

function clearGrid() {
  grid.innerHTML = '';
}

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i += 1) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('cell');
    gridElement.addEventListener('mouseover', changeColor);
    grid.appendChild(gridElement);
  }
}
