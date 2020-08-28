const jwt = require('jwt-simple');
const moment = require('moment');
const SECRET = 'miTokenSecreto';

exports.createToken = (dataUser) => {
    const payload = {
        sub: dataUser._id,
        iat: moment().unix(), //Fecha en la que se creó el token.
        exp: moment().add('1', 'hour').unix(), //Fecha cuando expira el token.
        firstName: dataUser.firstName,
        lastName: dataUser.lastName
    }

    return jwt.encode(payload, SECRET)
}

exports.decodeToken = (token) => {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, SECRET);
            console.log("payload.exp --> ", payload.exp)
            console.log("moment().unix() --> ", moment().unix())
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch {
            reject({
                status: 500,
                message: 'El token es invalido'
            })
        }
    })
    return decode;
}