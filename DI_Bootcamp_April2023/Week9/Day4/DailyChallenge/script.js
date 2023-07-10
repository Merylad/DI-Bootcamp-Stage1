function getCurrencies(){
    fetch('https://v6.exchangerate-api.com/v6/e479bfb30b0273fd98d5adaf/codes')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("issues with fetch");
        }
    })
    .then(data => addingCurrencies(data))
    .catch(error => console.log(error))
}

getCurrencies()

function addingCurrencies(data){
    const dropdown1 = document.querySelector('#dropdown1');
    const dropdown2 = document.querySelector('#dropdown2');
  
    data.supported_codes.forEach(currency => {
      const option1 = document.createElement('option');
      option1.value = currency[0];
      option1.text = currency[1];
      dropdown1.appendChild(option1);
  
      const option2 = document.createElement('option');
      option2.value = currency[0];
      option2.text = currency[1];
      dropdown2.appendChild(option2);
    });
    }

const myform = document.querySelector('#myform');
myform.addEventListener('submit', exchangeCurrency);

function exchangeCurrency (event){
    event.preventDefault();

    const dropdown1 = document.querySelector('#dropdown1');
    const dropdown2 = document.querySelector('#dropdown2');

    const fromMoney = dropdown1.value;
    const toMoney = dropdown2.value;

    fetch(`https://v6.exchangerate-api.com/v6/e479bfb30b0273fd98d5adaf/pair/${fromMoney}/${toMoney}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("issues with fetch");
        }
    })
    .then(data => getValue(data))
    .catch(error => console.log(error))
}

function getValue(data){
    const rate = data.conversion_rate;
    const userAmount = document.querySelector('#userAmount').value;
    const divResults = document.querySelector('#results');
    const exchangeResults = userAmount*rate;
    const dropdown2 = document.querySelector('#dropdown2');
    const toMoney = dropdown2.value;
    divResults.textContent = `${exchangeResults} ${toMoney}`


    
}


// basically every dropdown in the html must have on 'option' that displays different options. In our case in order to display the options we use on object that we have fetched .
// The options in the HTML must be like this :
// <option value = " ''> text </option>


// In the first object we fetched when we console log it we see that this is an object with multiples arrays like that ['EUR', 'EURO]
// So in order to append it you need to create a new option by setting a new value wich is
// option.value = firstObjectFetched[0]   in my example it is 'EUR'
// and option.text =  firstObjectFetched[0]   in my example it is 'EURO'


// So later when you want to get the value the user chose you just need to retrieve your dropdown in the DOM, for ex const dropdown = document.queryselector'#dropdown' you just type 
// dropdown.value to retrieve this 'EUR' 