
const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    employeeNumber: String,
    currentCustomers: Array,
    previousCustomers: Array,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Manager', managerSchema);