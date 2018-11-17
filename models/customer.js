
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pay: {
        frequency: String,
        estimate: Number
    },
    address: String,
    currentManager: String,
    username: String,
    previousManagers: Array,
    password: String,
    files: Array,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Customer', customerSchema);