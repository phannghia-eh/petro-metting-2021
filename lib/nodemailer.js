const nodemailer = require('nodemailer')

class Mailer {
    static transporter() {
        return nodemailer.createTransport({
            // host: "in-v3.mailjet.com",
            host: "in-v3.mailjet.com",
            port: 587,
            secure: false,
            auth: {
                // user: '53cf9000f2688d5e5f432e13c9ac6fe8', // hoi nghi nguoi lao dong mailjet
                user: 'b95579db5b69a995f045c106fc18b754', // default
                // pass: 'c4d390e682f5dc20c18923e6260d5766'
                pass: 'c72d18df7d65a8184ef87906a60ba45f'
            },
        });
    }

    static successMailTemplate(passcode) {
        return `
        <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>Thư mời tham dự "Hội nghị người lao động 2021"</title>
    <!--[if !mso]>
<!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
      <![endif]-->
    <!--[if !mso]>
      <!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
    </style>
    <!--
        <![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    </style>
    <style type="text/css">
      [owa] .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    </style>
    <style type="text/css"></style>
  </head>
  <body style="word-spacing:normal;background-color:#f6ffe0;">
    <div style="background-color:#f6ffe0;">
      <!--[if mso | IE]>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="transparent" >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
      <div style="background:transparent;background-color:transparent;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;background-color:transparent;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:40px 0px 40px 0px;padding-bottom:40px;padding-left:0px;padding-right:0px;padding-top:40px;text-align:center;">
                <!--[if mso | IE]>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td class="" style="vertical-align:top;width:600px;" >
                                <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:0px;word-break:break-word;">
                          <div style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                            <h2 class="text-build-content" style="text-align:center;; margin-top: 10px; font-weight: normal;" data-testid="5rppXGYeeR">
                              <span style="color:#00ccff;font-family:Roboto;font-size:32px;line-height:30px;">Thư mời tham dự</span>
                            </h2>
                            <h1 class="text-build-content" style="text-align:center;; margin-bottom: 10px; font-weight: normal;" data-testid="5rppXGYeeR">
                              <span style="color:#00ccff;font-family:Roboto;font-size:38px;line-height:30px;">Hội nghị người lao động 2021</span>
                            </h1>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px 10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                            <tbody>
                              <tr>
                                <td align="center" bgcolor="#00ccff" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;background:#00ccff;" valign="middle">
                                  <a href="${global.config.meeting_url}" style="display:inline-block;background:#00ccff;color:#ffffff;font-family:Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">
                                    <span style="font-size:14px;">Bấm để tham gia buổi họp</span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
                              </td>
                            </tr>
                          </table>
                          <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td class="" style="vertical-align:top;width:600px;" >
                                <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                          <div style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                            <p class="text-build-content" data-testid="7m0I-YxI_1a" style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">Vui lòng đặt tên tham dự như sau: <b>${passcode}</b> và không tiết lộ mã tên tham dự cuộc họp cho người khác vì yếu tốt bảo mật 
                            </p>
                            </br>
                            <p class="text-build-content" data-testid="7m0I-YxI_1a" style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"> Hotline kĩ thuật: 0983532474 - Nghĩa 
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
                              </td>
                            </tr>
                          </table>
                          <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          <![endif]-->
    </div>
  </body>
</html>
        `
    }

