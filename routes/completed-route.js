const router = require('express').Router()

router.get('/', require('../controllers/completed/completed-get'))

router.get('/:id', require('../controllers/completed/completed-details'))

module.exports = {
    route: '/completed',
    router
}