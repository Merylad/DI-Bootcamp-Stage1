const btn = document.querySelector('#btn');
btn.addEventListener('click', postData);
const message = document.querySelector('#message');
const email = document.querySelector('#email')

async function postData(event){
    event.preventDefault()
    const msgValue = message.value;
    const emailValue = email.value;
    const totalmsg = {message : msgValue, email : emailValue}

    try{
    const res = await fetch('http://localhost:3000/formData/', {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify(totalmsg)
    });
    const data = await res.text()
    displayData(data)
    console.log(data)
    }catch(e){
        console.log(e)
    }


}

function displayData(data){
    const div = document.querySelector('#msgcontainer')
    div.innerText = data
}