const USERS = []

const getUsers = () => {
    return USERS
}

const checkUserEmailExists = (email) => {
    return USERS.find(u => u.email === email) 
}

const checkUserExists = (email, password) => {
    return USERS.find(u => u.email === email && u.password === password) 
}

module.exports = { 
    getUsers,
    checkUserEmailExists,
    checkUserExists
 }