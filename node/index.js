const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const path =require('path')

app.db = db

consign({ 
    cwd: `${path.join(__dirname)}`,     
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