const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url === 'favicon.ico'){
        return res.end()
    }
    res.end('Hi there')
})

server.listen(3000)