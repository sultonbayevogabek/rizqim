module.exports = async (req, res) => {
    const id = req.params.id

    await req.psql.messages.destroy({
        where: {
            id
        }
    })

    res.redirect('/admin/messages')
}