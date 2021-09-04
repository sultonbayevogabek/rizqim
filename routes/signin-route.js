const router = require('express').Router()

router.get('/', require('../controllers/auth/signin-get'))

module.exports = {
    route: '/signin',
    router
}