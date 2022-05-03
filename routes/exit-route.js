const router = require('express').Router()
const dontEnterUnauthorizedMiddleware = require('../middlewares/dont-enter-unauthorized-middleware')

router.get('/', dontEnterUnauthorizedMiddleware, require('../controllers/auth/exit'))

module.exports = {
    route: '/exit',
    router
}