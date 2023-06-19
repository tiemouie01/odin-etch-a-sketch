function createGrid(numSquares = 16) {
    const container = document.querySelector('.container');
    for (let i = 1; i <= numSquares; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let i = 1; i <= numSquares; i++){
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('column');
            columnDiv.addEventListener('mouseover',() => columnDiv.classList.toggle('hover'));
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
}

function removeGrid() {
    const rows = document.querySelectorAll('.row');
    const columns = document.querySelectorAll('.column');

    rows.forEach(row => row.remove());
    columns.forEach(col => col.remove());
}

function getNumSqaures() {
    let incorrect = true;
    let numSquares;

    while(incorrect) {
        numSquares = prompt('Enter the number of squares per side for your new grid: ');

        if (numSquares < 0 || numSquares > 100) {
            alert('Only values between 0 and 100 are permitted for the new grid.');
        } else {
            incorrect = false;
        }
    }
    return numSquares;
}

function newGrid() {

    /* When the new grid button is clicked. The originial grid is removed.
       
       The number of squares per side is requested from the user. The 
       program includes added logic that stops the user from entering
       numbers-per-side values greater than 100.
       
       The new grid is then created.*/

    removeGrid();
    let numSquares = getNumSqaures();
    createGrid(numSquares);
    alert(`A ${numSquares}x${numSquares} grid has been created.`);
}

createGrid();

const button = document.querySelector('button');
button.addEventListener('click',newGrid)