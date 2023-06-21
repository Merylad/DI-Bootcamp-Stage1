const str1 = "hello";
const str2 = str1.slice(0,4);
console.log(console.log('hello'));
console.log(str1.slice(2))
const address = "TLV";
const country = "Israel";
const fulladdress = `I live in ${address} ${country}`;

const colors = ["blue", "red", "yellow"];
const firstColor = colors[0];
const lastColor = colors  [colors.length -1];

const num = 0
const first = colors[num]
console.log(first)   //blue

const names = ["John", ['Tom', 'Emma']];
const emmaName = names[1][1];

// const colors = ["blue", "red", "yellow"];
colors.push('black');
colors.pop();

// Array.splice(start, how many i want to delete, what to add)
colors.splice(1,0,"green");


const pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1]);
pets.push("horse");
pets.splice(3,1);
console.log(pets.length);
console.log(pets);



const age = 18;

if (age>=18) {
    console.log("Great");
} else{
    console.log("Not Great");
}

const myName = "John";

if (myName ==="John"){
    console.log("Hey John");
} else if (myName ==="Tom"){
    console.log("Hey Tom");
}

const color = "blue";

const num = 3;

if (colors === "blue" || num>5) {
    console.log("Great");
} else {
    console.log("Not Great");
}


// Conditionals
// if (condition) {
//     //stateement
// } else if (condition){

// } else if (condition){
    
// } else {

// }


// 1 == 1
// true

// 1 == "1" --> checking the value
// true

// 1 === "1" --> checking the value and type
// false


const age = 18;

if (age >= 18) {
    console.log("Great");
} else {
    console.log("Not Great");
}

const myName = "John";

if (myName === "John") {
    console.log("Hey John");
} else if (myName === "Tom") {
    console.log("Hey Tom");
}

const color = "blue"
const num = 3

// color to be blue OR num to be bigger that 5
if (color === "blue" || num > 5) {
    console.log("Great"); //here
} else {
    console.log("Not Great");
}

// color to be blue AND num to be bigger that 5
if (color === "blue" && num > 5) {
    console.log("Great");
} else {
    console.log("Not Great");  //here
}

