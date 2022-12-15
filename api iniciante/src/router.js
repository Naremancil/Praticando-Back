const express = require('express')
const controller = require('./controllers/tasksController')
const middleWare = require('./middlewares/tasksMiddleware')

// routes é o pacote de rotas que serão utilizadas
const routes = express.Router()

// primeira rota do get
routes.get('/tasks', controller.getAll)
routes.post('/tasks', middleWare.validarBody, controller.createTask)
routes.delete('/tasks/:id', controller.deleteTask) // :[nome] é o parametro
routes.put('/tasks/:id', middleWare.validarBody, controller.updateTask) // :[nome] é o parametro


module.exports = routes

// Criando e exportando arquivo de rotas