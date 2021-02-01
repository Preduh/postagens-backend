const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.post('/', async (req, res) => {
    const post = await Post.create(req.body)

    return res.json(post)
})

router.get('/', async (req, res) => {
    const posts = await Post.find()

    return res.json(posts)
})

module.exports = app => app.use(router)