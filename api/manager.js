const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Managers = mongoose.model('Manager')

router.get('/', async (_, res) => {
    const managers = await Managers.find({})
    res.send(managers)
})

module.exports = router