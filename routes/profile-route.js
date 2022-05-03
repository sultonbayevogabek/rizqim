const router = require('express').Router()
const dontEnterUnauthorized = require('../middlewares/dont-enter-unauthorized-middleware')
const fileUpload = require('express-fileupload')

router.get('/', dontEnterUnauthorized, require('../controllers/profile/profile-get'))

router.post('/avatar', dontEnterUnauthorized, fileUpload(), require('../controllers/profile/update-avatar'))

router.get('/data', dontEnterUnauthorized, require('../controllers/profile/profile-data'))

router.post('/update-full-name', dontEnterUnauthorized, require('../controllers/profile/update-full-name'))

router.post('/update-phone', dontEnterUnauthorized, require('../controllers/profile/update-phone'))

router.post('/update-email', dontEnterUnauthorized, require('../controllers/profile/update-email'))

router.post('/update-telegram', dontEnterUnauthorized, require('../controllers/profile/update-telegram'))

router.post('/update-bio', dontEnterUnauthorized, require('../controllers/profile/update-bio'))

router.post('/add-portfolio', dontEnterUnauthorized,  fileUpload(), require('../controllers/profile/add-portfolio'))

router.delete('/remove-portfolio/:id', dontEnterUnauthorized, require('../controllers/profile/remove-portfolio'))

router.post('/add-work', dontEnterUnauthorized, require('../controllers/profile/add-work'))

router.delete('/remove-work/:id', dontEnterUnauthorized, require('../controllers/profile/remove-work'))

router.post('/add-edu', dontEnterUnauthorized, require('../controllers/profile/add-edu'))

router.delete('/remove-edu/:id', dontEnterUnauthorized, require('../controllers/profile/remove-edu'))

router.post('/add-language', dontEnterUnauthorized, require('../controllers/profile/add-language'))

router.delete('/remove-lang/:id', dontEnterUnauthorized, require('../controllers/profile/remove-lang'))

router.post('/add-skill', dontEnterUnauthorized, require('../controllers/profile/add-skill'))

router.post('/remove-skill', dontEnterUnauthorized, require('../controllers/profile/remove-skill'))

router.post('/update-website', dontEnterUnauthorized, require('../controllers/profile/update-website'))

router.post('/update-git', dontEnterUnauthorized, require('../controllers/profile/update-git'))

module.exports = {
   route: '/profile',
   router
}