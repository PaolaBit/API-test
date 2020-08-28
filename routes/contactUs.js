const express = require('express');
const api = express.Router();

const contactUs = require('../controllers/contactUs')

api.post('/contactUs/create', contactUs.create);
api.put('/contactUs/update/:id', contactUs.update);
api.delete('/contactUs/remove/:id', () => {});
api.get('/contactUs/getAll',() => {});
api.get('/contactUs/getOne/:id',() => {});

module.exports = api;