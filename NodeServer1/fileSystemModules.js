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
 * 
 * readFile() : read file asynchronously, return buffer data
 *      - path
 *      - callback : (error occured while reading file, data)
 * 
 * ----------------------------------------------------------------
 * 
 * writeFileSync() : Write a content to a new file or overwrite content in existing file
 *  - path
 *  - data
 * 
 * -----------------------------------------------------------------------
 * 
 * Update a file (Append data)
 * appendFileSync()
 *  - path
 *  - data  
 * 
 * ----------------------------------------------------------------------
 * 
 * delete a file
 * unlink() : 
 *  - path
 *  - callback
 */


/**Read a file */
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
   
//     const data = fs.readFile('text1.txt', (error, data) => {
//         if(error){
//             console.log('some error occured', error)
//         }
//         else{
//             console.log(data.toString())
//         }
//     })

//     res.end('File read succesfully')
// })

// server.listen(3000)
//-----------------------------------------------------------------------------------------------


//Write a file
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
   
//     const data = fs.writeFile('text1.txt','File is overriten successfully', (error) => {
//         if(error){
//             console.log('some error occured', error)
//         }
//         else{
//             console.log('data written successfully')
//         }
//     })

//     res.end('File is being written succesfully')
// })

// server.listen(3000)
//----------------------------------------------------------------------------------------------------

//Update a file
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
   
//     const data = fs.appendFile('text1.txt','File is overriten successfully', (error) => {
//         if(error){
//             console.log('some error occured', error)
//         }
//         else{
//             console.log('data written successfully')
//         }
//     })

//     res.end('File is being written succesfully')
// })

// server.listen(3000)
//-------------------------------------------------------------------------------------------

//delete a file : unlink()
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
   
//     const data = fs.unlink('text2.txt', (error) => {
//         if(error){
//             console.log('some error occured', error)
//         }
//         else{
//             console.log('file deleted successfully')
//         }
//     })

//     res.end('file is deleted')
// })

// server.listen(3000)
//-----------------------------------------------------------------------------

// write async write your name , append couse data
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
   
//     const data = fs.writeFile('text2.txt','Samiksha Ramteke', (error) => {
//         if(error){
//             console.log('some error occured', error)
//         }
//         else{
//             console.log('data written successfully')
//         }
//     })

//     const data2 = fs.appendFile('text2.txt','\n course : MERN Stack\n Start data : 10-Apr-2024',(error) => {
//         if(error){
//             console.log('some error occured', error)
//         }
//         else{
//             console.log('Data is over-write')
//         }
//     })

//     res.end('File is being edited succesfully')
// })

// server.listen(3000)