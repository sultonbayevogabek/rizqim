const router = require('express').Router()
const adminMiddleware = require('../middlewares/admin-middleware')
const fileUpload = require('express-fileupload')

router.get('/', adminMiddleware, async (req, res) => {
    res.redirect('/admin/boards')
})

router.get('/messages', adminMiddleware, require('../controllers/admin/admin-messages'))

router.get('/delete-message/:id', adminMiddleware, require('../controllers/admin/delete-message'))

router.get('/boards', adminMiddleware, require('../controllers/admin/admin-boards'))

router.post('/create-board',  adminMiddleware, fileUpload(), require('../controllers/admin/admin-create-board'))

router.get('/board-details/:id',  adminMiddleware, require('../controllers/admin/admin-board-details'))

router.get('/delete-board/:id',  adminMiddleware, require('../controllers/admin/admin-delete-board'))

router.post('/complete-board',  adminMiddleware, require('../controllers/admin/admin-complete-board'))

router.get('/sponsors',  adminMiddleware, require('../controllers/admin/admin-sponsors'))

router.get('/completed',  adminMiddleware, require('../controllers/admin/admin-completed'))

router.post('/create-sponsor',  adminMiddleware, fileUpload(), require('../controllers/admin/admin-create-sponsor'))

router.get('/delete-sponsor/:id',  adminMiddleware, require('../controllers/admin/admin-delete-sponsor'))

module.exports = {
    route: '/admin',
    router
}