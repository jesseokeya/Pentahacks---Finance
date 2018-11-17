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

router.post('/login', async (req, res) => {
   const { username, password } = req.body
   let customer = await Customers.find({ username, password })
   if (customer.length === 0) {
        customer = await Customers.find({ email: username, password })
   }
   const buildReponse = await _buildResponse(customer)
})


module.exports = router