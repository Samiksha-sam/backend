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

const addUser = (newUser) => {
    USERS.push(newUser)
}

module.exports = { 
    addUser,
    getUsers,
    checkUserEmailExists,
    checkUserExists
 }