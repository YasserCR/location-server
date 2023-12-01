const Location = require('../models/location.model')

exports.createLocation = async (locationData) => {
    try {
        const location = new Location(locationData)
        return await location.save()
    }
    catch (err) {
        throw err
    }
}

exports.getLocations = async () => {
    return await Location.find()
}

exports.getLocationById = async (id) => {
    return await Location.findById(id)
}

exports.deleteLocationById = async (id) => {
    return await Location.findByIdAndDelete(id)
}

exports.updateLocationById = async (id, data) => {
    return await Location.findByIdAndUpdate(id, data, { new: true })
}