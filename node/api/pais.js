
module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator
    
    const save = async (req, res) =>{
        return res.status(200).send('save')
    }

    const get = (req, res) => {
        app.db('pais')
            .select()
            .then(pais => res.json(pais))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('pais')
            .select()
            .where({id: req.params.id})
            .then(pais => res.json(pais))
            .catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}