const Participant = require('./participant.model')

class ParticipantService {
    static async create(name, title, department, email, phone) {
        return new Participant({
            name: name,
            title: title,
            department: department,
            email: email,
            phone: phone
        }).save()
    }
}

module.exports = ParticipantService
