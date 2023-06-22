
// Retrieve the div and console.log it
const divOne = document.querySelector("#container");

// Change the name “Pete” to “Richard”.
const ulOne = document.getElementsByClassName("list")[0];
const lastChild = ulOne.lastElementChild;
lastChild.textContent = "Richard";


// Delete the second <li> of the second <ul>.
const ulTwo = document.getElementsByClassName("list")[1];
const secondChildTwo = ulTwo.children[1];
secondChildTwo.remove()


// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let list of document.querySelectorAll(".list")){
    list.firstElementChild.textContent = "Meryl";
}

// Add a class called student_list to both of the <ul>'s.
for (let list of document.querySelectorAll(".list")){
    list.classList.add('student_list');
}

// Add the classes university and attendance to the first <ul>.
ulOne.classList.add('university', 'attendance');

// Add a “light blue” background color and some padding to the <div>.
divOne.style.backgroundColor = "lightblue";
divOne.style.padding = "10px"

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
const dan = ulTwo.lastElementChild
dan.style.display = 'none'

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
lastChild.style.border="1px solid black"

// Change the font size of the whole body.
document.body.style.fontSize = "25px"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


if (divOne.style.backgroundColor = "lightblue"){
    const users = ulOne.innerText.trim();
    alert (`hello ${users}`);
}

