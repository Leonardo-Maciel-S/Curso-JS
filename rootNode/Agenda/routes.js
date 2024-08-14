const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contactController = require('./src/controllers/contactController')
const middlewareGlobal = require('./src/middleware/middlewareGlobal')

// Rotas da home
route.get('/', homeController.homePage)

// Rotas de login
route.get('/login', loginController.loginPage)
route.post('/login/register', loginController.loginRegister)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

// Rotas de cadastro
route.get('/contact', middlewareGlobal.loginRequired, contactController.homeContact)
route.get('/contact/:id', middlewareGlobal.loginRequired, contactController.editContact)
route.post('/contact/register', middlewareGlobal.loginRequired, contactController.register)
route.put('/contact/edit/', middlewareGlobal.loginRequired, contactController.edit)


module.exports = route;