const express = require('express')
const enviroment = require('../src/models/connection')

const server = express()
const port = process.env.PORT || 5000 
// um safe guard de caso nao tenha sido colocado um valor na variável

server.listen(port, () => console.log(`Server Running on Port ${port}`))
module.exports = server
// criando e definindo o arquivo que contem o servidor com a porta