const http = require('http')

const server =http.createServer((reqq,res)=>{
    res.end("Our First Server")
})

server.listen(3000)