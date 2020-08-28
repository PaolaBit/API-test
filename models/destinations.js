const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({

    country: { type: String, required: true },
    destinationName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stay: { type: Number, required: true },
    imageLinks: { type: String, required: true },

    cityId: { type: Schema.Types.ObjectId, ref: 'City' }

})

module.exports = mongoose.model('Destination', DestinationSchema);