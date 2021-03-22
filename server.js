const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB=require('./config/db.js')


dotenv.config({ path: './config/config.env' })
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
connectDB()
if (process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'))
}
const bootycamps = require('./router/bootcamp.js')
app.use('/api/v1/bootcamp', bootycamps)
const server = app.listen(PORT, console.log(`this is run on PORT ${PORT} and in ${process.env.NODE_ENV}`.yellow.underline))
process.on('unhandledRejection', (err, promise) => {
    console.log(`error: ${err.message}`.red)
    server.close(()=>process.exit(1))
})