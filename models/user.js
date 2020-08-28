const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    nationality: { type: String, required: true },
    address: { type: String, required: true },
    idDocument: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema);