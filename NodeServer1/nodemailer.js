const http = require('http')
const dotenv = require('dotenv')
dotenv.config() //resposible for taking variables from .env to process file

const server = http.createServer((req,res) => {

    if(req.url == './favicon.ico'){
        return res.end()
    }
    console.log(process.env.EMAIL)
    console.log(process.env.NAME)
    res.end('Hi')
})

server.listen(3000)