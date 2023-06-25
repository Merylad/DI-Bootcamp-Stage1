// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(helloWorld, 2000);

function helloWorld(){
    alert ('Hello World!');
}

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(addParagraph, 2000);

function addParagraph(){
    const container = document.querySelector('#container');
    const newParagraph = document.createElement('p');
    const text = document.createTextNode('Hello World!');
    newParagraph.appendChild(text);
    container.appendChild(newParagraph);
}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.


let idInterval;

function addP () {
    let counter = 0;

    idInterval = setInterval(function () {
        addParagraph();
        if (counter < 4) {
            counter ++
        } else {
            clearInterval(idInterval)
        }
    }, 2000)
}

addP()

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', stopInterval);

function stopInterval () {
        clearInterval(idInterval); 
}