// const http = require('http')

// const server = http.createServer((req,res) => {

//     if(req.url === 'favicon.ico'){
//         return res.end()
//     }

//     if(req.method === 'GET' && req.url === '/users'){
//         res.end("This is route for reading users")
//     }else if(req.method === 'POST' && req.url === '/users'){
//         res.end("This is route for creating users")
//     }else{
//         res.end('Welcome to our server')
//     }
// })

// server.listen(3000)


//-------------------express server boiler plate---------------------------

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.get('/users',(req,res) => {
    res.send("This is a route for reading users")
})

app.post('/users',(req,res) => {
    res.send(`This is a request for creating users`)
})

app.get('/students',(req,res) => {
    const STUDENTS = [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                  },
                  {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                  },
                  {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                  },
                  {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg"
                  },
                  {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg"
                  },
                  {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://reqres.in/img/faces/12-image.jpg"
                  }
            ]

        res.set('Content-Type','application/json')
        res.send(STUDENTS)
})

app.get('./students-2',(req,res) => {
    const STUDENTS = [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                  },
                  {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                  },
                  {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                  },
                  {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg"
                  },
                  {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg"
                  },
                  {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://reqres.in/img/faces/12-image.jpg"
                  }
            ]

            res.json(STUDENTS)
})

app.get('/students-3',(req,res) => {
    res.status(204).json()
})

app.get('/dogs-content',(req,res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/download-dummy-content',(req,res) => {
    res.download(__dirname + '/files/dummy.pdf')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

