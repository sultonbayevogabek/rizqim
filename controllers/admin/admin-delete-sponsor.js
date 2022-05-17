const path = require('path')
const fs = require('fs/promises')

module.exports = async (req, res) => {
    const id = req.params.id

    try {
        const sponsor = await req.psql.sponsors.findOne({
            where: {
                id
            }
        })

        try {
            await fs.unlink(path.join(__dirname, '..', '..', 'public', sponsor.logo))
        } catch (e) {}

        await req.psql.sponsors.destroy({
            where: {
                id
            }
        })

        res.redirect('/admin/sponsors')
    } catch (e) {
        return res.status(404).send({
            ok: false,
            message: `Homiyni o'chirishda xatolik yuz berdi`
        })
    }
}