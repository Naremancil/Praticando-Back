const moduleList = require('../modules/listModules')

// método Get
const getAll = async (req, res) => {
    const listAll = await moduleList.getAll()
    return res.status(200).json({listAll})
}

// método Post
const postList = async (req, res) => {
    const postedList = await moduleList.postList(req.body)
    return res.status(201).json({Message: "Post feito!"})
}

// método Delete
const deleteList = async (req, res) => {
    const {id} = req.params
    const deletedList = await moduleList.deleteList(id)
    return res.status(204).json()
}

// método Put
const updateList = async (req, res) => {
    const {id} = req.params
    const updatedList = await moduleList.updateList(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    postList,
    deleteList,
    updateList
}