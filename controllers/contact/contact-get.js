module.exports = async (req, res) => {
    res.render('contact', {
        title: `Aloqa | Rizqim`,
        path: '/contact',
        user: req.user ? req.user : null
    })
}