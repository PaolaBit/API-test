const express = require('express') //define por donde va la app
const api = express.Router() //router metodo de express
const purchase = require('../controllers/purchase')

api.post('/purchase/create', purchase.create)
api.put('/purchase/update/:id', purchase.update)
api.delete('/purchase/remove/:id', () => {})
api.get('/purchase/getAll', () => {})
api.get('/purchase/getOne/:id')

module.exports = api