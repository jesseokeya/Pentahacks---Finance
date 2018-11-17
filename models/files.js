
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    size: Number,
    owner: String,
    created: {
        type: Date,
        default: Date.now()
    },
    description: String,
    notes: Array
});

module.exports = mongoose.model('File', fileSchema);