module.exports = async (req, res) => {
    try {
        res.render('about', {
            title: 'Biz haqimizda | Rizqim',
            path: '/about',
            user: req.user ? req.user : null
        })
    } catch (e) {
        res.redirect('/404')
    }
}