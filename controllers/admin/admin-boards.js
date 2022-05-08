module.exports = async (req, res) => {
    const boards = await req.psql.boards.findAll({
        where: {
            is_completed: false
        }
    })

    res.render('admin/boards', {
        title: 'Admin Boards',
        path: 'boards',
        user: req.user ? req.user : null,
        boards
    })
}