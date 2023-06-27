// 🌟 Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

colors.forEach((element, index)=>{
    const text = `${index +1}# is ${element}.`;
    console.log(text);
    if (element =='Violet'){
        console.log('Yeah!')
    };
});

console.log(colors);

// 🌟 Exercise 2 : Colors #2
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


colors.forEach((color, index)=>{
    let suffixe = (index +1) >=1 && (index+1)<=3 ? ordinal[index+1] : ordinal[0]
    let text = `${index +1}${suffixe} is ${color}.`
    console.log(text);

});

// Exercise 3 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// result = [bread, carrot, potato, chicken, apple, orange]

// ------2------
const country = "USA";
console.log([...country]);
// [U,S,A]

// ------Bonus------
let newArray = [...['a','b',]];
console.log(newArray);
//[a, b]

// 🌟 Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map((element)=> `Hello ${element.firstName}`);
console.log(welcomeStudents);

// Using the filter() method, create a new array, containing only the Full Stack Residents.

const stackStudents = users.filter ((element)=> element.role == 'Full Stack Resident');
console.log(stackStudents);

// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const LNStackStudents = users.filter ((element)=> element.role == 'Full Stack Resident')
                             .map((student) => student.lastName);
console.log(LNStackStudents);

// 🌟 Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const strEpic = epic.reduce((accumulator, currentValue)=>{
    return accumulator + ' '+ currentValue
} );
console.log(strEpic);

// 🌟 Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

// const successStudents = students.filter ((element)=> element.isPassed);
// console.log(successStudents);

const successStudents = students.filter ((element)=> element.isPassed)
                                .map((element)=> `Good job ${element.name}, you passed the course in ${element.course}`);

console.log(successStudents);
