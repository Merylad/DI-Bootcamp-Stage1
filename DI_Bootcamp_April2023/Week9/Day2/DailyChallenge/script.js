// 1rst Daily Challenge

function makeAllCaps(array) {
    const isString = array.every(element => typeof element === 'string');

    const promise = new Promise ((resolve, reject)=>{
        if (isString){
            const newArray = array.map(element => element.toUpperCase());
            resolve (newArray);
        } else {
            reject ('This is not a string array');
        }
    })

   
    return promise
}



function sortWords(array){
    const promise = new Promise ((resolve, reject)=>{
        if (array.length >=4){
            resolve (array.sort());
        } else {
            reject ('this array is too short');
        }

    })

    return promise
}

function displayResults (array) {
    makeAllCaps(array)
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
}

displayResults([1, "pear", "banana"])

displayResults(["apple", "pear", "banana"])

displayResults(["apple", "pear", "banana", "melon", "kiwi"])




// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  function toJs() {
    const jsObj = JSON.parse(morse);
    const promise = new Promise((resolve, reject) => {
      if (Object.values(jsObj).length === 0) {
        reject("Error: Empty object");
      } else {
        resolve(jsObj);
      }
    });
    return promise;
  }
  function toMorse(morseJS) {
    const userInput = prompt("Provide a word or sentence: ");
    const userArray = userInput
      .replaceAll(' ', '')
      .toLowerCase()
      .split("");
    const promise2 = new Promise((resolve, reject) => {
      if (
        userArray.every((element) => Object.keys(morseJS).includes(element))
      ) {
        const morseArray = userArray.map((element) => morseJS[element]);
        resolve(morseArray);
      } else {
        reject("Error: Invalid characters");
      }
    });
    return promise2;
  }
  function joinWords(morseTranslation) {
      for (let element of morseTranslation) {
          const pElement = document.createElement('p');
          const pText = document.createTextNode(element);
          pElement.appendChild(pText);
          document.body.appendChild(pElement);
      }
  }
  toJs()
    .then((result) => toMorse(result))
    .then((result) => joinWords(result))
    .catch((error) => console.log(error));