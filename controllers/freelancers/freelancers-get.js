module.exports = async (req, res) => {
    res.render('freelancers', {
        title: `Frilanserlar | Rizqim`,
        path: '/freelancers',
        user: req.user ? req.user : null
    })
}