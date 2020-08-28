const ContactUs = require('../models/contactUs');

exports.create = (req, res) => {
    console.log('aca esta llegando');
    if (!req.body) {
        return res.status(400).send({ message: 'Todos los campos son requeridos' })
    }

    const contact = new ContactUs({
        eventType: req.body.eventType,
        description: req.body.description,
        email: req.body.email,
        phone: req.body.phone
    })

    contact.save()
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({ message: error.message || 'Error al enviar el formulario' })
        })
}
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Todos los campos son requeridos' });
    }
    const contactUs = {
        eventType: req.body.eventType,
        description: req.body.description,
        email: req.body.email,
        phone: req.body.phone
    }

    ContactUs.findOneAndUpdate(req.params.id, contactUs, { new: true }).then(contactUs => {
        if (!contactUs) {
            return res.status(480).send({ message: 'No se encontro un destino conese Id' })
        }
        res.send(contactUs)


    }).catch(error => {
        if (error.kind == 'objectId') {
            return res.status(404).send({ messege: 'No se encontro un destino con el Id' })

        }
        return res.status(500).send({ message: 'error: Actualizar el destion' })
    })
}