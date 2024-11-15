const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded())

const USERS = []

app.get('/signup', (req,res) => {
    res.sendFile('C://Users//samiksha//Documents//GitHub//backend//form-project//views//signup.html')
})

app.get('/login', (req,res) => {
    res.sendFile('C://Users//samiksha//Documents//GitHub//backend//form-project//views//login.html')
})

app.post('/users/signup',(req,res) => {
    const { name, email, password} = req.body
    const newUser = {name,email,password}
    USERS.push(newUser)
    res.send(`Welcome to socialMedia app ${name}`)
})

app.post('/users/login',(req,res) => {
    const { email, password} = req.body
    const user = USERS.find(user => user.email === email && user.password === password)
    if(user){
        res.send(`Welcome to socialMedia app bro`)
    }
    res.send(`You don't have account please signup`)
})

app.get('/',(req,res) => {
    res.json(USERS)
})

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})