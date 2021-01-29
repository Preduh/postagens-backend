const mongoose = require('../database/index')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        uppercase: true
    },
    content: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post