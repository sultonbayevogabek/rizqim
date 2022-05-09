module.exports = async (req, res) => {
    const boarId = req.params.id

    try {
        const board = await req.psql.boards.findOne({
            where: {
                id: boarId
            }
        })

        let applicants = board.applicants
        applicants.push(req.user.id)

        await req.psql.boards.update({
            applicants
        }, {
            where: {
                id: boarId
            }
        })

        res.redirect('back')
    } catch (e) {
        res.redirect('/404')
    }
}