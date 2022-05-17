module.exports = async (req, res) => {
    try {
        res.render('signin', {
            title: 'Kirish | Rizqim',
            path: '/signin',
            user: req.user ? req.user : null
        })
    } catch (e) {
        res.redirect('/404')
    }

}