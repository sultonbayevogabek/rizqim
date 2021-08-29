const router = require('express').Router()

router.get('/', require('../controllers/home/home-get'))

module.exports = {
    route: '/',
    router
}