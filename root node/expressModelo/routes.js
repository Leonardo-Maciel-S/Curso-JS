const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const userController = require('./src/controllers/useController')

// rotas da home
route.get('/', middleware, homeController.homePage)
route.post('/', homeController.homePost)

// rotas de usuarios
route.get('/user', userController.userPage)



module.exports = route;