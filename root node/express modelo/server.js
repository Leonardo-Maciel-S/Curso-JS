require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path')
const middlewareGlobal = require('./src/middleware/middlewareGlobal')
const routes = require('./routes');
const mongoose = require('mongoose') 

mongoose.connect(process.env.CONNECTSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const helmet = require('helmet')
const csrf = require('csurf');
const exp = require('constants');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: "5456465adadada654654654adad",
    store: MongoStore.create({mongoUrl: process.env.CONNECTSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())
app.use(helmet())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf())
app.use(middlewareGlobal.injectCsrf)
app.use(middlewareGlobal.checkCsrf)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000...')
    });
})


