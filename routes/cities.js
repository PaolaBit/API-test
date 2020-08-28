const express = require('express');
const api = express.Router();
const city = require('../controllers/cities');


api.post('/cities/create', () => {});
api.put('/cities/update/:id', city.update);
api.delete('/cities/remove/:id', () => {});
api.get('/cities/getAll', () => {});
api.get('/cities/getOne/:id', () => {});

module.exports = api