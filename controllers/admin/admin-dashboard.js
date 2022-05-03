module.exports = async (req, res) => {
    res.render('dashboard', {
        title: 'Admin Dashboard',
        path: '/admin/dashboard',
        user: req.user ? req.user : null
    })
}