const bcrypt = require('bcrypt')

module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator
    
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) =>{
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try {
        
            existsOrError(user.fistname, 'Nome não informado')
            existsOrError(user.last_name, 'Sobrenome não informado')
            existsOrError(user.adjutancy, 'cargo não informado')
            existsOrError(user.cityName, 'Cidade Base não informado')
            existsOrError(user.state, 'Estado Base não informado')
            existsOrError(user.country, 'UF não informado')
            existsOrError(user.loginAd, 'Login Active Directory (AD) não informado')
            existsOrError(user.email, 'E-mail Cooporativo não informado')
            existsOrError(user.password, 'Senha não informado')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem')
            existsOrError(user.active, 'Usuario Ativo não informado')
            existsOrError(user.delete, 'Usuario Deletado não informado')

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if(!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .where('active', 'S')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        return res.json('res')
        // app.db('users')
        //     .select('id', 'fistname', 'email', 'active')
        //     .where('active', 'S')
        //     .then(users => res.json(users))
        //     .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'fistname', 'email', 'active')
            .where({id: req.params.id})
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}