const router = require('./router')
const express = require('express')
const app = require('./server')

app.use(express.json())
app.use(router)