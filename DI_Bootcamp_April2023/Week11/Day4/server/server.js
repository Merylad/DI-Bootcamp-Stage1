import express from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.text())



const sayHello = (req,res)=>{
    res.send('Hello from Express')
}

const receiveData = (req,res)=>{
    const data = req.body
    console.log(data)
    console.log('post request received')
    res.send(`I received your POST request. This is what you sent me : ${data}`)
}

app.get('/api/hello', sayHello)

app.post('/api/world', receiveData)


app.listen(3030, ()=>{
    console.log('running on port 3030')
})