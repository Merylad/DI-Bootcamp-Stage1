// fetch("https://jsonplaceholder.typicode.com/users") //promise
// .then(result => {
//     if (result.ok){
//         return result.json()//promise //making the data accessible
//     } else {
//         throw new Error ('issues with the fetch')
//     }
// })
// .then((data) => {
//     displayRobot(data)
// })
// .catch(error => displayError(error))

// function displayRobot (robots) {
//     for (let robot of robots) {
//         console.log(`the robot is ${robot.name}, its email is ${robot.email}`);
//     } 
// }

// function displayError(error){
//     console.log ('An error has happened', error.message)
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest () {
//     fetch("https://jsonplaceholder.typicode.com/uers")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error ("issues with fetch");
//         }
//     })
//     .then(data => displayRobots(data))
//     .catch(error => displayError(error))
// }

// const divElement = document.querySelector("#results");

// function displayError (error) {
//     divElement.textContent = `ERROR TRY AGAIN`;
// }

// function displayRobots (robots) {
//     for (let robot of robots) {
//         const para = document.createElement("p");
//         const text = document.createTextNode(`the robot is ${robot.name}, its email is ${robot.email}`);
//         para.appendChild(text);
//         divElement.appendChild(para)
//     } 
// }



// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// and fetch this api 
// https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR" (modifié) 

function getGif(word){
    fetch (`https://api.giphy.com/v1/gifs/random?tag=${word[0]}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("issues with fetch");
        }
    })
    .then(data => displayGif(data))
    .catch(error => displayError(error))
}
function displayGif(data){
    const div = document.querySelector('#gif');
    const img = document.createElement('img');
    const url = data['data']['images']['original']['url'];
    console.log('url', url)
    img.setAttribute('src', url);
    div.appendChild(img)
}

function displayError (error) {
    const div = document.querySelector('#gif');
    div.textContent = `ERROR TRY AGAIN`;
}

function getWord(){
    fetch ('http://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error ("issues with fetch");
    }
    })
    .then (word =>{
        getGif(word)
    })
}