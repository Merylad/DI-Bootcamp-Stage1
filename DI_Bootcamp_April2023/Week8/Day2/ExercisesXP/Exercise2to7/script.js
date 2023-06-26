// 🌟Exercise 2 : Ternary Operator

// function winBattle(){
//     return true;
// }

// Transform the winBattle() function to an arrow function.

const winBattle = () => true;

// Create a variable called experiencePoints

let experiencePoints;

// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.

winBattle() == true ? experiencePoints = 10 : experiencePoints = 1;

console.log(experiencePoints)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🌟 Exercise 3 : Is It A String ?
const isString = (something) => typeof something === 'string' ? true : false;

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 Exercise 4 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const Sum = (a, b) => a+b
console.log(Sum (10,20))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 Exercise 5 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function ChangeDevise(weight) {
//     let gramWeight = weight/1000;
//     return gramWeight
// }
// console.log(ChangeDevise(1000))

const ChangeDevise = (weight) => weight/1000;

console.log(ChangeDevise(1000));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🌟 Exercise 6 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (children, name, location, job) {
    const text = `You will be a ${job} in ${location}, and married to ${name} with ${children} kids.`;
    const div = document.querySelector('#FortuneTeller');
    const textNode = document.createTextNode(text);
    div.appendChild(textNode);
})(3, 'Brad', 'Jerusalem', 'Developper');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🌟 Exercise 7 : Welcome

// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function(username, picture){
    const navbar = document.querySelector('#navbar');
    const newdiv = document.createElement('h1');
    const text = document.createTextNode(`Hello ${username}!`);
    newdiv.appendChild(text);
    navbar.appendChild(newdiv);

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.style.width = '200px';
    img.style.height = '200px';
    navbar.appendChild(img);


})('Georges', 'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg');



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////