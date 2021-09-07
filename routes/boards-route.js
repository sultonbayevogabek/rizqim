const router = require('express').Router()

router.get('/', require('../controllers/boards/boards-get'))

module.exports = {
    route: '/boards',
    router
}