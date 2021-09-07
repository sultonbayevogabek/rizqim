const router = require('express').Router()

router.get('/', require('../controllers/boards/boards-get'))

router.get('/firmaga-web-sayt-qilish-kerak', require('../controllers/boards/project-info-get'))

module.exports = {
    route: '/boards',
    router
}