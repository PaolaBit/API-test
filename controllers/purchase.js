const Purchase = require('../models/purchase');

exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Todos los campos son requeridos' })
    }

    const purchaseNew = new Purchase({
        paymentMethod: req.body.paymentMethod,
        totalPrice: req.body.totalPrice,
        takeoffDay: req.body.takeoffDay,
        arrivalDay: req.body.arrivalDay,
        transportation: req.body.transportation,
        destinationId: req.body.destinationId,
        userId: req.body.userId,
    })

    purchaseNew.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            res.status(500).send({ message: error.message || 'Error al procesar la compra' })
        }
    )
}
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Todos los campos son requeridos' })
    }
    const purchase = {

        paymentMethod: req.body.paymentMethod,
        totalPrice: req.body.totalPrice,
        takeoffDay: req.body.takeoffDay,
        arrivalDay: req.body.arrivalDay,
        transportation: req.body.transportation,
        destinationId: req.body.destinationId,
        userId: req.body.userId,

    }
    Purchase.findByIdAndUpdate(req.params.id, purchase, { new: true }).then(carritoCompra => {
        if (!carritoCompra) {
            return res.status(400).send({ message: 'No se encontró el Id' })
        } res.send(carritoCompra)

    }).catch(error => {
        if (error.kind == 'ObjectId') {
            return res.status(400).send({ message: 'No se encontró la compra' });
        }
        return res.status(500).send({ message: 'Error al actualizar la compra' })
    })
}

