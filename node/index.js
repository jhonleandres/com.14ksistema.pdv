const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const isDev = require("electron-is-dev")

app.db = db

isDev ?
consign({cwd: 'node'})
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validator.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
: 
consign({ 
    cwd: `${process.cwd()}/resources/app.asar/node/`,     
    locale: 'pt-br', 
    logger: console,
    verbose: true, 
    loggingType: 'info'})
    .include('config/passport.js')
    .then('config/middlewares.js')
    .then('api/validator.js')
    .then('api')
    .then('config/routes.js')
    .into(app)

app.listen(4000, () => {
    console.log('Backend executando...')
})