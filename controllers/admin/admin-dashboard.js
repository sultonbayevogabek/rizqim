module.exports = async (req, res) => {
    res.render('admin/dashboard', {
        title: 'Admin Dashboard',
        path: 'dashboard',
        user: req.user ? req.user : null
    })
}