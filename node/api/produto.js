
module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator
    
    const save = async (req, res) =>{
        const produto = { ...req.body }
        
        return res.status(200).send(produto)
    }

    const get = (req, res) => {
        app.db('produtos')
            .select()
            .where('finished', 'N')
            .then(produto => res.json(produto))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('produtos')
            .select()
            .where({id: req.params.produto_id})
            .then(produto => res.json(produto))
            .catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}