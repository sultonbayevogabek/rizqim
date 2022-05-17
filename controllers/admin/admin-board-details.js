module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const board = await req.psql.boards.findOne({
            where: {
                id
            }
        })

        res.render('admin/board-details', {
            title: 'Admin Board',
            path: 'boards',
            user: req.user ? req.user : null,
            board
        })
    } catch (e) {
        res.redirect('/404')
    }
}