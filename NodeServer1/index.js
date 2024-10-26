/**
 * fs (File System) : 
 * 
 * readFilesync() : Read the content of a file snchronously.
 * - path : path to the file along with filenam and extension
 * - options :
 *      - encoding: UTF8 encoding : converts the buffer data to user data
 * 
 * 
 * writeFileSync() : Write a content to a new file or overwrite content in existing file
 *  - path
 *  - data
 * 
 * 
 * 
 * Update a file (Append data)
 * appendFileSync()
 *  - path
 *  - data
 * 
 */
//--------------------------------------------------------------------------------------------
// const http = require('http')
// const fs = require('node:fs')

// const server = http.createServer((req,res) => {
//     const data = fs.readFileSync('text1.txt', {encoding: 'utf8'})
//     res.end(data)
// })

// server.listen(3000)

//---------------------------------------------------------------------------------------------

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     const data = fs.writeFileSync('text2.txt','JAVASCRIPT')
//     res.end('content added')
// })

// server.listen(3000)
//---------------------------------------------------------------------------------------------

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     console.log(req.url)
//     const data = fs.appendFileSync('text3.txt','JAVASCRIPT')
//     res.end('content added')
// })

// server.listen(3000)

//---------------------------------------------------------------------------------------------


//Delete a file

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
   
//     fs.unlinkSync('text2.txt')
//     res.end('content deleted')
// })

// server.listen(3000)

//------------------------------------------------------------------------------------------------


/**
 * Asynchronous methods:
 *  - readFile() : read file asynchronously, return buffer data
 *      - path
 *      - callback : (error occured while reading file, data)
 *      
 */

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
   
    const data = fs.readFile('text1.txt', (error, data) => {
        if(error){
            console.log('some error occured', error)
        }
        else{
            console.log(data.toString())
        }
    })

    res.end('File read succesfully')
})

server.listen(3000)