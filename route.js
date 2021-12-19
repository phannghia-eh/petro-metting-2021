const express = require('express')
const router = require('express').Router()

module.exports = (app, http) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', global.config.allow_origin_host)
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        if (req.method === 'OPTIONS') return res.end()
        next()
    })
    // app.use('/uploads', express.static('uploads'))
    // app.use('/public', express.static('public'))
    // app.use('/database-backup', express.static('database-backup'))
    // app.use('/download', require('./apiCore/download/download.route'))
    // app.use('/upload', require('./apiCore/upload/upload.route'))
    // app.use('/auth', require('./apiCore/auth/auth.route'))
    app.use('/', require('./api/api.route'))

    app.use((req, res, next) => {
        return res.status(404).send('You had lost a map.')
    })
}
