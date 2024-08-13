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

const helmet = require('helmet');
const csrf = require('csurf');
const exp = require('constants');

app.use(express.urlencoded({ extended: true })) // converter o body para ficar acessivel
app.use(express.json()) // transoformar as requisições em JSON
app.use(express.static(path.resolve(__dirname, 'public'))) // acessar a pasta public

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

app.use(sessionOptions);
app.use(flash());
app.use(helmet());

app.set('views', path.resolve(__dirname, 'src', 'views')) // identificar onde fica as paginas ejs
app.set('view engine', 'ejs'); // configurando a engine que vai renderizar os ejs

app.use(csrf()) // adicionando o csrf no express (serve para atribuir um token aleatório em todo form)
app.use(middlewareGlobal.middlewareGlobal)
app.use(middlewareGlobal.injectCsrf)
app.use(middlewareGlobal.checkCsrf)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000...')
    });
})


