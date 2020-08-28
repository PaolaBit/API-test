const mongoose = require("mongoose")
const connectToDatabase = function () {

    mongoose.connect("mongodb+srv://<user>:<password>@<cluster>.lyowp.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            console.log("Falló la conexión")

        } else {
            console.log("Conexión exitosa")
        }

    })
}

module.exports = {connectToDatabase}
