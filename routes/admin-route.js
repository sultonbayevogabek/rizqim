const router = require('express').Router()

router.get('/', require('../controllers/freelancers/freelancers-get'))

router.get('/:id', require('../controllers/freelancers/freelancer-details'))

module.exports = {
    route: '/freelancers',
    router
}