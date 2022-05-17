module.exports = async (req, res) => {
    const sponsors = await req.psql.sponsors.findAll()
    const completed = await req.psql.boards.findAll({
        where: {
            is_completed: true
        }
    })

    const topCompleted = await req.psql.boards.findAll({
        limit: 10,
        where: {
            is_completed: true
        }
    })

    const freelancers = await req.psql.sponsors.findAll()

    let topFreelancers = await req.psql.users.findAll({
        limit: 10,
        where: {
            type: 'freelancer'
        },
        include: [
            req.psql.portfolios
        ]
    })

    topFreelancers = topFreelancers.sort((a, b) => {
        return b.portfolios.length - a.portfolios.length
    })

    const boards = await req.psql.boards.findAll({
        where: {
            is_completed: false
        }
    })

    let topBoards = await req.psql.boards.findAll({
        limit: 10,
        where: {
            is_completed: false
        }
    })

    topBoards = topBoards.sort((a, b) => {
        return b.applicants.length - a.applicants.length
    })

    res.render('index', {
        title: `Rizqim.uz | O'zbekistondagi frilans platformasi`,
        path: '/',
        user: req.user ? req.user : null,
        sponsors,
        completed: completed.length,
        boards: boards.length,
        freelancers: freelancers.length,
        topFreelancers,
        topBoards,
        topCompleted
    })
}