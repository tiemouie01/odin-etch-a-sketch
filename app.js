function createGrid(numSquares = 16){
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

function removeGrid(){
    const rows = document.querySelectorAll('.row');
    const columns = document.querySelectorAll('.column');

    rows.forEach(row => row.remove());
    columns.forEach(col => col.remove());
}

function newGrid(){
    removeGrid();
    const numSquares = prompt('Enter the number of squares for your new grid: ');
    createGrid(numSquares);
}

createGrid();

const button = document.querySelector('button');
button.addEventListener('click',newGrid)