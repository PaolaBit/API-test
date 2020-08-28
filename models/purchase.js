const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PurchaseSchema = new Schema({
    paymentMethod: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    takeoffDay: { type: Date, required: true },
    arrivalDay: { type: Date, required: true },
    transportation: { type: String, required: true },
    destinationId: { type: Schema.Types.ObjectId, ref: 'Destination'}, //hace ralacion a la colección
    userId: { type: Schema.Types.ObjectId, ref: 'User'} //hace referencia a la colección

})

module.exports = mongoose.model('Purchase', PurchaseSchema)


