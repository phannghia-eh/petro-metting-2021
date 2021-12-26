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
        unique: true
    }
}, {timestamps: true, minimize: false})

function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len).toUpperCase();   // return required number of characters
}

const ParticipantModel = mongoose.model('participant', ParticipantSchema)

module.exports = ParticipantModel