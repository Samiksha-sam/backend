const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const data = fs.readFileSync('index1.html', {encoding : "utf8"})
    console.log(data)
    res.end(data)
})

server.listen(3000)