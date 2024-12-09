const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const path = require('path')
const ejs = require('ejs')

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
app.set('view engine', 'ejs')

app.get('/', displayLandingPage)

app.get('/users',getUsersData)

app.get('/signup', displaySignUpPage)

app.get('/login', displayLoginPage)

app.get('/dashboard',displayDasboardPage)

app.post('/users/signup',signUpUser)

app.post('/users/login', loginUser)


/**------------------ */
app.get('/users/samiksha', (req,res) => {
    res.render('user',{
        firstName: 'Samiksha',
        lastName: 'Ramteke'
    })
})

app.get('/users/pankaj', (req,res) => {
    res.sendFile(__dirname + '/src/views/user1.html')
})

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})