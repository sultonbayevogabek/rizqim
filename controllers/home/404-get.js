module.exports = async (req, res) => {
    res.render('404', {
        title: `Sahifa topilmadi - 404`,
        path: '/',
        user: req.user ? req.user : null
    })
}