const express = require('express');
const api = express.Router();
const user = require('../controllers/user')
const auth = require('../middleware/auth')

/**
 * POST: Para crear
 * GET: Obtener
 * DELETE: Eliminar
 * PUT: Modificar
 */

api.post('/user/create', user.create); //Vamos a crear un usuario
api.put('/user/update/:id', auth.isAuth, user.update); //Vamos a modificar un usuario
api.delete('/user/remove/:id', () => {}); //Vamos a eliminar un usuario
api.get('/user/getAll', () => {}); //Vamos a obtener todos los usuarios
api.get('/user/getOne/:id', () => {}); //Vamos a obtener un usuario
api.post('/user/login', user.login); //Vamos a obtener un usuario

module.exports = api