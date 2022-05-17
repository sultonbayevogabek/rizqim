module.exports = async = (req, res) => {
    try {
        res.render('signup', {
            title: `Ro'yxatdan o'tish | Rizqim`,
            path: '/signup',
            user: req.user ? req.user : null
        })
    } catch (e) {
        res.redirect('/404')
    }
}