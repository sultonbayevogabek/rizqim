module.exports = async = (req, res) => {
    res.render('signup', {
        title: `Ro'yxatdan o'tish | Rizqim`,
        user: req.user ? req.user : null
    })
}