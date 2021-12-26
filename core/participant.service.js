const Participant = require('./participant.model')

class ParticipantService {
    static async create(participant) {
        // return new Promise((resolve, reject) => {
        //     Participant.findOneAndUpdate({email: participant.email}, participant, {new: true, upsert: true}, function (error, result) {
        //         if (!error) {
        //             // If the document doesn't exist
        //             if (!result) {
        //                 // Create it
        //                 result = new Participant(participant);
        //             }
        //             // Save the document
        //             result.save(function(error) {
        //                 if (!error) {
        //                     return resolve(result)
        //                 } else {
        //                     return reject(error);
        //                 }
        //             });
        //         }
        //     })
        // })
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
