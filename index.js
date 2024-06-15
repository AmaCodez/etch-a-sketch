
let pixelLength = 600;

const gridContainer = document.querySelector('#grid-container');
let btn = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', () => generateGrid(16));

// function createInitialGrid (size){
//     size = 16;
// for(let i = 0; i < size * size; i++){
//     const cell = document.createElement('div');
//     cell.classList.add('cell');
//     gridContainer.appendChild(cell);
// }
// addHoverEffect();
// }

function addHoverEffect(){
    let gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; // randomize colors
    });
});
}

function generateGrid (){
    let userResponse = parseInt(prompt('Enter a number of squares per side', '16'));
    if (userResponse < 1 || userResponse > 100 || isNaN(userResponse)) {
        alert('Number must be 1 or lesser than 100');
        return;
    }
        gridContainer.innerHTML = ''; // Deletes previous grid
        
        for(let i = 0; i < userResponse * userResponse; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
            cell.style.width = `${pixelLength / userResponse}px`;
            cell.style.height = `${pixelLength / userResponse}px`;
        }

        addHoverEffect();
}


btn.addEventListener('click', generateGrid);

