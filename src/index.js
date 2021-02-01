const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')

// Configs
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Routes
require('./routes/index')(app)

app.listen(8081, () => console.log('Server is run'))