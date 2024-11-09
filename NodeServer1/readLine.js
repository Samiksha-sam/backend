/*
 * ReadLine
 * createInterface()
 * 
 */

const http = require('http')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// const server = http.createServer((req,res) => {
//     if(req.url=='./favicon.ico'){
//         return res.end()
//     }
//     r1.question('What is your name: ', (yourName) => {
//         console.log(`Your name is ${yourName}`)
//     })
//     res.end('Hi')
// })


const server = http.createServer((req,res) => {
    if(req.url=='./favicon.ico'){
        return res.end()
    }
    // r1.question('Please enter your name',(name) => {
    //     r1.question('Please enter your age',(age) => {
    //         if(age>=18){
    //             console.log(`${name} you are eligible to vote`)
    //         }
    //         else{
    //             console.log(`${name} are not eligible to vote`)
    //         }
    //     })
    // })

    res.end('hello sam')
    r1.close();
})

server.listen(3000)

