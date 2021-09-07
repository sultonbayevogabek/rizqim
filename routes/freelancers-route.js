const router = require('express').Router()

router.get('/', require('../controllers/freelancers/freelancers-get'))

module.exports = {
    route: '/freelancers',
    router
}