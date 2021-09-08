module.exports = async (req, res) => {
    res.render('profile', {
        title: `Og'abek Sultonbayev | Rizqim`,
        path: '/',
        user: req.user ? req.user : null
    })
}