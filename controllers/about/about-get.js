module.exports = async (req, res) => {
    res.render('about', {
        title: 'Biz haqimizda | Rizqim',
        path: '/about',
        user: req.user ? req.user : null
    })
}