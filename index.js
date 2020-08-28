const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectToDatabase } = require('./connectiondb')


const app = express() //aqui se inicializa express para poder usar todos los metodos que este framework nos da
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

connectToDatabase()


const cities = require('./routes/cities')
const destinations = require('./routes/destinations')
const purchase = require('./routes/purchase')
const contactUs = require('./routes/contactUs')
const user = require('./routes/user')

app.use('/api', destinations)
app.use('/api', purchase)
app.use('/api', contactUs)
app.use('/api', user)
app.use('/api', cities)

app.listen(port, function() {
    console.log('Servidor funcionando')
})