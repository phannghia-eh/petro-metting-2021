const mongoose = require('mongoose')
const crypto = require('crypto')

const ParticipantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        default: ''
    },
    passcode: {
        type: String,
        default: randomValueHex(16),
        required: true,
        unique: true
    }
}, {timestamps: true, minimize: false})

ParticipantSchema.pre('save', async function f(next) {
    this.passcode = randomValueHex(16)
    next()
})

function randomValueHex (len) {
    return  Math.random().toString(36).substring(2, len / 2 + 2).toUpperCase() + Math.random().toString(36).substring(2,  len / 2 + 2).toUpperCase()
    // return required number of characters
}

const ParticipantModel = mongoose.model('participant', ParticipantSchema)

module.exports = ParticipantModel