const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    number: { type: String, required: true},
})

const contactModel = new mongoose.model('n sei', contactSchema)