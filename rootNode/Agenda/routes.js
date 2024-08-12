const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')

// rotas da home
route.get('/', homeController.homePage)

// Rotas de login
route.get('/login', loginController.loginPage)
route.post('/login/register', loginController.loginRegister)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

module.exports = route;