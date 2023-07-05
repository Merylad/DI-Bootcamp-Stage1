// 🌟 Exercise 1 : Giphy API

function RetrieveData (api){
    fetch(api)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("issues with fetch");
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

RetrieveData('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')


// 🌟 Exercise 2 : Giphy API

RetrieveData('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

//🌟 Exercise 3 : Async Function
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function getRequest(){
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/")
        if (response.ok){
            const objectStarWars = await response.json()
            console.log(objectStarWars.result)
        } else {
            throw new Error ('issues with fetch')
        }
    } catch (error){
        console.log(error)
    }
    
}

getRequest()

//🌟 Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // calling then resolved after 2 sec