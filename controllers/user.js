/**
 * JSON WEB TOKENS: Estandar que permite representar permisos entre dos partes.
 * Tiene la siguiente estructura, se separan por puntos.
 * Header => Incluye en algortimo con el que se firmo y si es JWT
 * Payload => Información que se quiere compartir entre las partes. No se debe incluir información sencible.
 *          sub: Hace parte de la identificación del usuario.
 *          iat: Cuando se generó el token.
 * Signature => Es la firma de nuestro token.
 * 
 * 
 * COMENCEMOS A CONFIGURAR TODO:
 * npm install --save jwt-simple
 * npm install --save moment
 * Crear la carpeta de services.
 * Crear el archivo index.js dentro de services.
 * Creamos el método createToken dentro del index donde vamos a encriptar la información del usuario, junto con la fecha de expiración.
 * Requerimos el servcio desde el controlador de usuarios.
 * Creamos la función para iniciar sesión
 * Creamos una carpeta llamada middleware para verificar si el token existe.
 */

const User = require('../models/user')
const crypto = require('crypto')
const service = require('../services');


const passwordEncryption = (password) => {
    const algoritmo = 'aes-256-cbc'
    let key = crypto.createCipher(algoritmo, password)
    let passCrypto = key.update(password, 'utf8', 'hex')
    passCrypto += key.final('hex')
    return passCrypto
}

exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Todos los campos son requeridos'
        })
    }

    const usuario = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: passwordEncryption(req.body.password),
        photo: req.body.photo,
        nationality: req.body.nationality,
        address: req.body.address,
        idDocument: req.body.idDocument
    })
    usuario.save().then(
            data => {
                res.send(data)
            }
        )
        .catch(
            error => {
                res.status(500).send({
                    message: error.message || 'Error al crear'
                })
            }
        )
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'todos los campos son requeridos' })
    }
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        photo: req.body.photo,
        nationality: req.body.nationality,
        address: req.body.address,
        idDocument: req.body.idDocument
    }
    User.findByIdAndUpdate(req.params.id, user, { new: true }).then(usuario => {
        if (!usuario) {
            return res.status(400).send({ message: 'No se encontro usuario con ese ID' })
        }
        res.send(usuario)

    }).catch(error => {
        if (error.kind == 'ObjectId') {
            return res.status(404).send({ message: 'No se encontro un usuario con el Id indicado' })
        }
        return res.status(500).send({ message: 'Error al actualizar el usuario ' })
    })
}

exports.getAll = (req, res) => {
    console.log('Si llegó')
    let search = {};
    if (!req.query.searchBy) {
        search = { firstName: new RegExp(`.*${req.query.searchBy}.*`, 'i') }
    }
    User.find(search).then(users => {
        console.log('users --> ', users)
        res.send(users)
    }).catch(error => {
        res.status(500).send({ message: error.message || 'Error de conexion con el servidor' })
    })
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (error, dataUser) => {

        if (dataUser !== null) {
            if (passwordEncryption(req.body.password) != dataUser.password) {
                return res.status(400).send({ message: 'Los datos no coinciden' })
            } else {
                res.send({ jwt: service.createToken(dataUser) });
            }
        } else {
            return res.status(500).send({ message: 'Error al iniciar sesión' })
        }
    });
};

/* correo -> falcontravelvip@gmail.com pass: falcontravel2020+*/