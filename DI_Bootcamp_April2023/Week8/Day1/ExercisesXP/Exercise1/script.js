// Using a DOM property, retrieve the h1 and console.log it.

const article = document.body.firstElementChild;

const h1 = article.firstElementChild;

console.log (h1);

// Using DOM methods, remove the last paragraph in the <article> tag.

const lastParagraph = article.lastElementChild;

lastParagraph.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = article.children[1];

h2.addEventListener("click", changeColor);

function changeColor(){
    h2.style.backgroundColor = "red";
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3= article.children[2];

h3.addEventListener("click", Hide);

function Hide (){
    h3.style.display = "none";
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

btnBold = document.querySelector('#btn_bold');

btnBold.addEventListener("click", Bold);

function Bold () {
    article.style.fontWeight = 'bold';
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener('mouseover', changeFontSize)

function changeFontSize(){
    let num = Math.floor(Math.random() * 101);
    article.style.fontSize = `${num}px`;
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

h2.addEventListener('mouseover', Fade);

function Fade(){
    h2.classList.toggle('fade-out');
}