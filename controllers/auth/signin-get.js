module.exports = async = (req, res) => {
    res.render('signin', {
        title: 'Kirish | Rizqim',
        user: req.user ? req.user : null
    })
}