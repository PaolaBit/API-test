const service = require('../services');
const { response } = require('express');

exports.isAuth = (req, res, next) => {

    console.log('req.headers.authorization--> ', req.headers.authorization)

    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes permisos, por favor inica sesión.' });
    }
    const token = req.headers.authorization.split(' ')[1];
    service.decodeToken(token).then(response => {
        req.user = response
        next()
    }).catch(error => {
        res.status(error.status).send({ message: 'El token no existe' })
    })
}