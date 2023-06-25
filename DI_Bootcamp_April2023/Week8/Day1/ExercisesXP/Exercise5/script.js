const hello = document.body.firstElementChild

hello.addEventListener('click', displayBorder);
hello.addEventListener('mouseover', changeColor);
hello.addEventListener('dblclick', changePosition);
hello.addEventListener('mouseout', changeFontSize);

function displayBorder(){
    hello.style.border = '2px solid black';
    hello.style.width = '200px';
}

function changeColor(){
    hello.style.backgroundColor = 'lightblue';
    hello.style.color = 'purple'
}

function changePosition(){
    hello.classList.toggle('toMove');
}

function changeFontSize(){
    hello.style.fontSize = '60px';
}