module.exports = async (req, res) => {
    try {
        const boards = await req.psql.boards.findAll({
            where: {
                is_completed: true
            }
        })

        res.render('admin/completed', {
            title: 'Admin Completed',
            path: 'completed',
            user: req.user ? req.user : null,
            boards
        })
    } catch (e) {
        res.redirect('/404')
    }
}