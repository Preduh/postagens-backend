const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/postagem', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose