const City = require('../models/cities');

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Todos los campos son requeridos.' })
    }

    const city = {
        cityCode: req.body.cityCode,
        cityName: req.body.cityName,
        idCountry: req.body.idCountry,
    }

    City.findByIdAndUpdate(req.params.id, city).then(city => {
        if (!city) {
            return res.status(404).send({
                message: "No se encontró una ciudad con el id "
            })
        }
        res.send(city)
    }).catch(error => {
        console.log(error.kind);
        if (error.kind == 'ObjectId') {
            return res.status(404).send({
                message: "No se encontró una ciudad con el id "
            })
        }

        return res.status(500).send({
            message: "Error al actualizar la ciudad" + error
        })
    })


}