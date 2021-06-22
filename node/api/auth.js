const { authSecret } = require('../../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.login || !req.body.senha) {
            return res.status(400).send('Informe usuário e senha!')
        }

        const user = await app.db('usuario')
            .where({ login: req.body.login })
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        try {
            const isMatch = bcrypt.compareSync(req.body.senha, user.senha)
            if (!isMatch) return res.status(401).send('Email/Senha inválidos!')
        }
        catch(error){
            return res.status(500).send(error)
        }

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            login: user.lgoin,
            nome: user.nome,
            sobrenome: user.sobrenome,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userToken = req.headers['x-access-token'] || req.body.token || req.query.token
        try {
            if(userToken) {
                const token = jwt.decode(userToken, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}