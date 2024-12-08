const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const path = require('path')
 const {
    displayLandingPage,
    getUsersData,
    displaySignUpPage,
    displayLoginPage,
    displayDasboardPage,
    signUpUser,
    loginUser
 } = require('./src/controllers/user.js')

app.use(bodyParser.urlencoded())

app.get('/', displayLandingPage)

app.get('/users',getUsersData)

app.get('/signup', displaySignUpPage)

app.get('/login', displayLoginPage)

app.get('/dashboard',displayDasboardPage)

app.post('/users/signup',signUpUser)

app.post('/users/login', loginUser)

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})