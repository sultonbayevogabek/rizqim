module.exports = async (req, res) => {
    try {
        res.render('project-info', {
            title: `Firmaga sayt qilish kerak | Rizqim`,
            path: '/boards',
            user: req.user ? req.user : null
        })
    } catch (e) {
        res.redirect('/404')
    }
}