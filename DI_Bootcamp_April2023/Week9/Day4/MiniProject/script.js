// # HTML

// - h1
// - div
// - button

// # JS

// - function find a random number, 1 to 83

//   - make sure that we don't have the same number
//   - currentnumber
//   - while loop

// - button even listener

//   - click

//     - fetch "https://www.swapi.tech/api/people/${currentnumber}"
//     - height, name, birth_year, gender
//     - fetch for homeworld
//     - append on the page
//     - make the loading msg appear when you start the fetch,
//       from font awesome, then disappear when the data comes back (display: block and display: none)

//     - if message is not found --> throw an error --> in
//       the catch we display the message


let currentNumber = 0;

function getRandomNumber() {
  let randomNumber;
  
  do {
    randomNumber = Math.floor(Math.random() * 83) + 1;
  } while (randomNumber === currentNumber);

  currentNumber = randomNumber;

  return randomNumber;
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', fetchData)

async function fetchData(){
  const num = getRandomNumber();
  try { 
    const response = await fetch(`https://www.swapi.tech/api/people/${num}`);
    if (response.ok) {
      const dataStarWars = await response.json();
     displayData(dataStarWars)
    } else {
      throw new Error("PROBLEM")
    }
  } catch(error){
    displayError()
  }


}

async function displayData(data) {
  const div = document.querySelector('#displayData');
  div.innerText=''
  const loadingElement = document.createElement('div');
  loadingElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
  div.appendChild(loadingElement);
  const name = data.result.properties.name;
  const height = data.result.properties.height;
  const gender = data.result.properties.gender;
  const birth = data.result.properties.birth_year;
  const homeworld = await getHomeWorld(data.result.properties.homeworld); 
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  p1.innerText = name;
  p2.innerText = `Height: ${height}`;
  p3.innerText = `Gender: ${gender}`;
  p4.innerText = `Birth Year: ${birth}`;
  p5.innerText = `Home World: ${homeworld}`;

  div.removeChild(loadingElement);
  div.append(p1, p2, p3, p4, p5);
}

async function getHomeWorld(data) {
  try {
    const response = await fetch(data);
    if (response.ok) {
      const planet = await response.json();
      return planet.result.properties.name;
    } else {
      throw new Error('PROBLEM');
    }
  } catch (error) {
    console.log(error);
  }
}

function displayError(){
  div = document.querySelector('#displayData')
  div.innerText=''
  div.innerText = 'Oh no! That person is not available'
}



