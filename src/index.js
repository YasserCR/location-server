require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./utils/mongo')
const locationRouter = require('./routers/location.router')


app.use(express.json())
app.use(cors())
connectDB()

app.use('/api', locationRouter)
app.use('/start', (req, res) => {
    res.send('Initial project setup')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})