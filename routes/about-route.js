const router = require('express').Router()

router.get('/', require('../controllers/about/about-get'))

module.exports = {
    route: '/about',
    router
}