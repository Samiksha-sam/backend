/*

    - send mail using node.js through SMTP
    - SMTP : simple mail transfer protocol 
*/
//-----------------------------------------------------------------------------------------
// const http = require('http')
// const dotenv = require('dotenv')
// dotenv.config() //resposible for taking variables from .env to process file

// const server = http.createServer((req,res) => {

//     if(req.url == './favicon.ico'){
//         return res.end()
//     }
//     console.log(process.env.EMAIL)
//     console.log(process.env.NAME)
//     res.end('Hi')
// })

// server.listen(3000)
//---------------------------------------------------------------------------------------------

/**
 * https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
 * To use nodemailer you need to create a seperate passowd using following link
 * https://myaccount.google.com/apppasswords
 */

const http = require('http')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const server = http.createServer(async (req,res) => {
    if(req.url == '/favicon'){
        return res.end()
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth :{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })

    await transporter.sendMail({
        from: process.env.EMAIL,
        to:process.env.RECEIVER,
        subject:'testing mail',
        text:'This mail is send via nodemailer'
    })

    res.end('Hi')
})

server.listen(3000)