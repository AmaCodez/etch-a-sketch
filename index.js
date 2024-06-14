const gridContainer = document.querySelector('#grid-container');

// create a total of 256 divs
let gridSize = 16;
for(let i = 1; i < gridSize * gridSize; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
}


// the grid has to have an event listener
// using forEach, the item(placeholder) will have an add Event listener
// and the action will be a mouseover or a left click
// then the that item will draw? (produce a color) or change the color of 
// that grid item