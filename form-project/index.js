const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const path = require('path')
const { 
    getUsers,
    checkUserEmailExists,
    checkUserExists
 } = require('./src/models/user.js')

app.use(bodyParser.urlencoded())

const USERS = []

app.get('/signup', (req,res) => {   
    res.sendFile(path.join(__dirname, 'src/views/signup.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/login.html'))
})

app.post('/users/signup',(req,res) => {
    const { name, email, password} = req.body
    const user = checkUserEmailExists(email)
    if(user){
        return res.send('A user with this email already exists.')
    }
    const newUser = {name,email,password}
    USERS.push(newUser)
    res.redirect('/dashboard')
})

app.post('/users/login',(req,res) => {
    const { email, password} = req.body
    const user = checkUserExists(email,password)
    if(user){
        res.redirect('/dashboard')
    }
    res.send(`You don't have account please signup`)
})

app.get('/dashboard',(req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/dashboard.html'))
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/landing-page.html'))
})

app.get('/users',(req,res) => {
    res.json(getUsers())
})

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})