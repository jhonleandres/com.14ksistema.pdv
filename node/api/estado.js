
module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator
    
    const save = async (req, res) =>{
        return res.status(200).send('save')
    }

    const get = (req, res) => {
        app.db('estado')
            .select()
            .then(estado => res.json(estado))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('estado')
            .select()
            .where({id: req.params.id})
            .then(estado => res.json(estado))
            .catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}