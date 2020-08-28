const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactUsSchema = new Schema({
    eventType: { type: String, require: true },
    description: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true }
})

module.exports = mongoose.model('ContactUs', ContactUsSchema);

//falcontravel2020@falcontraveldb.lyowp.mongodb.net/falconTravelDB?retryWrites=true&w=majority