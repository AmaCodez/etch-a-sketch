const gridContainer = document.querySelector('#grid-container');

// create a total of 256 divs
let gridSize = 16;
for(let i = 1; i < gridSize * gridSize; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
}

let gridCell = document.querySelectorAll('.cell');

gridCell.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'yellow';
    })
})

