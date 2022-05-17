module.exports = async (req, res) => {
    const boardId = req.params.id
    try {
        const board = await req.psql.boards.findOne({
            where: {
                id: boardId,
                is_completed: true
            }
        })

        const freelancer = await req.psql.users.findOne({
            where: {
                id: board.freelancer_id
            }
        })

        res.render('completed-details', {
            title: `Tugallangan loyiha | Rizqim`,
            path: '/completed',
            user: req.user ? req.user : null,
            board,
            freelancer
        })
    } catch (e) {
        res.redirect('/404')
    }
}