module.exports = async (req, res) => {
    res.render('profile', {
        title: `Og'abek Sultonbayev | Rizqim`,
        path: '/profile',
        user: req.user ? req.user : null
    })
}