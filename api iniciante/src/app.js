const router = require('./router')
const express = require('express')
const app = require('./servidor')

app.use(express.json())
app.use(router)

//app.use(router)
module.exports = app



// arquivo como um .exe onde tudo inicia