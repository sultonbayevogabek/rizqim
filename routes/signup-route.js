const router = require('express').Router()
const dontEnterAuthorizedMiddleware = require('../middlewares/dont-enter-authorized-middleware')

router.get('/', dontEnterAuthorizedMiddleware, require('../controllers/auth/signup-get'))

router.post('/', require('../controllers/auth/sign-up-post'))

module.exports = {
    route: '/signup',
    router
}