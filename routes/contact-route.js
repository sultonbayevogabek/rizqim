const router = require('express').Router()

router.get('/', require('../controllers/contact/contact-get'))

router.post('/', require('../controllers/contact/send-message'))

module.exports = {
    route: '/contact',
    router
}