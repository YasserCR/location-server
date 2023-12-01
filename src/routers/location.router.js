const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location.controller')

router.post('/location', locationController.createLocation)
router.get('/locations', locationController.getLocations)
router.get('/location/:id', locationController.getLocationById)
router.delete('/location/:id', locationController.deleteLocationById)
router.patch('/location/:id', locationController.updateLocationById)

module.exports = router