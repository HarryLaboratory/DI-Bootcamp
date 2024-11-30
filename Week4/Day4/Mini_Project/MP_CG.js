const board = document.getElementById('game-board');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clear-button');
let selectedColor = 'black';  

function createGrid(rows, cols) {
  board.innerHTML = '';  
  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mousedown', handleMouseDown);
    square.addEventListener('mouseover', handleMouseOver);
    square.addEventListener('mouseup', handleMouseUp);
    board.appendChild(square);
  }
}

function createColorButtons() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white'];
  colors.forEach(color => {
    const button = document.createElement('div');
    button.classList.add('color-button');
    button.style.backgroundColor = color;
    button.addEventListener('click', () => {
      selectedColor = color;
    });
    colorPicker.appendChild(button);
  });
}

let isDrawing = false;
function handleMouseDown(e) {
  isDrawing = true;
  e.target.style.backgroundColor = selectedColor;
}

function handleMouseOver(e) {
  if (isDrawing) {
    e.target.style.backgroundColor = selectedColor;
  }
}

function handleMouseUp() {
  isDrawing = false;
}

function clearBoard() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';  
  });
}

createColorButtons();
createGrid(10, 10); 

clearButton.addEventListener('click', clearBoard);

