
module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator
    
    const save = async (req, res) =>{
        return res.status(200).send('save')
    }

    const get = (req, res) => {
        app.db('municipio')
            .select()
            .then(municipio => res.json(municipio))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('municipio')
            .select()
            .where({id: req.params.id})
            .then(municipio => res.json(municipio))
            .catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}