const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.toggle('row');

    for (let i = 1; i <= 16; i++){
        const columnDiv = document.createElement('div');
        columnDiv.classList.toggle('column');
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}