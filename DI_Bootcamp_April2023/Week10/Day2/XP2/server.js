const express = require ('express')
const cors = require ('cors')
const app = express ()
const PORT = 3000
app.use(cors());
app.use(express.static('XP2Ex3'));



app.get('/users', (req, res)=>{
    const user = {firstname: 'John',lastname: 'Doe'}
    console.log(user)
    res.send(JSON.stringify(user))
})

app.listen(PORT,()=>{
    console.log('On port 3000')
})

//exercise 2

app.get('/:id', (req,res)=>{
    const id = req.params
    res.send(id)
})

app.get('/', (req, res) => {
})