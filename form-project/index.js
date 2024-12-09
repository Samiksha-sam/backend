const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const path = require('path')
const ejs = require('ejs')
const expressLayouts  = require('express-ejs-layouts')
const { title } = require('process')

//  const {
//     displayLandingPage,
//     getUsersData,
//     displaySignUpPage,
//     displayLoginPage,
//     displayDasboardPage,
//     signUpUser,
//     loginUser
//  } = require('./src/controllers/user.js')

app.use(bodyParser.urlencoded())
app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout','layouts/main')



// app.get('/', displayLandingPage)

// app.get('/users',getUsersData)

// app.get('/signup', displaySignUpPage)

// app.get('/login', displayLoginPage)

// app.get('/dashboard',displayDasboardPage)

// app.post('/users/signup',signUpUser)

// app.post('/users/login', loginUser)


// /**------------------ */
// app.get('/users/samiksha', (req,res) => {
//     res.render('user',{
//         firstName: 'Samiksha',
//         lastName: 'Ramteke',
//         avtar : 'https://reqres.in/img/faces/3-image.jpg',
//         gmail : 'samiksha@gmail.com',
//         isPremium : true,
//         skills : ['HTML','CSS','JavaScript']
//     })
// })

// app.get('/users/alex', (req,res) => {
//     res.render('user',{
//         firstName: 'Alex',
//         lastName: 'Laytes',
//         avtar : 'https://reqres.in/img/faces/6-image.jpg',
//         gmail : 'alex@gmail.com',
//         isPremium : false,
//         skills : ['HTML','CSS','JavaScript','Java','React.js']
//     })
// })

// app.get('/users/john', (req,res) => {
//     res.render('user',{
//         firstName: 'John',
//         lastName: 'Smith',
//         avtar : 'https://reqres.in/img/faces/8-image.jpg',
//         gmail : 'john@gmail.com',
//         isPremium : true,
//         skills : ['HTML','CSS','JavaScript','Node.js','Vue.js']
//     })
// })

app.get('/',(req,res) => {
    res.render('home',{
        title: 'Home'
    })
})

app.get('/contact',(req,res) => {
    res.render('contact',{
        title: 'Contact'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About'
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})



/*
 --Express JS layouts:
  1. Create a custom layout file
  2. Set Layout using app.set method
  3. Create individual ejs files for respective content body
  4. apply the placeholder in main layout file to use the layout
   -- <%- body %>
*/