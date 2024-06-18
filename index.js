
let pixelLength = 600;

const gridContainer = document.querySelector('#grid-container');
let btn = document.querySelector('.btn');


createGrid(16);

function createGrid(size) {
   
    gridContainer.innerHTML = ''; // Deletes previous grid
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gridContainer.appendChild(cell);
      cell.style.width = `${pixelLength / size}px`;
      cell.style.height = `${pixelLength / size}px`;
    }
    addHoverEffect();
  }

function addHoverEffect(){
    let gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; // randomize colors
    });
});
}

function generateGrid (){
    let userResponse = parseInt(prompt('Enter a number of squares per side', '0'));
    if (userResponse < 1 || userResponse > 100 || isNaN(userResponse)) {
        alert('Number must be 1 or lesser than 100');
        userResponse = 16;
    }
        createGrid(userResponse);
}


btn.addEventListener('click', generateGrid);

