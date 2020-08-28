const mongoose = require("mongoose")
const config = require('./config');
const connectToDatabase = function() {

    mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            console.log("Falló la conexión")

        } else {
            console.log("Conexión exitosa")
        }

    })
}

module.exports = { connectToDatabase }