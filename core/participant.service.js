const Participant = require('./participant.model')

class ParticipantService {
    static async create(participant) {
        return new Promise((resolve, reject) => {
            const newParticipant = new Participant(participant)
            newParticipant.save((err, rls) => {
                if (err) return reject(err)
                return resolve(rls)
            })
        })
    }

    static async getAll() {
        return new Promise((resolve, reject) => {
            Participant
                .find({}, {__v: 0}, {lean: 1})
                .exec((err, rls) => {
                    if (err) return reject(err)
                    return resolve(rls)
                })
        })
    }
}

module.exports = ParticipantService
