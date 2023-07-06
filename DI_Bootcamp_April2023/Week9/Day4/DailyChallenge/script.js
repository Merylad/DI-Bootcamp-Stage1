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