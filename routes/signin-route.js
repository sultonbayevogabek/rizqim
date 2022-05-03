const router = require('express').Router()
const dontEnterAuthorizedMiddleware = require('../middlewares/dont-enter-authorized-middleware')

router.get('/', dontEnterAuthorizedMiddleware, require('../controllers/auth/signin-get'))

router.post('/', require('../controllers/auth/signin-post'))

module.exports = {
    route: '/signin',
    router
}