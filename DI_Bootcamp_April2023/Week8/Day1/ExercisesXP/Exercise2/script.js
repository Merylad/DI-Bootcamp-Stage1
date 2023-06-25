// Retrieve the form and console.log it.

const myForm = document.forms[0];
console.log(myForm)

// Retrieve the inputs by their id and console.log them.

const firstNameById = document.querySelector('#fname');
const lastNameById = document.querySelector('#lname'); 

console.log (firstNameById, lastNameById);

// Retrieve the inputs by their name attribute and console.log them.

const firstNameByName = document.getElementsByName("fname")[0];
const lastNameByName = document.getElementsByName("lname")[0];

console.log (firstNameByName, lastNameByName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? BC OTHERWISE IT IS REFRESHING THE PAGE AND WE CAN T HAVE ACCESS TO THE DATA

// get the values of the input tags,
// make sure that they are not empty,

myForm.addEventListener("submit", getValuesForm);

function getValuesForm (event) {
    event.preventDefault(); 
    
    const valueFirstName = event.target.fname.value;
    const valueLastName = event.target.lname.value;

    if (valueFirstName === '' || valueLastName === ''){
        alert ('Insert a value');
    } else {
        console.log(valueFirstName, valueLastName);
        CreateLi (valueFirstName, valueLastName);
        }
}



// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

function CreateLi (valueFirstName, valueLastName){
    const ulSection = document.querySelector(".usersAnswer");
    const FNLi = document.createElement('li');
    const firstName = document.createTextNode(valueFirstName);
    FNLi.appendChild(firstName);
    ulSection.append(FNLi);

    const LNLi = document.createElement('li');
    const lastName = document.createTextNode(valueLastName);
    LNLi.appendChild(lastName);
    ulSection.append(LNLi);


}