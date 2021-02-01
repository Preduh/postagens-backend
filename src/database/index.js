const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deploy:147258369.@cluster0.hksoi.mongodb.net/posts?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose