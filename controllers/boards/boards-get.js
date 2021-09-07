module.exports = async (req, res) => {
    res.render('boards', {
        title: `E'lonlar | Rizqim`,
        path: '/boards',
        user: req.user ? req.user : null
    })
}