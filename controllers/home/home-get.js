module.exports = async (req, res) => {
    res.render('index', {
        title: `Rizqim.uz | O'zbekistondagi frilans platformasi`,
        path: '/',
        user: req.user ? req.user : null
    })
}