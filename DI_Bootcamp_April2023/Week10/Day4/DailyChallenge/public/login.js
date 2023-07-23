const btn = document.querySelector('#btnLogin');
btn.addEventListener('click', login);

async function login(event){
    event.preventDefault();
    const username = document.querySelector('#usernameLog').value
    const password = document.querySelector('#passwordLog').value
    userData = {username : username, password : password}
    
    const res = fetch ('http://localhost:3000/login', {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify(userData)
    })
}