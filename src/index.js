require('dotenv').config()
const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const locationRouter = require('./routers/location.router')
const openApiConfig = require('./docs/swagger')
const app = express()
const connectDB = require('./utils/mongo')

app.use(express.json())
app.use(cors())
connectDB()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiConfig))
app.use('/api', locationRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})