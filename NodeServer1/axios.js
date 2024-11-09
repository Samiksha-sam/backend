/*debugging : is the process of finding bugs  in your code 
 * 
 * 
 * 
 * devDependencies : -D flag
 *  - require only for local instace not for production 
 *  - devDependencies will be added in package.json
 * 
 * ------------------------------------------------------------------
 * 
 * axios : It allows you to easily send HTTP requests to interact with APIs.
 *   - npm install axios
 *   - response has many things
 *   - Methods name related to HTTP methods. e.g : GET,POST
 *   - By default converts the data to JSON format
 *   - In the overall response, the JSON data is stored in .data property
 * 
 * http requests : 
 *  - GET : Retrieve data from a server.
 *  - POST : Send data to a server.
 *  - PUT : Update an existing resource on the server.
 *  - PATCH : Partially update an existing resource.
 *  - DELETE : Remove a resource from the server.
 * 
 * 
*/

const http = require('http')
const axios = require('axios')

const fetchUsers = async () => {
    try{
        const res = await axios.get('https://reqres.in/api/users')
        return res.data.data
    }
    catch(err){

    }
}

const server = http.createServer(async (req,res) => {
   
    const users = await fetchUsers()
    res.end(JSON.stringify(users))
})

server.listen(3000)