const express = require ('express')
const cors = require('cors')
const fs = require('fs');
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(express.static('public'))



// app.post('/login', (req,res)=>{
//     const userData = JSON.stringify(req.body, null, 2);
    // fs.readFile('./userdata.json', 'utf-8', (error, data)=>{
    //     if (error){
    //         console.log(error)
    //     } else {
    //         let jsonData = JSON.parse(userData)

//         }
//     })
// })

app.post('/register', (req,res)=>{
    const newUser = req.body;
    fs.readFile('userdata.json', 'utf-8', (error, data)=>{
        if (error){
            console.log(error)
        } else {
            const users = JSON.parse(data)
            console.log('users', users)
            users.push(newUser)
            const updateJsonData = JSON.stringify(users, null, 2)
            console.log('updateJsonData',updateJsonData)
            fs.writeFile('userdata.json',updateJsonData, 'utf-8', (error)=>{
                if (error){
                    console.log(error)
                    res.status(400).json({error: 'Error'})
                } else {
                    res.status(200).json({message: 'Hello your account is now created!'})
                }
            } )

        }
    }
    )
})




app.listen(PORT, ()=>{
    console.log(`Run on port ${PORT}`)
})
