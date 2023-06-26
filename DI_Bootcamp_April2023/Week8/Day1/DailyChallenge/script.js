const myForm = document.forms[0];
myForm.addEventListener("submit", getValuesForm);
let madLibsWords=[];

function getValuesForm(event) {
    event.preventDefault();
    const noun = event.target.noun.value;
    const adjective= event.target.adjective.value;
    const person= event.target.person.value;
    const verb= event.target.verb.value;
    const place= event.target.place.value;
    if (noun=='' || adjective=='' || person=='' || verb=='' || place ==''){
        alert ('You need to fill all the form')
    } else{
        madLibsWords = [noun, adjective, person, verb, place];
        }

    console.log(madLibsWords)
    WriteStory()
}

function WriteStory(){
    let sentence = `The ${madLibsWords[1]} ${madLibsWords[0]} wants to ${madLibsWords[3]} ${madLibsWords[2]} in ${madLibsWords[4]}`;
    
    const span = document.querySelector('#story');
    span.append(sentence);

}

// function getValuesForm(event){
//     event.preventDefault();
//     const objValues = {};
//     const allInputs = event.target.querySelectorAll('input');

//     for (let input of allInputs) {
//         objValues[input.id] = input.value;
//     }
//     showStory (objValues);
// }

// function showStory (objValues){
//     const span = document.querySelector('#story');
//     const text = `The ${objValues[adjective]} ${objValues[noun]} wants to ${objValues[verb]} ${objValues[person]} in ${objValues[place]}`;
//     span.append(text);
// }


// SOLUTION BY LISE
// const myform = document.forms.libform
// myform.addEventListener("submit", getValues);

// const shuffleBtn = document.querySelector("#shuffle-button")
// shuffleBtn.addEventListener("click", showStory)

// let objInfo = {};
// let randomNum = 0
// let othernum = 0;

// function getValues(event) {
//     event.preventDefault();
//     isFormSubmitted = true;
//     const allInputs = event.target.querySelectorAll("input");
//     for (let inp of allInputs) {
//         if (inp.value === "") {
//             alert(`fill the form - missing element in ${inp.id}`)
//             objInfo = {}
//             return;
//         }
//         objInfo[inp.id] = inp.value;
//     }
//     showStory()
// }


// function showStory () {
//     const valuesObj = Object.values(objInfo); //array of values
//     const allStories = [`first story ${valuesObj[0]}  ${valuesObj[1]}`,
//     `second story ${valuesObj[1]}  ${valuesObj[2]}`,  `third story ${valuesObj[1]}  ${valuesObj[0]}`]

//     do {
//         othernum = Math.floor(Math.random() * allStories.length);
//     } while(randomNum === othernum)
    
//     randomNum = othernum

//     const spanElement = document.getElementById("story");
//     spanElement.textContent = "";
//     const text = allStories[randomNum]
//     const textNode = document.createTextNode(text)
//     spanElement.appendChild(textNode)
// }
