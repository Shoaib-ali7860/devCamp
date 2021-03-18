const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
res.send('<h1>hello i want to contact you Pls respond me</h1> ')

})

app.listen(PORT,console.log(`this is run on PORT ${PORT} and in ${process.env.NODE_ENV}`))