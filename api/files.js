const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Files = mongoose.model('File')

router.get('/', async (_, res) => {
    const files = await Files.find({})
    res.send(files)
})

module.exports = router