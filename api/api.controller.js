const mailer = require('../lib/nodemailer')

class ApiController {
    static async get(req, res, next) {
        res.status(200).json({result: 'OK'})
    }

    static async register(req, res, next) {
        // Do register account
        const result = await mailer.sendMail('aiousdghiaoghaiug')
        res.status(200).json(result)
    }
}

module.exports = ApiController
