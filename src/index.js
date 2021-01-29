const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')

// Configs
app.use(
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    cors({})
)

// Routes
require('./routes/index')(app)

app.listen(8081, () => console.log('Server is run'))