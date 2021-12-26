const mailer = require('../lib/nodemailer')
const xl = require('exceljs')
const ParticipantService = require('../core/participant.service')
const fs = require('fs');

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

            if (whitelist_mails.includes(email)) {
                result = await ParticipantService.create(req.body)
                let mail = await mailer.sendSuccessMail(result)
                console.log('result sent mail:', mail)
                return res.status(200).json(result)
            } else {
                result = req.body
                let mail = await mailer.sendFailMail(result)
console.log(mail)
                return res.status(403).json({message: "Đăng ký thất bại"})
            }

            return res.status(403).json({message: "Đăng ký thất bại"})
        } catch (e) {
            console.log(e)
            res.status(501).json(e)
        }
    }

    static async exportExcel(req, res, next) {
        if (req.body.code === global.config.code) {
            let wb = new xl.Workbook()
            let ws = wb.addWorksheet("Sheet 1")

            ws.columns = [
                {header: "Họ tên", key: 'name', width: 30},
                {header: "Email", key: 'email', width: 40},
                {header: "Chức vụ", key: 'title', width: 50},
                {header: "Phòng ban", key: 'department', width: 30},
                {header: "Passcode", key: 'passcode', width: 10},
                {header: "Số điện thoại", key: 'phone', width: 20},
                {header: "", key: 'meeting_id', width: 50},
            ]

            let data = []

            try {
                data = await ParticipantService.getAll()
            } catch (e) {
                console.log(e)
                return res.status(501).json(e)
            }

            data = data.map( i => {
                return {...i, meeting_id: `${i.name} - ${i.title}`}
            })

            ws.addRows(data)

            res.setHeader(
                "Content-Type",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            res.setHeader(
                "Content-Disposition",
                "attachment; filename=" + "danh sach dang ky.xlsx"
            );

            return wb.xlsx.write(res).then(function () {
                res.status(200).end()
            })
        } else {
            res.status(403).json({message: "Unauthorized!"})
        }
    }
}

module.exports = ApiController
