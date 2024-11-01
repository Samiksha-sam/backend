/*
path module:
    - helps to work with path
Methods: 
    - extname() : gives the extension, takes file name in arguments
    - parse() : returns an object for that path
    - join(): concatenates the paths given
    - resolve(): resolves the given path, gives absolute path
    


types of path:
    - relative path: path in relation to current file ex: ./modules/index.java 
    - absolute path: complete path ex: C:\users\samiksha\code\modules\index.java

Reserved keywords for path
    - __dirname : gives current working directory
    - __filename : gives path along with file name

*/

const http = require('http')
const path = require('path')

const server = http.createServer((req,res) => {
    if(req.url=='/favicon.ico'){
        return res.end()
    }
    // console.log(__dirname)
    // console.log(__filename)
    // console.log(path.extname(__filename))
    // console.log(path.parse(__filename).name)

    res.end('server is running')
})

server.listen(3000)

