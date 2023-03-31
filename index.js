const express = require('express')
const app = express()

app.get('/login', async (req, res) => {
    console.log(req.body)
    let users = {
        error : "user not found"
    }
    if(req.body.username === "idea" && req.body.password === "password"){
        users = {
            id : 1,
            name: 'John Doe',
            age: 30
        }
    }
    
    res.json(users)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})