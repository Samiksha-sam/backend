const http = require('http')

const server = http.createServer((req,res) => {
    res.end('Backend :) !')
})

server.listen(3000)