// Part I - Review About Arrays

const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);

people[2] = "Jason"

people.push('Meryl');

console.log(people);

people.indexOf("Mary");

people.slice();

let people2 = people.slice(1,3);

let fooIndex = people.indexOf('Foo')
console.log(fooIndex);

const last = people[people.length - 1];

console.log(last);

for (let index =0; index<people.length; index ++){
    console.log(people[index]);

    if (people[index] ==="Devon"){
        break;
    }
}


// 🌟 Exercise 2 : Your Favorite Colors

let colors = ["blue", "pink", "yellow", "purple"];

for (let index =0; index < colors.length; index ++){
    let sentence = `My #${index+1} choice is ${colors[index]}`;
    console.log(sentence);
}


// 🌟 Exercise 3 : Repeat The Question

let number;

do {
  number = parseFloat(prompt("Please enter a number:"));

  if (number < 10) {
    console.log("Number is smaller than 10. Please enter a new number.");
  }

} while (number < 10);

// 🌟 Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);

console.log(building.numberOfAptByFloor.firstFloor);

console.log(building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1]);

console.log(building.numberOfRoomsAndRent.dan[0]);

let SarahDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

if (SarahDavidRent > building.numberOfRoomsAndRent.dan[1]  ) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]);

// 🌟 Exercise 5 : Family

const family = {
  father: "Michael",
  mother: "Meryl",
  daughter: "Naomie",
  son: "Eliam"  
};


console.log("Keys of the family object:");
for (let key in family) {
  console.log(key);
}


console.log("Values of the family object:");
for (let key in family) {
  console.log(family[key]);
}


// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let sentence = ""

for (let key in details){
    sentence += `${key} ${details[key]} `
}

console.log(sentence)

// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const initials = names.map(name => name[0]).sort().join('');

console.log(initials);