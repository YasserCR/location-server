const mongoose = require('mongoose')

/**
 * Se uso el typo de dato Point porque es el que usa MongoDB para almacenar coordenadas
 * Se pudo usar String pero no se podrían hacer consultas geoespaciales en caso de requerirlas
 */
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    coordinates: {
        type: {
            type: String,
            enum: ['Point'],
            require: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
})

module.exports = mongoose.model('Location', locationSchema)