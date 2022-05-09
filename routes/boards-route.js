const router = require('express').Router()

router.get('/', require('../controllers/boards/boards-get'))

router.get('/:id', require('../controllers/boards/board-details'))

router.get('/apply/:id', require('../controllers/boards/apply-board'))

module.exports = {
    route: '/boards',
    router
}