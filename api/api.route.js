const router = require('express').Router()
const ApiController = require('./api.controller')

router.route('/')
    .get(ApiController.get)
    .post(ApiController.register)

router.route('/excel')
    .post(ApiController.exportExcel)

module.exports = router