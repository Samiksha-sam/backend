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
        lastName: 'Ramteke',
        avtar : 'https://reqres.in/img/faces/3-image.jpg',
        gmail : 'samiksha@gmail.com',
        isPremium : true,
        skills : ['HTML','CSS','JavaScript']
    })
})

app.get('/users/alex', (req,res) => {
    res.render('user',{
        firstName: 'Alex',
        lastName: 'Laytes',
        avtar : 'https://reqres.in/img/faces/6-image.jpg',
        gmail : 'alex@gmail.com',
        isPremium : false,
        skills : ['HTML','CSS','JavaScript','Java','React.js']
    })
})

app.get('/users/john', (req,res) => {
    res.render('user',{
        firstName: 'John',
        lastName: 'Smith',
        avtar : 'https://reqres.in/img/faces/8-image.jpg',
        gmail : 'john@gmail.com',
        isPremium : true,
        skills : ['HTML','CSS','JavaScript','Node.js','Vue.js']
    })
})


app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})