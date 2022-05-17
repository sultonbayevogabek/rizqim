module.exports = async (req, res) => {
    try {
        let freelancers = await req.psql.users.findAll({
            where: {
                type: 'freelancer'
            },
            include: [
                req.psql.portfolios
            ]
        })

        freelancers = freelancers.sort((a, b) => {
            return b.portfolios.length - a.portfolios.length
        })

        res.render('freelancers', {
            title: `Frilanserlar | Rizqim`,
            path: '/freelancers',
            user: req.user ? req.user : null,
            freelancers
        })
    } catch (e) {
        res.redirect('/404')
    }
}