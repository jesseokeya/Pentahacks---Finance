const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customers = mongoose.model('Customer')

router.get('/', async (_, res) => {
    const customers = await Customers.find({})
    res.send(customers)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const customer = await Customers.findById(id)
    res.send(customer)
})

router.post('/', async (req, res) => {
    const customers = await Customers.find({})
    res.send(customers)
})


module.exports = router