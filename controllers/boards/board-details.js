module.exports = async (req, res) => {
    const id = req.params.id

    try {
        const board = await req.psql.boards.findOne({
            where: { id }
        })

        res.render('project-info', {
            title: `E'lonlar | ${board.title}`,
            path: '/boards',
            user: req.user ? req.user : null,
            board,
            acceptable: new Date() > new Date(board.acceptance_data),
            accepted: board.applicants.includes(req.user?.id)
        })
    } catch (e) {
        res.redirect('/404')
    }
}