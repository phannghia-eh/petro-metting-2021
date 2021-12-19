const mailer = require('../lib/nodemailer')

class ApiController {
    static async get(req, res, next) {
        res.status(200).json({result: 'OK'})
    }

    static async register(req, res, next) {
        // Do register account
        let email = req.body.email
        console.log(req.body)
        let result = null
        let whitelist_mails = [
            'abc@gmail.com',
            'abc1@gmail.com',
            'abc3@2gmail.com',
            'abc3@gmail.com',
        ]

        if (whitelist_mails.includes(email)) {
            result = await mailer.sendSuccessMail(req.body)
        } else {
            result = await mailer.sendFailMail(req.body)
        }

        res.status(200).json(result)
    }
}

module.exports = ApiController
