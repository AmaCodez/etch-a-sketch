const gridContainer = document.querySelector('#grid-container');

// create a total of 256 divs

function createInitialGrid (size){
for(let i = 0; i < size * size; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
}
addHoverEffect();
}

// Function to add hover effect
function addHoverEffect(){
    let gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'yellow';
    });
});
}



function generateGrid (){
    let userResponse = parseInt(prompt('Enter a number of squares per side', '0'));
    if (userResponse > 100 || userResponse < 10) {
        alert('Number must be greater than 10 lesser than 100');
        return;
    }
        gridContainer.innerHTML = '';
        
        let basis = 100 / userResponse + '%';

        for(let i = 0; i < userResponse * userResponse; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }

        addHoverEffect();
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', generateGrid);

