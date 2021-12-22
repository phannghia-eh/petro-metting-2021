const mailer = require('../lib/nodemailer')
const xl = require('exceljs')
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

    static async exportExcel(req, res, next) {
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
    }

    // static async exportExcel(req, res, next) {
    //     let wb = new xl.Workbook()
    //     let ws = wb.addWorksheet('Sheet 1')
    //     let style = wb.createStyle({
    //         font: {
    //             size: 14
    //         }
    //     })
    //
    //     let fileName = 'FileName.xlsx';
    //
    //     ws.cell(1, 1).string("Họ tên").style(style)
    //     ws.cell(1, 2).string("Email").style(style)
    //     ws.cell(1, 3).string("Chức vụ").style(style)
    //     ws.cell(1, 4).string("Phòng ban").style(style)
    //     ws.cell(1, 5).string("Passcode").style(style)
    //     ws.cell(1, 6).string("Số điện thoại").style(style)
    //
    //     try {
    //         let participants = await ParticipantService.getAll()
    //
    //         for (let i in participants) {
    //             ws.cell(i + 1, 1).string(participants[i].name).style(style)
    //             ws.cell(i + 1, 2).string(participants[i].email).style(style)
    //             ws.cell(i + 1, 3).string(participants[i].title).style(style)
    //             ws.cell(i + 1, 4).string(participants[i].department).style(style)
    //             ws.cell(i + 1, 5).string(participants[i].passcode).style(style)
    //             ws.cell(i + 1, 6).string(participants[i].phone).style(style)
    //             ws.cell(i + 1, 7).string(`${participants[i].name} - ${participants[i].title}`).style(style)
    //         }
    //
    //         res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    //
    //         res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
    //
    //         wb.write(res);
    //
    //     } catch (e) {
    //         console.log(e)
    //         res.status(501).json(e)
    //     }
    // }
}

module.exports = ApiController
