const express = require('express')
const controlList = require('./controllers/listController')

const router = express.Router()

// rota de teste
// router.get('/hello_world', (req, res) => res.status(200).send('hello world!'))

router.get('/List', controlList.getAll)
router.post('/List', controlList.postList)
router.delete('/List/:id', controlList.deleteList)
router.put('/List/:id', controlList.updateList)

module.exports = router