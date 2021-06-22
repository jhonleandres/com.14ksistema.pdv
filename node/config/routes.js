const isDev = require("electron-is-dev")

module.exports = app => {
    const controller = isDev ? app.api : app
    const config = isDev ? app.config : app
    // console.log(app)
    app.post('/signin', controller.auth.signin)
    app.post('/validateToken', controller.auth.validateToken)

    app.route('/users')
        //.all(app.config.passport.authenticate())
        .post(controller.user.save)
        .get(controller.user.get)

    app.route('/users/:id')
        .all(config.passport.authenticate())
        .put(controller.user.save)    
        .get(controller.user.getById)
}