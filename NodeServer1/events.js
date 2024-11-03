/**
 * Event : user activity
 * 
 * Type of events:
 *  - 'data' : readabble stream receives data/ chunks of data 
 *  - 'end' : reasable stream has no more data to read
 *  - 'error' : Error occured
 */

// const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }

//     const USERS = [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//           },
//           {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//           },
//           {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//           },
//           {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//           },
//           {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//           },
//           {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//           }
//     ]
//     const DOGS = [
//         "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
//     "https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg",
//     "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_3098.jpg",
//     "https://images.dog.ceo/breeds/puggle/IMG_081858.jpg",
//     "https://images.dog.ceo/breeds/bulldog-french/n02108915_2279.jpg",
//     "https://images.dog.ceo/breeds/hound-ibizan/n02091244_1252.jpg",
//     "https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg",
//     "https://images.dog.ceo/breeds/leonberg/n02111129_1708.jpg",
//     "https://images.dog.ceo/breeds/dhole/n02115913_739.jpg",
//     "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_3113.jpg"
//     ]

//     if(req.method === 'GET' && req.url === '/users'){
//         res.end(JSON.stringify(USERS))
//     }else if(req.method === 'GET' && req.url === '/dogs'){
//         res.end(JSON.stringify(DOGS))
//     }else{
//         res.end('server is listening')
//     }
    
// })

// server.listen(3000)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico'){
        return res.end()
    }
    if(req.method === 'GET' && req.url==='/register'){
        const htmlData = fs.readFileSync('forms.html')
        res.end(htmlData)
    }else if(req.method === 'GET' && req.url === '/about'){
        res.end('ABOUT')
    }else if(req.method === 'POST' && req.url==='/process-data-test'){
        res.end('process-data-test')
        req.on('data', (chunk) => {
            console.log(chunk.toString())
        })
    
        
    }else if(req.method === 'PPOST' && req.url==='/process-data'){
        res.end('Form Submitted')
    }
    else{
        res.end('we are learning')
    }
})

server.listen(3000)