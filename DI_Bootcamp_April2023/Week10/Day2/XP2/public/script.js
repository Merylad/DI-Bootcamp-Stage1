async function getData () {
    const res = await fetch ('http://localhost:3000/users')
    const data = await res.json()
    
    const div = document.querySelector('#container')
    const para = document.createElement('p')
    para.innerText = `Welcome ${data.firstname} ${data.lastname}`
    div.appendChild(para)
}
getData()

async function getDataWithID () {
    const res = await fetch ('http://localhost:3000/1234')
    const data = await res.json()
    console.log(data)
    
    const div = document.querySelector('#container2')
    const para = document.createElement('p')
    para.innerText = `id : ${data.id}`
    div.appendChild(para)
}
getDataWithID ()