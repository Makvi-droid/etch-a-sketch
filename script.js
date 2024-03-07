let sketchBoard = document.querySelector('.sketchBoard');
sketchBoard.style.display = 'grid';

function createSize(size) {
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divs = size * size;

    for (let i = 0; i < divs; i++) {
        let divGrid = document.createElement('div');
        divGrid.addEventListener('mouseover', function(){
            divGrid.style.backgroundColor = 'black';
        });
        sketchBoard.insertAdjacentElement('beforeend', divGrid);
    }
}

function getSize() {
    let input = document.querySelector('#size');
    let message = document.querySelector('#message');

    if (input.value === "") {
        message.textContent = 'Please enter a grid size';
    } else if (input.value > 100 || input.value < 1) {
        message.textContent = 'Only choose a number between 1-100';
    } else {
        createSize(input.value);
        input.value = ""; // Clear the input field
        message.textContent = ""; // Clear any previous messages
    }
}


document.querySelector('#size').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getSize();
    }
});

let blackBtn = document.querySelector('#blackBtn');
let randomBtn = document.querySelector('#randomBtn');
let resetBtn = document.querySelector('#resetBtn');
let color = 'black';

blackBtn.addEventListener('click', function(){
    divGrid.style.backgroundColor = 'black';
});

randomBtn.addEventListener('click', function(){
    divGrid.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
});

