module.exports = app => {
    const controller = app.api
    const config = app.config
    
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