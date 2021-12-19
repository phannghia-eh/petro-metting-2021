const router = require('express').Router()
const ApiController = require('./api.controller')

router.route('/')
    .get(ApiController.get)
    .post(ApiController.register)

module.exports = router