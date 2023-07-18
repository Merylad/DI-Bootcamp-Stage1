const express = require('express')
const app = express ()
app.use(express.json());
app.use("/form", express.static('public'));

app.get('/aboutMe/:hobby', (req,res)=>{
    const hobby = req.params.hobby
    const regex = /\d/;
    if( regex.test(hobby) == true){
        res.status(404).json('There is numbers')
    } else {
        res.send(hobby)
    }
    
})

app.get('/pic', (req,res)=>{
    const img = 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000'

    res.send(`<img src = ${img} alt = img/>`)
})


app.listen(3000, ()=>{
    console.log('on port 3000')
})


app.post('/formData', (req,res)=>{
    console.log(req.body)
    const {message, email} = req.body
    res.send(`${email} is sending you : ${message}`)
})