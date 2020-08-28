const Destinations = require('../models/destinations');


exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Todos los campos son requeridos' });
    }

    const destino = new Destinations({
        country: req.body.country,
        destinationName: req.body.destinationName,
        price: req.body.price,
        description: req.body.description,
        stay: req.body.stay,
        imageLinks: req.body.imageLinks,
        cityId: req.body.cityId
    })

    destino.save().then(
        data => {
            res.send(data)

        }
    ).catch(
        error => {
            res.status(500).send({ message: error.message || 'Error subiendo el destino' })
        }
    )

}
exports.update = (req, res)=> {
   if (!req.body) {
     return res.status(400).send({ message: 'Todos los campos son requeridos' });
   }
   const destinations ={ 
    country: req.body.country,
    destinationName: req.body.destinationName,
    price: req.body.price,
    description: req.body.description,
    stay: req.body.stay,
    imageLinks: req.body.imageLinks,
    cityId: req.body.cityId
   }
   Destinations.findByIdAndUpdate(req.params.id, destinations, {new: true}).then (destino=>{ 
       if (!destino){
           return res.status(400).send({message: 'No se encontro un destino con ese Id'})   
       }
        res.send(destino)

    } ).catch(error=>{
        if (error.kind=='ObjectId'){
            return res.status(404).send ({ message: 'No se encontro un destino con el Id seleccionado'});
            
        }
        return res.status(500).send ({ message:  'Error:  Actualizar el destino'})

    })
}