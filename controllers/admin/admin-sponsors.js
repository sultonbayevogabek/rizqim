module.exports = async (req, res) => {
    try {
        const sponsors = await req.psql.sponsors.findAll()

        res.render('admin/sponsors', {
            title: 'Admin Sponsors',
            path: 'sponsors',
            user: req.user ? req.user : null,
            sponsors
        })
    } catch (e) {
        res.redirect('/404')
    }
}