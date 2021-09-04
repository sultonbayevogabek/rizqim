const router = require('express').Router()

router.get('/', require('../controllers/auth/signup-get'))

module.exports = {
    route: '/signup',
    router
}