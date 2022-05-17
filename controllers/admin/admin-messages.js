module.exports = async (req, res) => {
    try {
        const messages = await req.psql.messages.findAll()

        res.render('admin/messages', {
            title: 'Xabarlar',
            path: 'messages',
            user: req.user ? req.user : null,
            messages
        })
    } catch (e) {
        res.redirect('/404')
    }
}