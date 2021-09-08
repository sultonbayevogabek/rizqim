const router = require('express').Router()

router.get('/', require('../controllers/home/home-get'))

router.get('/404', require('../controllers/home/404-get'))

router.get('/sultonbayevogabek', require('../controllers/profile/profile-get'))

module.exports = {
    route: '/',
    router
}