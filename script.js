let sketchBoard = document.querySelector('.sketchBoard');
sketchBoard.style.display = 'grid';

createSize(16);

function createSize(size){
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divs = size * size;

    for(let i = 0; i < divs; i++){
        let divGrid = document.createElement('div');
        sketchBoard.insertAdjacentElement('beforeend', divGrid);
    }
}

function getSize(){
    let input = document.querySelector('.size').value;

}


