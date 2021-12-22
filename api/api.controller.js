const mailer = require('../lib/nodemailer')
const ParticipantService = require('../core/participant.service')

class ApiController {
    static async get(req, res, next) {
        res.status(200).json({result: 'OK'})
    }

    static async register(req, res, next) {
        // Do register account
        let email = req.body.email
        console.log(req.body)
        let result = null
        let whitelist_mails = global.config.whitelist_emails

        try {
            result = await ParticipantService.create(req.body)

            if (whitelist_mails.includes(email)) {
                result = await mailer.sendSuccessMail(result)
            } else {
                result = await mailer.sendFailMail(result)
            }


            res.status(200).json(result)
        } catch (e) {
            console.log(e)
            res.status(501).json(e)
        }
    }
}

module.exports = ApiController
