const btn = document.querySelector('#btnRegister');
btn.addEventListener('click', register);

async function register (event){
    event.preventDefault()

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('usernameReg').value;
    const password = document.getElementById('passwordReg').value;

    const userData = {firstName, lastName, email, username, password}
    console.log(userData)

    const res = fetch ('http://localhost:3000/register', {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify(userData)
    })

}