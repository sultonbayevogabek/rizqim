module.exports = async (req, res) => {
    try {
        const id = req.params.id

        await req.psql.messages.destroy({
            where: {
                id
            }
        })

        res.redirect('/admin/messages')
    } catch (e) {
        res.redirect('/404')
    }
}