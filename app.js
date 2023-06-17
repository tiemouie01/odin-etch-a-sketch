const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let i = 1; i <= 16; i++){
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        columnDiv.addEventListener('mouseover',() => columnDiv.classList.toggle('hover'));
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}