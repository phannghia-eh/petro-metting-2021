const mongoose = require('mongoose')

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
    }
}, {timestamps: true, minimize: false})

ParticipantSchema.statics.createParticipant = function (data) {
    return new this(data).save()
}

const ParticipantModel = mongoose.model('participant', ParticipantSchema)

module.exports = ParticipantModel