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
    cell.addEventListener('mouseover', (event) => {
        cell.style.backgroundColor = 'yellow';
    })
})

// the grid cell has to have an event listener
// using forEach, the item(placeholder) will have an add Event listener
// and the action will be a mouseover 
// then the that item will change the color of 
// that grid item. (The background)