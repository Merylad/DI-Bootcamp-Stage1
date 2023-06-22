



const allPlanets = [
    {
        namePlanet : "Mercure",
        color : "yellow",
        moons : 1
    },
    {
        namePlanet : "Venus",
        color : "pink",
        moons : 3
    },
    {
        namePlanet : "Terre",
        color : "blue",
        moons : 1
    },
    {
        namePlanet : "Mars",
        color : "grey",
        moons : 4
    },
    {
        namePlanet : "Jupiter",
        color : "green",
        moons : 3
    },
    {
        namePlanet : "Saturne",
        color : "red",
        moons : 5
    },
    {
        namePlanet : "Neptune",
        color : "purple",
        moons : 7
    }
]

function addPlanet () {
    const section = document.querySelector(".listPlanets");

    for (let planet of allPlanets){
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        
        const text = document.createTextNode(planet["namePlanet"]);
        divPlanet.appendChild(text)

        divPlanet.style.backgroundColor = planet["color"];

       

        addMoon(planet, section);
    }
}

function addMoon (planet, section) {
        let counter = 10;

        for (let i =0; i< planet['moons']; i++){
            const divMoon = document.createElement('div');
            divMoon.classList.add('moon');
            divMoon.style.left = `${counter}rem`;
            counter += 5;
            section.appendChild(divMoon);
        }
   

}

addPlanet();



// OR WE COULD DO THIS WAY USING CSS FILE ADDING THE STYLE MANUALLY

// const allPlanets = ['Mercure', 'Venus', 'Terre', 'Mars', 'Jupiter', 'Saturne', 'Neptune'];

// function addPlanet (){
//     const section = document.querySelector('.listPlanets');

//     for (let planet of allPlanets){
//         const divPlanet = document.createElement('div');
//         divPlanet.classList.add('planet', planet.toLowerCase());
//         const text = document.createTextNode(planet);
//         divPlanet.appendChild(text);
//         section.appendChild(divPlanet);
//     }
// }

// addPlanet ()