module.exports = async (req, res) => {
    res.render('completed', {
        title: `Tugallangan loyihalar | Rizqim`,
        path: '/completed',
        user: req.user ? req.user : null
    })
}