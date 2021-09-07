const router = require('express').Router()

router.get('/', require('../controllers/contact/contact-get'))

module.exports = {
    route: '/contact',
    router
}