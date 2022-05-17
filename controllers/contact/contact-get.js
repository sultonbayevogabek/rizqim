module.exports = async (req, res) => {
    try {
        res.render('contact', {
            title: `Aloqa | Rizqim`,
            path: '/contact',
            user: req.user ? req.user : null
        })
    } catch (e) {
        res.redirect('/404')
    }
}