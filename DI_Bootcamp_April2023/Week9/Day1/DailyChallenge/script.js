const myform = document.querySelector('#myform');
myform.addEventListener('submit', getdata);

function getdata(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const obj = Object.fromEntries(formData);
    console.log(obj);
    const jsonData = JSON.stringify(obj)
    DisplayValue(jsonData)
}

function DisplayValue(str){
    const div = document.querySelector('#container');
    const text = document.createTextNode(str);
    div.appendChild(text)
}

//DC2

function allTruthy(...data){
    const result = data.every(element=> element == true);
    console.log (result)
}

allTruthy(true, true, true) 

allTruthy(true, false, true) 

allTruthy(5, 4, 3, 2, 1, 0) 



