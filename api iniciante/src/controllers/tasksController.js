const tasksModel = require('../models/tasksModel')

// aqui é onde ficam as funções que serão chamadas pelas rotas
const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll()
    return res.status(200).json({tasks})
}

const createTask = async (req, res) => {  
    const createdTask = await tasksModel.createTask(req.body)
    return res.status(201).json(createdTask)
    // status 201 é 'criado'
}

const deleteTask = async (req, res) => {
    const {id} = req.params // pega um parametro da URL 
    await tasksModel.deleteTask(id)
    return res.status(204).json()
    // status 204 é 'Deu certo'
}

const updateTask = async (req, res) => {
    const {id} = req.params

    await tasksModel.updateTask(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}