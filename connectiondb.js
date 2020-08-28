const mongoose = require("mongoose")
const config = require('./config');
const connectToDatabase = function() {
    console.log("config.mongoDB --> ", config.mongoDB)
    mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            console.log("Falló la conexión", err)

        } else {
            console.log("Conexión exitosa")
        }

    })
}

module.exports = { connectToDatabase }