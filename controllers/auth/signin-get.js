module.exports = async (req, res) => {
    res.render('signin', {
        title: 'Kirish | Rizqim',
        path: '/signin',
        user: req.user ? req.user : null
    })
}