module.exports = async (req, res) => {
    const freelancers = await req.psql.users.findAll({
        where: {
            type: 'freelancer'
        }
    })
    res.render('freelancers', {
        title: `Frilanserlar | Rizqim`,
        path: '/freelancers',
        user: req.user ? req.user : null,
        freelancers
    })
}