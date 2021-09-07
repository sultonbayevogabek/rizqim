const router = require('express').Router()

router.get('/', require('../controllers/completed/completed-get'))

module.exports = {
    route: '/completed',
    router
}