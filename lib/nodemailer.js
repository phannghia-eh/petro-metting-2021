const nodemailer = require('nodemailer')

class Mailer {
    static transporter() {
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'hoi.nghi.nguoi.lao.dong.12.2021@gmail.com',
                pass: 'jbzlhihmtrpotzbj'
            },
        });
    }

    static buildMail(content) {
        return {
            to: 'phn1910@gmail.com',
            subject: 'Test sent mail with Nodemailer',
            text: content
        }
    }

    static async sendMail(data) {
        return new Promise(async (resolve, reject) => {
            this.transporter().sendMail(this.buildMail(data), (err, info) => {
                if (err) return reject(err)
                return resolve(info)
            })
        })
    }
}

module.exports = Mailer