    static failMailTemplate() {
        return `
        <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>Thư mời tham dự "Hội nghị người lao động 2021"</title>
    <!--[if !mso]>
<!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--
\\t
\t<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: 0;
        text-decoration: none;
        -ms-interpolation-mode: bicubic
      }

      p {
        display: block;
        margin: 13px 0
      }
    </style>
    <!--[if mso]>
\t\t\t<noscript>
\t\t\t\t<xml>
\t\t\t\t\t<o:officedocumentsettings>
\t\t\t\t\t\t<o:allowpng>
\t\t\t\t\t\t\t<o:pixelsperinch>96</o:pixelsperinch>
\t\t\t\t\t\t</o:officedocumentsettings>
\t\t\t\t\t</xml>
\t\t\t\t</noscript>
\t\t\t\t<![endif]-->
    <!--[if lte mso 11]>
\t\t\t\t<style type="text/css">.mj-outlook-group-fix{width:100%!important}</style>
\t\t\t\t<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-67 {
          width: 67% !important;
          max-width: 67%
        }

        .mj-column-per-33 {
          width: 33% !important;
          max-width: 33%
        }

        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-67 {
        width: 67% !important;
        max-width: 67%
      }

      .moz-text-html .mj-column-per-33 {
        width: 33% !important;
        max-width: 33%
      }

      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%
      }
    </style>
    <style type="text/css">
      [owa] .mj-column-per-67 {
        width: 67% !important;
        max-width: 67%
      }

      [owa] .mj-column-per-33 {
        width: 33% !important;
        max-width: 33%
      }

      [owa] .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%
      }
    </style>
    <style type="text/css"></style>
  </head>
  <body style="word-spacing:normal;background-color:#f6ffe0">
    <div style="background-color:#f6ffe0">
      <!--[if mso | IE]>
\t\t\t\t\t<table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px" width="600">
\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t<td style="line-height:0;font-size:0;mso-line-height-rule:exactly">
\t\t\t\t\t\t\t\t<![endif]-->
      <div style="margin:0 auto;max-width:600px">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0;padding:20px 0 20px 0;text-align:center">
                <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table role="presentation" border="0" cellpadding="0" cellspacing="0">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="" style="vertical-align:top;width:402px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
                <div class="mj-column-per-67 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                    <tbody>
                      <tr>
                        <td align="left" style="font-size:0;padding:0 0 0 25px;padding-top:0;padding-bottom:0;word-break:break-word">
                          <div style="font-family:Arial,sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000">
                            <p style="margin:10px 0"></p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t<table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px" width="600">
\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="line-height:0;font-size:0;mso-line-height-rule:exactly">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
      <div style="margin:0 auto;max-width:600px">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center">
                <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table role="presentation" border="0" cellpadding="0" cellspacing="0">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="" style="vertical-align:top;width:600px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                    <tbody></tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px" width="600" bgcolor="#ffffff">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="line-height:0;font-size:0;mso-line-height-rule:exactly">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
      <div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0;padding:20px 0;text-align:center">
                <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table role="presentation" border="0" cellpadding="0" cellspacing="0">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="" style="vertical-align:top;width:600px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                    <tbody>
                      <tr>
                        <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-bottom:0;word-break:break-word">
                          <div style="font-family:Arial,sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000">
                            <p class="text-build-content" data-testid="7m0I-YxI_1a" style="margin:10px 0;margin-top:10px;margin-bottom:10px">Thông tin đăng ký của bạn không phù hợp với buổi họp, vui lòng liên hệ với phòng ban tổ chức để xác nhận lại thông tin. Hoặc liên hệ số điện thoại: 0983532474 (Nghĩa - kĩ thuật)</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>
        `
    }

    static buildMail(to, content) {
        console.log('email', to)
        return {
            subject: 'Thư mời tham dự cuộc họp tổng kết năm 2021',
            html: content,
            envelope: {
                from: "'SMTP Sever' <nghia.phan@employmenthero.com>",
                to: to
            }
        }
    }

    static async sendSuccessMail(data) {
        console.log('SENT SUCCESS MAIL')
        return new Promise(async (resolve, reject) => {
            this.transporter().sendMail(this.buildMail(data.email, this.successMailTemplate(data.passcode)), (err, info) => {
                if (err) return reject(err)
                return resolve(info)
            })
        })
    }

    static async sendFailMail(data) {
        console.log('SENT FAIL MAIL')
        return new Promise(async (resolve, reject) => {
            this.transporter().sendMail(this.buildMail(data.email, this.failMailTemplate()), (err, info) => {
                if (err) return reject(err)
                return resolve(info)
            })
        })
    }
}

module.exports = Mailer