const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const middleware1 = (req,res,next) => {
    console.log(`middleware executed`)
    next()
}
app.use(middleware1)

app.get('/',(req,res) => {
    res.send('Its working')
})

app.get('/test-data',(req,res) => {
    res.send(`Welcome to test-data`)
})


app.get('/test-data-1',(req,res) => {
    res.send(`Welcome to test-data-1`)
})

app.get('/test-data-2',(req,res) => {
    res.send(`Welcome to test-data-2`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


/**
 * Custom middleware : 
 *  - function
 *      - 3 arguments : req,res,next
 *      - next() : proceed to the next middleware/handler
 */