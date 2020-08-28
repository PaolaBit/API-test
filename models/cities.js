const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citiesSchema = new Schema({
    cityCode: { type: Number, required: true },
    cityName: { type: String, required: true },
    idCountry: { type: Number, required: true }

})
module.exports = mongoose.model('City', citiesSchema);