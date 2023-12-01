const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conexión exitosa a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err)
    }
}

module.exports = connectDB