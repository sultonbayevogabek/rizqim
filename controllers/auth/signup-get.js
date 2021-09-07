module.exports = async = (req, res) => {
    res.render('signup', {
        title: `Ro'yxatdan o'tish | Rizqim`,
        path: '/signup',
        user: req.user ? req.user : null
    })
}