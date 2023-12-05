const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location.controller')
const { createLocationSchema, updateLocationSchema } = require('../validations/location.validation')
/**
 * Se importa el middleware para validar los datos de entrada desde el router
   para hacer la validación desde aquí y no desde el servicio o controlador
 */
const validator = require('../middlewares/validator')

/**
 * Se usa el validador para validar los datos que vienen desde el body
 */
router.post('/location', validator.body(createLocationSchema), locationController.createLocation)
router.get('/locations', locationController.getLocations)
router.get('/location/:id', locationController.getLocationById)
router.delete('/location/:id', locationController.deleteLocationById)
router.patch('/location/:id', validator.body(updateLocationSchema), locationController.updateLocationById)

module.exports = router