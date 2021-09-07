module.exports = async (req, res) => {
    res.render('project-info', {
        title: `Firmaga sayt qilish kerak | Rizqim`,
        path: '/boards',
        user: req.user ? req.user : null
    })
}