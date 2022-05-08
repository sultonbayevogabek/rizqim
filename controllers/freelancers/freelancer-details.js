module.exports = async (req, res) => {
    const id = req.params.id

    try {
        const freelancer = await req.psql.users.findOne({
            where: {
                id,
                type: 'freelancer'
            },
            include: [
                req.psql.portfolios,
                req.psql.experiences,
                req.psql.educations,
                req.psql.languages
            ]
        })

        if (freelancer) {
            res.render('freelancer-details', {
                title: `Frilanser | ${freelancer.first_name} ${freelancer.last_name}`,
                path: '/freelancers',
                user: req.user ? req.user : null,
                freelancer
            })
        }
    } catch (e) {
        res.redirect('/404')
    }
}