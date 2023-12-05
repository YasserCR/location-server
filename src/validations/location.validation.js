const Joi = require('joi')

/**
 * Se define el esquema de validación para la creación de una ubicación
 */
const createLocationSchema = Joi.object({
    name: Joi.string().required(),
    coordinates: Joi.object({
        type: Joi.string().valid('Point').required(),
        coordinates: Joi.array().items(Joi.number()).length(2).required()
    }).required()
})

/*
* Se define el esquema de validación para la actualización de una ubicación
* El esquema de actualización es similar al de creación pero todos los campos son opcionales
*/
const updateLocationSchema = Joi.object({
    name: Joi.string().optional(),
    coordinates: Joi.object({
        type: Joi.string().valid('Point').optional(),
        coordinates: Joi.array().items(Joi.number()).length(2).optional()
    }).optional()
});

module.exports = { createLocationSchema, updateLocationSchema }