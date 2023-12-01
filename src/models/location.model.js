const mongoose = require('mongoose')

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