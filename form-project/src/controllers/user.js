const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path  = require('path')
const { addUser, getUsers, checkUserEmailExists, checkUserExists } = require('../models/user.js')

app.use(bodyParser.urlencoded())

const displayLandingPage = (req,res) => {
    res.sendFile(path.resolve(__dirname, '../views/landing-page.html'))
}

const getUsersData = (req,res) => {
    res.json(getUsers())
}

const displaySignUpPage = (req,res) => {
    res.sendFile(path.join(__dirname, '../views/signup.html'))
}

const displayLoginPage = (req,res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'))
}

const displayDasboardPage = (req,res) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'))
}

const signUpUser = (req,res) => {
    const { name, email, password} = req.body
    const user = checkUserEmailExists(email)
    if(user){
        return res.send('A user with this email already exists.')
    }
    const newUser = {name,email,password}
    addUser(newUser)
    res.redirect('/dashboard')
}

const loginUser = (req,res) => {
    const { email, password} = req.body
    const user = checkUserExists(email,password)
    if(user){
        return res.redirect('/dashboard')
    }
    res.send(`You don't have account please signup`)
}

module.exports = {
    displayLandingPage,
    getUsersData,
    displaySignUpPage,
    displayLoginPage,
    displayDasboardPage,
    signUpUser,
    loginUser
}