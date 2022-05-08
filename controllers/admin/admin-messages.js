module.exports = async (req, res) => {
    const messages = await req.psql.messages.findAll()

    res.render('admin/messages', {
        title: 'Xabarlar',
        path: 'messages',
        user: req.user ? req.user : null,
        messages
    })
}