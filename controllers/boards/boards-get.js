module.exports = async (req, res) => {
    try {
        const boards = await req.psql.boards.findAll({
            where: {
                is_completed: false
            }
        })
        res.render('boards', {
            title: `E'lonlar | Rizqim`,
            path: '/boards',
            user: req.user ? req.user : null,
            boards
        })
    } catch (e) {
        res.redirect('/404')
    }
}