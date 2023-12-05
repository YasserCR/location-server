const locationService = require('../services/location.service')

exports.createLocation = async (req, res) => {
    const locationData = req.body
    try {
        const location = await locationService.createLocation(locationData)
        res.status(201).send(location)
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
}

exports.getLocations = async (req, res) => {
    try {
        const locations = await locationService.getLocations()
        res.status(200).send(locations)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

exports.getLocationById = async (req, res) => {
    try {
        const location = await locationService.getLocationById(req.params.id)
        if (location) {
            res.status(200).send(location)
        } else {
            res.status(404).send({ error: 'Location not found' })
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

exports.deleteLocationById = async (req, res) => {
    try {
        const location = await locationService.deleteLocationById(req.params.id)
        if (location) {
            res.status(204).send()
        } else {
            res.status(404).send({ error: 'Location not found' })
        }

    } catch {
        res.status(500).send({ error: err.message })
    }
}

/**
 * Aunque lo común es no mostrar el recurso actualizado, se decidio mostrarlo para
 * poder verlo desde el lado del cliente, si no se desea ese
 * comportamiento se puede cambiar por res.status(204)
 */
exports.updateLocationById = async (req, res) => {
    try {
        const location = await locationService.updateLocationById(req.params.id, req.body)
        if (location) {
            res.status(200).send(location)
        } else {
            res.status(404).send({ error: 'Location not found' })
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}